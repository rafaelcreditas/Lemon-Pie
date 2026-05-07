/**
 * Sheet — Lemon Pie Design System
 *
 * Bottom/side sheet overlay.
 * Position: left | right | top | bottom
 *
 * Maps to Figma component "Sheet"
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

export type SheetPosition = 'left' | 'right' | 'top' | 'bottom';

export interface SheetProps {
  /** Whether the sheet is visible */
  visible: boolean;
  /** Called when the sheet should close */
  onClose: () => void;
  /** Sheet title */
  title?: string;
  /** Sheet description */
  description?: string;
  /** Show close button */
  showCloseButton?: boolean;
  /** Slide-in position */
  position?: SheetPosition;
  /** Body content */
  children?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Override style */
  style?: ViewStyle;
}

// ─── Component ──────────────────────────────────────────────────────

export function Sheet({
  visible,
  onClose,
  title,
  description,
  showCloseButton = true,
  position = 'bottom',
  children,
  footer,
  style,
}: SheetProps) {
  const { colors } = useTheme();

  const positionStyles: Record<SheetPosition, ViewStyle> = {
    bottom: { justifyContent: 'flex-end' },
    top: { justifyContent: 'flex-start' },
    left: { justifyContent: 'flex-start', flexDirection: 'row' },
    right: { justifyContent: 'flex-end', flexDirection: 'row' },
  };

  const contentStyles: Record<SheetPosition, ViewStyle> = {
    bottom: {
      width: '100%',
      maxHeight: '85%',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    top: {
      width: '100%',
      maxHeight: '85%',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    left: { height: '100%', width: '80%', maxWidth: 360 },
    right: { height: '100%', width: '80%', maxWidth: 360 },
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable
        style={[
          { flex: 1, backgroundColor: colors.background.modal.default },
          positionStyles[position],
        ]}
        onPress={onClose}
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={[
            {
              backgroundColor: colors.surface.neutral.default,
              ...contentStyles[position],
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
                accessibilityLabel="Close"
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  zIndex: 1,
                }}
              >
                <Text style={{ fontSize: 16, color: colors.icon.neutral.default }}>✕</Text>
              </Pressable>
            )}
            {title && (
              <Text style={{ fontSize: 17, fontWeight: '600', color: colors.text.neutral.high, paddingRight: 32 }}>
                {title}
              </Text>
            )}
            {description && (
              <Text style={{ fontSize: 14, color: colors.text.neutral.low }}>
                {description}
              </Text>
            )}
          </View>

          {/* Content */}
          {children && <View style={{ flex: 1, padding: 16 }}>{children}</View>}

          {/* Footer */}
          {footer && (
            <View
              style={{
                padding: 16,
                borderTopWidth: 1,
                borderTopColor: colors.surface.neutral.low,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 8,
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
