/**
 * Switch — Lemon Pie Design System
 *
 * Sizes: default | sm
 * Types: Default | Box
 * Control Placement: Start | End
 *
 * Maps to Figma components "Switch" and "Switch Group"
 */

import React from 'react';
import {
  Pressable,
  View,
  Text,
  Animated,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type SwitchSize = 'default' | 'sm';
export type SwitchType = 'default' | 'box';
export type ControlPlacement = 'start' | 'end';

export interface SwitchProps {
  /** Whether the switch is on */
  value: boolean;
  /** Called when the value changes */
  onValueChange: (value: boolean) => void;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Size */
  size?: SwitchSize;
  /** Visual type */
  type?: SwitchType;
  /** Control position relative to label */
  controlPlacement?: ControlPlacement;
  /** Disabled state */
  disabled?: boolean;
  /** Invalid state */
  invalid?: boolean;
  /** Override style */
  style?: ViewStyle;
}

// ─── Component ──────────────────────────────────────────────────────

export function Switch({
  value,
  onValueChange,
  label,
  description,
  size = 'default',
  type = 'default',
  controlPlacement = 'start',
  disabled = false,
  invalid = false,
  style,
}: SwitchProps) {
  const { colors } = useTheme();

  const trackWidth = size === 'sm' ? 36 : 44;
  const trackHeight = size === 'sm' ? 20 : 24;
  const thumbSize = size === 'sm' ? 16 : 20;
  const thumbOffset = 2;

  const trackColor = value
    ? colors.action.branded.default
    : colors.background.secondary.default;

  const thumbTranslate = value
    ? trackWidth - thumbSize - thumbOffset * 2
    : 0;

  const controlElement = (
    <Pressable
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
      accessibilityRole="switch"
      accessibilityState={{ checked: value, disabled }}
      style={{
        width: trackWidth,
        height: trackHeight,
        borderRadius: trackHeight / 2,
        backgroundColor: trackColor,
        justifyContent: 'center',
        paddingHorizontal: thumbOffset,
        opacity: disabled ? 0.5 : 1,
        borderWidth: invalid ? 1 : 0,
        borderColor: invalid ? colors.action.negative.default : 'transparent',
      }}
    >
      <View
        style={{
          width: thumbSize,
          height: thumbSize,
          borderRadius: thumbSize / 2,
          backgroundColor: colors.surface.neutral.onColor,
          transform: [{ translateX: thumbTranslate }],
        }}
      />
    </Pressable>
  );

  if (!label && !description) return controlElement;

  const isBox = type === 'box';

  return (
    <Pressable
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
      style={[
        {
          flexDirection: controlPlacement === 'end' ? 'row' : 'row-reverse',
          alignItems: 'flex-start',
          gap: 12,
          opacity: disabled ? 0.5 : 1,
          ...(isBox
            ? {
                borderWidth: 1,
                borderColor: value
                  ? colors.action.branded.default
                  : colors.surface.neutral.default,
                borderRadius: 8,
                padding: 12,
              }
            : {}),
        },
        style,
      ]}
    >
      <View style={{ flex: 1 }}>
        {label && (
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: colors.text.neutral.high,
            }}
          >
            {label}
          </Text>
        )}
        {description && (
          <Text
            style={{
              fontSize: 13,
              color: colors.text.neutral.low,
              marginTop: 2,
            }}
          >
            {description}
          </Text>
        )}
      </View>
      {controlElement}
    </Pressable>
  );
}
