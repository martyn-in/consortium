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
    y: 25,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const energyPulse = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 18
    }
  }
};

export const fadeUp = (delay = 0, distance = 25) => ({
  hidden: {
    opacity: 0,
    y: distance
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1]
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
      '0 0 20px rgba(0, 229, 255, 0.25), 0 0 40px rgba(14, 165, 233, 0.1)',
      '0 0 35px rgba(56, 189, 248, 0.5), 0 0 70px rgba(0, 229, 255, 0.35)',
      '0 0 20px rgba(0, 229, 255, 0.25), 0 0 40px rgba(14, 165, 233, 0.1)'
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
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.16, 1, 0.3, 1]
    }
  }
});

