/**
 * Select — Lemon Pie Design System
 *
 * Sizes: default | sm
 * States: Default | Focus | Filled | Disabled | Invalid
 *
 * Maps to Figma component "Select"
 *
 * Note: Uses a Pressable trigger + modal/bottomsheet pattern
 * typical for React Native. Pair with a bottom sheet library
 * (e.g. @gorhom/bottom-sheet) for the dropdown options.
 */

import React, { forwardRef, useState } from 'react';
import { Pressable, View, Text, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type SelectSize = 'default' | 'sm';

export interface SelectProps {
  /** Placeholder text */
  placeholder?: string;
  /** Currently selected value label */
  value?: string;
  /** Called when the trigger is pressed (open your picker/bottom sheet) */
  onPress?: () => void;
  /** Size */
  size?: SelectSize;
  /** Disabled */
  disabled?: boolean;
  /** Invalid/error state */
  invalid?: boolean;
  /** Left icon */
  icon?: React.ReactNode;
  /** Override style */
  style?: ViewStyle;
}

// ─── Chevron ────────────────────────────────────────────────────────

function ChevronDown({ color }: { color: string }) {
  return (
    <Text style={{ fontSize: 12, color, transform: [{ rotate: '0deg' }] }}>
      ▼
    </Text>
  );
}

// ─── Component ──────────────────────────────────────────────────────

export const Select = forwardRef<View, SelectProps>(
  (
    {
      placeholder = 'Select...',
      value,
      onPress,
      size = 'default',
      disabled = false,
      invalid = false,
      icon,
      style,
    },
    ref,
  ) => {
    const { colors } = useTheme();
    const height = size === 'sm' ? 32 : 40;

    const borderColor = invalid
      ? colors.action.negative.default
      : colors.surface.neutral.default;

    return (
      <Pressable
        ref={ref}
        onPress={disabled ? undefined : onPress}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        style={[
          {
            height,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor,
            borderRadius: 8,
            backgroundColor: colors.surface.neutral.default,
            paddingHorizontal: 12,
            gap: 8,
            opacity: disabled ? 0.5 : 1,
          },
          style,
        ]}
      >
        {icon}
        <Text
          style={{
            flex: 1,
            fontSize: 14,
            color: value ? colors.text.neutral.high : colors.text.neutral.low,
          }}
          numberOfLines={1}
        >
          {value ?? placeholder}
        </Text>
        <ChevronDown color={colors.icon.neutral.low} />
      </Pressable>
    );
  },
);

Select.displayName = 'Select';
