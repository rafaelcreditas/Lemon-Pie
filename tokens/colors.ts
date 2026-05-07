/**
 * Lemon Pie Design System — Color Tokens
 *
 * Auto-generated from Figma "🎨 colorTheme" collection (Lemon Pie DS)
 * 138 semantic color tokens × 2 modes (light / dark)
 *
 * Usage:
 *   import { lightColors, darkColors, ColorTokens } from './colors';
 *   const theme = colorScheme === 'dark' ? darkColors : lightColors;
 *   <View style={{ backgroundColor: theme.background.neutral.default }} />
 */

// ─── Flat token map (Figma path → hex) ──────────────────────────────

export const lightColors = {
  // ── Action ──
  action: {
    neutral: {
      veryHigh: '#101715',
      high: '#1c2422',
      default: '#3a4340',
      low: '#a8b2af',
      veryLow: '#e8eceb',
      onColor: '#101715',
    },
    branded: {
      high: '#4e7800',
      default: '#81c700',
      low: '#cbee8a',
      onColor: '#f4fbe6',
    },
    positive: {
      high: '#2b5700',
      default: '#4f9e00',
      low: '#c8e1b0',
      onColor: '#edf5e6',
    },
    negative: {
      high: '#7a1d25',
      default: '#de3543',
      low: '#f0a2a9',
      onColor: '#fcebec',
    },
    warning: {
      high: '#8c7419',
      default: '#ffd22e',
      low: '#ffea9f',
      onColor: '#fffbea',
    },
    information: {
      high: '#174654',
      default: '#298099',
      low: '#9dc5d0',
      onColor: '#eaf2f5',
    },
  },

  // ── Background ──
  background: {
    neutral: {
      high: '#f2f4f3',
      default: '#ffffff',
      low: '#e8eceb',
    },
    branded: {
      high: '#4e7800',
      default: '#8edb00',
      low: '#cbee8a',
      onColor: '#f4fbe6',
    },
    secondary: {
      high: '#7a8682',
      default: '#a8b2af',
      low: '#d4dad8',
    },
    modal: {
      default: '#000000a6',
    },
  },

  // ── Surface ──
  surface: {
    neutral: {
      high: '#7a8682',
      default: '#ffffff',
      low: '#e8eceb',
      onColor: '#f2f4f3',
    },
    branded: {
      high: '#4e7800',
      default: '#8edb00',
      low: '#cbee8a',
      onColor: '#f4fbe6',
    },
    positive: {
      high: '#2b5700',
      default: '#4f9e00',
      low: '#c8e1b0',
      onColor: '#edf5e6',
    },
    negative: {
      high: '#7a1d25',
      default: '#de3543',
      low: '#f0a2a9',
      onColor: '#fcebec',
    },
    warning: {
      high: '#8c7419',
      default: '#ffd22e',
      low: '#ffea9f',
      onColor: '#fffbea',
    },
    information: {
      high: '#174654',
      default: '#298099',
      low: '#9dc5d0',
      onColor: '#eaf2f5',
    },
  },

  // ── Text ──
  text: {
    neutral: {
      veryHigh: '#101715',
      high: '#1c2422',
      default: '#3a4340',
      low: '#525c59',
      veryLow: '#a8b2af',
      onColor: '#101715',
    },
    branded: {
      high: '#4e7800',
      default: '#81c700',
      low: '#cbee8a',
      onColor: '#f4fbe6',
    },
    positive: {
      high: '#2b5700',
      default: '#4f9e00',
      low: '#aed28a',
      onColor: '#edf5e6',
    },
    negative: {
      high: '#7a1d25',
      default: '#de3543',
      low: '#f0a2a9',
      onColor: '#fcebec',
    },
    warning: {
      high: '#8c7419',
      default: '#e8bf2a',
      low: '#ffea9f',
      onColor: '#fffbea',
    },
    information: {
      high: '#174654',
      default: '#298099',
      low: '#9dc5d0',
      onColor: '#eaf2f5',
    },
  },

  // ── Icon ──
  icon: {
    neutral: {
      veryHigh: '#101715',
      high: '#1c2422',
      default: '#3a4340',
      low: '#7a8682',
      veryLow: '#d4dad8',
      onColor: '#101715',
    },
    branded: {
      high: '#4e7800',
      default: '#81c700',
      low: '#cbee8a',
      onColor: '#f4fbe6',
    },
    positive: {
      high: '#2b5700',
      default: '#4f9e00',
      low: '#aed28a',
      onColor: '#edf5e6',
    },
    negative: {
      high: '#7a1d25',
      default: '#de3543',
      low: '#f0a2a9',
      onColor: '#fcebec',
    },
    warning: {
      high: '#8c7419',
      default: '#ffd22e',
      low: '#ffea9f',
      onColor: '#fffbea',
    },
    information: {
      high: '#174654',
      default: '#298099',
      low: '#9dc5d0',
      onColor: '#eaf2f5',
    },
  },

  // ── Decorative ──
  decorative: {
    graphs: {
      graph1: { high: '#214200', default: '#72b133', low: '#edf5e6' },
      graph2: { high: '#68351a', default: '#f99964', low: '#fef2ec' },
      graph3: { high: '#5c2d44', default: '#e389b4', low: '#fcf0f6' },
      graph4: { high: '#113640', default: '#5499ad', low: '#eaf2f5' },
      graph5: { high: '#6b5813', default: '#ffdb58', low: '#fffbea' },
      graph6: { high: '#5d161c', default: '#e55d69', low: '#fcebec' },
    },
    avatar: {
      high: '#7a8682',
      default: '#d4dad8',
      low: '#e8eceb',
      onColor: '#1c2422',
    },
  },
} as const;

export const darkColors = {
  // ── Action ──
  action: {
    neutral: {
      veryHigh: '#ffffff',
      high: '#ffffff',
      default: '#d4dad8',
      low: '#7a8682',
      veryLow: '#3a4340',
      onColor: '#101715',
    },
    branded: {
      high: '#cbee8a',
      default: '#b3e754',
      low: '#8edb00',
      onColor: '#3c5c00',
    },
    positive: {
      high: '#89be54',
      default: '#4f9e00',
      low: '#387000',
      onColor: '#edf5e6',
    },
    negative: {
      high: '#e97881',
      default: '#de3543',
      low: '#9e2630',
      onColor: '#fcebec',
    },
    warning: {
      high: '#ffe173',
      default: '#ffd22e',
      low: '#b59521',
      onColor: '#fffbea',
    },
    information: {
      high: '#70aabb',
      default: '#298099',
      low: '#1d5b6d',
      onColor: '#eaf2f5',
    },
  },

  // ── Background ──
  background: {
    neutral: {
      high: '#101715',
      default: '#101715',
      low: '#101715',
    },
    branded: {
      high: '#cbee8a',
      default: '#b3e754',
      low: '#8edb00',
      onColor: '#3c5c00',
    },
    secondary: {
      high: '#525c59',
      default: '#7a8682',
      low: '#a8b2af',
    },
    modal: {
      default: '#000000a6',
    },
  },

  // ── Surface ──
  surface: {
    neutral: {
      high: '#3a4340',
      default: '#1c2422',
      low: '#3a4340',
      onColor: '#ffffff',
    },
    branded: {
      high: '#cbee8a',
      default: '#b3e754',
      low: '#8edb00',
      onColor: '#3c5c00',
    },
    positive: {
      high: '#387000',
      default: '#489000',
      low: '#214200',
      onColor: '#c8e1b0',
    },
    negative: {
      high: '#9e2630',
      default: '#ca303d',
      low: '#5d161c',
      onColor: '#f5c0c5',
    },
    warning: {
      high: '#b59521',
      default: '#b59521',
      low: '#8c7419',
      onColor: '#fff1be',
    },
    information: {
      high: '#70aabb',
      default: '#25748b',
      low: '#113640',
      onColor: '#bdd8df',
    },
  },

  // ── Text ──
  text: {
    neutral: {
      veryHigh: '#ffffff',
      high: '#ffffff',
      default: '#d4dad8',
      low: '#a8b2af',
      veryLow: '#7a8682',
      onColor: '#101715',
    },
    branded: {
      high: '#cbee8a',
      default: '#b3e754',
      low: '#a5e233',
      onColor: '#3c5c00',
    },
    positive: {
      high: '#aed28a',
      default: '#89be54',
      low: '#c8e1b0',
      onColor: '#c8e1b0',
    },
    negative: {
      high: '#f0a2a9',
      default: '#e97881',
      low: '#f5c0c5',
      onColor: '#f5c0c5',
    },
    warning: {
      high: '#ffea9f',
      default: '#ffe173',
      low: '#fff1be',
      onColor: '#6b5813',
    },
    information: {
      high: '#70aabb',
      default: '#70aabb',
      low: '#113640',
      onColor: '#9dc5d0',
    },
  },

  // ── Icon ──
  icon: {
    neutral: {
      veryHigh: '#ffffff',
      high: '#ffffff',
      default: '#d4dad8',
      low: '#a8b2af',
      veryLow: '#7a8682',
      onColor: '#101715',
    },
    branded: {
      high: '#dcf4b0',
      default: '#cbee8a',
      low: '#b3e754',
      onColor: '#3c5c00',
    },
    positive: {
      high: '#aed28a',
      default: '#72b133',
      low: '#489000',
      onColor: '#edf5e6',
    },
    negative: {
      high: '#f0a2a9',
      default: '#e55d69',
      low: '#ca303d',
      onColor: '#fcebec',
    },
    warning: {
      high: '#ffea9f',
      default: '#ffdb58',
      low: '#e8bf2a',
      onColor: '#fffbea',
    },
    information: {
      high: '#70aabb',
      default: '#25748b',
      low: '#113640',
      onColor: '#9dc5d0',
    },
  },

  // ── Decorative ──
  decorative: {
    graphs: {
      graph1: { high: '#edf5e6', default: '#72b133', low: '#214200' },
      graph2: { high: '#fef2ec', default: '#f99964', low: '#68351a' },
      graph3: { high: '#fcf0f6', default: '#e389b4', low: '#5c2d44' },
      graph4: { high: '#eaf2f5', default: '#5499ad', low: '#113640' },
      graph5: { high: '#fffbea', default: '#ffdb58', low: '#6b5813' },
      graph6: { high: '#fcebec', default: '#e55d69', low: '#5d161c' },
    },
    avatar: {
      high: '#7a8682',
      default: '#525c59',
      low: '#3a4340',
      onColor: '#ffffff',
    },
  },
} as const;

// ─── Type definitions ───────────────────────────────────────────────

/** Deep-extract the shape of the color object for type-safe access */
export type ColorTokens = typeof lightColors;

/** Utility: flattened union of all leaf token paths (dot notation) */
type Leaves<T, P extends string = ''> = T extends string
  ? P
  : { [K in keyof T]: Leaves<T[K], P extends '' ? `${K & string}` : `${P}.${K & string}`> }[keyof T];

export type ColorTokenPath = Leaves<ColorTokens>;
