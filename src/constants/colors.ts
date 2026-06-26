import { palette } from "@/theme/colors";

export const COLORS = {
  primary: palette.warmBrown[600],
  accent: palette.terracotta[500],
  coffee: palette.coffee[600],
  cream: palette.cream[100],
  neutral: palette.neutral[500],
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",
} as const;

export type ColorKey = keyof typeof COLORS;
