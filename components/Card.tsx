/**
 * Card — Lemon Pie Design System
 *
 * Sizes: default | sm
 *
 * Maps to Figma component "Card"
 */

import React from 'react';
import { View, Text, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type CardSize = 'default' | 'sm';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Show image slot at top */
  image?: React.ReactNode;
  /** Header action element (right side) */
  action?: React.ReactNode;
  /** Card body content */
  children?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Size preset */
  size?: CardSize;
  /** Override style */
  style?: ViewStyle;
}

// ─── Component ──────────────────────────────────────────────────────

export function Card({
  title,
  description,
  image,
  action,
  children,
  footer,
  size = 'default',
  style,
}: CardProps) {
  const { colors } = useTheme();
  const padding = size === 'sm' ? 12 : 16;

  return (
    <View
      style={[
        {
          backgroundColor: colors.surface.neutral.default,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: colors.surface.neutral.low,
          overflow: 'hidden',
        },
        style,
      ]}
    >
      {image}

      {(title || description || action) && (
        <View
          style={{
            padding,
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 12,
          }}
        >
          <View style={{ flex: 1 }}>
            {title && (
              <Text
                style={{
                  fontSize: size === 'sm' ? 15 : 17,
                  fontWeight: '600',
                  color: colors.text.neutral.high,
                }}
              >
                {title}
              </Text>
            )}
            {description && (
              <Text
                style={{
                  fontSize: size === 'sm' ? 13 : 14,
                  color: colors.text.neutral.low,
                  marginTop: 2,
                }}
              >
                {description}
              </Text>
            )}
          </View>
          {action}
        </View>
      )}

      {children && (
        <View style={{ paddingHorizontal: padding, paddingBottom: padding }}>
          {children}
        </View>
      )}

      {footer && (
        <View
          style={{
            padding,
            borderTopWidth: 1,
            borderTopColor: colors.surface.neutral.low,
          }}
        >
          {footer}
        </View>
      )}
    </View>
  );
}
