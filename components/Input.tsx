/**
 * Input — Lemon Pie Design System
 *
 * Variants: Default | File | Password
 * States: Default | Focus | Filled | Disabled | Invalid
 *
 * Maps to Figma component "Input"
 */

import React, { forwardRef, useState } from 'react';
import {
  TextInput,
  View,
  Pressable,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export interface InputProps extends Omit<TextInputProps, 'style'> {
  /** Show validation error state */
  invalid?: boolean;
  /** Left icon/addon element */
  leftElement?: React.ReactNode;
  /** Right icon/addon element */
  rightElement?: React.ReactNode;
  /** Override container style */
  containerStyle?: ViewStyle;
  /** Override input style */
  style?: TextInputProps['style'];
}

// ─── Component ──────────────────────────────────────────────────────

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      invalid = false,
      editable = true,
      leftElement,
      rightElement,
      containerStyle,
      style,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const { colors } = useTheme();
    const [focused, setFocused] = useState(false);
    const disabled = editable === false;

    const borderColor = invalid
      ? colors.action.negative.default
      : focused
        ? colors.action.branded.default
        : colors.surface.neutral.default;

    return (
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            height: 40,
            borderWidth: 1,
            borderColor,
            borderRadius: 8,
            backgroundColor: colors.surface.neutral.default,
            paddingHorizontal: 12,
            gap: 8,
            opacity: disabled ? 0.5 : 1,
          },
          containerStyle,
        ]}
      >
        {leftElement}
        <TextInput
          ref={ref}
          editable={editable}
          placeholderTextColor={colors.text.neutral.low}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          style={[
            {
              flex: 1,
              fontSize: 14,
              color: colors.text.neutral.high,
              padding: 0,
            },
            style,
          ]}
          {...rest}
        />
        {rightElement}
      </View>
    );
  },
);

Input.displayName = 'Input';
