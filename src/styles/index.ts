/**
 * Styles Index
 *
 * Central export point for all style-related modules.
 * Import from this file for a clean, organized import structure.
 */

// Presets - export everything except conflicting names
export {
  colors,
  backgroundGradient,
  cursorGlow,
  spacing,
  sizing,
  transitions,
  borders,
  radius,
  opacity,
  shadows,
  blendCard,
  chip,
  typography,
  layout,
  breakpoints,
  cn,
  getColor,
  createGradient,
  type ColorPalette,
  type ColorShade,
  type TransitionPreset,
  type TypographyPreset,
} from "./presets";

// Export zIndex from presets (not mixins)
export { zIndex } from "./presets";

// Mixins - export everything


export * from "./mixins";

// Variables - export everything
export * from "./variables";

// Animations - export with alias to avoid conflict
export {
  keyframes as animationKeyframes,
  animations as animationPresets,
  createAnimation,
  staggerDelay,
  fadeInUp,
  fadeIn,
  prefersReducedMotion,
  getAnimationDuration,
  conditionalAnimation,
  scrollAnimationOptions,
} from "./animations";

// Theme - export everything
export * from "./theme";

// Re-export commonly used utilities with clear names
export { combine, responsive, hoverGroup, focusVisible, zIndexClasses } from "./mixins";
export { varRef, varAssign, getThemeColor } from "./variables";
export { getThemeValue, getNestedThemeValue, createCSSVar, getCSSVar } from "./theme";
