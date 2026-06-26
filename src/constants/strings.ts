export const STRINGS = {
  APP_NAME: "Creatix Cafe",
  APP_TAGLINE: "Premium Coffee Experience",

  // Auth
  LOGIN_TITLE: "Welcome Back",
  LOGIN_SUBTITLE: "Sign in to continue",
  REGISTER_TITLE: "Create Account",
  REGISTER_SUBTITLE: "Join us for premium coffee",
  FORGOT_PASSWORD_TITLE: "Forgot Password",
  FORGOT_PASSWORD_SUBTITLE: "Enter your email to reset password",

  // Home
  HOME_GREETING: "Good",
  HOME_WELCOME: "Welcome to Creatix Cafe",
  HOME_FEATURED: "Featured Items",
  HOME_POPULAR: "Popular Items",
  HOME_VIEW_ALL: "View All",

  // Menu
  MENU_TITLE: "Our Menu",
  MENU_SEARCH: "Search menu...",
  MENU_ALL: "All",
  MENU_COFFEE: "Coffee",
  MENU_TEA: "Tea",
  MENU_PASTRIES: "Pastries",
  MENU_SNACKS: "Snacks",

  // Cart
  CART_TITLE: "Your Cart",
  CART_EMPTY: "Your cart is empty",
  CART_ADD_ITEMS: "Add items to get started",
  CART_TOTAL: "Total",
  CART_CHECKOUT: "Checkout",
  CART_CLEAR: "Clear Cart",

  // Profile
  PROFILE_TITLE: "Profile",
  PROFILE_SETTINGS: "Settings",
  PROFILE_ORDERS: "My Orders",
  PROFILE_FAVORITES: "Favorites",
  PROFILE_VISIT_US: "Visit Us",
  PROFILE_CONTACT: "Contact",
  PROFILE_LOGOUT: "Logout",

  // Orders
  ORDERS_TITLE: "My Orders",
  ORDERS_EMPTY: "No orders yet",
  ORDERS_START_ORDER: "Start your first order",
  ORDER_STATUS: "Order Status",
  ORDER_PREPARING: "Preparing",
  ORDER_READY: "Ready for pickup",
  ORDER_COMPLETED: "Completed",

  // Common
  LOADING: "Loading...",
  ERROR: "Something went wrong",
  RETRY: "Retry",
  CANCEL: "Cancel",
  CONFIRM: "Confirm",
  SAVE: "Save",
  DELETE: "Delete",
  EDIT: "Edit",
  ADD: "Add",
  REMOVE: "Remove",
  BACK: "Back",
  NEXT: "Next",
  DONE: "Done",
  OK: "OK",
  YES: "Yes",
  NO: "No",

  // Errors
  ERROR_NETWORK: "Network error. Please check your connection.",
  ERROR_AUTH: "Authentication failed. Please try again.",
  ERROR_GENERIC: "An unexpected error occurred.",
  ERROR_REQUIRED: "This field is required.",
  ERROR_EMAIL: "Please enter a valid email address.",
  ERROR_PASSWORD: "Password must be at least 8 characters.",
} as const;

export type StringKey = keyof typeof STRINGS;