/**
 * Creatix Cafe Design System - Icon System
 * 
 * Lucide Icons with size and color presets
 */

import { Platform } from "react-native";

// Icon Sizes
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
} as const;

// Icon Touch Targets (for accessibility)
export const iconTouchTargets = {
  xs: 24,
  sm: 32,
  md: 44,
  lg: 48,
  xl: 56,
  "2xl": 64,
  "3xl": 72,
} as const;

// Semantic Icon Sizes
export const semanticIconSizes = {
  // Inline icons (in text)
  inline: iconSizes.xs,
  inlineSmall: iconSizes.sm,

  // Button icons
  buttonSmall: iconSizes.sm,
  buttonMedium: iconSizes.md,
  buttonLarge: iconSizes.lg,

  // Card icons
  cardIcon: iconSizes.md,
  cardIconLarge: iconSizes.lg,

  // Tab bar icons
  tabBar: iconSizes.md,
  tabBarActive: iconSizes.lg,

  // Header icons
  headerBack: iconSizes.lg,
  headerAction: iconSizes.md,

  // Feature icons
  featureIcon: iconSizes.xl,
  featureIconLarge: iconSizes["2xl"],

  // Avatar
  avatarSmall: iconSizes.lg,
  avatarMedium: iconSizes.xl,
  avatarLarge: iconSizes["2xl"],
} as const;

// Icon Colors (Semantic)
export const iconColors = {
  // Default
  default: "currentColor",
  muted: "#78716c",

  // Brand
  primary: "#853e1c",
  secondary: "#bc7a3f",
  accent: "#5a7d5a",

  // Semantic
  success: "#466346",
  warning: "#dc9a37",
  error: "#d4451f",
  info: "#c8641c",

  // Interactive
  interactive: "#853e1c",
  interactiveHover: "#6b341a",
  interactiveActive: "#a64d19",
  interactiveDisabled: "#a8a29e",

  // On Colors
  onPrimary: "#ffffff",
  onSecondary: "#ffffff",
  onAccent: "#ffffff",
  onDark: "#ffffff",
  onLight: "#1c1917",
} as const;

// Common Icon Configurations
export const iconPresets = {
  // Navigation
  backArrow: {
    size: iconSizes.lg,
    color: iconColors.default,
  },
  close: {
    size: iconSizes.md,
    color: iconColors.default,
  },
  menu: {
    size: iconSizes.lg,
    color: iconColors.default,
  },

  // Actions
  search: {
    size: iconSizes.md,
    color: iconColors.muted,
  },
  filter: {
    size: iconSizes.md,
    color: iconColors.default,
  },
  sort: {
    size: iconSizes.md,
    color: iconColors.default,
  },
  share: {
    size: iconSizes.md,
    color: iconColors.default,
  },
  favorite: {
    size: iconSizes.md,
    color: iconColors.error,
  },
  favoriteOutline: {
    size: iconSizes.md,
    color: iconColors.muted,
  },

  // Status
  check: {
    size: iconSizes.sm,
    color: iconColors.success,
  },
  error: {
    size: iconSizes.sm,
    color: iconColors.error,
  },
  warning: {
    size: iconSizes.sm,
    color: iconColors.warning,
  },
  info: {
    size: iconSizes.sm,
    color: iconColors.info,
  },

  // Coffee
  coffee: {
    size: iconSizes.lg,
    color: iconColors.primary,
  },
  coffeeLarge: {
    size: iconSizes.xl,
    color: iconColors.primary,
  },
} as const;

export type IconSize = keyof typeof iconSizes;
export type SemanticIconSize = keyof typeof semanticIconSizes;
export type IconColor = keyof typeof iconColors;