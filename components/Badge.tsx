/**
 * Badge — Lemon Pie Design System
 *
 * Variants: Default | Secondary | Outline | Destructive | Verified | Ghost
 * Maps to Figma component "Badge" and "Badge Number"
 */

import React from 'react';
import { View, Text, type ViewStyle, type TextStyle } from 'react-native';
import { useTheme } from '../tokens/theme';
import type { ColorTokens } from '../tokens/colors';

// ─── Types ──────────────────────────────────────────────────────────

export type BadgeVariant =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'destructive'
  | 'verified'
  | 'ghost';

export interface BadgeProps {
  /** Badge label */
  children: string;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
  /** Override container style */
  style?: ViewStyle;
  /** Override text style */
  textStyle?: TextStyle;
}

export interface BadgeNumberProps {
  /** Numeric value */
  count: number;
  /** Max value — shows "99+" if exceeded */
  max?: number;
  /** Visual variant */
  variant?: Exclude<BadgeVariant, 'verified'>;
  /** Override style */
  style?: ViewStyle;
}

// ─── Helpers ────────────────────────────────────────────────────────

function getVariantStyles(
  variant: BadgeVariant,
  colors: ColorTokens,
): { container: ViewStyle; text: TextStyle } {
  const map: Record<BadgeVariant, { container: ViewStyle; text: TextStyle }> = {
    default: {
      container: { backgroundColor: colors.action.branded.default },
      text: { color: colors.action.branded.onColor },
    },
    secondary: {
      container: { backgroundColor: colors.background.secondary.default },
      text: { color: colors.text.neutral.high },
    },
    outline: {
      container: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.surface.neutral.default,
      },
      text: { color: colors.text.neutral.high },
    },
    destructive: {
      container: { backgroundColor: colors.action.negative.default },
      text: { color: colors.action.negative.onColor },
    },
    verified: {
      container: { backgroundColor: colors.action.positive.default },
      text: { color: colors.action.positive.onColor },
    },
    ghost: {
      container: { backgroundColor: 'transparent' },
      text: { color: colors.text.neutral.default },
    },
  };
  return map[variant];
}

// ─── Components ─────────────────────────────────────────────────────

export function Badge({
  children,
  variant = 'default',
  leftIcon,
  rightIcon,
  style,
  textStyle,
}: BadgeProps) {
  const { colors } = useTheme();
  const styles = getVariantStyles(variant, colors);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 999,
          gap: 4,
        },
        styles.container,
        style,
      ]}
    >
      {leftIcon}
      <Text
        style={[{ fontSize: 12, fontWeight: '600' }, styles.text, textStyle]}
      >
        {children}
      </Text>
      {rightIcon}
    </View>
  );
}

export function BadgeNumber({
  count,
  max = 99,
  variant = 'default',
  style,
}: BadgeNumberProps) {
  const { colors } = useTheme();
  const styles = getVariantStyles(variant, colors);
  const label = count > max ? `${max}+` : String(count);

  return (
    <View
      style={[
        {
          minWidth: 20,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 6,
          borderRadius: 999,
        },
        styles.container,
        style,
      ]}
    >
      <Text style={[{ fontSize: 11, fontWeight: '700' }, styles.text]}>
        {label}
      </Text>
    </View>
  );
}
