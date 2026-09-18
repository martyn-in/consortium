import { motion } from 'framer-motion';

export default function Reveal({ 
  children, 
  direction = 'up', 
  distance = 16,
  delay = 0, 
  duration = 0.3,
  className = '' 
}) {
  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return { y: distance };
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
        amount: 0.02,
        margin: '0px 0px -40px 0px'
      }}
      transition={{
        duration: Math.min(duration, 0.32),
        delay: Math.min(delay, 0.15),
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
