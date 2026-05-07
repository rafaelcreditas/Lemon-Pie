/**
 * Lemon Pie Design System — React Native Theme Provider
 *
 * Provides light/dark mode support via React context.
 * Automatically follows the device color scheme, with manual override support.
 *
 * Usage:
 *   // App root
 *   import { LemonPieThemeProvider } from './tokens/theme';
 *   <LemonPieThemeProvider>
 *     <App />
 *   </LemonPieThemeProvider>
 *
 *   // Any component
 *   import { useTheme } from './tokens/theme';
 *   const { colors, colorScheme, toggleColorScheme } = useTheme();
 *   <View style={{ backgroundColor: colors.background.neutral.default }} />
 */

import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';
import { lightColors, darkColors, type ColorTokens } from './colors';

// ─── Types ──────────────────────────────────────────────────────────

type ColorScheme = 'light' | 'dark';

interface ThemeContextValue {
  /** Resolved semantic color tokens for the active mode */
  colors: ColorTokens;
  /** Current active color scheme */
  colorScheme: ColorScheme;
  /** Override the color scheme ('light' | 'dark' | null for system default) */
  setColorScheme: (scheme: ColorScheme | null) => void;
  /** Toggle between light and dark */
  toggleColorScheme: () => void;
}

// ─── Context ────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ─── Provider ───────────────────────────────────────────────────────

interface LemonPieThemeProviderProps {
  /** Force a specific color scheme (overrides device setting) */
  initialColorScheme?: ColorScheme | null;
  children: React.ReactNode;
}

export function LemonPieThemeProvider({
  initialColorScheme = null,
  children,
}: LemonPieThemeProviderProps) {
  const deviceScheme = useDeviceColorScheme();
  const [overrideScheme, setOverrideScheme] = useState<ColorScheme | null>(
    initialColorScheme,
  );

  const colorScheme: ColorScheme = overrideScheme ?? deviceScheme ?? 'light';
  const colors = useMemo(
    () => (colorScheme === 'dark' ? darkColors : lightColors),
    [colorScheme],
  );

  const toggleColorScheme = useCallback(() => {
    setOverrideScheme((prev) => {
      const current = prev ?? deviceScheme ?? 'light';
      return current === 'dark' ? 'light' : 'dark';
    });
  }, [deviceScheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      colors,
      colorScheme,
      setColorScheme: setOverrideScheme,
      toggleColorScheme,
    }),
    [colors, colorScheme, toggleColorScheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ─── Hook ───────────────────────────────────────────────────────────

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a <LemonPieThemeProvider>');
  }
  return context;
}

// ─── Convenience: direct color access without provider ──────────────

export function getColors(scheme: ColorScheme): ColorTokens {
  return scheme === 'dark' ? darkColors : lightColors;
}
