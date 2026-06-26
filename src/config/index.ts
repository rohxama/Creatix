export const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || "";

export const SUPABASE_CONFIG = {
  url: process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  anonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
} as const;

export const APP_CONFIG = {
  name: "CafeApp",
  version: "1.0.0",
  bundleIdentifier: "com.cafe.app",
  deepLinkScheme: "cafeapp",
} as const;