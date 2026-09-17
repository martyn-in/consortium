import { useState, useEffect, useRef } from 'react';
import './GraphicBackground.css';

export default function GraphicBackground({ isVideoPlaying = true }) {
  const canvasRef = useRef(null);
  const [currentStyle] = useState(() => {
    return localStorage.getItem('c26_bg_style') || 'executive';
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth lerp
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

    // --- State & Particles Setup for each style ---
    // 1. Executive Motes
    const moteCount = 50;
    const motes = Array.from({ length: moteCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -(0.25 + Math.random() * 0.45),
      vx: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.5 + 0.2,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? '56, 189, 248' : '168, 85, 247'
    }));

    // 2. Neural Nodes
    const nodeCount = Math.min(70, Math.max(30, Math.floor((width * height) / 18000)));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.8 + 1.2,
      pulse: Math.random() * Math.PI * 2,
      color: Math.random() > 0.6 ? '56, 189, 248' : (Math.random() > 0.5 ? '96, 165, 250' : '45, 212, 191')
    }));

    // 3. Stars for Nebula & Horizon
    const starCount = 140;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speed: 0.015 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2
    }));

    // Shooting stars
    let shootingStar = null;
    let nextShootingStarTime = performance.now() + 2000 + Math.random() * 4000;

    let gridOffset = 0;
    let isRunning = true;

    const handleVisibility = () => {
      isRunning = !document.hidden;
      if (isRunning) loop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // --- Main Animation Loop ---
    const loop = () => {
      if (!isRunning) return;
      animId = requestAnimationFrame(loop);

      const now = performance.now();
      ctx.clearRect(0, 0, width, height);

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // ==========================================
      // STYLE 1: EXECUTIVE CYBER MESH
      // ==========================================
      if (currentStyle === 'executive') {
        // A. Subtle interactive cursor ambient spotlight
        if (mouse.isActive) {
          const grad = ctx.createRadialGradient(
            mouse.x, mouse.y, 0,
            mouse.x, mouse.y, 320
          );
          grad.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
          grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, width, height);
        }

        // B. Drifting luminous cyber motes
        for (let i = 0; i < motes.length; i++) {
          const m = motes[i];
          m.y += m.vy;
          m.x += m.vx + Math.sin(now * 0.001 + m.phase) * 0.2;

          if (m.y < -10) m.y = height + 10;
          if (m.x < -10) m.x = width + 10;
          if (m.x > width + 10) m.x = -10;

          // Subtle interactive push
          if (mouse.isActive) {
            const dx = m.x - mouse.x;
            const dy = m.y - mouse.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 120 && d > 0) {
              const force = (120 - d) / 120;
              m.x += (dx / d) * force * 1.5;
              m.y += (dy / d) * force * 1.5;
            }
          }

          const currentAlpha = m.alpha * (0.7 + 0.3 * Math.sin(now * 0.002 + m.phase));
          ctx.fillStyle = `rgba(${m.color}, ${currentAlpha})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ==========================================
      // STYLE 2: CYBER HORIZON 3D
      // ==========================================
      else if (currentStyle === 'horizon') {
        const horizonY = height * 0.52;
        gridOffset = (gridOffset + 0.8) % 40;

        // A. Upper Sky Stars
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          if (s.y < horizonY) {
            const tw = s.alpha * (0.6 + 0.4 * Math.sin(now * s.speed + s.phase));
            ctx.fillStyle = `rgba(255, 255, 255, ${tw})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // B. Horizon Glow Beam
        const beamGrad = ctx.createLinearGradient(0, horizonY - 15, 0, horizonY + 30);
        beamGrad.addColorStop(0, 'transparent');
        beamGrad.addColorStop(0.35, 'rgba(0, 234, 255, 0.45)');
        beamGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.65)');
        beamGrad.addColorStop(0.7, 'rgba(0, 234, 255, 0.25)');
        beamGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = beamGrad;
        ctx.fillRect(0, horizonY - 20, width, 50);

        // Thin central laser line
        ctx.strokeStyle = '#00eaff';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.lineTo(width, horizonY);
        ctx.stroke();

        // C. Perspective 3D Runway Grid (Bottom half)
        const vanishX = width * 0.5 + (mouse.x - width * 0.5) * 0.08;
        const vanishY = horizonY;

        // Radiating perspective lines
        const lineCount = 28;
        ctx.lineWidth = 1;
        for (let i = -lineCount; i <= lineCount; i++) {
          const bottomX = vanishX + i * (width / 14);
          const alpha = Math.max(0.04, 0.35 - Math.abs(i) * 0.015);
          ctx.strokeStyle = `rgba(0, 234, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(vanishX, vanishY);
          ctx.lineTo(bottomX, height + 50);
          ctx.stroke();
        }

        // Horizontal depth grid bars with perspective exponential spacing
        const hLines = 18;
        for (let j = 1; j <= hLines; j++) {
          const t = Math.pow(j / hLines, 2.2);
          const lineY = vanishY + t * (height - vanishY) + gridOffset * (t * 0.4);
          if (lineY > vanishY && lineY <= height) {
            const alpha = Math.min(0.35, t * 0.4);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(0, lineY);
            ctx.lineTo(width, lineY);
            ctx.stroke();
          }
        }
      }

      // ==========================================
      // STYLE 3: NEURAL TECH NETWORK
      // ==========================================
      else if (currentStyle === 'neural') {
        // Update nodes
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0) { n.x = 0; n.vx *= -1; }
          else if (n.x > width) { n.x = width; n.vx *= -1; }
          if (n.y < 0) { n.y = 0; n.vy *= -1; }
          else if (n.y > height) { n.y = height; n.vy *= -1; }

          // Mouse interaction
          if (mouse.isActive) {
            const dx = n.x - mouse.x;
            const dy = n.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140 && dist > 0) {
              const force = (140 - dist) / 140;
              n.x += (dx / dist) * force * 1.8;
              n.y += (dy / dist) * force * 1.8;
            }
          }

          // Draw node
          n.pulse += 0.03;
          const alpha = 0.6 + 0.35 * Math.sin(n.pulse);
          ctx.fillStyle = `rgba(${n.color}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fill();

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dx = n.x - n2.x;
            const dy = n.y - n2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
              const lineAlpha = (1 - dist / 130) * 0.28;
              ctx.strokeStyle = `rgba(${n.color}, ${lineAlpha})`;
              ctx.lineWidth = 0.9;
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          }
        }
      }

      // ==========================================
      // STYLE 4: DEEP SPACE NEBULA
      // ==========================================
      else if (currentStyle === 'nebula') {
        // A. Starfield
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const tw = s.alpha * (0.6 + 0.4 * Math.sin(now * s.speed + s.phase));
          ctx.fillStyle = `rgba(240, 246, 255, ${tw})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // B. Shooting Star (Occasional high-speed data streak)
        if (!shootingStar && now > nextShootingStarTime) {
          shootingStar = {
            x: Math.random() * width * 0.8,
            y: Math.random() * height * 0.35,
            length: 120 + Math.random() * 80,
            speed: 18 + Math.random() * 12,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
            opacity: 1
          };
          nextShootingStarTime = now + 4000 + Math.random() * 5000;
        }

        if (shootingStar) {
          const ss = shootingStar;
          const endX = ss.x + Math.cos(ss.angle) * ss.length;
          const endY = ss.y + Math.sin(ss.angle) * ss.length;

          const streakGrad = ctx.createLinearGradient(ss.x, ss.y, endX, endY);
          streakGrad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
          streakGrad.addColorStop(0.3, `rgba(56, 189, 248, ${ss.opacity * 0.7})`);
          streakGrad.addColorStop(1, 'transparent');

          ctx.strokeStyle = streakGrad;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          ss.x += Math.cos(ss.angle) * ss.speed;
          ss.y += Math.sin(ss.angle) * ss.speed;
          ss.opacity -= 0.025;

          if (ss.opacity <= 0 || ss.x > width + 100 || ss.y > height + 100) {
            shootingStar = null;
          }
        }
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
  }, [currentStyle]);

  return (
    <div className={`graphic-background-wrapper theme-mode-${currentStyle}`} aria-hidden="true">
      {/* 1. Deep Obsidian Base */}
      <div className="cyber-obsidian-base" />

      {/* 2. Theme-Specific Ambient CSS Layers */}
      {currentStyle === 'executive' && (
        <>
          <div className="exec-glow-orb-cyan" />
          <div className="exec-glow-orb-violet" />
          <div className="exec-glow-orb-sapphire" />
          <div className="exec-fine-dot-grid" />
        </>
      )}

      {currentStyle === 'horizon' && (
        <>
          <div className="horizon-sky-vignette" />
          <div className="horizon-ambient-core" />
        </>
      )}

      {currentStyle === 'neural' && (
        <>
          <div className="neural-grid-backdrop" />
          <div className="neural-ambient-cyan" />
          <div className="neural-ambient-purple" />
        </>
      )}

      {currentStyle === 'nebula' && (
        <>
          <div className="nebula-dust-cloud-1" />
          <div className="nebula-dust-cloud-2" />
          <div className="nebula-dust-cloud-3" />
        </>
      )}

      {/* 3. Hardware-Accelerated Dynamic 60FPS Canvas */}
      <canvas ref={canvasRef} className="cyber-motion-canvas" />

      {/* 4. Global Contrast Vignette */}
      <div className="cyber-contrast-vignette" />
    </div>
  );
}
