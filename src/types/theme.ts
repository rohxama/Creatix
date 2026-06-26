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
  success: string;
  warning: string;
  info: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  isDark: boolean;
}