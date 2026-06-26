/**
 * Creatix Cafe Design System - Typography
 * 
 * Fonts: Poppins (headings/body) + Pacifico (logo/decorative)
 */

import { Platform } from "react-native";

// Font Families
export const fontFamily = {
  // Poppins Weights
  poppinsLight: "Poppins_300Light",
  poppinsRegular: "Poppins_400Regular",
  poppinsMedium: "Poppins_500Medium",
  poppinsSemiBold: "Poppins_600SemiBold",
  poppinsBold: "Poppins_700Bold",
  
  // Pacifico (Display/Logo)
  pacifico: "Pacifico_400Regular",

  // System Fallbacks
  ...Platform.select({
    ios: {
      systemLight: "SFProText-Light",
      systemRegular: "SFProText-Regular",
      systemMedium: "SFProText-Medium",
      systemSemiBold: "SFProText-Semibold",
      systemBold: "SFProText-Bold",
    },
    android: {
      systemLight: "Roboto-Light",
      systemRegular: "Roboto-Regular",
      systemMedium: "Roboto-Medium",
      systemSemiBold: "Roboto-Bold",
      systemBold: "Roboto-Bold",
    },
    default: {
      systemLight: "System",
      systemRegular: "System",
      systemMedium: "System",
      systemSemiBold: "System",
      systemBold: "System",
    },
  }),
} as const;

// Font Sizes
export const fontSize = {
  // Display (Pacifico - Logo/Decorative)
  displayLarge: 48,
  displayMedium: 40,
  displaySmall: 32,

  // Headings (Poppins Bold)
  h1: 32,
  h2: 28,
  h3: 24,
  h4: 20,

  // Titles (Poppins SemiBold)
  titleLarge: 18,
  titleMedium: 16,
  titleSmall: 14,

  // Subtitles (Poppins Medium)
  subtitleLarge: 16,
  subtitleMedium: 14,
  subtitleSmall: 12,

  // Body (Poppins Regular)
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,

  // Caption (Poppins Regular)
  captionLarge: 12,
  captionMedium: 11,
  captionSmall: 10,

  // Button (Poppins SemiBold)
  buttonLarge: 16,
  buttonMedium: 14,
  buttonSmall: 12,

  // Label (Poppins Medium)
  labelLarge: 14,
  labelMedium: 12,
  labelSmall: 10,
} as const;

// Font Weights
export const fontWeight = {
  light: "300" as const,
  regular: "400" as const,
  medium: "500" as const,
  semiBold: "600" as const,
  bold: "700" as const,
} as const;

// Line Heights
export const lineHeight = {
  // Tight (Headings)
  tight: 1.2,
  // Snug (Subtitles)
  snug: 1.3,
  // Normal (Body)
  normal: 1.5,
  // Relaxed (Body Large)
  relaxed: 1.625,
  // Loose (Captions)
  loose: 2,
} as const;

// Letter Spacing
export const letterSpacing = {
  tighter: -0.05,
  tight: -0.025,
  normal: 0,
  wide: 0.025,
  wider: 0.05,
  widest: 0.1,
} as const;

// Typography Styles (Complete Presets)
export const typography = {
  // Display (Pacifico - Logo/Decorative)
  displayLarge: {
    fontFamily: fontFamily.pacifico,
    fontSize: fontSize.displayLarge,
    lineHeight: fontSize.displayLarge * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  displayMedium: {
    fontFamily: fontFamily.pacifico,
    fontSize: fontSize.displayMedium,
    lineHeight: fontSize.displayMedium * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  displaySmall: {
    fontFamily: fontFamily.pacifico,
    fontSize: fontSize.displaySmall,
    lineHeight: fontSize.displaySmall * lineHeight.tight,
    letterSpacing: letterSpacing.normal,
  },

  // Headings (Poppins Bold)
  h1: {
    fontFamily: fontFamily.poppinsBold,
    fontSize: fontSize.h1,
    lineHeight: fontSize.h1 * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontFamily: fontFamily.poppinsBold,
    fontSize: fontSize.h2,
    lineHeight: fontSize.h2 * lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontFamily: fontFamily.poppinsBold,
    fontSize: fontSize.h3,
    lineHeight: fontSize.h3 * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontFamily: fontFamily.poppinsBold,
    fontSize: fontSize.h4,
    lineHeight: fontSize.h4 * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  // Titles (Poppins SemiBold)
  titleLarge: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: fontSize.titleLarge,
    lineHeight: fontSize.titleLarge * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  titleMedium: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: fontSize.titleMedium,
    lineHeight: fontSize.titleMedium * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  titleSmall: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: fontSize.titleSmall,
    lineHeight: fontSize.titleSmall * lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  // Subtitles (Poppins Medium)
  subtitleLarge: {
    fontFamily: fontFamily.poppinsMedium,
    fontSize: fontSize.subtitleLarge,
    lineHeight: fontSize.subtitleLarge * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  subtitleMedium: {
    fontFamily: fontFamily.poppinsMedium,
    fontSize: fontSize.subtitleMedium,
    lineHeight: fontSize.subtitleMedium * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  subtitleSmall: {
    fontFamily: fontFamily.poppinsMedium,
    fontSize: fontSize.subtitleSmall,
    lineHeight: fontSize.subtitleSmall * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },

  // Body (Poppins Regular)
  bodyLarge: {
    fontFamily: fontFamily.poppinsRegular,
    fontSize: fontSize.bodyLarge,
    lineHeight: fontSize.bodyLarge * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodyMedium: {
    fontFamily: fontFamily.poppinsRegular,
    fontSize: fontSize.bodyMedium,
    lineHeight: fontSize.bodyMedium * lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontFamily: fontFamily.poppinsRegular,
    fontSize: fontSize.bodySmall,
    lineHeight: fontSize.bodySmall * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },

  // Caption (Poppins Regular)
  captionLarge: {
    fontFamily: fontFamily.poppinsRegular,
    fontSize: fontSize.captionLarge,
    lineHeight: fontSize.captionLarge * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  captionMedium: {
    fontFamily: fontFamily.poppinsRegular,
    fontSize: fontSize.captionMedium,
    lineHeight: fontSize.captionMedium * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  captionSmall: {
    fontFamily: fontFamily.poppinsRegular,
    fontSize: fontSize.captionSmall,
    lineHeight: fontSize.captionSmall * lineHeight.normal,
    letterSpacing: letterSpacing.wider,
  },

  // Button (Poppins SemiBold)
  buttonLarge: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: fontSize.buttonLarge,
    lineHeight: fontSize.buttonLarge * lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
  buttonMedium: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: fontSize.buttonMedium,
    lineHeight: fontSize.buttonMedium * lineHeight.tight,
    letterSpacing: letterSpacing.wide,
  },
  buttonSmall: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: fontSize.buttonSmall,
    lineHeight: fontSize.buttonSmall * lineHeight.tight,
    letterSpacing: letterSpacing.wider,
  },

  // Label (Poppins Medium)
  labelLarge: {
    fontFamily: fontFamily.poppinsMedium,
    fontSize: fontSize.labelLarge,
    lineHeight: fontSize.labelLarge * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  labelMedium: {
    fontFamily: fontFamily.poppinsMedium,
    fontSize: fontSize.labelMedium,
    lineHeight: fontSize.labelMedium * lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  labelSmall: {
    fontFamily: fontFamily.poppinsMedium,
    fontSize: fontSize.labelSmall,
    lineHeight: fontSize.labelSmall * lineHeight.normal,
    letterSpacing: letterSpacing.wider,
  },
} as const;

export type TypographyStyle = keyof typeof typography;
export type FontSizeKey = keyof typeof fontSize;
export type FontWeightKey = keyof typeof fontWeight;