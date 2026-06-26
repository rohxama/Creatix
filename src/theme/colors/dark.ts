/**
 * Creatix Cafe Design System - Semantic Colors
 * 
 * Dark Mode Theme
 */

import { palette } from "./palette";

export const darkColors = {
  // Brand Colors
  primary: palette.warmBrown[400],
  primaryLight: palette.warmBrown[900],
  primaryDark: palette.warmBrown[200],
  primaryForeground: palette.neutral[950],

  secondary: palette.coffee[400],
  secondaryLight: palette.coffee[900],
  secondaryDark: palette.coffee[200],
  secondaryForeground: palette.neutral[950],

  accent: palette.sage[400],
  accentLight: palette.sage[900],
  accentDark: palette.sage[200],
  accentForeground: palette.neutral[950],

  // Background Colors
  background: palette.neutral[950],
  backgroundSecondary: palette.neutral[900],
  backgroundTertiary: palette.neutral[800],

  // Surface Colors
  surface: palette.neutral[900],
  surfaceElevated: palette.neutral[800],
  surfaceSunken: palette.neutral[950],

  // Card Colors
  card: palette.neutral[900],
  cardForeground: palette.neutral[50],
  cardBorder: palette.neutral[800],

  // Border Colors
  border: palette.neutral[800],
  borderLight: palette.neutral[700],
  borderDark: palette.neutral[600],
  borderFocus: palette.warmBrown[400],

  // Text Colors
  textPrimary: palette.neutral[50],
  textSecondary: palette.neutral[400],
  textTertiary: palette.neutral[500],
  textInverse: palette.neutral[900],
  textDisabled: palette.neutral[600],
  textLink: palette.warmBrown[300],

  // Semantic Colors
  success: palette.sage[400],
  successLight: palette.sage[900],
  successForeground: palette.neutral[950],

  warning: palette.cream[400],
  warningLight: palette.cream[900],
  warningForeground: palette.neutral[950],

  error: palette.terracotta[400],
  errorLight: palette.terracotta[900],
  errorForeground: palette.neutral[950],

  info: palette.warmBrown[400],
  infoLight: palette.warmBrown[900],
  infoForeground: palette.neutral[950],

  // Overlay
  overlay: "rgba(0, 0, 0, 0.7)",
  overlayLight: "rgba(0, 0, 0, 0.5)",
  overlayDark: "rgba(0, 0, 0, 0.9)",

  // Input Colors
  input: palette.neutral[800],
  inputBorder: palette.neutral[700],
  inputBorderFocus: palette.warmBrown[400],
  inputBorderError: palette.terracotta[400],
  inputBorderSuccess: palette.sage[400],
  inputPlaceholder: palette.neutral[500],

  // Tab Bar
  tabBar: palette.neutral[900],
  tabBarBorder: palette.neutral[800],
  tabBarActive: palette.warmBrown[400],
  tabBarInactive: palette.neutral[600],

  // Status Bar
  statusBar: "light-content",
} as const;

export type DarkColors = typeof darkColors;