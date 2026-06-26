// UI Types for frontend only
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: string;
  isAvailable: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  preparationTime: number;
  calories?: number;
  rating?: number;
  reviewCount?: number;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  icon?: string;
  sortOrder: number;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}