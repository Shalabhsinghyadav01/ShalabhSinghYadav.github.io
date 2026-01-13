/**
 * Style Mixins
 *
 * Reusable style mixins and utility functions for consistent styling
 * patterns across components.
 */

import { cn } from "./presets";

// ============================================================================
// Layout Mixins
// ============================================================================

/**
 * Creates a flex container with common patterns
 */
export const flex = {
  row: (gap: string = "gap-4") => cn("flex flex-row items-center", gap),
  col: (gap: string = "gap-4") => cn("flex flex-col", gap),
  center: "flex items-center justify-center",
  between: "flex items-center justify-between",
  start: "flex items-start",
  end: "flex items-end",
} as const;

/**
 * Grid layout patterns
 */
export const grid = {
  skills: "grid grid-cols-1 md:grid-cols-2 gap-8",
  technologies: "grid grid-cols-2 sm:grid-cols-3 gap-2",
  experience: "grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-6",
  projects: "grid gap-4 sm:grid-cols-[120px_1fr] sm:gap-6",
} as const;

// ============================================================================
// Text Mixins
// ============================================================================

/**
 * Text truncation utilities
 */
export const text = {
  truncate: "truncate",
  lineClamp: (lines: number) => `line-clamp-${lines}`,
  ellipsis: "overflow-hidden text-ellipsis whitespace-nowrap",
} as const;

/**
 * Text alignment
 */
export const align = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
} as const;

// ============================================================================
// Position Mixins
// ============================================================================

/**
 * Position utilities
 */
export const position = {
  fixed: "fixed",
  absolute: "absolute",
  relative: "relative",
  sticky: "sticky",
  static: "static",
} as const;

/**
 * Common positioning patterns
 */
export const positionPatterns = {
  center: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  topCenter: "absolute top-0 left-1/2 -translate-x-1/2",
  bottomCenter: "absolute bottom-0 left-1/2 -translate-x-1/2",
  fullScreen: "fixed inset-0",
} as const;

// ============================================================================
// Visibility Mixins
// ============================================================================

/**
 * Visibility utilities
 */
export const visibility = {
  hidden: "hidden",
  visible: "visible",
  srOnly: "sr-only",
  notSrOnly: "not-sr-only",
} as const;

/**
 * Responsive visibility
 */
export const responsiveVisibility = {
  hideMobile: "hidden sm:block",
  hideDesktop: "block sm:hidden",
  showOnHover: "opacity-0 group-hover:opacity-100 transition-opacity",
} as const;

// ============================================================================
// Interactive Mixins
// ============================================================================

/**
 * Hover states
 */
export const hover = {
  lift: "hover:-translate-y-1 transition-transform duration-300",
  scale: "hover:scale-105 transition-transform duration-300",
  brightness: "hover:brightness-110 transition-all duration-200",
  opacity: "hover:opacity-80 transition-opacity duration-200",
} as const;

/**
 * Focus states
 */
export const focus = {
  ring: "focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-navy-950",
  visible: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400",
  none: "focus:outline-none",
} as const;

/**
 * Active states
 */
export const active = {
  scale: "active:scale-95 transition-transform duration-150",
  opacity: "active:opacity-70 transition-opacity duration-150",
} as const;

// ============================================================================
// Animation Mixins
// ============================================================================

/**
 * Animation utilities
 */
export const animation = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  slideDown: "animate-slide-down",
  spin: "animate-spin",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
} as const;

/**
 * Transition utilities
 */
export const transition = {
  all: "transition-all duration-300 ease-out",
  colors: "transition-colors duration-200",
  transform: "transition-transform duration-300 ease-out",
  opacity: "transition-opacity duration-250 ease",
  fast: "transition-all duration-200 ease-out",
  slow: "transition-all duration-350 ease-out",
} as const;

// ============================================================================
// Spacing Mixins
// ============================================================================

/**
 * Padding utilities
 */
export const padding = {
  none: "p-0",
  xs: "p-2",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-12",
  section: "py-16 sm:py-24",
  card: "p-5 sm:p-6",
} as const;

/**
 * Margin utilities
 */
export const margin = {
  none: "m-0",
  auto: "mx-auto",
  section: "mb-12",
  card: "mb-6",
} as const;

// ============================================================================
// Border Mixins
// ============================================================================

/**
 * Border utilities
 */
export const border = {
  none: "border-0",
  default: "border border-white/[0.06]",
  hover: "border border-primary-400/25",
  active: "border border-primary-300/35",
  chip: "border border-primary-400/25",
} as const;

/**
 * Border radius
 */
export const rounded = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
} as const;

// ============================================================================
// Shadow Mixins
// ============================================================================

/**
 * Shadow utilities
 */
export const shadow = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  card: "shadow-[0_16px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(34,211,238,0.08)]",
  glow: "shadow-[0_0_0_1px_rgba(34,211,238,0.10)]",
} as const;

// ============================================================================
// Background Mixins
// ============================================================================

/**
 * Background utilities
 */
export const background = {
  transparent: "bg-transparent",
  subtle: "bg-white/[0.02]",
  hover: "bg-white/[0.04]",
  card: "bg-navy-900/20",
  chip: "bg-[#0B1B3A]/70",
  chipHover: "bg-[#0B1B3A]/90",
} as const;

// ============================================================================
// Z-Index Mixins
// ============================================================================

/**
 * Z-index layers (class names)
 */
export const zIndexClasses = {
  base: "z-0",
  content: "z-10",
  header: "z-50",
  modal: "z-100",
  tooltip: "z-1000",
} as const;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Creates a responsive class string
 */
export const responsive = (
  mobile: string,
  tablet: string = "",
  desktop: string = ""
): string => {
  return cn(mobile, tablet && `sm:${tablet}`, desktop && `md:${desktop}`);
};

/**
 * Creates a hover group class
 */
export const hoverGroup = (base: string, hover: string): string => {
  return cn("group", base, `group-hover:${hover}`);
};

/**
 * Creates a focus-visible class
 */
export const focusVisible = (base: string, focus: string): string => {
  return cn(base, `focus-visible:${focus}`);
};

/**
 * Combines multiple mixin patterns
 */
export const combine = (...patterns: (string | undefined | null | false)[]): string => {
  return cn(...patterns);
};
