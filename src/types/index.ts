export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: Array<"spicy" | "vegetarian" | "chef-special" | "new">;
  image: string;
}

export interface MenuCategory {
  slug: string;
  label: string;
  items: MenuItem[];
}

export interface StoryBeat {
  year: string;
  title: string;
  body: string;
}

export interface RestaurantProfile {
  name: string;
  address: string;
  phone: string;
  cuisine: string[];
  source: string;
  sourceUrl: string;
  openingHours: string;
  minimumOrder: string;
  deliveryFee: string;
  rating: string;
}

export interface FullMenuItem {
  id: string;
  name: string;
  description: string;
  priceGbp: number;
  ratingPercent: number | null;
  reviewCount: number | null;
  spiceLevel?: string;
}

export interface FullMenuCategory {
  slug: string;
  label: string;
  items: FullMenuItem[];
}
