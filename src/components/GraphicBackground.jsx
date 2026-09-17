import { useEffect, useRef } from 'react';
import './GraphicBackground.css';

// Consortium 2026 Light Prismatic Palette
const GLASS_PARTICLE_COLORS = [
  { r: 0, g: 234, b: 255 },    // Electric Cyan
  { r: 139, g: 92, b: 246 },   // Luminous Violet
  { r: 244, g: 114, b: 182 },  // Soft Rose / Magenta
  { r: 56, g: 189, b: 248 },   // Sky Sapphire
  { r: 45, g: 212, b: 191 },   // Mint Teal
];

export default function GraphicBackground({ isVideoPlaying = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for interactive glass light reflection
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isActive: false
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating Stardust Motes for Glass Depth (Zero waves)
    const particleCount = Math.min(50, Math.max(20, Math.floor((width * height) / 24000)));
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const color = GLASS_PARTICLE_COLORS[i % GLASS_PARTICLE_COLORS.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(0.2 + Math.random() * 0.3),
        radius: Math.random() * 1.8 + 0.8,
        color,
        baseAlpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2
      };
    });

    let isRunning = true;
    const handleVisibility = () => {
      isRunning = !document.hidden;
      if (isRunning) loop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const loop = () => {
      if (!isRunning) return;
      animId = requestAnimationFrame(loop);

      const now = performance.now();
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      // 1. Interactive Luminous Glass Spotlight behind cards
      if (mouse.isActive) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 350
        );
        spotGrad.addColorStop(0, 'rgba(0, 234, 255, 0.07)');
        spotGrad.addColorStop(0.35, 'rgba(139, 92, 246, 0.04)');
        spotGrad.addColorStop(0.7, 'rgba(244, 114, 182, 0.015)');
        spotGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Subtle Floating Glass Dust Particles (Zero waves)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += p.vx + Math.sin(now * 0.0012 + p.phase) * 0.25;

        // Wrap around screen
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Gentle interactive mouse deflection
        if (mouse.isActive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130 && dist > 0) {
            const force = (130 - dist) / 130;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        const currentAlpha = p.baseAlpha * (0.75 + 0.25 * Math.sin(now * p.pulseSpeed + p.phase));

        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="graphic-background-wrapper glass-light-theme" aria-hidden="true">
      {/* 1. Light, Luminous Radial Base Canvas */}
      <div className="glass-light-base" />

      {/* 2. Vibrant Ambient Glass Aurora Glows (Cyan, Violet, Rose, Sapphire, Teal) */}
      <div className="glass-light-aurora-cyan" />
      <div className="glass-light-aurora-violet" />
      <div className="glass-light-aurora-rose" />
      <div className="glass-light-aurora-sapphire" />
      <div className="glass-light-aurora-teal" />

      {/* 3. Center Luminous Core (Provides radiant backlight for frosted cards) */}
      <div className="glass-light-center-core" />

      {/* 4. Fine Frosted Dot Matrix */}
      <div className="glass-light-dot-matrix" />

      {/* 5. 60FPS Glass Light Canvas (Stardust & interactive cursor light - zero waves) */}
      <canvas ref={canvasRef} className="glass-motion-canvas" />

      {/* 6. Soft Perimeter Vignette */}
      <div className="glass-light-vignette" />
    </div>
  );
}
