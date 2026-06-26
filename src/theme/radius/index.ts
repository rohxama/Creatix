/**
 * Creatix Cafe Design System - Border Radius
 * 
 * Consistent rounded corners for components
 */

export const borderRadius = {
  // None (Sharp corners)
  none: 0,

  // Small (Buttons, Inputs, Chips)
  sm: 6,

  // Medium (Cards, Modals)
  md: 12,

  // Large (Bottom Sheets, Cards)
  lg: 16,

  // XL (Feature Cards)
  xl: 20,

  // 2XL (Large Feature Areas)
  "2xl": 24,

  // 3XL (Hero Sections)
  "3xl": 32,

  // 4XL (Special Cases)
  "4xl": 40,

  // Full (Pills, Avatars)
  full: 9999,
} as const;

// Semantic Border Radius (Named Aliases)
export const semanticRadius = {
  // Component Specific
  button: borderRadius.md,
  buttonSmall: borderRadius.sm,
  buttonLarge: borderRadius.lg,

  input: borderRadius.md,
  inputSmall: borderRadius.sm,
  inputLarge: borderRadius.lg,

  card: borderRadius.lg,
  cardSmall: borderRadius.md,
  cardLarge: borderRadius.xl,

  chip: borderRadius.full,
  chipSmall: borderRadius.full,
  chipLg: borderRadius.full,

  badge: borderRadius.full,
  badgeSmall: borderRadius.sm,
  badgeLg: borderRadius.full,

  avatar: borderRadius.full,
  avatarSmall: borderRadius.full,
  avatarLg: borderRadius.full,

  modal: borderRadius.xl,
  bottomSheet: borderRadius["2xl"],

  // Screen
  screen: borderRadius.none,
  screenCard: borderRadius.lg,
} as const;

export type BorderRadiusKey = keyof typeof borderRadius;
export type SemanticRadiusKey = keyof typeof semanticRadius;