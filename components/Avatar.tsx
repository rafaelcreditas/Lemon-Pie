/**
 * Avatar — Lemon Pie Design System
 *
 * Types: Image | Fallback | Icon
 * Sizes: xl (48) | lg (40) | default (32) | sm (24) | xs (20)
 *
 * Maps to Figma components "Avatar" and "Avatar Group"
 */

import React from 'react';
import { View, Text, Image, type ViewStyle, type ImageSourcePropType } from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type AvatarSize = 'xl' | 'lg' | 'default' | 'sm' | 'xs';

export interface AvatarProps {
  /** Image source (renders image variant when provided) */
  source?: ImageSourcePropType;
  /** Fallback initials when image is not available */
  fallback?: string;
  /** Icon element (renders icon variant) */
  icon?: React.ReactNode;
  /** Size preset */
  size?: AvatarSize;
  /** Override style */
  style?: ViewStyle;
}

export interface AvatarGroupProps {
  /** Avatar elements */
  children: React.ReactNode;
  /** Max visible avatars (rest shown as +N) */
  max?: number;
  /** Size for all child avatars */
  size?: AvatarSize;
  /** Override style */
  style?: ViewStyle;
}

// ─── Sizes ──────────────────────────────────────────────────────────

const SIZES: Record<AvatarSize, { dimension: number; fontSize: number }> = {
  xl: { dimension: 48, fontSize: 18 },
  lg: { dimension: 40, fontSize: 16 },
  default: { dimension: 32, fontSize: 13 },
  sm: { dimension: 24, fontSize: 10 },
  xs: { dimension: 20, fontSize: 9 },
};

// ─── Components ─────────────────────────────────────────────────────

export function Avatar({
  source,
  fallback,
  icon,
  size = 'default',
  style,
}: AvatarProps) {
  const { colors } = useTheme();
  const { dimension, fontSize } = SIZES[size];

  const containerBase: ViewStyle = {
    width: dimension,
    height: dimension,
    borderRadius: dimension / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.decorative.avatar.default,
  };

  if (source) {
    return (
      <View style={[containerBase, style]}>
        <Image
          source={source}
          style={{ width: dimension, height: dimension }}
          accessibilityRole="image"
        />
      </View>
    );
  }

  if (icon) {
    return <View style={[containerBase, style]}>{icon}</View>;
  }

  // Fallback initials
  return (
    <View style={[containerBase, style]}>
      <Text
        style={{
          fontSize,
          fontWeight: '600',
          color: colors.decorative.avatar.onColor,
        }}
      >
        {fallback ?? '?'}
      </Text>
    </View>
  );
}

export function AvatarGroup({
  children,
  max,
  size = 'default',
  style,
}: AvatarGroupProps) {
  const { colors } = useTheme();
  const { dimension, fontSize } = SIZES[size];
  const items = React.Children.toArray(children);
  const visible = max ? items.slice(0, max) : items;
  const overflow = max && items.length > max ? items.length - max : 0;

  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      {visible.map((child, i) => (
        <View
          key={i}
          style={{
            marginLeft: i > 0 ? -(dimension * 0.25) : 0,
            borderWidth: 2,
            borderColor: colors.background.neutral.default,
            borderRadius: dimension / 2 + 2,
          }}
        >
          {child}
        </View>
      ))}
      {overflow > 0 && (
        <View
          style={{
            marginLeft: -(dimension * 0.25),
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            backgroundColor: colors.decorative.avatar.low,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: colors.background.neutral.default,
          }}
        >
          <Text
            style={{
              fontSize: fontSize - 1,
              fontWeight: '600',
              color: colors.decorative.avatar.onColor,
            }}
          >
            +{overflow}
          </Text>
        </View>
      )}
    </View>
  );
}
