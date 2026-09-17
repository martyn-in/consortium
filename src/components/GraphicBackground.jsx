import { useEffect, useRef } from 'react';
import './GraphicBackground.css';

// Consortium 2026 Complete Color Spectrum:
// Cyan (#00eaff), Violet (#7b4dff), Magenta (#ec4899), Sapphire (#2563eb), Teal (#00f2fe)
const SPECTRUM_COLORS = [
  { r: 0, g: 234, b: 255 },    // Electric Cyan
  { r: 123, g: 77, b: 255 },   // Neon Violet
  { r: 236, g: 72, b: 153 },   // Cyber Magenta
  { r: 37, g: 99, b: 235 },    // Royal Sapphire
  { r: 0, g: 242, b: 254 },    // Prismatic Teal
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

    // Mouse tracking with smooth magnetic interpolation
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

    // 1. Quantum Floating Sparks (Spanning all 5 theme colors)
    const particleCount = Math.min(55, Math.max(25, Math.floor((width * height) / 22000)));
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const color = SPECTRUM_COLORS[i % SPECTRUM_COLORS.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.2 + Math.random() * 0.35),
        radius: Math.random() * 1.6 + 0.8,
        color,
        baseAlpha: Math.random() * 0.45 + 0.25,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2
      };
    });

    // 2. Harmonic Quantum Wave Ribbons (Multi-layered silky gradient energy lines)
    const waveLayers = [
      {
        baseYRatio: 0.32,
        amplitude: 55,
        frequency: 0.0016,
        speed: 0.0014,
        strands: 3,
        strandSpread: 12,
        gradientStops: [
          { pos: 0.0, color: 'rgba(0, 234, 255, 0)' },
          { pos: 0.25, color: 'rgba(0, 234, 255, 0.32)' },
          { pos: 0.65, color: 'rgba(99, 91, 255, 0.30)' },
          { pos: 1.0, color: 'rgba(123, 77, 255, 0)' }
        ]
      },
      {
        baseYRatio: 0.52,
        amplitude: 65,
        frequency: 0.0013,
        speed: -0.0011,
        strands: 4,
        strandSpread: 14,
        gradientStops: [
          { pos: 0.0, color: 'rgba(123, 77, 255, 0)' },
          { pos: 0.3, color: 'rgba(168, 85, 247, 0.28)' },
          { pos: 0.7, color: 'rgba(236, 72, 153, 0.26)' },
          { pos: 1.0, color: 'rgba(236, 72, 153, 0)' }
        ]
      },
      {
        baseYRatio: 0.70,
        amplitude: 50,
        frequency: 0.0019,
        speed: 0.0013,
        strands: 3,
        strandSpread: 10,
        gradientStops: [
          { pos: 0.0, color: 'rgba(0, 242, 254, 0)' },
          { pos: 0.35, color: 'rgba(0, 242, 254, 0.25)' },
          { pos: 0.75, color: 'rgba(37, 99, 235, 0.28)' },
          { pos: 1.0, color: 'rgba(37, 99, 235, 0)' }
        ]
      }
    ];

    let isRunning = true;
    const handleVisibility = () => {
      isRunning = !document.hidden;
      if (isRunning) loop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Main animation loop
    const loop = () => {
      if (!isRunning) return;
      animId = requestAnimationFrame(loop);

      const now = performance.now();
      ctx.clearRect(0, 0, width, height);

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // --- A. Interactive Prismatic Cursor Spotlight ---
      if (mouse.isActive) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 280
        );
        spotGrad.addColorStop(0, 'rgba(0, 234, 255, 0.06)');
        spotGrad.addColorStop(0.4, 'rgba(123, 77, 255, 0.03)');
        spotGrad.addColorStop(0.7, 'rgba(236, 72, 153, 0.015)');
        spotGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // --- B. Draw Harmonic Prismatic Wave Ribbons ---
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      for (let l = 0; l < waveLayers.length; l++) {
        const layer = waveLayers[l];
        const baseY = height * layer.baseYRatio;
        const timeVal = now * layer.speed;

        // Create linear gradient across width matching exact stops
        const waveGrad = ctx.createLinearGradient(0, 0, width, 0);
        for (let s = 0; s < layer.gradientStops.length; s++) {
          const gs = layer.gradientStops[s];
          waveGrad.addColorStop(gs.pos, gs.color);
        }

        ctx.strokeStyle = waveGrad;

        // Draw multiple parallel wave strands for a silky harmonic ribbon feel
        for (let strand = 0; strand < layer.strands; strand++) {
          const strandOffset = (strand - (layer.strands - 1) / 2) * layer.strandSpread;
          const phaseOffset = strand * 0.35;
          const step = 14;

          ctx.beginPath();
          ctx.lineWidth = 1.4;

          let first = true;
          for (let x = 0; x <= width + step; x += step) {
            // Harmonic wave equation combining dual sine frequencies
            let waveY = baseY + strandOffset +
              Math.sin(x * layer.frequency + timeVal + phaseOffset) * layer.amplitude +
              Math.cos(x * (layer.frequency * 0.6) + timeVal * 0.8) * (layer.amplitude * 0.35);

            // Gentle magnetic deflection near cursor
            if (mouse.isActive) {
              const dx = x - mouse.x;
              const dy = waveY - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 220) {
                const influence = ((220 - dist) / 220) * 45;
                waveY += Math.sin(dx * 0.02) * influence;
              }
            }

            if (first) {
              ctx.moveTo(x, waveY);
              first = false;
            } else {
              ctx.lineTo(x, waveY);
            }
          }
          ctx.stroke();
        }
      }
      ctx.restore();

      // --- C. Update & Draw Multi-Color Quantum Sparks ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.vy;
        p.x += p.vx + Math.sin(now * 0.001 + p.phase) * 0.25;

        // Wrap around screen edges
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Subtle interactive mouse repulsion
        if (mouse.isActive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110 && dist > 0) {
            const force = (110 - dist) / 110;
            p.x += (dx / dist) * force * 1.4;
            p.y += (dy / dist) * force * 1.4;
          }
        }

        // Pulse alpha
        const currentAlpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(now * p.pulseSpeed + p.phase));

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
    <div className="graphic-background-wrapper" aria-hidden="true">
      {/* 1. Deep Obsidian Base Canvas */}
      <div className="spectrum-obsidian-base" />

      {/* 2. Full-Spectrum Ambient Aurora Pools (Cyan, Violet, Magenta, Sapphire, Teal) */}
      <div className="spectrum-aurora-cyan" />
      <div className="spectrum-aurora-violet" />
      <div className="spectrum-aurora-magenta" />
      <div className="spectrum-aurora-sapphire" />
      <div className="spectrum-aurora-teal" />

      {/* 3. Subtle Cyber Blueprint Dot Matrix (Refined & Non-Intrusive) */}
      <div className="spectrum-dot-matrix" />

      {/* 4. Hardware-Accelerated 60FPS Quantum Wave Canvas */}
      <canvas ref={canvasRef} className="spectrum-motion-canvas" />

      {/* 5. Edge Vignette for Crystal-Clear Text & Card Legibility */}
      <div className="spectrum-contrast-vignette" />
    </div>
  );
}
