/**
 * Toggle — Lemon Pie Design System
 *
 * Variants: Default | Outline
 * Sizes: Default | sm | lg
 *
 * Maps to Figma components "Toggle" and "Toggle Group"
 */

import React from 'react';
import { Pressable, View, Text, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type ToggleVariant = 'default' | 'outline';
export type ToggleSize = 'default' | 'sm' | 'lg';

export interface ToggleProps {
  /** Whether the toggle is pressed/active */
  pressed: boolean;
  /** Called when pressed state changes */
  onPressedChange: (pressed: boolean) => void;
  /** Label text */
  label?: string;
  /** Icon element */
  icon?: React.ReactNode;
  /** Visual variant */
  variant?: ToggleVariant;
  /** Size */
  size?: ToggleSize;
  /** Disabled */
  disabled?: boolean;
  /** Override style */
  style?: ViewStyle;
}

export interface ToggleGroupProps {
  /** Toggle elements */
  children: React.ReactNode;
  /** Override style */
  style?: ViewStyle;
}

// ─── Components ─────────────────────────────────────────────────────

const SIZES: Record<ToggleSize, { height: number; px: number; fontSize: number }> = {
  sm: { height: 32, px: 8, fontSize: 13 },
  default: { height: 40, px: 12, fontSize: 14 },
  lg: { height: 48, px: 16, fontSize: 15 },
};

export function Toggle({
  pressed,
  onPressedChange,
  label,
  icon,
  variant = 'default',
  size = 'default',
  disabled = false,
  style,
}: ToggleProps) {
  const { colors } = useTheme();
  const s = SIZES[size];

  return (
    <Pressable
      onPress={() => !disabled && onPressedChange(!pressed)}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ selected: pressed, disabled }}
      style={[
        {
          height: s.height,
          paddingHorizontal: s.px,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          opacity: disabled ? 0.5 : 1,
          backgroundColor: pressed
            ? colors.background.secondary.default
            : 'transparent',
          ...(variant === 'outline'
            ? {
                borderWidth: 1,
                borderColor: pressed
                  ? colors.action.branded.default
                  : colors.surface.neutral.default,
              }
            : {}),
        },
        style,
      ]}
    >
      {icon}
      {label && (
        <Text
          style={{
            fontSize: s.fontSize,
            fontWeight: pressed ? '600' : '400',
            color: pressed
              ? colors.text.neutral.high
              : colors.text.neutral.default,
          }}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}

export function ToggleGroup({ children, style }: ToggleGroupProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: colors.surface.neutral.low,
          borderRadius: 8,
          overflow: 'hidden',
          gap: 1,
          backgroundColor: colors.surface.neutral.low,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
