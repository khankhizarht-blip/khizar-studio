
export const motionSettings = {
  duration: {
    instant: 0,
    fast: 0.2,
    normal: 0.4,
    slow: 0.7,
    reveal: 0.8,
    loading: 1.2,
  },

  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.4,
  },

  stagger: {
    tight: 0.04,
    normal: 0.08,
    relaxed: 0.12,
  },

  ease: {
    premium: [0.22, 1, 0.36, 1] as const,
    inOut: [0.76, 0, 0.24, 1] as const,
    standard: [0.2, 0, 0, 1] as const,
  },

  distance: {
    small: 12,
    medium: 24,
    large: 48,
  },

  scale: {
    subtle: 0.98,
    reduced: 0.95,
    full: 1,
  },
} as const;

export type MotionSettings = typeof motionSettings;

export const animationPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: motionSettings.duration.normal,
      ease: motionSettings.ease.premium,
    },
  },

  slideUp: {
    initial: {
      opacity: 0,
      y: motionSettings.distance.medium,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: motionSettings.duration.reveal,
      ease: motionSettings.ease.premium,
    },
  },

  scaleIn: {
    initial: {
      opacity: 0,
      scale: motionSettings.scale.reduced,
    },
    animate: {
      opacity: 1,
      scale: motionSettings.scale.full,
    },
    transition: {
      duration: motionSettings.duration.normal,
      ease: motionSettings.ease.premium,
    },
  },

  staggerChildren: {
    staggerChildren: motionSettings.stagger.normal,
  },
} as const;

export const reducedMotionTransition = {
  duration: 0,
};


/** Shared decorative choreography; never applies to semantic text. */
export const cinematicMotion = {
  scrub: 0.65,
  scrollSpan: 1.2,
  ease: "none",
  phases: { entrance: 0.22, holdEnd: 0.75, exit: 1 },
  travel: { grid: 55, light: 35, surface: 90, rotation: 7 },
} as const;
