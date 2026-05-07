/**
 * Checkbox — Lemon Pie Design System
 *
 * Types: Default | Box
 * Control Placement: Start | End
 * States: Default | Focus | Disabled | Pressed | Invalid
 *
 * Maps to Figma components "Checkbox" and "Checkbox Group"
 */

import React from 'react';
import { Pressable, View, Text, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type CheckboxType = 'default' | 'box';
export type ControlPlacement = 'start' | 'end';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked: boolean;
  /** Called when the value changes */
  onCheckedChange: (checked: boolean) => void;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Visual type */
  type?: CheckboxType;
  /** Control position relative to label */
  controlPlacement?: ControlPlacement;
  /** Disabled state */
  disabled?: boolean;
  /** Invalid state */
  invalid?: boolean;
  /** Override style */
  style?: ViewStyle;
}

// ─── Checkmark SVG (inline to avoid icon dep) ───────────────────────

function CheckIcon({ color, size }: { color: string; size: number }) {
  // Simple checkmark using View transforms
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: size * 0.75, color, fontWeight: '700', lineHeight: size }}>✓</Text>
    </View>
  );
}

// ─── Component ──────────────────────────────────────────────────────

export function Checkbox({
  checked,
  onCheckedChange,
  label,
  description,
  type = 'default',
  controlPlacement = 'start',
  disabled = false,
  invalid = false,
  style,
}: CheckboxProps) {
  const { colors } = useTheme();

  const boxSize = 18;
  const borderColor = invalid
    ? colors.action.negative.default
    : checked
      ? colors.action.branded.default
      : colors.surface.neutral.high;

  const controlElement = (
    <View
      style={{
        width: boxSize,
        height: boxSize,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor,
        backgroundColor: checked ? colors.action.branded.default : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
      }}
    >
      {checked && (
        <CheckIcon color={colors.action.branded.onColor} size={12} />
      )}
    </View>
  );

  const isBox = type === 'box';

  return (
    <Pressable
      onPress={() => !disabled && onCheckedChange(!checked)}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      style={[
        {
          flexDirection: controlPlacement === 'end' ? 'row-reverse' : 'row',
          alignItems: 'flex-start',
          gap: 10,
          opacity: disabled ? 0.5 : 1,
          ...(isBox
            ? {
                borderWidth: 1,
                borderColor: checked
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
