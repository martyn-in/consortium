import { useEffect, useRef } from 'react';
import './GraphicBackground.css';

const GraphicBackground = ({ isVideoPlaying = true }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      if (isVideoPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  return (
    <div className="graphic-background-wrapper" aria-hidden="true">
      {/* 1. Full HD 1080p Master Concert & Festival Background Video */}
      <div className="video-viewport-layer">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="bg-festival-video"
        >
          <source src="/videos/party-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Ultra-clean subtle edge gradient (Center is 100% crystal clear and unmasked) */}
      <div className="video-cinematic-overlay" />
    </div>
  );
};

export default GraphicBackground;
