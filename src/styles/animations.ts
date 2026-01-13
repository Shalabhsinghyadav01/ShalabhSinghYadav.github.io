/**
 * Animation Definitions
 *
 * Centralized animation keyframes and animation utilities
 * for consistent motion design across the portfolio.
 */

// ============================================================================
// Animation Keyframes
// ============================================================================

export const keyframes = {
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  fadeOut: {
    "0%": { opacity: "1" },
    "100%": { opacity: "0" },
  },
  slideUp: {
    "0%": { transform: "translateY(20px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },
  slideDown: {
    "0%": { transform: "translateY(-20px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },
  slideLeft: {
    "0%": { transform: "translateX(20px)", opacity: "0" },
    "100%": { transform: "translateX(0)", opacity: "1" },
  },
  slideRight: {
    "0%": { transform: "translateX(-20px)", opacity: "0" },
    "100%": { transform: "translateX(0)", opacity: "1" },
  },
  scaleIn: {
    "0%": { transform: "scale(0.95)", opacity: "0" },
    "100%": { transform: "scale(1)", opacity: "1" },
  },
  scaleOut: {
    "0%": { transform: "scale(1)", opacity: "1" },
    "100%": { transform: "scale(0.95)", opacity: "0" },
  },
  rotate: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
  pulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.5" },
  },
  bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
    },
    "50%": {
      transform: "translateY(0)",
      animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    },
  },
  shimmer: {
    "0%": { backgroundPosition: "-1000px 0" },
    "100%": { backgroundPosition: "1000px 0" },
  },
} as const;

// ============================================================================
// Animation Presets
// ============================================================================

export const animations = {
  fadeIn: {
    keyframes: keyframes.fadeIn,
    duration: "0.6s",
    timing: "ease-in-out",
    fill: "forwards",
  },
  fadeOut: {
    keyframes: keyframes.fadeOut,
    duration: "0.3s",
    timing: "ease-in-out",
    fill: "forwards",
  },
  slideUp: {
    keyframes: keyframes.slideUp,
    duration: "0.6s",
    timing: "ease-out",
    fill: "forwards",
  },
  slideDown: {
    keyframes: keyframes.slideDown,
    duration: "0.6s",
    timing: "ease-out",
    fill: "forwards",
  },
  scaleIn: {
    keyframes: keyframes.scaleIn,
    duration: "0.3s",
    timing: "ease-out",
    fill: "forwards",
  },
  pulse: {
    keyframes: keyframes.pulse,
    duration: "2s",
    timing: "ease-in-out",
    iteration: "infinite",
  },
} as const;

// ============================================================================
// Animation Utilities
// ============================================================================

/**
 * Creates an animation string
 */
export const createAnimation = (
  name: string,
  duration: string = "0.6s",
  timing: string = "ease-out",
  delay: string = "0s",
  iteration: string = "1",
  fill: string = "forwards"
): string => {
  return `${name} ${duration} ${timing} ${delay} ${iteration} ${fill}`;
};

/**
 * Stagger animation delays
 */
export const staggerDelay = (index: number, baseDelay: number = 0.1): string => {
  return `${baseDelay * index}s`;
};

/**
 * Creates a fade-in-up animation with delay
 */
export const fadeInUp = (delay: number = 0): string => {
  return createAnimation("fadeInUp", "0.6s", "ease-out", `${delay}s`);
};

/**
 * Creates a fade-in animation with delay
 */
export const fadeIn = (delay: number = 0): string => {
  return createAnimation("fadeIn", "0.6s", "ease-in-out", `${delay}s`);
};

// ============================================================================
// Reduced Motion Support
// ============================================================================

/**
 * Checks if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Gets animation duration based on motion preference
 */
export const getAnimationDuration = (defaultDuration: string): string => {
  if (prefersReducedMotion()) {
    return "0.01s"; // Near-instant for reduced motion
  }
  return defaultDuration;
};

/**
 * Conditionally applies animation based on motion preference
 */
export const conditionalAnimation = (
  animation: string,
  fallback: string = "none"
): string => {
  return prefersReducedMotion() ? fallback : animation;
};

// ============================================================================
// Scroll Animation Utilities
// ============================================================================

/**
 * Intersection Observer options for scroll animations
 */
export const scrollAnimationOptions = {
  default: {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0.2,
  },
  early: {
    root: null,
    rootMargin: "-10% 0px -50% 0px",
    threshold: 0.1,
  },
  late: {
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0.3,
  },
} as const;
