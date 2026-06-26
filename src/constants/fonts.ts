export const FONTS = {
  regular: "Poppins_400Regular",
  medium: "Poppins_500Medium",
  semibold: "Poppins_600SemiBold",
  bold: "Poppins_700Bold",
  pacifico: "Pacifico_400Regular",
} as const;

export type FontKey = keyof typeof FONTS;