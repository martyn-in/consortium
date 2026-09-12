import { motion } from 'framer-motion';

export function Reveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.7, 
  className = '', 
  once = true,
  distance = 40,
  blur = true
}) {
  const getInitial = () => {
    const base = { opacity: 0 };
    if (blur) base.filter = 'blur(8px)';

    switch (direction) {
      case 'up':
        return { ...base, y: distance };
      case 'down':
        return { ...base, y: -distance };
      case 'left':
        return { ...base, x: distance };
      case 'right':
        return { ...base, x: -distance };
      case 'none':
        return base;
      default:
        return { ...base, y: distance };
    }
  };

  const getTarget = () => {
    const base = { opacity: 1 };
    if (blur) base.filter = 'blur(0px)';

    switch (direction) {
      case 'up':
      case 'down':
        return { ...base, y: 0 };
      case 'left':
      case 'right':
        return { ...base, x: 0 };
      case 'none':
        return base;
      default:
        return { ...base, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getTarget()}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Apple-style smooth cubic-bezier easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
