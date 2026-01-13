/**
 * Theme Configuration
 *
 * Central theme configuration that ties together all style presets,
 * variables, and design tokens for the portfolio.
 */

import { colors, backgroundGradient, cursorGlow } from "./presets";
import { themeValues } from "./variables";

// ============================================================================
// Theme Object
// ============================================================================

export const theme = {
  colors,
  background: {
    gradient: backgroundGradient,
    base: themeValues.colors.navy[950],
    surface: themeValues.colors.navy[900],
    card: "rgba(13, 31, 61, 0.2)", // navy-900/20
    chip: "rgba(11, 27, 58, 0.7)", // #0B1B3A/70
  },
  cursor: {
    glow: cursorGlow,
    size: {
      width: 1100,
      height: 1100,
    },
  },
  typography: {
    fonts: {
      sans: "var(--font-inter), system-ui, sans-serif",
      display: "var(--font-poppins), system-ui, sans-serif",
      mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace",
    },
    sizes: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px
      lg: "1.125rem",   // 18px
      xl: "1.25rem",    // 20px
      "2xl": "1.5rem",  // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem",  // 36px
      "5xl": "3rem",     // 48px
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  spacing: themeValues.spacing,
  borderRadius: {
    none: "0",
    sm: "0.125rem",   // 2px
    md: "0.375rem",   // 6px
    lg: "0.5rem",     // 8px
    xl: "0.75rem",    // 12px
    "2xl": "1rem",    // 16px
    full: "9999px",
  },
  shadows: themeValues.shadows,
  transitions: themeValues.transitions,
  zIndex: themeValues.zIndex,
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

// ============================================================================
// Theme Type Exports
// ============================================================================

export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography;

// ============================================================================
// Theme Utilities
// ============================================================================

/**
 * Gets a theme value by path
 */
export const getThemeValue = <T extends keyof Theme>(
  key: T
): Theme[T] => {
  return theme[key];
};

/**
 * Gets a nested theme value
 */
export const getNestedThemeValue = <
  T extends keyof Theme,
  K extends keyof Theme[T]
>(
  key: T,
  nestedKey: K
): Theme[T][K] => {
  return theme[key][nestedKey];
};

/**
 * Creates a CSS custom property string
 */
export const createCSSVar = (name: string, value: string): string => {
  return `--${name}: ${value};`;
};

/**
 * Gets a CSS custom property reference
 */
export const getCSSVar = (name: string): string => {
  return `var(--${name})`;
};
