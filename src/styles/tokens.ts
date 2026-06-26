/**
 * Creatix Cafe Design System - Global CSS Variables
 * 
 * This file is imported in global.css and provides CSS custom properties
 * for the design system
 */

export const cssVariables = {
  // This is a TypeScript representation of the CSS variables
  // The actual CSS variables are defined in global.css
  light: {
    primary: "hsl(24, 60%, 30%)",
    primaryLight: "hsl(36, 80%, 88%)",
    primaryDark: "hsl(20, 70%, 15%)",
    primaryForeground: "hsl(0, 0%, 100%)",

    secondary: "hsl(28, 50%, 40%)",
    secondaryLight: "hsl(28, 50%, 90%)",
    secondaryDark: "hsl(28, 50%, 30%)",
    secondaryForeground: "hsl(0, 0%, 100%)",

    accent: "hsl(120, 15%, 45%)",
    accentLight: "hsl(120, 15%, 90%)",
    accentDark: "hsl(120, 15%, 35%)",
    accentForeground: "hsl(0, 0%, 100%)",

    background: "hsl(36, 60%, 98%)",
    backgroundSecondary: "hsl(0, 0%, 98%)",
    backgroundTertiary: "hsl(28, 50%, 95%)",

    surface: "hsl(0, 0%, 100%)",
    surfaceElevated: "hsl(0, 0%, 100%)",
    surfaceSunken: "hsl(0, 0%, 96%)",

    card: "hsl(0, 0%, 100%)",
    cardForeground: "hsl(20, 10%, 10%)",
    cardBorder: "hsl(24, 10%, 90%)",

    border: "hsl(24, 10%, 90%)",
    borderLight: "hsl(24, 10%, 95%)",
    borderDark: "hsl(24, 10%, 85%)",
    borderFocus: "hsl(28, 60%, 40%)",

    textPrimary: "hsl(20, 10%, 10%)",
    textSecondary: "hsl(24, 10%, 45%)",
    textTertiary: "hsl(24, 10%, 55%)",
    textInverse: "hsl(0, 0%, 100%)",
    textDisabled: "hsl(24, 10%, 70%)",
    textLink: "hsl(28, 60%, 35%)",

    foreground: "hsl(20, 10%, 10%)",

    muted: "hsl(0, 0%, 96%)",
    mutedForeground: "hsl(24, 10%, 55%)",

    input: "hsl(0, 0%, 100%)",
    inputBorder: "hsl(24, 10%, 80%)",
    inputBorderFocus: "hsl(28, 60%, 40%)",
    inputBorderError: "hsl(10, 70%, 55%)",
    inputBorderSuccess: "hsl(120, 30%, 45%)",
    inputPlaceholder: "hsl(24, 10%, 70%)",

    tabBar: "hsl(0, 0%, 100%)",
    tabBarBorder: "hsl(24, 10%, 90%)",
    tabBarActive: "hsl(24, 60%, 30%)",
    tabBarInactive: "hsl(24, 10%, 70%)",

    destructive: "hsl(10, 70%, 55%)",
    destructiveForeground: "hsl(0, 0%, 100%)",

    success: "hsl(120, 30%, 45%)",
    successLight: "hsl(120, 30%, 90%)",
    successForeground: "hsl(0, 0%, 100%)",

    warning: "hsl(36, 60%, 50%)",
    warningLight: "hsl(36, 60%, 90%)",
    warningForeground: "hsl(20, 10%, 10%)",

    error: "hsl(10, 70%, 55%)",
    errorLight: "hsl(10, 70%, 90%)",
    errorForeground: "hsl(0, 0%, 100%)",

    info: "hsl(28, 60%, 45%)",
    infoLight: "hsl(28, 60%, 90%)",
    infoForeground: "hsl(0, 0%, 100%)",

    overlay: "rgba(0, 0, 0, 0.5)",
    overlayLight: "rgba(0, 0, 0, 0.25)",
    overlayDark: "rgba(0, 0, 0, 0.75)",
  },
  dark: {
    primary: "hsl(32, 60%, 55%)",
    primaryLight: "hsl(28, 60%, 20%)",
    primaryDark: "hsl(36, 60%, 70%)",
    primaryForeground: "hsl(0, 0%, 5%)",

    secondary: "hsl(28, 50%, 55%)",
    secondaryLight: "hsl(28, 50%, 20%)",
    secondaryDark: "hsl(28, 50%, 70%)",
    secondaryForeground: "hsl(0, 0%, 5%)",

    accent: "hsl(120, 15%, 55%)",
    accentLight: "hsl(120, 15%, 20%)",
    accentDark: "hsl(120, 15%, 70%)",
    accentForeground: "hsl(0, 0%, 5%)",

    background: "hsl(20, 10%, 5%)",
    backgroundSecondary: "hsl(20, 10%, 8%)",
    backgroundTertiary: "hsl(20, 10%, 12%)",

    surface: "hsl(20, 10%, 8%)",
    surfaceElevated: "hsl(20, 10%, 12%)",
    surfaceSunken: "hsl(20, 10%, 4%)",

    card: "hsl(20, 10%, 8%)",
    cardForeground: "hsl(0, 0%, 95%)",
    cardBorder: "hsl(20, 10%, 18%)",

    border: "hsl(20, 10%, 18%)",
    borderLight: "hsl(20, 10%, 22%)",
    borderDark: "hsl(20, 10%, 14%)",
    borderFocus: "hsl(32, 60%, 50%)",

    textPrimary: "hsl(0, 0%, 95%)",
    textSecondary: "hsl(20, 10%, 60%)",
    textTertiary: "hsl(20, 10%, 50%)",
    textInverse: "hsl(20, 10%, 10%)",
    textDisabled: "hsl(20, 10%, 40%)",
    textLink: "hsl(32, 60%, 65%)",

    foreground: "hsl(0, 0%, 95%)",

    muted: "hsl(20, 10%, 15%)",
    mutedForeground: "hsl(20, 10%, 50%)",

    input: "hsl(20, 10%, 12%)",
    inputBorder: "hsl(20, 10%, 22%)",
    inputBorderFocus: "hsl(32, 60%, 50%)",
    inputBorderError: "hsl(10, 70%, 55%)",
    inputBorderSuccess: "hsl(120, 30%, 50%)",
    inputPlaceholder: "hsl(20, 10%, 45%)",

    tabBar: "hsl(20, 10%, 8%)",
    tabBarBorder: "hsl(20, 10%, 18%)",
    tabBarActive: "hsl(32, 60%, 55%)",
    tabBarInactive: "hsl(20, 10%, 45%)",

    destructive: "hsl(10, 70%, 55%)",
    destructiveForeground: "hsl(0, 0%, 100%)",

    success: "hsl(120, 30%, 50%)",
    successLight: "hsl(120, 30%, 15%)",
    successForeground: "hsl(0, 0%, 100%)",

    warning: "hsl(36, 60%, 55%)",
    warningLight: "hsl(36, 60%, 15%)",
    warningForeground: "hsl(0, 0%, 5%)",

    error: "hsl(10, 70%, 55%)",
    errorLight: "hsl(10, 70%, 15%)",
    errorForeground: "hsl(0, 0%, 100%)",

    info: "hsl(32, 60%, 55%)",
    infoLight: "hsl(32, 60%, 15%)",
    infoForeground: "hsl(0, 0%, 100%)",

    overlay: "rgba(0, 0, 0, 0.7)",
    overlayLight: "rgba(0, 0, 0, 0.5)",
    overlayDark: "rgba(0, 0, 0, 0.9)",
  },
} as const;