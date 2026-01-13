# Styles Directory

This directory contains the centralized style system for the portfolio, organized similar to professional portfolio projects like [Brittany Chiang's v4](https://github.com/bchiang7/v4).

## Structure

```
src/styles/
├── index.ts          # Main export file - import from here
├── presets.ts        # Style presets, constants, and utilities
├── mixins.ts         # Reusable style mixins and patterns
├── variables.ts      # CSS variables and theme values
├── animations.ts     # Animation keyframes and utilities
└── theme.ts          # Complete theme configuration
```

## Usage

### Import from Index

```typescript
// Import everything you need from the main index
import { 
  blendCard, 
  chip, 
  colors, 
  transitions,
  cn,
  flex,
  hover,
  focus
} from '@/src/styles';
```

### Using Presets

```typescript
import { blendCard, chip, transitions } from '@/src/styles';

// Use blend card classes
<div className={cn(blendCard.base, blendCard.interactive, blendCard.padding)}>
  Content
</div>

// Use chip styling
<span className={cn(chip.base, chip.hover)}>
  Technology
</span>
```

### Using Mixins

```typescript
import { flex, grid, hover, focus } from '@/src/styles';

// Layout mixins
<div className={flex.row()}>
<div className={grid.experience}>

// Interactive states
<button className={cn(hover.lift, focus.ring)}>
```

### Using Theme

```typescript
import { theme, getThemeColor } from '@/src/styles';

// Access theme values
const primaryColor = getThemeColor('primary', 400);
const spacing = theme.spacing.md;
```

## Files Overview

### `presets.ts`
- Color palettes (primary, accent, navy, neutral)
- Background gradients
- Cursor glow configuration
- Spacing and sizing constants
- Transitions and animations
- Border and radius presets
- Blend card presets
- Chip/pill presets
- Typography scales
- Layout patterns
- Utility functions (`cn`, `getColor`, `createGradient`)

### `mixins.ts`
- Layout mixins (flex, grid patterns)
- Text utilities (truncate, alignment)
- Position utilities
- Visibility controls
- Interactive states (hover, focus, active)
- Animation and transition mixins
- Spacing utilities
- Border and shadow mixins
- Background utilities
- Z-index layers
- Helper functions (`responsive`, `hoverGroup`, `focusVisible`, `combine`)

### `variables.ts`
- CSS variable names
- Theme variable values
- Helper functions for CSS variables
- Theme value getters

### `animations.ts`
- Animation keyframes definitions
- Animation presets
- Animation utility functions
- Reduced motion support
- Scroll animation options

### `theme.ts`
- Complete theme configuration
- Typography system
- Color system
- Spacing system
- Shadow system
- Transition system
- Breakpoint system
- Theme utility functions

## Best Practices

1. **Always import from `index.ts`** for clean imports
2. **Use `cn()` utility** for combining class names
3. **Leverage presets** instead of writing custom classes
4. **Use mixins** for common patterns
5. **Respect reduced motion** preferences
6. **Follow the blend → pop pattern** for cards

## Examples

### Creating a Blend Card

```typescript
import { blendCard, cn } from '@/src/styles';

<div className={cn(blendCard.base, blendCard.interactive, blendCard.padding)}>
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Creating a Chip

```typescript
import { chip, cn } from '@/src/styles';

<span className={cn(chip.base, chip.hover)}>
  React
</span>
```

### Using Layout Mixins

```typescript
import { flex, grid } from '@/src/styles';

<div className={flex.row('gap-6')}>
<div className={grid.experience}>
```

### Responsive Utilities

```typescript
import { responsive } from '@/src/styles';

<div className={responsive('text-sm', 'text-base', 'text-lg')}>
```

## Color System

The color system uses a consistent scale (50-950) for all palettes:
- `primary`: Cyan/teal colors for accents
- `accent`: Teal colors for highlights
- `navy`: Deep navy for backgrounds
- `neutral`: Grays for text and borders

## Typography

Typography is organized by:
- **Headings**: Display font (Poppins) with tracking
- **Body**: Sans font (Inter) with relaxed leading
- **Mono**: Monospace for numbers and code

## Spacing

Uses a consistent 4px base unit:
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

## Transitions

Standard transition durations:
- fast: 200ms
- default: 300ms
- slow: 350ms

All transitions respect `prefers-reduced-motion`.
