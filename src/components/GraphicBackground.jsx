import { useEffect, useRef } from 'react';
import './GraphicBackground.css';

// Consortium 2026 Executive Aqua Premium Blue Sky Ambient Palette
const GLASS_PARTICLE_COLORS = [
  { r: 0, g: 229, b: 255 },     // Radiant Aqua (#00e5ff)
  { r: 56, g: 189, b: 248 },    // Sky Blue (#38bdf8)
  { r: 14, g: 165, b: 233 },    // Deep Sky Cyan (#0ea5e9)
  { r: 96, g: 165, b: 250 },    // Azure Sky (#60a5fa)
  { r: 186, g: 230, b: 253 },   // Soft Ice Sky (#bae6fd)
];

export default function GraphicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use desynchronized for low latency rendering if supported
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle interactive spotlight
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isActive: false,
      lastMoveTime: 0
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
      mouse.lastMoveTime = performance.now();
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Cap at 1.0 DPR for background stardust to save 75% GPU fill rate
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Lightweight stardust particle motes (22 particles is visually great and costs 0ms)
    const particleCount = 22;
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const color = GLASS_PARTICLE_COLORS[i % GLASS_PARTICLE_COLORS.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(0.18 + Math.random() * 0.25),
        radius: Math.random() * 1.6 + 0.8,
        color,
        baseAlpha: Math.random() * 0.45 + 0.25,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2
      };
    });

    let isRunning = true;
    const handleVisibility = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        lastTime = performance.now();
        loop();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = performance.now();

    const loop = () => {
      if (!isRunning) return;
      animId = requestAnimationFrame(loop);

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 16.67, 2.0); // normalize to 60fps
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation only if active within last 2 seconds
      const isMouseRecentlyActive = mouse.isActive && (now - mouse.lastMoveTime < 2500);

      if (isMouseRecentlyActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08 * dt;
        mouse.y += (mouse.targetY - mouse.y) * 0.08 * dt;

        // Subtle interactive spotlight (optimized radius)
        const spotGrad = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 280
        );
        spotGrad.addColorStop(0, 'rgba(0, 229, 255, 0.09)');
        spotGrad.addColorStop(0.4, 'rgba(14, 165, 233, 0.04)');
        spotGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw floating stardust motes
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.vy * dt;
        p.x += (p.vx + Math.sin(now * 0.001 + p.phase) * 0.2) * dt;

        // Wrap around screen
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.baseAlpha * (0.8 + 0.2 * Math.sin(now * p.pulseSpeed + p.phase));

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

      {/* 2. Vibrant Ambient Glass Aurora Glows */}
      <div className="glass-light-aurora-cyan" />
      <div className="glass-light-aurora-violet" />
      <div className="glass-light-aurora-rose" />
      <div className="glass-light-aurora-sapphire" />
      <div className="glass-light-aurora-teal" />

      {/* 3. Center Luminous Core */}
      <div className="glass-light-center-core" />

      {/* 4. Fine Frosted Dot Matrix */}
      <div className="glass-light-dot-matrix" />

      {/* 5. 60FPS Glass Light Canvas */}
      <canvas ref={canvasRef} className="glass-motion-canvas" />

      {/* 6. Soft Perimeter Vignette */}
      <div className="glass-light-vignette" />

      {/* 7. Dark Side Screens */}
      <div className="glass-light-side-curtains" />
    </div>
  );
}
