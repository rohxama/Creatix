/**
 * Creatix Cafe Design System - Global Styles
 */

import { StyleSheet } from "react-native";
import { typography } from "@/theme/typography";
import { spacing, semanticSpacing } from "@/theme/spacing";
import { borderRadius } from "@/theme/radius";

export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    paddingHorizontal: semanticSpacing.screenPaddingHorizontal,
  },

  // Layout styles
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  flex1: {
    flex: 1,
  },
  wFull: {
    width: "100%",
  },

  // Spacing styles
  gapXs: {
    gap: spacing[2],
  },
  gapSm: {
    gap: spacing[3],
  },
  gapMd: {
    gap: spacing[4],
  },
  gapLg: {
    gap: spacing[6],
  },
  gapXl: {
    gap: spacing[8],
  },

  // Padding styles
  pXs: {
    padding: spacing[2],
  },
  pSm: {
    padding: spacing[3],
  },
  pMd: {
    padding: spacing[4],
  },
  pLg: {
    padding: spacing[6],
  },
  pXl: {
    padding: spacing[8],
  },

  // Margin styles
  mXs: {
    margin: spacing[2],
  },
  mSm: {
    margin: spacing[4],
  },
  mMd: {
    margin: spacing[6],
  },
  mLg: {
    margin: spacing[8],
  },
  mXl: {
    margin: spacing[12],
  },

  // Typography styles
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },

  // Overflow
  overflowHidden: {
    overflow: "hidden",
  },
  overflowVisible: {
    overflow: "visible",
  },

  // Shadow
  shadowSm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  shadowMd: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  shadowLg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
} as const);