/**
 * Tabs — Lemon Pie Design System
 *
 * Variants: Default | Line
 * Orientation: Default (horizontal) | Vertical
 *
 * Maps to Figma component "Tabs"
 */

import React, { useState } from 'react';
import {
  View,
  Pressable,
  Text,
  ScrollView,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export type TabVariant = 'default' | 'line';

export interface TabItem {
  /** Unique key */
  key: string;
  /** Tab label */
  label: string;
  /** Left icon */
  icon?: React.ReactNode;
  /** Badge count */
  badge?: number;
  /** Disabled */
  disabled?: boolean;
}

export interface TabsProps {
  /** Tab items */
  items: TabItem[];
  /** Currently active tab key */
  activeKey: string;
  /** Called when a tab is pressed */
  onTabChange: (key: string) => void;
  /** Visual variant */
  variant?: TabVariant;
  /** Override style */
  style?: ViewStyle;
}

// ─── Component ──────────────────────────────────────────────────────

export function Tabs({
  items,
  activeKey,
  onTabChange,
  variant = 'default',
  style,
}: TabsProps) {
  const { colors } = useTheme();
  const isLine = variant === 'line';

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[
        {
          flexGrow: 0,
          ...(isLine
            ? { borderBottomWidth: 1, borderBottomColor: colors.surface.neutral.low }
            : {}),
        },
        style,
      ]}
      contentContainerStyle={{
        gap: isLine ? 0 : 4,
        ...(isLine ? {} : {
          backgroundColor: colors.background.secondary.low,
          borderRadius: 8,
          padding: 4,
        }),
      }}
    >
      {items.map((item) => {
        const active = item.key === activeKey;
        const disabled = item.disabled ?? false;

        return (
          <Pressable
            key={item.key}
            onPress={() => !disabled && onTabChange(item.key)}
            disabled={disabled}
            accessibilityRole="tab"
            accessibilityState={{ selected: active, disabled }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              paddingHorizontal: 12,
              paddingVertical: 8,
              opacity: disabled ? 0.5 : 1,
              ...(isLine
                ? {
                    borderBottomWidth: 2,
                    borderBottomColor: active
                      ? colors.action.branded.default
                      : 'transparent',
                  }
                : {
                    backgroundColor: active
                      ? colors.surface.neutral.default
                      : 'transparent',
                    borderRadius: 6,
                  }),
            }}
          >
            {item.icon}
            <Text
              style={{
                fontSize: 14,
                fontWeight: active ? '600' : '400',
                color: active
                  ? colors.text.neutral.high
                  : colors.text.neutral.low,
              }}
            >
              {item.label}
            </Text>
            {item.badge !== undefined && (
              <View
                style={{
                  minWidth: 18,
                  height: 18,
                  borderRadius: 9,
                  backgroundColor: colors.action.branded.default,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '700',
                    color: colors.action.branded.onColor,
                  }}
                >
                  {item.badge}
                </Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
