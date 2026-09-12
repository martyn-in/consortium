export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const fadeInUp = (duration = 0.7, delay = 0, distance = 40) => ({
  hidden: { 
    opacity: 0, 
    y: distance, 
    filter: 'blur(8px)' 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const letterReveal = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: 'blur(14px)',
    scale: 0.9,
    rotateX: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const royalGlowPulse = {
  scale: [1, 1.03, 1],
  boxShadow: [
    '0 0 20px rgba(212, 175, 55, 0.2)',
    '0 0 35px rgba(212, 175, 55, 0.45)',
    '0 0 20px rgba(212, 175, 55, 0.2)'
  ],
  transition: {
    repeat: Infinity,
    duration: 3,
    ease: 'easeInOut'
  }
};

export const magneticSpring = {
  damping: 18,
  stiffness: 240,
  mass: 0.1
};
