/**
 * Style Presets
 *
 * Centralized style constants and presets for consistent theming
 * across the portfolio application.
 */

// ============================================================================
// Colors
// ============================================================================

export const colors = {
  primary: {
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
} as const;

// ============================================================================
// Background (deeper navy, smooth blend)
// ============================================================================

export const backgroundGradient =
  "radial-gradient(1200px circle at 20% 10%, rgba(34, 211, 238, 0.05), transparent 60%)," +
  "linear-gradient(135deg, #0a1020 0%, #081126 45%, #081838 100%)";

// ============================================================================
// Cursor glow (reduced + blended)
// ============================================================================

export const cursorGlow = {
  // softer & more ambient
  inner: "rgba(34, 211, 238, 0.045)",
  mid: "rgba(59, 130, 246, 0.02)",
  outer: "transparent",
  // bigger radius = smoother falloff
  radiusPx: 1100,
} as const;

// ============================================================================
// Spacing & Sizing
// ============================================================================

export const spacing = {
  section: {
    padding: "py-16 sm:py-24",
    gap: "space-y-4",
  },
  card: {
    padding: "p-5 sm:p-6",
    gap: "gap-6",
  },
  chip: {
    padding: "px-3 py-1",
    gap: "gap-2",
  },
} as const;

export const sizing = {
  cursorGlow: {
    width: 1100,
    height: 1100,
  },
  sidebar: {
    width: "w-80",
  },
  container: {
    maxWidth: "max-w-5xl",
  },
} as const;

// ============================================================================
// Transitions & Animations
// ============================================================================

export const transitions = {
  default: "transition-all duration-300 ease-out",
  fast: "transition-all duration-200 ease-out",
  slow: "transition-all duration-350 ease-out",
  colors: "transition-colors duration-200",
  opacity: "transition-opacity duration-250 ease",
  transform: "transition-transform duration-300 ease-out",
} as const;

export const animations = {
  fadeIn: "fadeIn 0.6s ease-in-out",
  slideUp: "slideUp 0.6s ease-out",
  slideDown: "slideDown 0.6s ease-out",
} as const;

// ============================================================================
// Border & Radius (subtle blend by default)
// ============================================================================

export const borders = {
  // NO borders by default - completely invisible
  default: "border-0",
  // Only show border on hover (very subtle)
  hover: "border-0",
  active: "border-0",

  // chips - no borders by default
  chip: "border-0",
  chipHover: "border border-primary-400/30",
} as const;

export const radius = {
  // closer to screenshot feel (more rounded than lg)
  card: "rounded-2xl",
  chip: "rounded-full",
  button: "rounded-xl",
} as const;

// ============================================================================
// Opacity
// ============================================================================

export const opacity = {
  dimmed: 0.55, // sibling dimming
  subtle: 0.18,
  medium: 0.4,
  strong: 0.65,
  full: 1.0,
} as const;

// ============================================================================
// Shadows (tasteful)
// ============================================================================

export const shadows = {
  // default: essentially none (blend)
  card: "shadow-none",
  // hover: pop without looking “boxy”
  cardHover:
    "shadow-[0_16px_40px_rgba(0,0,0,0.45),0_0_0_1px_rgba(34,211,238,0.08)]",
  glowRing: "shadow-[0_0_0_1px_rgba(34,211,238,0.10)]",
} as const;

// ============================================================================
// Blend Card Presets (BLEND DEFAULT -> POP ON HOVER)
// ============================================================================

export const blendCard = {
  base:
    "group relative " +
    radius.card +
    " " +
    borders.default +
    " bg-transparent " +
    transitions.default +
    " motion-reduce:transform-none motion-reduce:transition-none",

  // Use on the same element as base (adds hover/focus pop - NO BORDERS)
  interactive:
    "hover:-translate-y-1 hover:bg-white/[0.03] " +
    "focus-within:-translate-y-1 focus-within:bg-white/[0.03]",

  // Optional premium sheen (very subtle)
  sheen:
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl " +
    "before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent " +
    "before:opacity-0 before:transition-opacity before:duration-300 " +
    "hover:before:opacity-100 focus-within:before:opacity-100",

  padding: spacing.card.padding,

  // For sibling dimming when one item is active
  dimmed: "opacity-[0.55] transition-opacity duration-300",
  active: "opacity-100",
} as const;

// ============================================================================
// Chip/Pill Presets (MATCH SCREENSHOT)
// ============================================================================

export const chip = {
  base:
    "inline-flex items-center " +
    radius.chip +
    " " +
    spacing.chip.padding +
    " text-xs font-medium " +
    "bg-transparent text-primary-400 " +
    borders.chip +
    " " +
    transitions.colors,

  hover: "hover:bg-white/[0.05] hover:border-primary-400/30",

  wrap: "mt-4 flex flex-wrap gap-2",
} as const;

// ============================================================================
// Typography
// ============================================================================

export const typography = {
  heading: {
    h1: "text-4xl sm:text-5xl font-display font-bold tracking-tight",
    h2: "text-2xl sm:text-3xl font-display font-semibold tracking-tight",
    h3: "text-xl sm:text-2xl font-display font-semibold tracking-tight",
    section: "text-3xl sm:text-4xl font-display font-bold tracking-tight",
  },
  body: {
    base: "text-sm sm:text-base",
    small: "text-sm",
    large: "text-lg",
    leading: "leading-relaxed",
  },
  mono: {
    sectionNumber: "font-mono text-sm tracking-widest text-primary-200/70",
    date: "font-mono text-xs tracking-widest text-slate-300/60",
  },
} as const;

// ============================================================================
// Layout
// ============================================================================

export const layout = {
  grid: {
    skills: "grid grid-cols-1 md:grid-cols-2 gap-8",
    technologies: "grid grid-cols-2 sm:grid-cols-3 gap-2",
  },
  flex: {
    row: "flex flex-row items-center gap-4",
    col: "flex flex-col gap-4",
    between: "flex items-center justify-between",
  },
  // Experience/projects row layout like screenshot
  experienceRow: "grid gap-4 sm:grid-cols-[140px_1fr] sm:gap-6",
  projectRow: "grid gap-4 sm:grid-cols-[120px_1fr] sm:gap-6",
} as const;

// ============================================================================
// Z-Index Layers
// ============================================================================

export const zIndex = {
  cursorGlow: 0,
  content: 10,
  header: 50,
  modal: 100,
} as const;

// ============================================================================
// Breakpoints (matching Tailwind)
// ============================================================================

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Combines multiple class strings, filtering out empty values
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Gets a color value from the color palette
 */
export const getColor = (
  palette: keyof typeof colors,
  shade: string | number
): string => {
  const colorPalette = colors[palette];
  if (typeof colorPalette === "object" && shade in colorPalette) {
    return colorPalette[shade as keyof typeof colorPalette];
  }
  return "";
};

/**
 * Creates a gradient string for backgrounds
 */
export const createGradient = (
  direction: string,
  stops: Array<{ color: string; position: string }>
): string => {
  const stopStrings = stops.map((stop) => `${stop.color} ${stop.position}`);
  return `linear-gradient(${direction}, ${stopStrings.join(", ")})`;
};

// ============================================================================
// Type Exports
// ============================================================================

export type ColorPalette = keyof typeof colors;
export type ColorShade = string | number;
export type TransitionPreset = keyof typeof transitions;
export type TypographyPreset =
  | keyof typeof typography.heading
  | keyof typeof typography.body;