/**
 * Skeleton — Lemon Pie Design System
 *
 * Animated loading placeholder.
 *
 * Maps to Figma component "Skeleton"
 */

import React, { useEffect, useRef } from 'react';
import { Animated, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

export interface SkeletonProps {
  /** Width */
  width?: number | string;
  /** Height */
  height?: number | string;
  /** Border radius */
  borderRadius?: number;
  /** Circle shorthand (sets borderRadius to 50%) */
  circle?: boolean;
  /** Override style */
  style?: ViewStyle;
}

export function Skeleton({
  width = '100%',
  height = 16,
  borderRadius = 6,
  circle = false,
  style,
}: SkeletonProps) {
  const { colors } = useTheme();
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  const resolvedRadius = circle
    ? typeof height === 'number'
      ? height / 2
      : 999
    : borderRadius;

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          borderRadius: resolvedRadius,
          backgroundColor: colors.background.secondary.low,
          opacity,
        },
        style,
      ]}
    />
  );
}
