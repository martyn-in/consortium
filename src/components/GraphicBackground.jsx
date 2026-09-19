import { useEffect, useRef } from 'react';
import './GraphicBackground.css';

// Consortium 2026 Executive Radiant Aqua & Cyber Sky Glow Palette
const GLOW_PARTICLE_COLORS = [
  { r: 0, g: 229, b: 255 },     // Radiant Neon Aqua (#00e5ff)
  { r: 56, g: 189, b: 248 },    // Electric Sky Blue (#38bdf8)
  { r: 14, g: 165, b: 233 },    // Deep Azure Cyan (#0ea5e9)
  { r: 186, g: 230, b: 253 },   // Brilliant Ice White (#bae6fd)
  { r: 125, g: 211, b: 252 },   // Stellar Cyan (#7dd3fc)
];

export default function GraphicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for interactive particle illumination
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
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // 42 luminous glowing stardust particles
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const color = GLOW_PARTICLE_COLORS[i % GLOW_PARTICLE_COLORS.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(0.15 + Math.random() * 0.28),
        radius: Math.random() * 1.8 + 0.9,
        color,
        baseAlpha: Math.random() * 0.45 + 0.4,
        pulseSpeed: 0.012 + Math.random() * 0.02,
        phase: Math.random() * Math.PI * 2
      };
    });

    let isScrolling = false;
    let scrollTimeout = null;

    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        lastTime = performance.now();
      }, 90);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

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

      // Dedicated GPU bandwidth: pause canvas repaint during scrolling gestures
      if (isScrolling) return;

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 16.67, 2.0);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const isMouseRecentlyActive = mouse.isActive && (now - mouse.lastMoveTime < 2000);
      if (isMouseRecentlyActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08 * dt;
        mouse.y += (mouse.targetY - mouse.y) * 0.08 * dt;
      }

      // Render each glowing particle mote
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.vy * dt;
        p.x += (p.vx + Math.sin(now * 0.0012 + p.phase) * 0.22) * dt;

        // Wrap boundaries
        if (p.y < -20) p.y = height + 20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Gentle breathing pulsation
        let currentAlpha = p.baseAlpha * (0.75 + 0.25 * Math.sin(now * p.pulseSpeed + p.phase));

        // Proximity glow illumination when mouse is near
        if (isMouseRecentlyActive) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 40000) {
            currentAlpha = Math.min(1.0, currentAlpha + (1 - Math.sqrt(distSq) / 200) * 0.45);
          }
        }

        // 1. Outer luminous radiant glow aura
        const glowRadius = p.radius * 3.8;
        const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        glowGrad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.9})`);
        glowGrad.addColorStop(0.35, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.28})`);
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. High-intensity diamond-bright core spark
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, currentAlpha * 1.25)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.65, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="graphic-background-wrapper" aria-hidden="true">
      {/* 1. Subtle Luminous Cyber Dot Matrix on Total Black */}
      <div className="glass-light-dot-matrix" />

      {/* 2. 60-120 FPS Luminous Glowing Stardust Particle Canvas */}
      <canvas ref={canvasRef} className="glass-motion-canvas" />
    </div>
  );
}
