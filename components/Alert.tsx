/**
 * Alert — Lemon Pie Design System
 *
 * Variants: Default | Destructive
 *
 * Maps to Figma component "Alert"
 */

import React from 'react';
import { View, Text, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type AlertVariant = 'default' | 'destructive';

export interface AlertProps {
  /** Alert title */
  title?: string;
  /** Alert description */
  description?: string;
  /** Variant */
  variant?: AlertVariant;
  /** Left icon element */
  icon?: React.ReactNode;
  /** Action button element */
  action?: React.ReactNode;
  /** Additional content */
  children?: React.ReactNode;
  /** Override style */
  style?: ViewStyle;
}

// ─── Component ──────────────────────────────────────────────────────

export function Alert({
  title,
  description,
  variant = 'default',
  icon,
  action,
  children,
  style,
}: AlertProps) {
  const { colors } = useTheme();

  const isDestructive = variant === 'destructive';
  const borderColor = isDestructive
    ? colors.surface.negative.default
    : colors.surface.neutral.default;
  const bgColor = isDestructive
    ? colors.surface.negative.onColor
    : colors.surface.neutral.default;
  const titleColor = isDestructive
    ? colors.text.negative.high
    : colors.text.neutral.high;
  const descColor = isDestructive
    ? colors.text.negative.default
    : colors.text.neutral.default;

  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderColor,
          backgroundColor: bgColor,
          borderRadius: 8,
          padding: 16,
          flexDirection: 'row',
          gap: 12,
        },
        style,
      ]}
      accessibilityRole="alert"
    >
      {icon && <View style={{ marginTop: 1 }}>{icon}</View>}

      <View style={{ flex: 1, gap: 4 }}>
        {title && (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: titleColor }}>
              {title}
            </Text>
            {action}
          </View>
        )}
        {description && (
          <Text style={{ fontSize: 13, color: descColor, lineHeight: 18 }}>
            {description}
          </Text>
        )}
        {children}
      </View>
    </View>
  );
}
