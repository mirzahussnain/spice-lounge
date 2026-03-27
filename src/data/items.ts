/**
 * Menu items
 * Normalized data structure with unique IDs and category references
 */

import { MenuItem } from "./types";

export const items: MenuItem[] = [
  // STARTERS
  {
    id: "item-001",
    name: "Chicken Pakora (Portion)",
    price_gbp: 5.99,
    description: "Crispy fried chicken in a spicy batter.",
    category_id: "starters",
    rating_percent: 85,
    review_count: 28,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_pakora-MB21.jpg",
    tags: ["crispy", "chicken", "fried"],
  },
  {
    id: "item-002",
    name: "Chicken Sheekh Kebab (2 pieces)",
    price_gbp: 6.49,
    description:
      "Finely minced chicken mixed with aromatic spices, herbs and seasoning, moulded onto skewers and grilled until charred and juicy.",
    category_id: "starters",
    rating_percent: 93,
    review_count: 15,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Awadhi_seekh_kebab.jpg",
    tags: ["grilled", "chicken", "kebab"],
  },
  {
    id: "item-003",
    name: "Chicken Tikka",
    price_gbp: 7.99,
    description:
      "Tender chunks of chicken marinated in a blend of yogurt and spices, grilled to perfection.",
    category_id: "starters",
    rating_percent: 91,
    review_count: 12,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mughlai_Tikka.JPG",
    tags: ["tandoori", "chicken", "marinated"],
  },
  {
    id: "item-004",
    name: "Chicken Wings (Portion)",
    price_gbp: 7.99,
    description:
      "Crispy and succulent chicken wings marinated in spicy and flavourful seasoning, deep-fried until golden brown.",
    category_id: "starters",
    rating_percent: 100,
    review_count: 7,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Skewer_with_marinated_chicken_wings_bbq_barbeque.jpg",
    tags: ["crispy", "chicken", "wings"],
  },
  {
    id: "item-005",
    name: "Fish Pakora (Portion)",
    price_gbp: 5.2,
    description:
      "Tender fish pieces marinated in a spicy batter and deep-fried until crispy and golden brown.",
    category_id: "starters",
    rating_percent: 86,
    review_count: 22,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_pakauda_avadhi_cuisine_1q.jpg",
    tags: ["fish", "fried", "seafood"],
  },
  {
    id: "item-006",
    name: "Lamb Chops (3 pieces)",
    price_gbp: 8.99,
    description:
      "Succulent and tender cuts of lamb marinated in a flavorful blend of spices and herbs, grilled to perfection.",
    category_id: "starters",
    rating_percent: 90,
    review_count: 10,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mughlai_Mutton_Chop_Kababs.jpg",
    tags: ["lamb", "grilled", "chops"],
  },
  {
    id: "item-007",
    name: "Lamb Chops (5 pieces)",
    price_gbp: 11.99,
    description:
      "Succulent and tender cuts of lamb marinated in a flavorful blend of spices and herbs, grilled to perfection.",
    category_id: "starters",
    rating_percent: 84,
    review_count: 13,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mughlai_Mutton_Chop_Kababs.jpg",
    tags: ["lamb", "grilled", "chops"],
  },
  {
    id: "item-008",
    name: "Lamb Sheekh Kebab (2 pieces)",
    price_gbp: 6.2,
    description:
      "Finely minced lamb mixed with spices and herbs, moulded onto skewers and grilled until tender and juicy.",
    category_id: "starters",
    rating_percent: 60,
    review_count: 5,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton_Seekh_Kabab.JPG",
    tags: ["lamb", "kebab", "grilled"],
  },
  {
    id: "item-009",
    name: "Masala Fish & Naan",
    price_gbp: 7.5,
    description:
      "Tender fish fillet marinated in aromatic spices and grilled to perfection, served with freshly baked naan bread.",
    category_id: "starters",
    rating_percent: 82,
    review_count: 17,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Naan_with_fish_curry_avadhi_cuisine.jpg",
    tags: ["fish", "seafood", "naan"],
  },
  {
    id: "item-010",
    name: "Tandoori Chicken (Half)",
    price_gbp: 9.99,
    description:
      "Tender chicken marinated in yogurt and spices, cooked in a traditional clay oven until charred and flavourful. Half portion.",
    category_id: "starters",
    rating_percent: 71,
    review_count: 7,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tanduri_chicken_avadhi_cuisine.jpg",
    tags: ["tandoori", "chicken"],
  },
  {
    id: "item-011",
    name: "Tandoori Chicken (Full)",
    price_gbp: 12.99,
    description:
      "Tender chicken marinated in yogurt and spices, cooked in a traditional clay oven until charred and flavourful. Full portion.",
    category_id: "starters",
    rating_percent: 92,
    review_count: 14,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tanduri_chicken_avadhi_cuisine.jpg",
    tags: ["tandoori", "chicken"],
  },

  // VEG STARTERS
  {
    id: "item-012",
    name: "Onion Bhaji (4 pieces)",
    price_gbp: 4.49,
    description:
      "Sliced onions mixed with gram flour, cumin, coriander and chilli, deep-fried until crispy and golden brown. Served with tamarind and mint chutney.",
    category_id: "veg-starters",
    rating_percent: 92,
    review_count: 13,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Samosas_and_pakoras_in_Jaipur,_India.jpg",
    tags: ["vegetarian", "vegan", "fried", "crispy"],
  },
  {
    id: "item-013",
    name: "Vegetable Pakoras",
    price_gbp: 5.2,
    description: "Crispy fried vegetable fritters.",
    category_id: "veg-starters",
    rating_percent: 83,
    review_count: 6,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bhajias.JPG",
    tags: ["vegetarian", "vegan", "fried"],
  },

  // MIX GRILL PLATTERS
  {
    id: "item-014",
    name: "Mix Grill Small",
    price_gbp: 13.99,
    description:
      "Chicken tikka, chicken wings, chicken sheekh kebab, lamb sheekh kebab.",
    category_id: "mix-grill",
    rating_percent: 100,
    review_count: 4,
    image_url:
      "https://spiceloungeerdington.co.uk/wp-content/uploads/2024/03/1-17.jpg",
    tags: ["combination", "grill", "platter"],
  },
  {
    id: "item-015",
    name: "Mix Grill Medium",
    price_gbp: 25.99,
    description:
      "Chicken tikka, chicken seekh kebab, masala fish, chicken wings, lamb chop.",
    category_id: "mix-grill",
    rating_percent: 83,
    review_count: 6,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mughlai_Platter.jpg",
    tags: ["combination", "grill", "platter"],
  },
  {
    id: "item-016",
    name: "Mix Grill Large",
    price_gbp: 35.99,
    description:
      "Chicken tikka, chicken and lamb seekh kebab, half tandoori chicken, chicken wings, lamb chops, fish — served with 2 naan.",
    category_id: "mix-grill",
    rating_percent: 83,
    review_count: 12,
    image_url:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/d8/c9/63/tandoori-mixgrill.jpg?w=900&h=500&s=1",
    tags: ["combination", "grill", "platter"],
  },

  // TRADITIONAL CURRY
  {
    id: "item-017",
    name: "Chicken Balti",
    price_gbp: 11.5,
    description:
      "Tender chicken cooked with cumin, coriander, turmeric and garam masala in a rich and spicy balti curry.",
    category_id: "traditional-curry",
    rating_percent: 75,
    review_count: 33,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Curry_1.JPG",
    spice_level: "Hot",
    tags: ["curry", "chicken", "spicy"],
  },
  {
    id: "item-018",
    name: "Meat Balti",
    price_gbp: 12.25,
    description:
      "Tender meat cooked with cumin, coriander, turmeric and garam masala in a rich and spicy balti curry.",
    category_id: "traditional-curry",
    rating_percent: 90,
    review_count: 10,
    image_url:
      "https://royalspicelounge.com/wp-content/uploads/2025/07/keema-balti.jpg",
    spice_level: "Hot",
    tags: ["curry", "meat", "spicy"],
  },
  {
    id: "item-019",
    name: "Mince Meat with Peas",
    price_gbp: 12.25,
    description:
      "Minced meat cooked with peas in a flavourful gravy infused with aromatic spices.",
    category_id: "traditional-curry",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bihari_Keema.JPG",
    tags: ["curry", "meat"],
  },
  {
    id: "item-020",
    name: "Meat Achari",
    price_gbp: 12.25,
    description:
      "Tender pieces of meat cooked with pickling spices such as mustard seeds, fenugreek and fennel — a tangy and spicy curry.",
    category_id: "traditional-curry",
    rating_percent: 80,
    review_count: 5,
    image_url:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/57/b0/5b/achari-gosht.jpg?w=900&h=500&s=1",
    spice_level: "Hot",
    tags: ["curry", "meat", "tangy"],
  },
  {
    id: "item-021",
    name: "Chicken Korma",
    price_gbp: 11.5,
    description:
      "Mild and creamy curry with tender chicken simmered in a rich and luxurious sauce.",
    category_id: "traditional-curry",
    rating_percent: 64,
    review_count: 17,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Navratan_Korma_(Mughal_Kitchen).JPG",
    spice_level: "Mild",
    tags: ["curry", "chicken", "creamy"],
  },

  // TANDOORI DISHES
  {
    id: "item-022",
    name: "Tandoori Chicken (Half)",
    price_gbp: 6.5,
    description:
      "Chicken marinated in yogurt and spices, cooked in a traditional clay oven. Half portion.",
    category_id: "tandoori",
    rating_percent: 75,
    review_count: 4,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tanduri_chicken_avadhi_cuisine.jpg",
    tags: ["tandoori", "chicken", "grilled"],
  },
  {
    id: "item-023",
    name: "Tandoori Chicken (Full)",
    price_gbp: 8.5,
    description:
      "Chicken marinated in yogurt and spices, cooked in a traditional clay oven. Full portion.",
    category_id: "tandoori",
    rating_percent: 90,
    review_count: 11,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tanduri_chicken_avadhi_cuisine.jpg",
    tags: ["tandoori", "chicken", "grilled"],
  },
  {
    id: "item-024",
    name: "Lamb Chops (3 pieces)",
    price_gbp: 6.5,
    description: "Marinated and grilled lamb chops. 3-piece portion.",
    category_id: "tandoori",
    rating_percent: 66,
    review_count: 6,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mughlai_Mutton_Chop_Kababs.jpg",
    tags: ["tandoori", "lamb", "grilled"],
  },
  {
    id: "item-025",
    name: "Lamb Chops (5 pieces)",
    price_gbp: 9.5,
    description: "Marinated and grilled lamb chops. 5-piece portion.",
    category_id: "tandoori",
    rating_percent: 100,
    review_count: 11,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mughlai_Mutton_Chop_Kababs.jpg",
    tags: ["tandoori", "lamb", "grilled"],
  },
  {
    id: "item-026",
    name: "Chicken Shashlick",
    price_gbp: 8.0,
    description:
      "Chicken grilled with peppers, onions and tomatoes. Full portion.",
    category_id: "tandoori",
    rating_percent: 100,
    review_count: 3,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Joojeh-kabab.JPG",
    tags: ["tandoori", "chicken", "grilled"],
  },

  // SIGNATURE DISHES
  {
    id: "item-027",
    name: "Chicken Biryani",
    price_gbp: 8.5,
    description: "Classic aromatic chicken biryani. Large portion.",
    category_id: "signature",
    rating_percent: 71,
    review_count: 57,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Hyderabadi_Biryani.JPG",
    tags: ["biryani", "chicken", "rice"],
  },
  {
    id: "item-028",
    name: "Lamb Biryani",
    price_gbp: 9.5,
    description: "Classic aromatic lamb biryani. Large portion.",
    category_id: "signature",
    rating_percent: 85,
    review_count: 34,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bombay_Biryani..JPG",
    tags: ["biryani", "lamb", "rice"],
  },
  {
    id: "item-029",
    name: "Garlic Chilli Chicken",
    price_gbp: 12.5,
    description: "Chicken cooked with garlic and chilli. Large portion.",
    category_id: "signature",
    rating_percent: 81,
    review_count: 22,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Ginger.JPG",
    spice_level: "Hot",
    tags: ["chicken", "spicy", "garlic"],
  },
  {
    id: "item-030",
    name: "Butter Chicken",
    price_gbp: 12.5,
    description: "Rich and creamy butter chicken curry. Large portion.",
    category_id: "signature",
    rating_percent: 87,
    review_count: 16,
    image_url:
      "https://fatimacooks.net/wp-content/uploads/2023/01/The-Only-Butter-Chicken-Recipe-You-Need.jpg",
    tags: ["chicken", "curry", "creamy"],
  },
  {
    id: "item-031",
    name: "Chicken Tikka Masala",
    price_gbp: 12.5,
    description:
      "Grilled chicken tikka in a rich and spiced masala sauce. Large portion.",
    category_id: "signature",
    rating_percent: 77,
    review_count: 9,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Curry.JPG",
    tags: ["chicken", "curry", "masala"],
  },
  {
    id: "item-032",
    name: "Lamb Chilli",
    price_gbp: 12.5,
    description:
      "Tender lamb cooked with chilli and aromatic spices. Large portion.",
    category_id: "signature",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Qeema_Hari_Mirch.jpg",
    spice_level: "Hot",
    tags: ["lamb", "spicy", "chilli"],
  },
  {
    id: "item-033",
    name: "Achari Chicken",
    price_gbp: 12.5,
    description:
      "Chicken cooked with mixed pickles and garnished with lemon. Large portion.",
    category_id: "signature",
    rating_percent: 100,
    review_count: 4,
    image_url:
      "https://fatimacooks.net/wp-content/uploads/2022/05/Achari-Chicken-Recipe.jpg",
    tags: ["chicken", "tangy", "spicy"],
  },
  {
    id: "item-034",
    name: "Chicken Pasanda",
    price_gbp: 12.5,
    description: "Mild creamy chicken curry. Large portion.",
    category_id: "signature",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Murg_Musallam.jpg",
    spice_level: "Mild",
    tags: ["chicken", "curry", "creamy"],
  },
  {
    id: "item-035",
    name: "Chicken Chilli",
    price_gbp: 12.5,
    description:
      "Chicken cooked with peas, green chillies and fresh ground spices and herbs. Large portion.",
    category_id: "signature",
    rating_percent: 80,
    review_count: 5,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Bhuna_Murgh.JPG",
    spice_level: "Hot",
    tags: ["chicken", "spicy", "chilli"],
  },

  // VEGETARIAN DISHES
  {
    id: "item-036",
    name: "Chana Masala Curry",
    price_gbp: 8.5,
    description:
      "Rich and aromatic North Indian-inspired curry made with chickpeas.",
    category_id: "vegetarian",
    rating_percent: 80,
    review_count: 10,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Boiled_Kabuli_Channa.JPG",
    tags: ["vegetarian", "vegan", "curry"],
  },
  {
    id: "item-037",
    name: "Bindi Masala (Okra Curry)",
    price_gbp: 8.5,
    description: "Tender okra in a rich, aromatic curry sauce.",
    category_id: "vegetarian",
    rating_percent: 100,
    review_count: 9,
    image_url:
      "https://fatimacooks.net/wp-content/uploads/2015/08/11830706_1506969942927075_1931173619_n.jpg",
    tags: ["vegetarian", "vegan", "curry"],
  },
  {
    id: "item-038",
    name: "Tarka Daal",
    price_gbp: 8.5,
    description:
      "Traditional lentil curry made with aromatic spices, tempered with cumin, garlic and red spices.",
    category_id: "vegetarian",
    rating_percent: 100,
    review_count: 18,
    image_url:
      "https://www.datocms-assets.com/138735/1728044318-vegantarkadhalrecipeh1x.jpg",
    tags: ["vegetarian", "vegan", "lentils"],
  },
  {
    id: "item-039",
    name: "Aloo Gobi Curry",
    price_gbp: 8.5,
    description: "Potato and cauliflower in a rich, aromatic curry sauce.",
    category_id: "vegetarian",
    rating_percent: 75,
    review_count: 4,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cauliflower_Potatoes_Curry.JPG",
    tags: ["vegetarian", "vegan", "curry"],
  },
  {
    id: "item-040",
    name: "Mushroom Masala Curry",
    price_gbp: 8.5,
    description:
      "Rich and aromatic curry made with mushrooms in a blend of spices.",
    category_id: "vegetarian",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Curry_1.JPG",
    tags: ["vegetarian", "vegan", "curry"],
  },
  {
    id: "item-041",
    name: "Daal Makhani",
    price_gbp: 8.5,
    description: "Black lentils and kidney beans in a rich, creamy sauce.",
    category_id: "vegetarian",
    rating_percent: 66,
    review_count: 9,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mutton_Daal_Gosht.jpg",
    tags: ["vegetarian", "lentils", "creamy"],
  },
  {
    id: "item-042",
    name: "Saag Aloo Curry",
    price_gbp: 8.5,
    description:
      "Spinach and potato curry with a rich, aromatic flavour.",
    category_id: "vegetarian",
    rating_percent: 75,
    review_count: 8,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Aalu_gobhi_avadhi_cuisine.jpg",
    tags: ["vegetarian", "vegan", "spinach"],
  },
  {
    id: "item-043",
    name: "Aloo Saag",
    price_gbp: 8.99,
    description: "Potato and spinach curry.",
    category_id: "vegetarian",
    rating_percent: 87,
    review_count: 8,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Aalu_gobhi_avadhi_cuisine.jpg",
    tags: ["vegetarian", "vegan", "spinach"],
  },
  {
    id: "item-044",
    name: "Bindi Masala",
    price_gbp: 8.99,
    description: "Okra cooked in an aromatic masala sauce.",
    category_id: "vegetarian",
    rating_percent: 88,
    review_count: 17,
    image_url:
      "https://greenbowl2soul.com/wp-content/uploads/2019/05/bhindi-masala.jpg",
    tags: ["vegetarian", "vegan", "curry"],
  },

  // RICE DISHES
  {
    id: "item-045",
    name: "Chicken Biryani",
    price_gbp: 7.98,
    description: "Aromatic chicken biryani — #1 most liked item.",
    category_id: "rice",
    rating_percent: 80,
    review_count: 102,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Hyderabadi_Biryani.JPG",
    tags: ["biryani", "chicken", "rice"],
  },
  {
    id: "item-046",
    name: "Lamb Biryani",
    price_gbp: 8.99,
    description: "Aromatic lamb biryani.",
    category_id: "rice",
    rating_percent: 81,
    review_count: 83,
    image_url:
      "https://fatimacooks.net/wp-content/uploads/2015/08/9F5DA56C-AF97-4098-BEA9-A6FD487761AA-scaled.jpeg",
    tags: ["biryani", "lamb", "rice"],
  },
  {
    id: "item-047",
    name: "Boiled Rice",
    price_gbp: 4.5,
    description: "Plain steamed boiled rice.",
    category_id: "rice",
    rating_percent: 100,
    review_count: 10,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Cooked_rice.jpg",
    tags: ["rice", "vegan", "plain"],
  },

  // BREADS & NAANS
  {
    id: "item-048",
    name: "Naan",
    price_gbp: 2.0,
    description: "Freshly baked plain naan bread.",
    category_id: "breads",
    rating_percent: 84,
    review_count: 70,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lucknowi_Delicacy-_Sheermal,_Kulcha,_Naan.jpg",
    tags: ["bread", "naan", "vegetarian"],
  },
  {
    id: "item-049",
    name: "Garlic Naan",
    price_gbp: 2.98,
    description: "Freshly baked naan bread with garlic.",
    category_id: "breads",
    rating_percent: 78,
    review_count: 32,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Garlic_Butter_Naan_Food_by_Ms_Ujwala_Kasambe_DSCN1136_(1).jpg",
    tags: ["bread", "naan", "garlic"],
  },
  {
    id: "item-050",
    name: "Peshawari Naan",
    price_gbp: 2.98,
    description:
      "Sweet naan filled with coconut, almonds and sultanas.",
    category_id: "breads",
    rating_percent: 82,
    review_count: 17,
    image_url:
      "https://fatimacooks.net/wp-content/uploads/2020/03/Peshwari-Naan-Sweet-Coconut-Nan-Bread-480x270.jpg",
    tags: ["bread", "naan", "sweet"],
  },
  {
    id: "item-051",
    name: "Cheese Naan",
    price_gbp: 2.98,
    description: "Freshly baked naan filled with cheese.",
    category_id: "breads",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Garlic_Butter_Naan_Food_by_Ms_Ujwala_Kasambe_DSCN1136_(3).jpg",
    tags: ["bread", "naan", "cheese"],
  },
  {
    id: "item-052",
    name: "Parotta",
    price_gbp: 3.0,
    description: "Layered South Indian flatbread.",
    category_id: "breads",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Aesthetic_Paratta_Making_in_Salem.jpg",
    tags: ["bread", "flatbread"],
  },
  {
    id: "item-053",
    name: "Aloo Parotta",
    price_gbp: 3.0,
    description: "Layered flatbread stuffed with spiced potato filling.",
    category_id: "breads",
    rating_percent: 66,
    review_count: 6,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Aesthetic_Paratta_Making_in_Salem.jpg",
    tags: ["bread", "flatbread", "potato"],
  },

  // SIDES & SUNDRIES
  {
    id: "item-054",
    name: "Steak Chips",
    price_gbp: 4.5,
    description: "Thick-cut steak chips.",
    category_id: "sides",
    rating_percent: 71,
    review_count: 28,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chips_in_bowl.jpg",
    tags: ["sides", "potatoes", "vegan"],
  },

  // KIDS MEALS
  {
    id: "item-055",
    name: "Chicken Tikka Masala and Chips",
    price_gbp: 7.99,
    description:
      "Chicken tikka masala served with chips — ideal for younger diners.",
    category_id: "kids",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_Curry.JPG",
    tags: ["kids", "chicken", "curry"],
  },

  // DRINKS & DESSERTS
  {
    id: "item-056",
    name: "Mango Lassi",
    price_gbp: 3.49,
    description: "Traditional sweet mango lassi drink.",
    category_id: "drinks-desserts",
    rating_percent: 76,
    review_count: 13,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mango_lassi.jpg",
    tags: ["drinks", "beverages", "mango"],
  },
  {
    id: "item-057",
    name: "Kheer",
    price_gbp: 5.5,
    description: "Traditional South Asian rice pudding dessert.",
    category_id: "drinks-desserts",
    rating_percent: null,
    review_count: null,
    image_url:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Kheer.jpg",
    tags: ["desserts", "sweet", "rice"],
  },
];
