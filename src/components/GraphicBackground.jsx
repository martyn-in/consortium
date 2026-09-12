import { useEffect, useRef } from 'react';
import heroOrb from '../assets/hero_orb.jpg';
import './GraphicBackground.css';

const GraphicBackground = ({ isVideoPlaying = true }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  return (
    <div className="graphic-background-wrapper" aria-hidden="true">
      {/* 1. Full HD Concert & Festival Party Background Video */}
      <div className="video-viewport-layer">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="bg-festival-video"
          poster={heroOrb}
        >
          <source src="/videos/party-bg.webm" type="video/webm" />
          <source src="/videos/party-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Cinematic Multi-Layer Color Grading & Gradient Overlays */}
      <div className="video-color-grade-layer" />
      <div className="video-cinematic-overlay" />

      {/* 3. Ambient Radiant Aurora Light Beams */}
      <div className="aurora-glow aurora-1" />
      <div className="aurora-glow aurora-2" />
      <div className="aurora-glow aurora-3" />

      {/* 4. Subtle Architectural Tech Grid */}
      <div className="tech-grid-pattern" />

      {/* 5. Perspective Horizon Grid at Base */}
      <div className="cyber-horizon-grid" />

      {/* 6. Dark Vignette to Preserve Contrast */}
      <div className="vignette-overlay" />
    </div>
  );
};

export default GraphicBackground;
