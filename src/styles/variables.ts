/**
 * CSS Variables & Theme Variables
 *
 * Defines CSS custom properties and theme variables
 * for dynamic theming and consistency.
 */

// ============================================================================
// CSS Variable Names
// ============================================================================

export const cssVars = {
  // Colors
  colorPrimary: "--color-primary",
  colorAccent: "--color-accent",
  colorNavy: "--color-navy",
  colorNeutral: "--color-neutral",
  
  // Typography
  fontSans: "--font-sans",
  fontDisplay: "--font-display",
  
  // Spacing
  spacingUnit: "--spacing-unit",
  
  // Transitions
  transitionDefault: "--transition-default",
  transitionFast: "--transition-fast",
  transitionSlow: "--transition-slow",
  
  // Shadows
  shadowCard: "--shadow-card",
  shadowCardHover: "--shadow-card-hover",
  
  // Z-index
  zContent: "--z-content",
  zHeader: "--z-header",
  zModal: "--z-modal",
} as const;

// ============================================================================
// Theme Variable Values
// ============================================================================

export const themeValues = {
  colors: {
    primary: {
      DEFAULT: "#22d3ee",
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344",
    },
    accent: {
      DEFAULT: "#2dd4bf",
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e",
    },
    navy: {
      DEFAULT: "#0a1020",
      50: "#f0f4f8",
      100: "#d9e2ec",
      200: "#bcccdc",
      300: "#9fb3c8",
      400: "#829ab1",
      500: "#627d98",
      600: "#486581",
      700: "#334e68",
      800: "#243b53",
      900: "#0d1f3d",
      950: "#0a1020",
    },
    neutral: {
      DEFAULT: "#f8fafc",
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },
  },
  
  spacing: {
    unit: "0.25rem", // 4px base unit
    xs: "0.5rem",     // 8px
    sm: "1rem",       // 16px
    md: "1.5rem",     // 24px
    lg: "2rem",       // 32px
    xl: "3rem",       // 48px
    "2xl": "4rem",    // 64px
  },
  
  transitions: {
    default: "300ms ease-out",
    fast: "200ms ease-out",
    slow: "350ms ease-out",
  },
  
  shadows: {
    card: "0 16px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(34, 211, 238, 0.08)",
    cardHover: "0 16px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(34, 211, 238, 0.12)",
    glow: "0 0 0 1px rgba(34, 211, 238, 0.10)",
  },
  
  zIndex: {
    content: 10,
    header: 50,
    modal: 100,
  },
} as const;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Gets a CSS variable reference
 */
export const varRef = (varName: string): string => {
  return `var(${varName})`;
};

/**
 * Creates a CSS variable assignment
 */
export const varAssign = (varName: string, value: string): string => {
  return `${varName}: ${value};`;
};

/**
 * Gets a color value from theme
 */
export const getThemeColor = (
  palette: keyof typeof themeValues.colors,
  shade: string | number = "DEFAULT"
): string => {
  const colorPalette = themeValues.colors[palette];
  if (typeof colorPalette === "object" && shade in colorPalette) {
    return colorPalette[shade as keyof typeof colorPalette];
  }
  return colorPalette.DEFAULT || "";
};

/**
 * Gets a spacing value from theme
 */
export const getThemeSpacing = (size: keyof typeof themeValues.spacing): string => {
  return themeValues.spacing[size];
};

/**
 * Gets a transition value from theme
 */
export const getThemeTransition = (
  speed: keyof typeof themeValues.transitions
): string => {
  return themeValues.transitions[speed];
};
