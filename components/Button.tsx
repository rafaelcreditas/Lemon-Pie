/**
 * Button — Lemon Pie Design System
 *
 * Variants: Default | Secondary | Destructive | Outline | Ghost | Link
 * Sizes: default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg
 * States: Default | Hover | Focus | Loading | Disabled | Pressed
 *
 * Maps to Figma component "Button" (37:931)
 */

import React, { forwardRef } from 'react';
import {
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  type PressableProps,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { useTheme } from '../tokens/theme';
import type { ColorTokens } from '../tokens/colors';

// ─── Types ──────────────────────────────────────────────────────────

export type ButtonVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link';

export type ButtonSize =
  | 'default'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'icon-xs'
  | 'icon-sm'
  | 'icon-lg';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Button label (ignored for icon-only sizes) */
  children?: React.ReactNode;
  /** Left icon element */
  leftIcon?: React.ReactNode;
  /** Right icon element */
  rightIcon?: React.ReactNode;
  /** Override container style */
  style?: ViewStyle;
  /** Override text style */
  textStyle?: TextStyle;
}

// ─── Helpers ────────────────────────────────────────────────────────

function getContainerStyle(
  variant: ButtonVariant,
  size: ButtonSize,
  pressed: boolean,
  disabled: boolean,
  colors: ColorTokens,
): ViewStyle {
  // Base sizing
  const sizeStyles: Record<ButtonSize, ViewStyle> = {
    default: { height: 40, paddingHorizontal: 16, borderRadius: 8 },
    xs: { height: 28, paddingHorizontal: 8, borderRadius: 6 },
    sm: { height: 32, paddingHorizontal: 12, borderRadius: 6 },
    lg: { height: 48, paddingHorizontal: 24, borderRadius: 10 },
    icon: { height: 40, width: 40, borderRadius: 8 },
    'icon-xs': { height: 28, width: 28, borderRadius: 6 },
    'icon-sm': { height: 32, width: 32, borderRadius: 6 },
    'icon-lg': { height: 48, width: 48, borderRadius: 10 },
  };

  // Variant colors
  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    default: {
      backgroundColor: pressed
        ? colors.action.branded.high
        : colors.action.branded.default,
    },
    secondary: {
      backgroundColor: pressed
        ? colors.background.secondary.high
        : colors.background.secondary.default,
    },
    destructive: {
      backgroundColor: pressed
        ? colors.action.negative.high
        : colors.action.negative.default,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.surface.neutral.default,
    },
    ghost: {
      backgroundColor: pressed ? colors.action.neutral.veryLow : 'transparent',
    },
    link: {
      backgroundColor: 'transparent',
    },
  };

  return {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    opacity: disabled ? 0.5 : 1,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
}

function getTextStyle(
  variant: ButtonVariant,
  size: ButtonSize,
  colors: ColorTokens,
): TextStyle {
  const fontSizes: Record<ButtonSize, number> = {
    xs: 12,
    sm: 13,
    default: 14,
    lg: 16,
    icon: 14,
    'icon-xs': 12,
    'icon-sm': 13,
    'icon-lg': 16,
  };

  const textColor: Record<ButtonVariant, string> = {
    default: colors.action.branded.onColor,
    secondary: colors.text.neutral.high,
    destructive: colors.action.negative.onColor,
    outline: colors.text.neutral.high,
    ghost: colors.text.neutral.high,
    link: colors.text.branded.default,
  };

  return {
    fontSize: fontSizes[size],
    fontWeight: '600',
    color: textColor[variant],
  };
}

// ─── Component ──────────────────────────────────────────────────────

export const Button = forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'default',
      loading = false,
      disabled = false,
      children,
      leftIcon,
      rightIcon,
      style,
      textStyle,
      ...rest
    },
    ref,
  ) => {
    const { colors } = useTheme();
    const isIconOnly = size.startsWith('icon');
    const isDisabled = disabled || loading;

    return (
      <Pressable
        ref={ref}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, busy: loading }}
        {...rest}
        style={({ pressed }) => [
          getContainerStyle(variant, size, pressed, isDisabled, colors),
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={getTextStyle(variant, size, colors).color}
          />
        ) : (
          <>
            {leftIcon}
            {!isIconOnly && typeof children === 'string' ? (
              <Text style={[getTextStyle(variant, size, colors), textStyle]}>
                {children}
              </Text>
            ) : (
              children
            )}
            {rightIcon}
          </>
        )}
      </Pressable>
    );
  },
);

Button.displayName = 'Button';
