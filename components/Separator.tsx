/**
 * Separator — Lemon Pie Design System
 *
 * Orientation: Horizontal | Vertical
 *
 * Maps to Figma component "Separator"
 */

import React from 'react';
import { View, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export interface SeparatorProps {
  orientation?: SeparatorOrientation;
  style?: ViewStyle;
}

export function Separator({
  orientation = 'horizontal',
  style,
}: SeparatorProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: colors.surface.neutral.low,
          ...(orientation === 'horizontal'
            ? { height: 1, width: '100%' }
            : { width: 1, alignSelf: 'stretch' }),
        },
        style,
      ]}
    />
  );
}
