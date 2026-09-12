import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CursorTrail.css';

export function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(pointer: coarse)').matches;
    }
    return false;
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Quick snap for central pointer
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  // Smooth lagging spring for ambient trailing aura
  const auraX = useSpring(mouseX, { stiffness: 180, damping: 24, mass: 0.2 });
  const auraY = useSpring(mouseY, { stiffness: 180, damping: 24, mass: 0.2 });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hover on interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('.pro-card') ||
        target.closest('.category-filter-btn')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="cursor-trail-system" aria-hidden="true">
      {/* 1. Ambient Trailing Glow Aura */}
      <motion.div
        className={`cursor-aura-ring ${isHovered ? 'hovered' : ''}`}
        style={{
          x: auraX,
          y: auraY
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          opacity: isVisible ? (isHovered ? 0.8 : 0.45) : 0
        }}
        transition={{ duration: 0.2 }}
      />

      {/* 2. Core High-Precision Laser Dot */}
      <motion.div
        className="cursor-core-dot"
        style={{
          x: dotX,
          y: dotY
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}

export default CursorTrail;
