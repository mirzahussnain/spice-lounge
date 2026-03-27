/**
 * Central data exports and utilities
 */

import { restaurantInfo } from "./restaurant";
import { categories } from "./categories";
import { items } from "./items";
import type { MenuItem, MenuCategory } from "./types";

/**
 * All menu data organized by category
 */
export const menuData = {
  restaurant: restaurantInfo,
  categories,
  items,
};

/**
 * Get items by category ID
 */
export function getItemsByCategory(categoryId: string): MenuItem[] {
  return items.filter((item) => item.category_id === categoryId);
}

/**
 * Get category by ID
 */
export function getCategoryById(categoryId: string): MenuCategory | undefined {
  return categories.find((cat) => cat.id === categoryId);
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return categories.find((cat) => cat.slug === slug);
}

/**
 * Get item by ID
 */
export function getItemById(itemId: string): MenuItem | undefined {
  return items.find((item) => item.id === itemId);
}

/**
 * Get featured items (high ratings, many reviews)
 * Returns top items from each category
 */
export function getFeaturedItems(limit: number = 12): MenuItem[] {
  return items
    .filter((item) => item.rating_percent !== null && item.review_count !== null)
    .sort(
      (a, b) =>
        (b.rating_percent || 0) * (b.review_count || 0) -
        (a.rating_percent || 0) * (a.review_count || 0)
    )
    .slice(0, limit);
}

/**
 * Get featured items per category
 * Returns top N items from each category
 */
export function getFeaturedItemsPerCategory(
  perCategory: number = 2
): Record<string, MenuItem[]> {
  const result: Record<string, MenuItem[]> = {};

  categories.forEach((category) => {
    const categoryItems = getItemsByCategory(category.id)
      .filter((item) => item.rating_percent !== null && item.review_count !== null)
      .sort(
        (a, b) =>
          (b.rating_percent || 0) * (b.review_count || 0) -
          (a.rating_percent || 0) * (a.review_count || 0)
      )
      .slice(0, perCategory);

    result[category.id] = categoryItems;
  });

  return result;
}

/**
 * Search items by name, description, or tags
 */
export function searchItems(query: string): MenuItem[] {
  const lowerQuery = query.toLowerCase();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      (item.tags && item.tags.some((tag) => tag.includes(lowerQuery)))
  );
}

/**
 * Filter items by price range
 */
export function filterByPrice(
  minPrice: number,
  maxPrice: number
): MenuItem[] {
  return items.filter(
    (item) => item.price_gbp >= minPrice && item.price_gbp <= maxPrice
  );
}

/**
 * Filter items by spice level
 */
export function filterBySpiceLevel(
  spiceLevel: "Mild" | "Medium" | "Hot" | "Very Hot"
): MenuItem[] {
  return items.filter((item) => item.spice_level === spiceLevel);
}

/**
 * Filter vegetarian items
 */
export function getVegetarianItems(): MenuItem[] {
  return items.filter((item) =>
    item.tags?.some((tag) =>
      ["vegetarian", "vegan"].includes(tag.toLowerCase())
    )
  );
}

/**
 * Get all categories with item counts
 */
export function getCategoriesWithCounts(): Array<MenuCategory & { itemCount: number }> {
  return categories.map((category) => ({
    ...category,
    itemCount: getItemsByCategory(category.id).length,
  }));
}

// Re-export types
export type { MenuItem, MenuCategory, MenuData, RestaurantInfo } from "./types";

// Re-export individual data
export { restaurantInfo, categories, items };
