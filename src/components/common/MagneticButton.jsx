import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './MagneticButton.css';

export function MagneticButton({ 
  children, 
  onClick, 
  href,
  className = '', 
  variant = 'primary', // 'primary', 'secondary', 'ghost'
  strength = 0.28,
  glow = true,
  ...props 
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for magnetic cursor attraction
  const springConfig = { damping: 15, stiffness: 220, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY
      }}
      whileHover={{
        scale: 1.04,
        y: -3,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className={`magnetic-btn-root ${variant} ${className}`}
      {...props}
    >
      {/* Animated Neon Border Glow Effect */}
      {glow && (
        <span 
          className={`neon-border-glow ${isHovered ? 'active' : ''}`}
          aria-hidden="true" 
        />
      )}

      {/* Button Content */}
      <span className="magnetic-btn-content">
        {children}
      </span>
    </Component>
  );
}

export default MagneticButton;
