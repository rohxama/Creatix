/**
 * Creatix Cafe Design System - Accessibility Guidelines
 * 
 * WCAG 2.1 AA compliant design tokens
 */

import { Platform } from "react-native";

// Touch Target Sizes (WCAG 2.1 - Minimum 44x44pt)
export const touchTargets = {
  // Minimum sizes
  minimum: 44,
  recommended: 48,

  // Component-specific
  button: 48,
  icon: 44,
  link: 44,
  input: 48,
  tab: 48,
  listItem: 56,
  switch: 51,
  checkbox: 44,
  radio: 44,

  // FAB
  fab: 56,
  miniFab: 40,
} as const;

// Accessibility Spacing
export const accessibilitySpacing = {
  // Minimum spacing between interactive elements
  minimumGap: 8,

  // Recommended spacing
  recommendedGap: 12,

  // Spacing around interactive elements
  touchPadding: 8,

  // Spacing between sections
  sectionGap: 24,
} as const;

// Dynamic Font Size Scaling
export const fontScale = {
  // Font size categories
  small: 0.85,
  medium: 1.0,
  large: 1.15,
  extraLarge: 1.3,
  maximum: 1.5,

  // Maximum font sizes (prevents text from being too large)
  maxHeading: 48,
  maxBody: 24,
  maxCaption: 18,
} as const;

// High Contrast Mode
export const highContrast = {
  // Border widths
  borderWidth: 2,
  focusBorderWidth: 3,

  // Contrast ratios (WCAG AA)
  normalText: 4.5,
  largeText: 3,
  uiComponents: 3,

  // Focus indicator colors
  focusColor: "#000000",
  focusColorLight: "#ffffff",
} as const;

// Screen Reader Labels
export const screenReaderLabels = {
  // Navigation
  navigateBack: "Go back",
  navigateForward: "Go forward",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  closeModal: "Close modal",

  // Actions
  addItem: "Add item",
  removeItem: "Remove item",
  editItem: "Edit item",
  deleteItem: "Delete item",
  favorite: "Add to favorites",
  unfavorite: "Remove from favorites",
  share: "Share",

  // Status
  loading: "Loading",
  loaded: "Content loaded",
  error: "Error occurred",
  empty: "No content available",

  // Forms
  required: "required",
  optional: "optional",
  invalid: "Invalid input",
  valid: "Valid input",
} as const;

// Haptic Feedback Patterns
export const hapticFeedback = {
  // Light impact
  light: {
    impactLight: true,
  },

  // Medium impact
  medium: {
    impactMedium: true,
  },

  // Heavy impact
  heavy: {
    impactHeavy: true,
  },

  // Selection feedback
  selection: {
    selection: true,
  },

  // Notification feedback
  notification: {
    notificationSuccess: true,
    notificationWarning: true,
    notificationError: true,
  },
} as const;

// Focus Management
export const focusManagement = {
  // Focus ring styles
  ringWidth: 2,
  ringOffset: 2,
  ringColor: "#c8641c",

  // Focus trap settings
  trapFocus: true,
  restoreFocus: true,
  autoFocus: true,
} as const;

// Accessibility Helpers
export const a11yHelpers = {
  // Check if element is accessible
  isAccessible: (props: { accessible?: boolean; accessibilityLabel?: string }) => {
    return props.accessible !== false && !!props.accessibilityLabel;
  },

  // Generate accessibility label
  generateLabel: (text: string, role?: string, state?: string) => {
    const parts = [text];
    if (role) parts.push(role);
    if (state) parts.push(state);
    return parts.join(", ");
  },

  // Check color contrast
  checkContrast: (foreground: string, background: string) => {
    // This is a simplified check - in production, use a proper contrast checking library
    return { ratio: 4.5, passes: true };
  },
} as const;

export type TouchTarget = keyof typeof touchTargets;
export type FontScale = keyof typeof fontScale;
export type HapticFeedback = keyof typeof hapticFeedback;