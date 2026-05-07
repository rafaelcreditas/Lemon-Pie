/**
 * RadioButton — Lemon Pie Design System
 *
 * Types: Default | Box
 * Control Placement: Start | End
 *
 * Maps to Figma components "RadioButton" and "Radio Group"
 */

import React from 'react';
import { Pressable, View, Text, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type RadioType = 'default' | 'box';
export type ControlPlacement = 'start' | 'end';

export interface RadioButtonProps {
  /** Whether this radio is selected */
  selected: boolean;
  /** Called when pressed */
  onPress: () => void;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Visual type */
  type?: RadioType;
  /** Control position */
  controlPlacement?: ControlPlacement;
  /** Disabled */
  disabled?: boolean;
  /** Invalid state */
  invalid?: boolean;
  /** Override style */
  style?: ViewStyle;
}

export interface RadioGroupProps {
  /** RadioButton elements */
  children: React.ReactNode;
  /** Override style */
  style?: ViewStyle;
}

// ─── Components ─────────────────────────────────────────────────────

export function RadioButton({
  selected,
  onPress,
  label,
  description,
  type = 'default',
  controlPlacement = 'start',
  disabled = false,
  invalid = false,
  style,
}: RadioButtonProps) {
  const { colors } = useTheme();
  const outerSize = 18;
  const innerSize = 10;

  const borderColor = invalid
    ? colors.action.negative.default
    : selected
      ? colors.action.branded.default
      : colors.surface.neutral.high;

  const controlElement = (
    <View
      style={{
        width: outerSize,
        height: outerSize,
        borderRadius: outerSize / 2,
        borderWidth: 1.5,
        borderColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
      }}
    >
      {selected && (
        <View
          style={{
            width: innerSize,
            height: innerSize,
            borderRadius: innerSize / 2,
            backgroundColor: colors.action.branded.default,
          }}
        />
      )}
    </View>
  );

  const isBox = type === 'box';

  return (
    <Pressable
      onPress={() => !disabled && onPress()}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ selected, disabled }}
      style={[
        {
          flexDirection: controlPlacement === 'end' ? 'row-reverse' : 'row',
          alignItems: 'flex-start',
          gap: 10,
          opacity: disabled ? 0.5 : 1,
          ...(isBox
            ? {
                borderWidth: 1,
                borderColor: selected
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
      {controlElement}
      {(label || description) && (
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
      )}
    </Pressable>
  );
}

export function RadioGroup({ children, style }: RadioGroupProps) {
  return (
    <View
      style={[{ gap: 8 }, style]}
      accessibilityRole="radiogroup"
    >
      {children}
    </View>
  );
}
