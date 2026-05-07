/**
 * Dialog — Lemon Pie Design System
 *
 * Modal dialog with title, description, content, and footer.
 *
 * Maps to Figma component "Dialog"
 */

import React from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  type ViewStyle,
} from 'react-native';
import { useTheme } from '../tokens/theme';

// ─── Types ──────────────────────────────────────────────────────────

export interface DialogProps {
  /** Whether the dialog is visible */
  visible: boolean;
  /** Called when the dialog should close */
  onClose: () => void;
  /** Dialog title */
  title?: string;
  /** Dialog description */
  description?: string;
  /** Show close button */
  showCloseButton?: boolean;
  /** Body content */
  children?: React.ReactNode;
  /** Footer content (typically action buttons) */
  footer?: React.ReactNode;
  /** Override content style */
  style?: ViewStyle;
}

// ─── Component ──────────────────────────────────────────────────────

export function Dialog({
  visible,
  onClose,
  title,
  description,
  showCloseButton = true,
  children,
  footer,
  style,
}: DialogProps) {
  const { colors } = useTheme();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={{
          flex: 1,
          backgroundColor: colors.background.modal.default,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}
        onPress={onClose}
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={[
            {
              width: '100%',
              maxWidth: 420,
              backgroundColor: colors.surface.neutral.default,
              borderRadius: 12,
              overflow: 'hidden',
            },
            style,
          ]}
        >
          {/* Header */}
          <View style={{ padding: 16, gap: 4 }}>
            {showCloseButton && (
              <Pressable
                onPress={onClose}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel="Close"
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  zIndex: 1,
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 16, color: colors.icon.neutral.default }}>✕</Text>
              </Pressable>
            )}
            {title && (
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '600',
                  color: colors.text.neutral.high,
                  paddingRight: showCloseButton ? 32 : 0,
                }}
              >
                {title}
              </Text>
            )}
            {description && (
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text.neutral.low,
                  lineHeight: 20,
                }}
              >
                {description}
              </Text>
            )}
          </View>

          {/* Content */}
          {children && (
            <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
              {children}
            </View>
          )}

          {/* Footer */}
          {footer && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 8,
                padding: 16,
                borderTopWidth: 1,
                borderTopColor: colors.surface.neutral.low,
              }}
            >
              {footer}
            </View>
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
}
