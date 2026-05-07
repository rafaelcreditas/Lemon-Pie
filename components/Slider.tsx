/**
 * Slider — Lemon Pie Design System
 *
 * Range: single value or two-thumb range
 *
 * Maps to Figma component "Slider"
 *
 * Note: React Native doesn't have a native slider with range support.
 * This component wraps the basic @react-native-community/slider for single
 * values. For range sliders, consider react-native-range-slider-expo
 * or a custom gesture-based implementation.
 */

import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export interface SliderProps {
  /** Current value (0–1) */
  value: number;
  /** Called when value changes */
  onValueChange: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Disabled */
  disabled?: boolean;
  /** Override style */
  style?: ViewStyle;
}

// ─── Component ──────────────────────────────────────────────────────

/**
 * Basic slider visualization. In production, replace the track+thumb
 * rendering with `@react-native-community/slider` or a gesture-based
 * implementation for proper drag support.
 */
export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 1,
  step,
  disabled = false,
  style,
}: SliderProps) {
  const { colors } = useTheme();
  const pct = ((value - min) / (max - min)) * 100;
  const thumbSize = 20;

  return (
    <View
      style={[
        {
          height: 40,
          justifyContent: 'center',
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      accessibilityRole="adjustable"
      accessibilityValue={{ min, max, now: value }}
    >
      {/* Track */}
      <View
        style={{
          height: 4,
          borderRadius: 2,
          backgroundColor: colors.background.secondary.low,
        }}
      >
        {/* Filled track */}
        <View
          style={{
            height: '100%',
            width: `${pct}%`,
            backgroundColor: colors.action.branded.default,
            borderRadius: 2,
          }}
        />
      </View>

      {/* Thumb */}
      <View
        style={{
          position: 'absolute',
          left: `${pct}%`,
          marginLeft: -(thumbSize / 2),
          width: thumbSize,
          height: thumbSize,
          borderRadius: thumbSize / 2,
          backgroundColor: colors.surface.neutral.onColor,
          borderWidth: 2,
          borderColor: colors.action.branded.default,
          elevation: 2,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.15,
          shadowRadius: 2,
        }}
      />
    </View>
  );
}
