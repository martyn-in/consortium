/**
 * Centralized Framer Motion Transition Curves and Variants
 * Inspired by Apple Keynote and Cybernetic Tech Conferences
 */

export const transitions = {
  smooth: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]
  },
  springSnappy: {
    type: 'spring',
    stiffness: 300,
    damping: 24
  },
  springGentle: {
    type: 'spring',
    stiffness: 180,
    damping: 20
  }
};

export const pageEntrance = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const letterByLetter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3
    }
  }
};

export const letterItem = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: 'blur(14px)',
    scale: 0.92
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const energyPulse = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(10px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 18
    }
  }
};

export const fadeUp = (delay = 0, distance = 40) => ({
  hidden: {
    opacity: 0,
    y: distance,
    filter: 'blur(6px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

export const cardFloat = (delay = 0) => ({
  animate: {
    y: [0, -8, 0]
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
    delay
  }
});

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(0, 234, 255, 0.2), 0 0 40px rgba(123, 77, 255, 0.1)',
      '0 0 35px rgba(0, 234, 255, 0.45), 0 0 70px rgba(123, 77, 255, 0.3)',
      '0 0 20px rgba(0, 234, 255, 0.2), 0 0 40px rgba(123, 77, 255, 0.1)'
    ]
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const scaleEntrance = (delay = 0) => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  }
});

