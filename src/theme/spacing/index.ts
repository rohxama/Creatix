/**
 * Creatix Cafe Design System - Spacing System
 * 
 * Consistent spacing scale for layout and components
 */

export const spacing = {
  // Micro (for inline elements)
  0: 0,
  0.5: 2,
  1: 4,

  // Small (for tight spacing)
  1.5: 6,
  2: 8,
  2.5: 10,

  // Medium (for component spacing)
  3: 12,
  3.5: 14,
  4: 16,

  // Large (for section spacing)
  5: 20,
  6: 24,
  7: 28,

  // XL (for major sections)
  8: 32,
  9: 36,
  10: 40,

  // 2XL (for page sections)
  11: 44,
  12: 48,
  14: 56,

  // 3XL (for large gaps)
  16: 64,
  20: 80,
  24: 96,

  // 4XL (for page margins)
  28: 112,
  32: 128,
  36: 144,

  // 5XL (for special cases)
  40: 160,
  44: 176,
  48: 192,

  // 6XL (for maximum spacing)
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const;

// Semantic Spacing (Named Aliases)
export const semanticSpacing = {
  // Component Internal Spacing
  none: spacing[0],
  xxs: spacing[0.5],
  xs: spacing[1],
  sm: spacing[2],
  md: spacing[4],
  lg: spacing[6],
  xl: spacing[8],

  // Component Gap
  gapXxs: spacing[1],
  gapXs: spacing[2],
  gapSm: spacing[3],
  gapMd: spacing[4],
  gapLg: spacing[6],
  gapXl: spacing[8],

  // Padding
  paddingXs: spacing[2],
  paddingSm: spacing[3],
  paddingMd: spacing[4],
  paddingLg: spacing[6],
  paddingXl: spacing[8],

  // Margin
  marginXs: spacing[2],
  marginSm: spacing[4],
  marginMd: spacing[6],
  marginLg: spacing[8],
  marginXl: spacing[12],

  // Page
  pagePadding: spacing[5],
  sectionGap: spacing[8],
  headerHeight: spacing[16],

  // Screen
  screenPaddingHorizontal: spacing[5],
  screenPaddingVertical: spacing[4],
} as const;

export type SpacingKey = keyof typeof spacing;
export type SemanticSpacingKey = keyof typeof semanticSpacing;