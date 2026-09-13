import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { sound } from '../utils/soundEffects';
import './Button.css';

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary' (metallic gold) or 'secondary' (glass royal)
  className = '',
  magnetic = true,
  strength = 0.25,
  ...props
}) {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);

  // Magnetic Spring Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 16, stiffness: 220, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    if (magnetic) {
      x.set(0);
      y.set(0);
    }
  };

  const handleClick = (e) => {
    sound.playClick();

    // Ripple click animation
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x: clickX, y: clickY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    }

    if (onClick) onClick(e);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY
      }}
      whileHover={{
        scale: 1.05,
        y: -4,
        boxShadow: variant === 'primary' 
          ? '0 12px 40px rgba(0, 234, 255, 0.55), 0 0 30px rgba(99, 91, 255, 0.4)' 
          : '0 12px 35px rgba(0, 234, 255, 0.25), inset 0 0 20px rgba(0, 234, 255, 0.12)',
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      whileTap={{
        scale: 0.96,
        transition: { duration: 0.1 }
      }}
      className={`royal-btn-root ${variant} ${className}`}
      {...props}
    >
      {/* Animated Metallic Gold Border Sweep */}
      <span className="royal-border-glow" aria-hidden="true" />

      {/* Button Content Layer */}
      <span className="royal-btn-inner">
        {children}
      </span>

      {/* Click Ripple Effect */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="royal-btn-ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
          aria-hidden="true"
        />
      ))}
    </Component>
  );
}
