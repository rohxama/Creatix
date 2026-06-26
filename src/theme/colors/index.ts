/**
 * Creatix Cafe Design System - Color Exports
 */

export { palette } from "./palette";
export { lightColors } from "./light";
export { darkColors } from "./dark";

import { lightColors } from "./light";
import { darkColors } from "./dark";

export type ThemeColors = typeof lightColors;

export const colors = {
  light: lightColors,
  dark: darkColors,
} as const;