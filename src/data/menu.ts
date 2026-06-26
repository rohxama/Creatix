export const CATEGORIES = [
  { id: "all", name: "All", icon: "grid" },
  { id: "coffee", name: "Coffee", icon: "coffee" },
  { id: "tea", name: "Tea", icon: "cup-soda" },
  { id: "pastries", name: "Pastries", icon: "cake" },
  { id: "snacks", name: "Snacks", icon: "sandwich" },
] as const;

export const POPULAR_ITEMS = [
  {
    id: "1",
    name: "Espresso",
    description: "Rich and bold single-origin espresso",
    price: 3.5,
    category: "coffee",
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Classic Italian coffee with steamed milk",
    price: 4.5,
    category: "coffee",
  },
  {
    id: "3",
    name: "Matcha Latte",
    description: "Premium Japanese matcha with oat milk",
    price: 5.0,
    category: "tea",
  },
  {
    id: "4",
    name: "Croissant",
    description: "Buttery French croissant",
    price: 3.0,
    category: "pastries",
  },
] as const;

export const SPECIAL_OFFERS = [
  {
    id: "1",
    title: "Happy Hour",
    description: "20% off all drinks from 2-4 PM",
    discount: 20,
    validUntil: "2026-12-31",
  },
  {
    id: "2",
    title: "First Order",
    description: "Get 15% off your first order",
    discount: 15,
    validUntil: "2026-12-31",
  },
] as const;