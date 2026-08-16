import type { AvailableIngredient } from '../types';

export const INGREDIENT_CATALOG: AvailableIngredient[] = [
  // ==========================================
  // PRODUCE & FRESH VEGETABLES (Global & Indian)
  // ==========================================
  { id: 'ing-1', name: 'Garlic', category: 'produce', defaultUnit: 'cloves', commonUnits: ['cloves', 'heads'], icon: '🧄' },
  { id: 'ing-2', name: 'Yellow Onion', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'cups diced'], icon: '🧅' },
  { id: 'ing-3', name: 'Red Onion', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'sliced'], icon: '🧅' },
  { id: 'ing-4', name: 'Ginger', category: 'produce', defaultUnit: 'inch piece', commonUnits: ['inch piece', 'tbsp minced'], icon: '🫚' },
  { id: 'ing-5', name: 'Ginger Garlic Paste', category: 'pantry', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'tsp'], icon: '🥣' },
  { id: 'ing-6', name: 'Green Chillies (Hari Mirch)', category: 'produce', defaultUnit: 'pieces', commonUnits: ['pieces', 'chopped'], icon: '🌶️' },
  { id: 'ing-7', name: 'Fresh Cilantro / Coriander', category: 'produce', defaultUnit: 'handfuls', commonUnits: ['handfuls', 'bunch'], icon: '🌿' },
  { id: 'ing-8', name: 'Curry Leaves (Kadi Patta)', category: 'produce', defaultUnit: 'sprigs', commonUnits: ['sprigs', 'leaves'], icon: '🍃' },
  { id: 'ing-9', name: 'Ripe Tomatoes', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'cans', 'cups pureed'], icon: '🍅' },
  { id: 'ing-10', name: 'Potatoes (Aloo)', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'lbs', 'kg'], icon: '🥔' },
  { id: 'ing-11', name: 'Cauliflower (Gobi)', category: 'produce', defaultUnit: 'heads', commonUnits: ['heads', 'florets cups'], icon: '🥦' },
  { id: 'ing-12', name: 'Green Peas (Matar)', category: 'produce', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🟢' },
  { id: 'ing-13', name: 'Spinach (Palak)', category: 'produce', defaultUnit: 'cups', commonUnits: ['cups', 'bunch', 'grams'], icon: '🥬' },
  { id: 'ing-14', name: 'Lemon', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'tbsp juice'], icon: '🍋' },
  { id: 'ing-15', name: 'Lime', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'tbsp juice'], icon: '🍈' },
  { id: 'ing-16', name: 'Bell Pepper (Capsicum)', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'sliced cups'], icon: '🫑' },
  { id: 'ing-17', name: 'Avocado', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'halves'], icon: '🥑' },
  { id: 'ing-18', name: 'Mushrooms', category: 'produce', defaultUnit: 'cups', commonUnits: ['cups', 'grams', 'oz'], icon: '🍄' },
  { id: 'ing-19', name: 'Carrots', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'cups chopped'], icon: '🥕' },
  { id: 'ing-20', name: 'Eggplant / Brinjal (Baingan)', category: 'produce', defaultUnit: 'whole', commonUnits: ['whole', 'cubes'], icon: '🍆' },
  { id: 'ing-21', name: 'Okra / Ladyfinger (Bhindi)', category: 'produce', defaultUnit: 'grams', commonUnits: ['grams', 'lbs'], icon: '🌱' },
  { id: 'ing-22', name: 'Scallions / Spring Onions', category: 'produce', defaultUnit: 'stalks', commonUnits: ['stalks', 'bunch'], icon: '🌱' },
  { id: 'ing-23', name: 'Fresh Basil', category: 'produce', defaultUnit: 'leaves', commonUnits: ['leaves', 'sprigs'], icon: '🌿' },
  { id: 'ing-24', name: 'Fresh Mint (Pudina)', category: 'produce', defaultUnit: 'leaves', commonUnits: ['leaves', 'bunch'], icon: '🌿' },

  // ==========================================
  // PROTEINS (Poultry, Meat, Seafood, Veg/Vegan)
  // ==========================================
  { id: 'ing-25', name: 'Eggs', category: 'protein', defaultUnit: 'items', commonUnits: ['items', 'carton'], icon: '🥚' },
  { id: 'ing-26', name: 'Paneer (Indian Cottage Cheese)', category: 'protein', defaultUnit: 'grams', commonUnits: ['grams', 'cubes cups'], icon: '🧀' },
  { id: 'ing-27', name: 'Chicken Breast', category: 'protein', defaultUnit: 'lbs', commonUnits: ['lbs', 'grams', 'fillets'], icon: '🍗' },
  { id: 'ing-28', name: 'Chicken Thighs (Boneless/Bone-in)', category: 'protein', defaultUnit: 'lbs', commonUnits: ['lbs', 'grams', 'pieces'], icon: '🍗' },
  { id: 'ing-29', name: 'Ground Lamb / Keema', category: 'protein', defaultUnit: 'lbs', commonUnits: ['lbs', 'grams'], icon: '🥩' },
  { id: 'ing-30', name: 'Ground Beef', category: 'protein', defaultUnit: 'lbs', commonUnits: ['lbs', 'grams'], icon: '🥩' },
  { id: 'ing-31', name: 'Salmon Fillet', category: 'protein', defaultUnit: 'fillets', commonUnits: ['fillets', 'lbs', 'grams'], icon: '🐟' },
  { id: 'ing-32', name: 'Shrimp / Prawns', category: 'protein', defaultUnit: 'lbs', commonUnits: ['lbs', 'grams', 'pieces'], icon: '🦐' },
  { id: 'ing-33', name: 'Firm Tofu', category: 'protein', defaultUnit: 'blocks', commonUnits: ['blocks', 'grams'], icon: '🧊' },
  { id: 'ing-34', name: 'Bacon', category: 'protein', defaultUnit: 'strips', commonUnits: ['strips', 'slices'], icon: '🥓' },

  // ==========================================
  // LENTILS, BEANS & GRAINS (Dal, Rice, Pasta)
  // ==========================================
  { id: 'ing-35', name: 'Basmati Rice', category: 'grains', defaultUnit: 'cups', commonUnits: ['cups', 'grams', 'kg'], icon: '🍚' },
  { id: 'ing-36', name: 'Jasmine Rice', category: 'grains', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🍚' },
  { id: 'ing-37', name: 'Brown Rice', category: 'grains', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🌾' },
  { id: 'ing-38', name: 'Yellow Lentils (Toor / Moong Dal)', category: 'protein', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🫘' },
  { id: 'ing-39', name: 'Red Lentils (Masoor Dal)', category: 'protein', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🫘' },
  { id: 'ing-40', name: 'Black Gram / Urad Dal (Dal Makhani)', category: 'protein', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🫘' },
  { id: 'ing-41', name: 'Chickpeas / Garbanzo (Chole)', category: 'protein', defaultUnit: 'cans', commonUnits: ['cans', 'cups dried'], icon: '🫘' },
  { id: 'ing-42', name: 'Kidney Beans (Rajma)', category: 'protein', defaultUnit: 'cans', commonUnits: ['cans', 'cups dried'], icon: '🫘' },
  { id: 'ing-43', name: 'Black Beans', category: 'protein', defaultUnit: 'cans', commonUnits: ['cans', 'cups'], icon: '🫘' },
  { id: 'ing-44', name: 'Spaghetti / Pasta', category: 'grains', defaultUnit: 'grams', commonUnits: ['grams', 'oz', 'box'], icon: '🍝' },
  { id: 'ing-45', name: 'Atta (Whole Wheat Flour / Roti Flour)', category: 'grains', defaultUnit: 'cups', commonUnits: ['cups', 'kg'], icon: '🌾' },
  { id: 'ing-46', name: 'Maida (All-Purpose Flour)', category: 'grains', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🌾' },
  { id: 'ing-47', name: 'Besan (Gram / Chickpea Flour)', category: 'grains', defaultUnit: 'cups', commonUnits: ['cups', 'tbsp'], icon: '🌾' },
  { id: 'ing-48', name: 'Rolled Oats', category: 'grains', defaultUnit: 'cups', commonUnits: ['cups', 'grams'], icon: '🥣' },
  { id: 'ing-49', name: 'Pita / Naan Bread', category: 'grains', defaultUnit: 'pieces', commonUnits: ['pieces', 'pack'], icon: '🫓' },
  { id: 'ing-50', name: 'Flour Tortillas', category: 'grains', defaultUnit: 'pieces', commonUnits: ['pieces', 'pack'], icon: '🫓' },

  // ==========================================
  // DAIRY & CONDIMENTS
  // ==========================================
  { id: 'ing-51', name: 'Desi Ghee (Clarified Butter)', category: 'oils', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'cups'], icon: '🧈' },
  { id: 'ing-52', name: 'Butter', category: 'dairy', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'sticks', 'grams'], icon: '🧈' },
  { id: 'ing-53', name: 'Plain Dahi / Indian Curd / Yogurt', category: 'dairy', defaultUnit: 'cups', commonUnits: ['cups', 'tbsp'], icon: '🥣' },
  { id: 'ing-54', name: 'Greek Yogurt', category: 'dairy', defaultUnit: 'cups', commonUnits: ['cups', 'tbsp'], icon: '🥣' },
  { id: 'ing-55', name: 'Heavy Whipping Cream (Malai)', category: 'dairy', defaultUnit: 'cups', commonUnits: ['cups', 'tbsp'], icon: '🥛' },
  { id: 'ing-56', name: 'Whole Milk', category: 'dairy', defaultUnit: 'cups', commonUnits: ['cups', 'liters'], icon: '🥛' },
  { id: 'ing-57', name: 'Coconut Milk', category: 'dairy', defaultUnit: 'cans', commonUnits: ['cans', 'cups'], icon: '🥥' },
  { id: 'ing-58', name: 'Parmesan Cheese', category: 'dairy', defaultUnit: 'cups grated', commonUnits: ['cups grated', 'tbsp'], icon: '🧀' },
  { id: 'ing-59', name: 'Cheddar Cheese', category: 'dairy', defaultUnit: 'cups shredded', commonUnits: ['cups shredded', 'slices'], icon: '🧀' },
  { id: 'ing-60', name: 'Mozzarella Cheese', category: 'dairy', defaultUnit: 'cups shredded', commonUnits: ['cups shredded', 'balls'], icon: '🧀' },

  // ==========================================
  // OILS & PANTRY ESSENTIALS
  // ==========================================
  { id: 'ing-61', name: 'Mustard Oil (Sarson ka Tel)', category: 'oils', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'cups'], icon: '🫒' },
  { id: 'ing-62', name: 'Extra Virgin Olive Oil', category: 'oils', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'cups'], icon: '🫒' },
  { id: 'ing-63', name: 'Vegetable / Sunflower Oil', category: 'oils', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'cups'], icon: '🫒' },
  { id: 'ing-64', name: 'Toasted Sesame Oil', category: 'oils', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🍶' },
  { id: 'ing-65', name: 'Soy Sauce', category: 'pantry', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'tsp'], icon: '🍶' },
  { id: 'ing-66', name: 'Tamarind Paste (Imli)', category: 'pantry', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'tsp'], icon: '🥣' },
  { id: 'ing-67', name: 'Kasuri Methi (Dried Fenugreek)', category: 'spices', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'tsp'], icon: '🌿' },
  { id: 'ing-68', name: 'Tomato Paste / Puree', category: 'pantry', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'cans'], icon: '🥫' },
  { id: 'ing-69', name: 'Honey', category: 'pantry', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'tsp'], icon: '🍯' },
  { id: 'ing-70', name: 'Sriracha / Hot Sauce', category: 'pantry', defaultUnit: 'tbsp', commonUnits: ['tbsp', 'tsp'], icon: '🌶️' },

  // ==========================================
  // SPICES & MASALAS
  // ==========================================
  { id: 'ing-71', name: 'Turmeric Powder (Haldi)', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🧂' },
  { id: 'ing-72', name: 'Cumin Seeds (Jeera)', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🧂' },
  { id: 'ing-73', name: 'Ground Cumin', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🧂' },
  { id: 'ing-74', name: 'Kashmiri Red Chilli Powder (Deggi Mirch)', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🌶️' },
  { id: 'ing-75', name: 'Coriander Powder (Dhania Powder)', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🧂' },
  { id: 'ing-76', name: 'Garam Masala', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🧂' },
  { id: 'ing-77', name: 'Mustard Seeds (Rai / Sarson)', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp'], icon: '🧂' },
  { id: 'ing-78', name: 'Asafoetida (Hing)', category: 'spices', defaultUnit: 'pinch', commonUnits: ['pinch'], icon: '🧂' },
  { id: 'ing-79', name: 'Green Cardamom (Elaichi)', category: 'spices', defaultUnit: 'pods', commonUnits: ['pods', 'tsp'], icon: '🧂' },
  { id: 'ing-80', name: 'Cloves (Laung)', category: 'spices', defaultUnit: 'pieces', commonUnits: ['pieces'], icon: '🧂' },
  { id: 'ing-81', name: 'Cinnamon Stick (Dalchini)', category: 'spices', defaultUnit: 'sticks', commonUnits: ['sticks', 'inch'], icon: '🪵' },
  { id: 'ing-82', name: 'Chaat Masala', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp'], icon: '🧂' },
  { id: 'ing-83', name: 'Black Pepper', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'pinch'], icon: '🧂' },
  { id: 'ing-84', name: 'Smoked Paprika', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🧂' },
  { id: 'ing-85', name: 'Oregano', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'tbsp'], icon: '🌿' },
  { id: 'ing-86', name: 'Red Pepper Flakes', category: 'spices', defaultUnit: 'tsp', commonUnits: ['tsp', 'pinch'], icon: '🌶️' },
];

export const CATEGORY_LABELS: Record<string, { label: string; icon: string }> = {
  all: { label: 'All Staples', icon: '✨' },
  produce: { label: 'Produce', icon: '🥬' },
  protein: { label: 'Proteins', icon: '🍗' },
  dairy: { label: 'Dairy & Curd', icon: '🧀' },
  grains: { label: 'Grains, Dal & Flour', icon: '🌾' },
  oils: { label: 'Ghee & Oils', icon: '🧈' },
  spices: { label: 'Spices & Masalas', icon: '🧂' },
  pantry: { label: 'Sauces & Pastes', icon: '🥫' },
};
