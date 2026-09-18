import { motion } from 'framer-motion';

export default function Reveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.8,
  className = '' 
}) {
  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: 60 };
      case 'down': return { y: -60 };
      case 'left': return { x: 60 };
      case 'right': return { x: -60 };
      default: return { y: 60 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.1
      }}
      transition={{
        duration: Math.min(duration, 0.55),
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
