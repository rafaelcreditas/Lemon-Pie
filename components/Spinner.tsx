/**
 * Spinner — Lemon Pie Design System
 *
 * Sizes: 3 (12) | 4 (16) | 5 (20) | 6 (24) | 8 (32)
 *
 * Maps to Figma component "Spinner"
 */

import React from 'react';
import { ActivityIndicator, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

export type SpinnerSize = '3' | '4' | '5' | '6' | '8';

export interface SpinnerProps {
  /** Size preset (maps to Figma variant) */
  size?: SpinnerSize;
  /** Custom color override */
  color?: string;
  /** Override style */
  style?: ViewStyle;
}

const SIZE_MAP: Record<SpinnerSize, number> = {
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 24,
  '8': 32,
};

export function Spinner({ size = '6', color, style }: SpinnerProps) {
  const { colors } = useTheme();

  return (
    <ActivityIndicator
      size={SIZE_MAP[size] >= 24 ? 'large' : 'small'}
      color={color ?? colors.action.branded.default}
      style={style}
    />
  );
}
