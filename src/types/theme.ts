export type Theme = "light" | "dark" | "system";

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  coffee: string;
  cream: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  isDark: boolean;
}

export const lightTheme: ThemeColors = {
  background: "#fefcf7",
  foreground: "#1a1a1a",
  card: "#ffffff",
  cardForeground: "#1a1a1a",
  primary: "#6b341a",
  primaryForeground: "#ffffff",
  secondary: "#f9edd9",
  secondaryForeground: "#6b341a",
  muted: "#f5f5f5",
  mutedForeground: "#737373",
  accent: "#22c55e",
  accentForeground: "#ffffff",
  destructive: "#ef4444",
  destructiveForeground: "#ffffff",
  border: "#e5e5e5",
  input: "#e5e5e5",
  ring: "#6b341a",
  coffee: "#bc7a3f",
  cream: "#f9edd9",
};

export const darkTheme: ThemeColors = {
  background: "#0a0a0a",
  foreground: "#fafafa",
  card: "#1a1a1a",
  cardForeground: "#fafafa",
  primary: "#df9748",
  primaryForeground: "#0a0a0a",
  secondary: "#262626",
  secondaryForeground: "#fafafa",
  muted: "#262626",
  mutedForeground: "#a3a3a3",
  accent: "#22c55e",
  accentForeground: "#ffffff",
  destructive: "#ef4444",
  destructiveForeground: "#ffffff",
  border: "#333333",
  input: "#333333",
  ring: "#df9748",
  coffee: "#df9748",
  cream: "#262626",
};