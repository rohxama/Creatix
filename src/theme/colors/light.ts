/**
 * Creatix Cafe Design System - Semantic Colors
 * 
 * Light Mode Theme
 */

import { palette } from "./palette";

export const lightColors = {
  // Brand Colors
  primary: palette.warmBrown[800],
  primaryLight: palette.warmBrown[100],
  primaryDark: palette.warmBrown[950],
  primaryForeground: palette.white,

  secondary: palette.coffee[500],
  secondaryLight: palette.coffee[100],
  secondaryDark: palette.coffee[700],
  secondaryForeground: palette.white,

  accent: palette.sage[500],
  accentLight: palette.sage[100],
  accentDark: palette.sage[700],
  accentForeground: palette.white,

  // Background Colors
  background: palette.cream[50],
  backgroundSecondary: palette.neutral[50],
  backgroundTertiary: palette.coffee[50],

  // Surface Colors
  surface: palette.white,
  surfaceElevated: palette.white,
  surfaceSunken: palette.neutral[100],

  // Card Colors
  card: palette.white,
  cardForeground: palette.neutral[900],
  cardBorder: palette.neutral[200],

  // Border Colors
  border: palette.neutral[200],
  borderLight: palette.neutral[100],
  borderDark: palette.neutral[300],
  borderFocus: palette.warmBrown[500],

  // Text Colors
  textPrimary: palette.neutral[900],
  textSecondary: palette.neutral[600],
  textTertiary: palette.neutral[500],
  textInverse: palette.white,
  textDisabled: palette.neutral[400],
  textLink: palette.warmBrown[700],

  // Semantic Colors
  success: palette.sage[600],
  successLight: palette.sage[100],
  successForeground: palette.white,

  warning: palette.cream[600],
  warningLight: palette.cream[100],
  warningForeground: palette.neutral[900],

  error: palette.terracotta[600],
  errorLight: palette.terracotta[100],
  errorForeground: palette.white,

  info: palette.warmBrown[500],
  infoLight: palette.warmBrown[100],
  infoForeground: palette.white,

  // Overlay
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayLight: "rgba(0, 0, 0, 0.25)",
  overlayDark: "rgba(0, 0, 0, 0.75)",

  // Input Colors
  input: palette.white,
  inputBorder: palette.neutral[300],
  inputBorderFocus: palette.warmBrown[500],
  inputBorderError: palette.terracotta[500],
  inputBorderSuccess: palette.sage[500],
  inputPlaceholder: palette.neutral[400],

  // Tab Bar
  tabBar: palette.white,
  tabBarBorder: palette.neutral[200],
  tabBarActive: palette.warmBrown[800],
  tabBarInactive: palette.neutral[400],

  // Status Bar
  statusBar: "light-content",
} as const;

export type LightColors = typeof lightColors;