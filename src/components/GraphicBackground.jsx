import bgArtwork from '../assets/futuristic_event_bg.jpg';
import bgArtworkDark from '../assets/futuristic_event_bg_dark.jpg';
import { useTheme } from '../context/ThemeContext';
import './GraphicBackground.css';

export default function GraphicBackground() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`graphic-background-wrapper ${isDark ? 'is-dark' : 'is-light'}`} aria-hidden="true">
      {/* 1. Precision Cyber Blueprint Grid */}
      <div className="bg-blueprint-grid" />

      {/* 2. Dynamic Flowing Corner Aurora Light Pools */}
      <div className="bg-motion-aurora bg-motion-aurora-top" />
      <div className="bg-motion-aurora bg-motion-aurora-bottom" />

      {/* 3. Elegant Geometric Aerospace Orbital Rings */}
      <div className="bg-orbital-ring bg-orbital-ring-1" />
      <div className="bg-orbital-ring bg-orbital-ring-2" />

      {/* 4. Auto-Flowing Aerospace Background Artwork */}
      <div className="graphic-background-mover">
        <img
          src={isDark ? bgArtworkDark : bgArtwork}
          alt=""
          className="graphic-background-art"
          loading="eager"
          decoding="async"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />

        {/* 5. Traveling Photonic Sheen Beam */}
        <div className="graphic-background-sheen" />
      </div>
    </div>
  );
}
