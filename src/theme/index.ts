/**
 * Creatix Cafe Design System - Main Export
 * 
 * Complete design system for warm, elegant, welcoming coffee shop app
 */

// Colors
export { palette, lightColors, darkColors, colors } from "./colors";
export type { ThemeColors } from "./colors";

// Typography
export {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  typography,
} from "./typography";
export type { TypographyStyle, FontSizeKey, FontWeightKey } from "./typography";

// Spacing
export { spacing, semanticSpacing } from "./spacing";
export type { SpacingKey, SemanticSpacingKey } from "./spacing";

// Border Radius
export { borderRadius, semanticRadius } from "./radius";
export type { BorderRadiusKey, SemanticRadiusKey } from "./radius";

// Shadows
export { shadowTokens, shadows } from "./shadows";
export type { ShadowToken, SemanticShadow } from "./shadows";

// Icons
export {
  iconSizes,
  iconTouchTargets,
  semanticIconSizes,
  iconColors,
  iconPresets,
} from "./icons";
export type { IconSize, SemanticIconSize, IconColor } from "./icons";

// Animations
export {
  durations,
  easings,
  springs,
  animations,
  screenTransitions,
  pullToRefresh,
} from "./animations";
export type { Duration, Easing, Spring, Animation, ScreenTransition } from "./animations";

// Accessibility
export {
  touchTargets,
  accessibilitySpacing,
  fontScale,
  highContrast,
  screenReaderLabels,
  hapticFeedback,
  focusManagement,
  a11yHelpers,
} from "./accessibility";
export type { TouchTarget, FontScale, HapticFeedback } from "./accessibility";

// Design System Master Object
import { colors } from "./colors";
import { typography, fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } from "./typography";
import { spacing, semanticSpacing } from "./spacing";
import { borderRadius, semanticRadius } from "./radius";
import { shadows, shadowTokens } from "./shadows";
import { iconSizes, iconColors, iconPresets } from "./icons";
import { durations, easings, springs, animations, screenTransitions } from "./animations";
import { touchTargets, fontScale, hapticFeedback } from "./accessibility";

export const designSystem = {
  colors,
  typography: {
    styles: typography,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  },
  spacing: {
    values: spacing,
    semantic: semanticSpacing,
  },
  borderRadius: {
    values: borderRadius,
    semantic: semanticRadius,
  },
  shadows: {
    tokens: shadowTokens,
    semantic: shadows,
  },
  icons: {
    sizes: iconSizes,
    colors: iconColors,
    presets: iconPresets,
  },
  animations: {
    durations,
    easings,
    springs,
    animations,
    screenTransitions,
  },
  accessibility: {
    touchTargets,
    fontScale,
    hapticFeedback,
  },
} as const;

export type DesignSystem = typeof designSystem;