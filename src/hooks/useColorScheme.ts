import { useColorScheme as useRNColorScheme } from "react-native";

export function useColorScheme() {
  return useRNColorScheme() ?? "light";
}

export function useIsDark() {
  return useColorScheme() === "dark";
}