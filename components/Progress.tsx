/**
 * Progress — Lemon Pie Design System
 *
 * Maps to Figma component "Progress"
 */

import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

export interface ProgressProps {
  /** Progress value 0–100 */
  value: number;
  /** Track height */
  height?: number;
  /** Override style */
  style?: ViewStyle;
}

export function Progress({ value, height = 6, style }: ProgressProps) {
  const { colors } = useTheme();
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <View
      style={[
        {
          height,
          borderRadius: height / 2,
          backgroundColor: colors.background.secondary.low,
          overflow: 'hidden',
        },
        style,
      ]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: clamped }}
    >
      <View
        style={{
          height: '100%',
          width: `${clamped}%`,
          backgroundColor: colors.action.branded.default,
          borderRadius: height / 2,
        }}
      />
    </View>
  );
}
