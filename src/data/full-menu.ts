/**
 * Full menu data sourced from normalized menu structure
 * Re-exported for backward compatibility with existing pages
 */

import { restaurantInfo, categories, getItemsByCategory } from "./index";

export interface FullMenuItem {
  id: string;
  name: string;
  priceGbp: number;
  description: string;
  ratingPercent: number | null;
  reviewCount: number | null;
  spiceLevel?: "Mild" | "Medium" | "Hot" | "Very Hot";
}

export interface FullMenuCategory {
  slug: string;
  label: string;
  items: FullMenuItem[];
}

export interface RestaurantProfile {
  name: string;
  address: string;
  phone?: string;
  cuisine: string[];
  source: string;
  sourceUrl: string;
  openingHours: string;
  minimumOrder: string;
  deliveryFee: string;
  rating: string;
}

export const restaurantProfile: RestaurantProfile = {
  name: restaurantInfo.name,
  address: restaurantInfo.address,
  cuisine: restaurantInfo.cuisine,
  source: restaurantInfo.source,
  sourceUrl: restaurantInfo.source_url,
  openingHours: restaurantInfo.opening_hours,
  minimumOrder: restaurantInfo.minimum_order,
  deliveryFee: restaurantInfo.delivery_fee,
  rating: restaurantInfo.rating,
};

/**
 * Generate full menu categories from normalized data
 */
export const fullMenuCategories: FullMenuCategory[] = categories.map((category) => {
  const categoryItems = getItemsByCategory(category.id);

  return {
    slug: category.slug,
    label: category.name,
    items: categoryItems.map((item) => ({
      id: item.id,
      name: item.name,
      priceGbp: item.price_gbp,
      description: item.description,
      ratingPercent: item.rating_percent,
      reviewCount: item.review_count,
      spiceLevel: item.spice_level,
    })),
  };
});
