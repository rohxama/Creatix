export const CAFE_INFO = {
  name: "Creatix Cafe",
  tagline: "Premium Coffee Experience",
  description:
    "Welcome to Creatix Cafe, where we serve the finest coffee and pastries in a cozy atmosphere.",
  address: {
    street: "123 Coffee Lane",
    city: "Coffeeville",
    state: "CA",
    zip: "90210",
    country: "USA",
  },
  phone: "+1 (555) 123-4567",
  email: "hello@creatixcafe.com",
  website: "https://creatixcafe.com",
  location: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
  hours: {
    monday: { open: "7:00 AM", close: "8:00 PM" },
    tuesday: { open: "7:00 AM", close: "8:00 PM" },
    wednesday: { open: "7:00 AM", close: "8:00 PM" },
    thursday: { open: "7:00 AM", close: "8:00 PM" },
    friday: { open: "7:00 AM", close: "9:00 PM" },
    saturday: { open: "8:00 AM", close: "9:00 PM" },
    sunday: { open: "8:00 AM", close: "6:00 PM" },
  },
  social: {
    instagram: "https://instagram.com/creatixcafe",
    facebook: "https://facebook.com/creatixcafe",
    twitter: "https://twitter.com/creatixcafe",
  },
} as const;