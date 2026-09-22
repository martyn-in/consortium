import { useEffect, useRef } from 'react';
import bgArtwork from '../assets/futuristic_event_bg.jpg';
import bgArtworkMobile from '../assets/futuristic_event_bg_mobile.jpg';
import './GraphicBackground.css';

export default function GraphicBackground() {
  const wrapperRef = useRef(null);
  const moverRef = useRef(null);

  useEffect(() => {
    const mover = moverRef.current;
    const wrapper = wrapperRef.current;
    if (!mover || !wrapper) return;

    let animId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight * 0.35;
    let curPointerX = pointerX;
    let curPointerY = pointerY;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = ((e.clientX / innerWidth) - 0.5) * 44;
      targetY = ((e.clientY / innerHeight) - 0.5) * 28;
      pointerX = e.clientX;
      pointerY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const { innerWidth, innerHeight } = window;
        targetX = ((e.touches[0].clientX / innerWidth) - 0.5) * 32;
        targetY = ((e.touches[0].clientY / innerHeight) - 0.5) * 20;
        pointerX = e.touches[0].clientX;
        pointerY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let isRunning = true;
    const handleVisibility = () => {
      isRunning = !document.hidden;
      if (isRunning) loop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const loop = () => {
      if (!isRunning) return;
      // Fluid inertial damping
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;

      curPointerX += (pointerX - curPointerX) * 0.075;
      curPointerY += (pointerY - curPointerY) * 0.075;

      if (mover) {
        mover.style.setProperty('--parallax-x', `${currentX.toFixed(2)}px`);
        mover.style.setProperty('--parallax-y', `${currentY.toFixed(2)}px`);
      }

      if (wrapper) {
        wrapper.style.setProperty('--spot-x', `${curPointerX.toFixed(1)}px`);
        wrapper.style.setProperty('--spot-y', `${curPointerY.toFixed(1)}px`);
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="graphic-background-wrapper" aria-hidden="true">
      {/* 1. Precision Cyber Blueprint Grid & Architectural Coordinate System */}
      <div className="bg-blueprint-grid" />

      {/* 2. Dynamic Flowing Aurora Light Pools (Continuous Ambient Motion) */}
      <div className="bg-motion-aurora bg-motion-aurora-top" />
      <div className="bg-motion-aurora bg-motion-aurora-bottom" />
      <div className="bg-motion-aurora bg-motion-aurora-center" />

      {/* 3. Interactive Volumetric Cursor Glow Spotlight */}
      <div className="bg-interactive-spotlight" />

      {/* 4. Elegant Geometric Aerospace Orbital Rings */}
      <div className="bg-orbital-ring bg-orbital-ring-1" />
      <div className="bg-orbital-ring bg-orbital-ring-2" />

      {/* 5. Fluid Moving Aerospace Background Artwork with Parallax Inertia */}
      <div ref={moverRef} className="graphic-background-mover">
        <picture className="graphic-background-picture">
          <source media="(max-width: 768px)" srcSet={bgArtworkMobile} />
          <img
            src={bgArtwork}
            alt=""
            className="graphic-background-art"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* 6. Traveling Photonic Sheen Beam (Glistening Light Sweep Across Ribbons) */}
        <div className="graphic-background-sheen" />
      </div>
    </div>
  );
}
