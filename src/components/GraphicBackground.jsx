import { useEffect, useRef } from 'react';
import bgArtwork from '../assets/futuristic_event_bg.jpg';
import bgArtworkMobile from '../assets/futuristic_event_bg_mobile.jpg';
import './GraphicBackground.css';

export default function GraphicBackground() {
  const moverRef = useRef(null);

  useEffect(() => {
    const mover = moverRef.current;
    if (!mover) return;

    let animId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Gentle parallax offset based on pointer position (-22px to +22px)
      targetX = ((e.clientX / innerWidth) - 0.5) * 44;
      targetY = ((e.clientY / innerHeight) - 0.5) * 28;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const { innerWidth, innerHeight } = window;
        targetX = ((e.touches[0].clientX / innerWidth) - 0.5) * 32;
        targetY = ((e.touches[0].clientY / innerHeight) - 0.5) * 20;
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

      if (mover) {
        mover.style.setProperty('--parallax-x', `${currentX.toFixed(2)}px`);
        mover.style.setProperty('--parallax-y', `${currentY.toFixed(2)}px`);
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
    <div className="graphic-background-wrapper" aria-hidden="true">
      {/* 1. Dynamic Flowing Aurora Light Pools (Continuous Ambient Motion) */}
      <div className="bg-motion-aurora bg-motion-aurora-top" />
      <div className="bg-motion-aurora bg-motion-aurora-bottom" />

      {/* 2. Fluid Moving Aerospace Background Artwork with Parallax Inertia */}
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

        {/* 3. Traveling Photonic Sheen Beam (Glistening Light Sweep Across Ribbons) */}
        <div className="graphic-background-sheen" />
      </div>
    </div>
  );
}
