/**
 * Core types for restaurant menu system
 */

export interface RestaurantInfo {
  name: string;
  address: string;
  cuisine: string[];
  source: string;
  source_url: string;
  opening_hours: string;
  minimum_order: string;
  delivery_fee: string;
  rating: string;
  restaurant_image: string;
}

export interface MenuItem {
  id: string; // Unique identifier
  name: string;
  price_gbp: number;
  description: string;
  category_id: string;
  rating_percent: number | null;
  review_count: number | null;
  image_url: string;
  spice_level?: "Mild" | "Medium" | "Hot" | "Very Hot";
  tags?: string[]; // For filtering/search
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export interface MenuData {
  restaurant: RestaurantInfo;
  categories: MenuCategory[];
  items: MenuItem[];
}

export interface FeaturedMenuItem extends MenuItem {
  featured: boolean;
  order: number;
}
