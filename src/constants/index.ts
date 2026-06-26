export const APP_NAME = "CafeApp";
export const APP_VERSION = "1.0.0";

export const COLORS = {
  primary: {
    50: "#fdf8f3",
    100: "#f9edd9",
    200: "#f2d7b0",
    300: "#e9bb7d",
    400: "#df9748",
    500: "#d77c26",
    600: "#c8641c",
    700: "#a64d19",
    800: "#853e1c",
    900: "#6b341a",
    950: "#3a190b",
  },
  accent: {
    500: "#22c55e",
  },
  coffee: {
    50: "#faf6f1",
    500: "#bc7a3f",
    900: "#5f3626",
  },
  cream: {
    50: "#fefcf7",
    500: "#eab45c",
  },
} as const;

export const FONTS = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  semibold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
  pacifico: "Pacifico_400Regular",
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BORDER_RADIUS = {
  sm: 6,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const SHADOWS = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;