/**
 * Featured menu data for carousel display
 * Pulls from the main menu items organized by category
 */

import { categories, getItemsByCategory } from "./index";
import type { MenuItem } from "./types";

interface CarouselCategory {
  id: string;
  slug: string;
  label: string;
  items: Array<{
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    rating: number | null;
    reviews: number | null;
    tags: string[];
  }>;
}

const scoreItem = (item: MenuItem) => {
  const rating = item.rating_percent ?? 0;
  const reviews = item.review_count ?? 0;
  return rating * 1000 + reviews;
};

/**
 * Infer tags based on item properties
 */
function inferTags(item: MenuItem): string[] {
  const tags: string[] = [];
  const text = `${item.name} ${item.description}`.toLowerCase();

  // Rating-based tags
  if (item.rating_percent !== null && item.rating_percent >= 85) {
    tags.push("popular");
  }

  // Category-based tags
  if (item.tags && item.tags.includes("vegetarian")) {
    tags.push("vegetarian");
  }

  if (item.tags && item.tags.some((t: string) => t.includes("spicy"))) {
    tags.push("spicy");
  }

  // If no tags assigned, add a default
  if (tags.length === 0) {
    tags.push("chef-special");
  }

  return tags.slice(0, 2); // Limit to 2 tags
}

function getTopCategoryItems(categoryId: string, limit: number): MenuItem[] {
  return getItemsByCategory(categoryId)
    .slice()
    .sort((a, b) => scoreItem(b) - scoreItem(a))
    .slice(0, limit);
}

/**
 * Get featured items per category for the carousel (top 3 items per category)
 */
export function getFeaturedMenuCategories(): CarouselCategory[] {
  return categories
    .map((cat) => {
      const topItems = getTopCategoryItems(cat.id, 3);

      return {
        id: cat.id,
        slug: cat.slug,
        label: cat.name,
        items: topItems.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: `£${item.price_gbp.toFixed(2)}`,
          image: item.image_url,
          rating: item.rating_percent,
          reviews: item.review_count,
          tags: inferTags(item),
        })),
      };
    })
    .filter((cat) => cat.items.length >= 3);
}

/**
 * Legacy export for backward compatibility with MenuSection
 */
export const menuCategories = getFeaturedMenuCategories();
