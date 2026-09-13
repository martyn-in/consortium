import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import scipy.ndimage

def render_3d_chrome_text(
    text,
    font_path,
    font_size,
    font_index=0,
    letter_spacing=25,
    bevel_radius=22,
    bevel_height=10.0,
    shininess=55.0,
    cyan_intensity=1.1,
    pink_intensity=0.85,
    padding=90,
    with_emblem_frame=False
):
    try:
        font = ImageFont.truetype(font_path, font_size, index=font_index)
    except Exception:
        font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Black.ttf', font_size)

    # 1. Measure character positions with custom kerning
    dummy_img = Image.new('L', (100, 100), 0)
    dummy_draw = ImageDraw.Draw(dummy_img)
    
    char_widths = []
    char_bboxes = []
    for char in text:
        bbox = dummy_draw.textbbox((0, 0), char, font=font)
        w = bbox[2] - bbox[0]
        char_widths.append(w)
        char_bboxes.append(bbox)
        
    total_text_width = sum(char_widths) + (len(text) - 1) * letter_spacing
    max_char_height = max(b[3] - b[1] for b in char_bboxes)
    
    canvas_w = int(total_text_width + padding * 2)
    canvas_h = int(max_char_height + padding * 2)
    
    # 2. Draw high-res binary text mask
    mask_img = Image.new('L', (canvas_w, canvas_h), 0)
    draw = ImageDraw.Draw(mask_img)
    
    cur_x = padding
    base_y = padding - min(b[1] for b in char_bboxes)
    for i, char in enumerate(text):
        bbox = char_bboxes[i]
        draw.text((cur_x - bbox[0], base_y), char, font=font, fill=255)
        cur_x += char_widths[i] + letter_spacing
        
    # Optional: Cyber emblem frame around C26
    if with_emblem_frame:
        pad_x = 24
        pad_y = 16
        bx0 = padding - pad_x
        by0 = padding - pad_y
        bx1 = canvas_w - padding + pad_x
        by1 = canvas_h - padding + pad_y
        
        # Hexagonal chamfered corners
        corner = 28
        poly = [
            (bx0 + corner, by0),
            (bx1 - corner, by0),
            (bx1, by0 + corner),
            (bx1, by1 - corner),
            (bx1 - corner, by1),
            (bx0 + corner, by1),
            (bx0, by1 - corner),
            (bx0, by0 + corner)
        ]
        draw.polygon(poly, outline=255, width=12)

    mask = np.array(mask_img, dtype=np.float32) / 255.0
    
    # 3. 3D Distance Transform (Bevel Heightfield)
    dist_inside = scipy.ndimage.distance_transform_edt(mask)
    
    # Smooth beveled height profile
    norm_dist = np.clip(dist_inside / float(bevel_radius), 0.0, 1.0)
    # Quadratic sine curve for organic rounded chamfer
    h = np.sin(norm_dist * (np.pi / 2.0))
    
    # Surface micro-texture
    np.random.seed(42)
    noise = (np.random.rand(canvas_h, canvas_w) - 0.5) * 0.015
    h = h + noise * (norm_dist > 0.8)
    
    # 4. Compute 3D Surface Normal Vectors
    gx, gy = np.gradient(h * bevel_height)
    denom = np.sqrt(gx**2 + gy**2 + 1.0)
    Nx = -gx / denom
    Ny = -gy / denom
    Nz = 1.0 / denom
    
    # 5. Ray-Traced Reflection Vectors: R = 2 * (N . V) * N - V with V = (0, 0, 1)
    Rx = 2.0 * Nz * Nx
    Ry = 2.0 * Nz * Ny
    Rz = 2.0 * Nz * Nz - 1.0
    
    # 6. Airbrushed Chrome Environment Map Mapping (Horizon Line + Sky/Ground)
    env_y = np.clip(Ry, -1.0, 1.0)
    
    chrome_r = np.zeros_like(env_y)
    chrome_g = np.zeros_like(env_y)
    chrome_b = np.zeros_like(env_y)
    
    # Upper sky (env_y >= 0)
    sky_mask = env_y >= 0
    t_sky = env_y[sky_mask]
    chrome_r[sky_mask] = 0.85 + 0.15 * (1.0 - t_sky)
    chrome_g[sky_mask] = 0.94 + 0.06 * (1.0 - t_sky)
    chrome_b[sky_mask] = 1.00
    
    # Lower ground (env_y < 0)
    ground_mask = env_y < 0
    t_ground = -env_y[ground_mask]
    # Sharp metallic horizon band reflection
    horizon_band = np.exp(-((t_ground - 0.10) ** 2) / 0.018)
    chrome_r[ground_mask] = 0.05 + 0.70 * horizon_band + 0.30 * t_ground
    chrome_g[ground_mask] = 0.22 + 0.75 * horizon_band + 0.50 * t_ground
    chrome_b[ground_mask] = 0.65 + 0.35 * horizon_band + 0.35 * t_ground
    
    # 7. Light Sources
    # Key Light (White Specular Glint from top-left)
    L1 = np.array([-0.35, -0.60, 0.70])
    L1 /= np.linalg.norm(L1)
    spec1 = np.maximum(0.0, Rx * L1[0] + Ry * L1[1] + Rz * L1[2]) ** shininess
    
    # Secondary Cyan Light (Left side glow)
    L2 = np.array([-0.85, 0.20, 0.50])
    L2 /= np.linalg.norm(L2)
    spec2 = np.maximum(0.0, Rx * L2[0] + Ry * L2[1] + Rz * L2[2]) ** (shininess * 0.7)
    
    # Secondary Magenta-Pink Light (Bottom-right rim reflection)
    L3 = np.array([0.75, 0.60, 0.30])
    L3 /= np.linalg.norm(L3)
    spec3 = np.maximum(0.0, Rx * L3[0] + Ry * L3[1] + Rz * L3[2]) ** (shininess * 0.55)
    
    # Chiseled ridge highlight (Fresnel edge)
    edge_highlight = (1.0 - Nz) ** 2.0
    
    # 8. Composite Final RGB
    final_r = chrome_r + spec1 * 1.4 + spec3 * (pink_intensity * 1.0) + edge_highlight * 0.35
    final_g = chrome_g + spec1 * 1.4 + spec2 * (cyan_intensity * 0.95) + edge_highlight * 0.45
    final_b = chrome_b + spec1 * 1.4 + spec2 * (cyan_intensity * 1.25) + spec3 * (pink_intensity * 0.6) + edge_highlight * 0.7
    
    # Apply text mask
    final_r = np.clip(final_r * 255.0, 0, 255).astype(np.uint8)
    final_g = np.clip(final_g * 255.0, 0, 255).astype(np.uint8)
    final_b = np.clip(final_b * 255.0, 0, 255).astype(np.uint8)
    
    # Smooth antialiasing on alpha
    alpha_img = mask_img.filter(ImageFilter.GaussianBlur(1.2))
    alpha = np.array(alpha_img, dtype=np.uint8)
    
    rgba = np.dstack([final_r, final_g, final_b, alpha])
    result_img = Image.fromarray(rgba, mode='RGBA')
    
    # Crop to non-empty bounding box with slight breathing margin
    bbox = result_img.getbbox()
    if bbox:
        margin = 20
        crop_box = (
            max(0, bbox[0] - margin),
            max(0, bbox[1] - margin),
            min(canvas_w, bbox[2] + margin),
            min(canvas_h, bbox[3] + margin)
        )
        result_img = result_img.crop(crop_box)
        
    return result_img

if __name__ == '__main__':
    # 1. Render CONSORTIUM 3D Titanium Chrome Title
    print("Generating CONSORTIUM 3D Title Artwork...")
    font_path = '/System/Library/Fonts/Supplemental/Futura.ttc'
    title_img = render_3d_chrome_text(
        text="CONSORTIUM",
        font_path=font_path,
        font_size=260,
        font_index=2, # Futura Bold
        letter_spacing=38,
        bevel_radius=22,
        bevel_height=10.0,
        shininess=52.0,
        cyan_intensity=1.1,
        pink_intensity=0.8
    )
    title_img.save('src/assets/consortium_title.png')
    print("Saved src/assets/consortium_title.png:", title_img.size)

    # 2. Render C26 3D Chrome Emblem
    print("Generating C26 3D Logo Emblem...")
    c26_img = render_3d_chrome_text(
        text="C26",
        font_path=font_path,
        font_size=320,
        font_index=2, # Futura Bold
        letter_spacing=15,
        bevel_radius=26,
        bevel_height=12.0,
        shininess=58.0,
        cyan_intensity=1.15,
        pink_intensity=0.9,
        padding=90,
        with_emblem_frame=True
    )
    c26_img.save('src/assets/c26_logo.png')
    print("Saved src/assets/c26_logo.png:", c26_img.size)
    print("ALL REGENERATED 3D ARTWORKS READY!")
