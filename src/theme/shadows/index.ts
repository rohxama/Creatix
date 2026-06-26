/**
 * Creatix Cafe Design System - Shadows & Elevation
 * 
 * Platform-aware shadow system for iOS and Android
 */

import { Platform, type ViewStyle } from "react-native";

// Base Shadow Tokens
export const shadowTokens = {
  none: {
    shadowOpacity: 0,
  },
  xs: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 12,
  },
  "2xl": {
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.2,
    shadowRadius: 32,
    elevation: 16,
  },
} as const;

// Platform-Specific Shadows
const createPlatformShadow = (
  ios: { shadowColor: string; shadowOffset: { width: number; height: number }; shadowOpacity: number; shadowRadius: number },
  androidElevation: number
): ViewStyle => {
  if (Platform.OS === "ios") {
    return ios;
  }
  return { elevation: androidElevation };
};

// Semantic Shadows (Component-Specific)
export const shadows = {
  // Card Shadows
  card: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
    },
    3
  ),
  cardHover: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 12,
    },
    6
  ),
  cardPressed: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
    },
    2
  ),

  // Button Shadows
  button: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    3
  ),
  buttonHover: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    },
    6
  ),
  buttonPressed: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    1
  ),

  // FAB Shadows
  fab: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
    },
    8
  ),
  fabHover: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.25,
      shadowRadius: 16,
    },
    12
  ),

  // Bottom Sheet Shadows
  bottomSheet: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.15,
      shadowRadius: 16,
    },
    8
  ),

  // Modal Shadows
  modal: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.25,
      shadowRadius: 32,
    },
    16
  ),

  // Input Shadows
  input: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    1
  ),
  inputFocus: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    3
  ),

  // Chip Shadows
  chip: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    1
  ),

  // Header Shadows
  header: createPlatformShadow(
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    },
    3
  ),
} as const;

export type ShadowToken = keyof typeof shadowTokens;
export type SemanticShadow = keyof typeof shadows;