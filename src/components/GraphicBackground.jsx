import { useEffect, useRef } from 'react';
import bgArtwork from '../assets/futuristic_event_bg.jpg';
import './GraphicBackground.css';

// Consortium 2026 High-Contrast Institutional Stardust Palette (Royal Blue, Cyan, Gold & Deep Navy)
const GLOW_PARTICLE_COLORS = [
  { r: 0, g: 87, b: 217 },    // Royal Blue (#0057d9)
  { r: 0, g: 168, b: 255 },   // Electric Cyan (#00a8ff)
  { r: 245, g: 158, b: 11 },  // Amber Gold (#f59e0b)
  { r: 0, g: 45, b: 120 },    // Deep Navy (#002d78)
  { r: 217, g: 119, b: 6 },   // Warm Honey Gold (#d97706)
  { r: 14, g: 116, b: 144 },  // Deep Azure (#0e7490)
];

export default function GraphicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Pointer tracking (mouse + touch) for interactive illumination
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isActive: false,
      lastMoveTime: 0
    };

    const handleMouseMove = (e) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
      pointer.isActive = true;
      pointer.lastMoveTime = performance.now();
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
        pointer.isActive = true;
        pointer.lastMoveTime = performance.now();
      }
    };

    const handlePointerLeave = () => {
      pointer.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handlePointerLeave, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave, { passive: true });

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

    // 38 refined, high-contrast stardust particles
    const particleCount = 38;
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const color = GLOW_PARTICLE_COLORS[i % GLOW_PARTICLE_COLORS.length];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(0.18 + Math.random() * 0.28),
        radius: Math.random() * 2.0 + 1.2,
        color,
        baseAlpha: Math.random() * 0.45 + 0.55,
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
      const dt = Math.min((now - lastTime) / 16.67, 2.0);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const isPointerActive = pointer.isActive && (now - pointer.lastMoveTime < 2400);
      if (isPointerActive) {
        pointer.x += (pointer.targetX - pointer.x) * 0.1 * dt;
        pointer.y += (pointer.targetY - pointer.y) * 0.1 * dt;
      }

      // Render each glowing particle mote with high contrast against white canvas
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

        // Proximity glow illumination when finger/cursor is near
        if (isPointerActive) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 36000) {
            currentAlpha = Math.min(1.0, currentAlpha + (1 - Math.sqrt(distSq) / 190) * 0.45);
          }
        }

        // 1. Outer luminous radiant glow aura (fading to clean transparent white)
        const glowRadius = p.radius * 4.5;
        const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        glowGrad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.55})`);
        glowGrad.addColorStop(0.4, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha * 0.2})`);
        glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. High-contrast solid colored core (crystal clear on white)
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${Math.min(1, currentAlpha * 1.3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // 3. Ultra-subtle specular highlight center
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x - p.radius * 0.25, p.y - p.radius * 0.25, p.radius * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handlePointerLeave);
      document.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="graphic-background-wrapper" aria-hidden="true">
      {/* 1. Cinematic 16:9 Aerospace Orbital Ribbon Background Artwork */}
      <img
        src={bgArtwork}
        alt=""
        className="graphic-background-art"
        loading="eager"
        decoding="async"
      />

      {/* 2. Subtle High-Tech Institutional Dot Matrix Grid */}
      <div className="glass-light-dot-matrix" />

      {/* 3. 60-120 FPS High-Contrast Stardust Particle Canvas */}
      <canvas ref={canvasRef} className="glass-motion-canvas" />
    </div>
  );
}
