export const translations = {
  en: {
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      retry: "Retry",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      add: "Add",
      remove: "Remove",
      back: "Back",
      next: "Next",
      done: "Done",
    },
    auth: {
      login: "Login",
      register: "Register",
      logout: "Logout",
      email: "Email",
      password: "Password",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
    },
    home: {
      greeting: "Good",
      welcome: "Welcome to Creatix Cafe",
      featured: "Featured Items",
      popular: "Popular Items",
      viewAll: "View All",
    },
    menu: {
      title: "Our Menu",
      search: "Search menu...",
      all: "All",
      coffee: "Coffee",
      tea: "Tea",
      pastries: "Pastries",
      snacks: "Snacks",
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty",
      total: "Total",
      checkout: "Checkout",
    },
    profile: {
      title: "Profile",
      settings: "Settings",
      orders: "My Orders",
      favorites: "Favorites",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;