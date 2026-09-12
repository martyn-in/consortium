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
        filter: 'blur(8px)',
        ...offset
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
