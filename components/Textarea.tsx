/**
 * Textarea — Lemon Pie Design System
 *
 * States: Default | Filled | Focus | Disabled | Error | Error (Focus)
 *
 * Maps to Figma component "Textarea"
 */

import React, { forwardRef, useState } from 'react';
import { TextInput, type TextInputProps, type ViewStyle } from 'react-native';
import { useTheme } from '../tokens/theme';

export interface TextareaProps extends Omit<TextInputProps, 'style'> {
  /** Show error state */
  invalid?: boolean;
  /** Container style override */
  style?: ViewStyle;
}

export const Textarea = forwardRef<TextInput, TextareaProps>(
  ({ invalid = false, editable = true, onFocus, onBlur, style, ...rest }, ref) => {
    const { colors } = useTheme();
    const [focused, setFocused] = useState(false);
    const disabled = editable === false;

    const borderColor = invalid
      ? colors.action.negative.default
      : focused
        ? colors.action.branded.default
        : colors.surface.neutral.default;

    return (
      <TextInput
        ref={ref}
        multiline
        editable={editable}
        textAlignVertical="top"
        placeholderTextColor={colors.text.neutral.low}
        onFocus={(e) => { setFocused(true); onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); onBlur?.(e); }}
        style={[
          {
            minHeight: 80,
            borderWidth: 1,
            borderColor,
            borderRadius: 8,
            backgroundColor: colors.surface.neutral.default,
            paddingHorizontal: 12,
            paddingVertical: 10,
            fontSize: 14,
            color: colors.text.neutral.high,
            opacity: disabled ? 0.5 : 1,
          },
          style,
        ]}
        {...rest}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
