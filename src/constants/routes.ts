export const ROUTES = {
  // Tabs
  HOME: "/(tabs)",
  MENU: "/(tabs)/menu",
  CART: "/(tabs)/cart",
  ORDERS: "/(tabs)/orders",
  PROFILE: "/(tabs)/profile",

  // Stack
  PRODUCT_DETAILS: "/(stack)/product-details",
  FAVORITES: "/(stack)/favorites",
  REVIEWS: "/(stack)/reviews",
  VISIT_US: "/(stack)/visit-us",
  CONTACT: "/(stack)/contact",
  SETTINGS: "/(stack)/settings",
  EDIT_PROFILE: "/(stack)/edit-profile",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];