import type { Recipe } from '../types';

export const MOCK_POPULAR_INGREDIENTS = [
  { id: '1', name: 'Eggs', category: 'protein' as const },
  { id: '2', name: 'Garlic', category: 'produce' as const },
  { id: '3', name: 'Yellow Onion', category: 'produce' as const },
  { id: '4', name: 'Chicken Breast', category: 'protein' as const },
  { id: '5', name: 'Extra Virgin Olive Oil', category: 'oils' as const },
  { id: '6', name: 'Spaghetti / Pasta', category: 'grains' as const },
  { id: '7', name: 'Parmesan Cheese', category: 'dairy' as const },
  { id: '8', name: 'Ripe Tomatoes', category: 'produce' as const },
  { id: '9', name: 'Soy Sauce', category: 'pantry' as const },
  { id: '10', name: 'Basmati Rice', category: 'grains' as const },
  { id: '11', name: 'Butter', category: 'dairy' as const },
  { id: '12', name: 'Lemon', category: 'produce' as const },
  { id: '13', name: 'Spinach (Palak)', category: 'produce' as const },
  { id: '14', name: 'Ground Cumin', category: 'spices' as const },
  { id: '15', name: 'Black Pepper', category: 'spices' as const },
];

export const MOCK_RECIPES: Recipe[] = [
  // ─────────────────────────────────────────
  // ITALIAN
  // ─────────────────────────────────────────
  {
    id: 'rec-1',
    title: 'Authentic Roman Spaghetti Carbonara',
    description: 'Silky, peppery pasta coated with tempered egg yolks, savory pecorino romano, and crispy guanciale.',
    imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    dietaryTags: ['High-Protein', 'Quick'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 560,
    equipment: ['stovetop'],
    requiredIngredients: ['Spaghetti / Pasta', 'Eggs', 'Parmesan Cheese', 'Black Pepper', 'Extra Virgin Olive Oil', 'Garlic'],
    instructions: [
      { stepNumber: 1, instruction: 'Bring a large pot of salted water to a rolling boil and cook spaghetti until al dente.', durationMinutes: 9 },
      { stepNumber: 2, instruction: 'Whisk whole eggs, egg yolks, grated parmesan, and cracked black pepper in a warm bowl.' },
      { stepNumber: 3, instruction: 'Sauté garlic in olive oil until aromatic, then remove from heat.' },
      { stepNumber: 4, instruction: 'Toss hot pasta with the egg mixture and a splash of starchy pasta water to create a glossy emulsion.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 6,
    missingIngredients: []
  },
  {
    id: 'rec-2',
    title: 'Classic Margherita Pizza',
    description: 'Thin-crust pizza with vibrant San Marzano tomato sauce, fresh buffalo mozzarella, and fragrant basil leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    dietaryTags: ['Vegetarian'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 12,
    difficulty: 'Medium',
    servings: 2,
    caloriesPerServing: 480,
    equipment: ['oven'],
    requiredIngredients: ['Maida (All-Purpose Flour)', 'Ripe Tomatoes', 'Mozzarella Cheese', 'Fresh Basil', 'Extra Virgin Olive Oil', 'Garlic'],
    instructions: [
      { stepNumber: 1, instruction: 'Mix flour, salt, yeast and water into a dough. Knead 8 minutes and rest 1 hour.', durationMinutes: 60 },
      { stepNumber: 2, instruction: 'Spread crushed tomatoes over stretched dough, season with salt and oregano.' },
      { stepNumber: 3, instruction: 'Scatter torn mozzarella evenly. Bake at 260°C for 10-12 minutes until crust blisters.', durationMinutes: 12 },
      { stepNumber: 4, instruction: 'Remove, drizzle cold olive oil, and scatter fresh basil leaves immediately.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 4,
    missingIngredients: ['Maida (All-Purpose Flour)', 'Mozzarella Cheese']
  },
  {
    id: 'rec-3',
    title: 'Creamy Tuscan Garlic Pasta',
    description: 'Al dente penne in a velvety garlic parmesan cream sauce with sun-dried tomatoes and wilted spinach.',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Italian',
    dietaryTags: ['Vegetarian'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 3,
    caloriesPerServing: 520,
    equipment: ['stovetop'],
    requiredIngredients: ['Spaghetti / Pasta', 'Garlic', 'Spinach (Palak)', 'Parmesan Cheese', 'Butter', 'Extra Virgin Olive Oil', 'Heavy Whipping Cream (Malai)'],
    instructions: [
      { stepNumber: 1, instruction: 'Cook pasta in generously salted water until firm to the bite. Reserve 1 cup pasta water.' },
      { stepNumber: 2, instruction: 'Melt butter in a wide pan with olive oil, sauté sliced garlic until fragrant.' },
      { stepNumber: 3, instruction: 'Pour in heavy cream and simmer gently for 3 mins. Whisk in grated parmesan until velvety.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Fold in spinach and cooked pasta, tossing until spinach wilts. Adjust with pasta water.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 5,
    missingIngredients: ['Heavy Whipping Cream (Malai)']
  },

  // ─────────────────────────────────────────
  // INDIAN — NORTH
  // ─────────────────────────────────────────
  {
    id: 'rec-4',
    title: 'Butter Chicken (Murgh Makhani)',
    description: 'Tender tandoori-marinated chicken pieces simmered in a luxuriously creamy, mildly spiced tomato-cashew gravy.',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['High-Protein', 'Gluten-Free'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: 'Medium',
    servings: 4,
    caloriesPerServing: 480,
    equipment: ['stovetop', 'oven'],
    requiredIngredients: ['Chicken Thighs (Boneless/Bone-in)', 'Plain Dahi / Indian Curd / Yogurt', 'Ripe Tomatoes', 'Heavy Whipping Cream (Malai)', 'Ginger Garlic Paste', 'Kashmiri Red Chilli Powder (Deggi Mirch)', 'Garam Masala', 'Desi Ghee (Clarified Butter)', 'Butter', 'Kasuri Methi (Dried Fenugreek)'],
    instructions: [
      { stepNumber: 1, instruction: 'Marinate chicken in yogurt, Kashmiri chilli, ginger garlic paste, garam masala for 1 hour.', durationMinutes: 60 },
      { stepNumber: 2, instruction: 'Grill or broil marinated chicken at 220°C for 18 minutes until lightly charred.', durationMinutes: 18 },
      { stepNumber: 3, instruction: 'In a kadai, melt ghee and butter. Cook onion, tomatoes and cashews into a thick masala, then blend smooth.' },
      { stepNumber: 4, instruction: 'Return blended gravy to pan, add cream and kasuri methi. Fold in grilled chicken and simmer 10 minutes.', durationMinutes: 10 }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 7,
    missingIngredients: ['Kasuri Methi (Dried Fenugreek)', 'Kashmiri Red Chilli Powder (Deggi Mirch)', 'Heavy Whipping Cream (Malai)']
  },
  {
    id: 'rec-5',
    title: 'Saag Paneer (Palak Paneer)',
    description: 'Golden paneer cubes nestled in a vibrant, velvety pureed spinach gravy aromatic with ginger, garlic, and warm spices.',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'High-Protein'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: 'Medium',
    servings: 3,
    caloriesPerServing: 380,
    equipment: ['stovetop', 'blender'],
    requiredIngredients: ['Paneer (Indian Cottage Cheese)', 'Spinach (Palak)', 'Yellow Onion', 'Ripe Tomatoes', 'Ginger Garlic Paste', 'Desi Ghee (Clarified Butter)', 'Turmeric Powder (Haldi)', 'Garam Masala', 'Heavy Whipping Cream (Malai)'],
    instructions: [
      { stepNumber: 1, instruction: 'Blanch spinach for 2 minutes in boiling water, then blend with green chillies into a smooth puree.', durationMinutes: 5 },
      { stepNumber: 2, instruction: 'Pan-fry paneer cubes in ghee until golden on all sides. Remove and set aside.' },
      { stepNumber: 3, instruction: 'In the same pan, sauté onions until caramelised. Add ginger garlic paste, tomatoes, and spices.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Fold in spinach puree, simmer 5 minutes, add paneer and finish with a swirl of cream.', durationMinutes: 5 }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 6,
    missingIngredients: ['Paneer (Indian Cottage Cheese)', 'Ginger Garlic Paste', 'Heavy Whipping Cream (Malai)']
  },
  {
    id: 'rec-6',
    title: 'Dal Tadka (Yellow Lentil Curry)',
    description: 'Comforting yellow toor dal seasoned with a punchy ghee tempering of cumin, garlic, mustard seeds, and dried red chilli.',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'High-Protein'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 30,
    difficulty: 'Easy',
    servings: 4,
    caloriesPerServing: 260,
    equipment: ['stovetop', 'pressure_cooker'],
    requiredIngredients: ['Yellow Lentils (Toor / Moong Dal)', 'Yellow Onion', 'Ripe Tomatoes', 'Garlic', 'Ginger', 'Desi Ghee (Clarified Butter)', 'Turmeric Powder (Haldi)', 'Cumin Seeds (Jeera)', 'Ground Cumin', 'Fresh Cilantro / Coriander'],
    instructions: [
      { stepNumber: 1, instruction: 'Pressure cook dal with turmeric and water for 3 whistles until soft and creamy.', durationMinutes: 15 },
      { stepNumber: 2, instruction: 'Heat ghee in a tadka pan. Splutter cumin seeds, add dried chilli and sliced garlic until golden.' },
      { stepNumber: 3, instruction: 'Add diced onion, cook deep golden, then add tomatoes and ginger. Cook until oil separates.' },
      { stepNumber: 4, instruction: 'Pour masala over cooked dal, stir, simmer 5 minutes. Garnish with fresh cilantro.', durationMinutes: 5 }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 10,
    missingIngredients: []
  },
  {
    id: 'rec-7',
    title: 'Aloo Gobi (Potato & Cauliflower Stir-Fry)',
    description: 'Dry-style stir-fried potatoes and cauliflower with golden turmeric, cumin, ginger, and a caramelised onion base.',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    difficulty: 'Easy',
    servings: 3,
    caloriesPerServing: 220,
    equipment: ['stovetop'],
    requiredIngredients: ['Potatoes (Aloo)', 'Cauliflower (Gobi)', 'Yellow Onion', 'Ripe Tomatoes', 'Garlic', 'Ginger', 'Turmeric Powder (Haldi)', 'Cumin Seeds (Jeera)', 'Coriander Powder (Dhania Powder)', 'Vegetable / Sunflower Oil', 'Fresh Cilantro / Coriander'],
    instructions: [
      { stepNumber: 1, instruction: 'Parboil potato cubes until just fork-tender. Drain and set aside.' },
      { stepNumber: 2, instruction: 'Heat oil, splutter cumin seeds and sauté onions golden. Add ginger, garlic, then tomatoes.' },
      { stepNumber: 3, instruction: 'Add turmeric, coriander powder and chilli powder. Cook masala until oil rises to surface.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Add potatoes and cauliflower, stir to coat. Cover and cook on low 10 minutes. Finish with cilantro.', durationMinutes: 10 }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 11,
    missingIngredients: []
  },
  {
    id: 'rec-8',
    title: 'Chole Bhature (Spiced Chickpea Curry)',
    description: 'Bold, tangy Punjabi chickpea curry with amchur, pomegranate and a deep masala base — classic street food.',
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['Vegan', 'Vegetarian', 'High-Protein'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 35,
    difficulty: 'Medium',
    servings: 4,
    caloriesPerServing: 340,
    equipment: ['stovetop', 'pressure_cooker'],
    requiredIngredients: ['Chickpeas / Garbanzo (Chole)', 'Yellow Onion', 'Ripe Tomatoes', 'Ginger Garlic Paste', 'Garam Masala', 'Coriander Powder (Dhania Powder)', 'Turmeric Powder (Haldi)', 'Kashmiri Red Chilli Powder (Deggi Mirch)', 'Desi Ghee (Clarified Butter)', 'Cumin Seeds (Jeera)'],
    instructions: [
      { stepNumber: 1, instruction: 'Soak chickpeas overnight, then pressure cook with a tea bag for dark colour, 6-7 whistles.', durationMinutes: 25 },
      { stepNumber: 2, instruction: 'Fry sliced onions in ghee until deep brown. Add ginger garlic paste and all spices.' },
      { stepNumber: 3, instruction: 'Add pureed tomatoes and cook masala until oil separates, about 12 minutes.', durationMinutes: 12 },
      { stepNumber: 4, instruction: 'Add drained chickpeas and 1 cup water. Simmer 15 minutes until thick and glossy.', durationMinutes: 15 }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 8,
    missingIngredients: ['Chickpeas / Garbanzo (Chole)', 'Kashmiri Red Chilli Powder (Deggi Mirch)']
  },
  {
    id: 'rec-9',
    title: 'Lamb Keema Matar (Spiced Mince & Peas)',
    description: 'Fragrant ground lamb cooked with sweet green peas, whole spices and a tomatoey masala. Perfect with fresh roti.',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['High-Protein', 'Gluten-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: 'Medium',
    servings: 4,
    caloriesPerServing: 420,
    equipment: ['stovetop'],
    requiredIngredients: ['Ground Lamb / Keema', 'Green Peas (Matar)', 'Yellow Onion', 'Ripe Tomatoes', 'Ginger Garlic Paste', 'Garam Masala', 'Cumin Seeds (Jeera)', 'Turmeric Powder (Haldi)', 'Coriander Powder (Dhania Powder)', 'Fresh Cilantro / Coriander'],
    instructions: [
      { stepNumber: 1, instruction: 'Heat oil and splutter cumin seeds. Fry onions until deeply golden.' },
      { stepNumber: 2, instruction: 'Add ginger garlic paste then keema. Break up and cook until all moisture evaporates, 10 mins.', durationMinutes: 10 },
      { stepNumber: 3, instruction: 'Add tomatoes, all spice powders and chilli. Cook until oil separates from masala.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Stir in peas and simmer 8 minutes covered. Garnish with fresh coriander.', durationMinutes: 8 }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 8,
    missingIngredients: ['Ground Lamb / Keema', 'Green Peas (Matar)']
  },

  // ─────────────────────────────────────────
  // INDIAN — SOUTH
  // ─────────────────────────────────────────
  {
    id: 'rec-10',
    title: 'Kerala Coconut Chicken Curry',
    description: 'Tender chicken braised in a fragrant coconut milk broth with curry leaves, mustard seeds, and warming whole spices.',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Dairy-Free'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: 'Medium',
    servings: 4,
    caloriesPerServing: 430,
    equipment: ['stovetop'],
    requiredIngredients: ['Chicken Thighs (Boneless/Bone-in)', 'Coconut Milk', 'Yellow Onion', 'Ripe Tomatoes', 'Ginger', 'Garlic', 'Curry Leaves (Kadi Patta)', 'Mustard Seeds (Rai / Sarson)', 'Turmeric Powder (Haldi)', 'Green Chillies (Hari Mirch)', 'Vegetable / Sunflower Oil'],
    instructions: [
      { stepNumber: 1, instruction: 'Heat oil in a heavy pan. Splutter mustard seeds and curry leaves until fragrant.' },
      { stepNumber: 2, instruction: 'Add sliced onions, green chillies, ginger and garlic. Cook until softened and lightly golden.' },
      { stepNumber: 3, instruction: 'Add chicken pieces and brown on all sides. Stir in turmeric and tomatoes.', durationMinutes: 8 },
      { stepNumber: 4, instruction: 'Pour in coconut milk, lower heat and simmer 20 minutes until chicken is fully cooked and sauce thickens.', durationMinutes: 20 }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 9,
    missingIngredients: ['Coconut Milk', 'Curry Leaves (Kadi Patta)']
  },
  {
    id: 'rec-11',
    title: 'Rajma Masala (Red Kidney Bean Curry)',
    description: 'Wholesome red kidney beans slow-cooked in a thick, deeply spiced tomato-onion gravy. The ultimate Punjabi comfort bowl.',
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'High-Protein'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 40,
    difficulty: 'Easy',
    servings: 4,
    caloriesPerServing: 290,
    equipment: ['stovetop', 'pressure_cooker'],
    requiredIngredients: ['Kidney Beans (Rajma)', 'Yellow Onion', 'Ripe Tomatoes', 'Ginger Garlic Paste', 'Garam Masala', 'Turmeric Powder (Haldi)', 'Coriander Powder (Dhania Powder)', 'Desi Ghee (Clarified Butter)', 'Fresh Cilantro / Coriander'],
    instructions: [
      { stepNumber: 1, instruction: 'Soak rajma overnight. Pressure cook with salt for 5 whistles until completely soft.', durationMinutes: 20 },
      { stepNumber: 2, instruction: 'Heat ghee, brown onions deeply. Add ginger garlic paste and all spice powders.' },
      { stepNumber: 3, instruction: 'Add pureed tomatoes and cook 10 minutes until masala is rich and oil separates.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Add cooked rajma with its water. Simmer 15-20 minutes, mashing some beans for body. Finish with garam masala.', durationMinutes: 18 }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 7,
    missingIngredients: ['Kidney Beans (Rajma)', 'Ginger Garlic Paste']
  },

  // ─────────────────────────────────────────
  // ASIAN — CHINESE, JAPANESE, KOREAN, THAI
  // ─────────────────────────────────────────
  {
    id: 'rec-12',
    title: 'Crispy Garlic Scallion Fried Rice',
    description: 'Fluffy day-old jasmine rice stir-fried on high heat with aromatic scallions, soy reduction, and golden garlic chips.',
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Chinese',
    dietaryTags: ['Vegetarian', 'Quick', 'Dairy-Free'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 390,
    equipment: ['stovetop'],
    requiredIngredients: ['Jasmine Rice', 'Eggs', 'Garlic', 'Soy Sauce', 'Scallions / Spring Onions', 'Toasted Sesame Oil', 'Vegetable / Sunflower Oil'],
    instructions: [
      { stepNumber: 1, instruction: 'Crisp thinly sliced garlic in hot oil until pale golden chips form. Remove and reserve.' },
      { stepNumber: 2, instruction: 'Crack eggs into the hot wok and scramble softly until just set.' },
      { stepNumber: 3, instruction: 'Add chilled day-old rice, break up clumps and stir-fry aggressively on high heat.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Drizzle soy sauce and sesame oil around the wok rim. Fold in scallions. Top with garlic chips.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 5,
    missingIngredients: ['Jasmine Rice', 'Scallions / Spring Onions']
  },
  {
    id: 'rec-13',
    title: 'Korean Bibimbap Bowl',
    description: 'Warm steamed rice topped with sautéed seasoned vegetables, a fried egg, and drizzled with gochujang sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Korean',
    dietaryTags: ['Vegetarian', 'High-Protein'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    difficulty: 'Medium',
    servings: 2,
    caloriesPerServing: 420,
    equipment: ['stovetop', 'rice_cooker'],
    requiredIngredients: ['Basmati Rice', 'Eggs', 'Carrots', 'Spinach (Palak)', 'Mushrooms', 'Toasted Sesame Oil', 'Soy Sauce', 'Garlic'],
    instructions: [
      { stepNumber: 1, instruction: 'Cook rice and keep warm. Sauté carrots, spinach, and mushrooms separately in sesame oil.' },
      { stepNumber: 2, instruction: 'Season each vegetable with garlic, soy sauce, and a pinch of salt.' },
      { stepNumber: 3, instruction: 'Fry an egg sunny-side up with a crisp white and runny yolk.' },
      { stepNumber: 4, instruction: 'Arrange vegetables over rice in sections, top with fried egg. Drizzle gochujang to taste.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 8,
    missingIngredients: []
  },
  {
    id: 'rec-14',
    title: 'Thai Green Curry with Chicken',
    description: 'Fragrant green curry paste simmered in silky coconut milk with tender chicken, Thai basil, and crisp vegetables.',
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Thai',
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Dairy-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Easy',
    servings: 3,
    caloriesPerServing: 410,
    equipment: ['stovetop'],
    requiredIngredients: ['Chicken Breast', 'Coconut Milk', 'Bell Pepper (Capsicum)', 'Lime', 'Fresh Basil', 'Garlic', 'Ginger', 'Soy Sauce', 'Vegetable / Sunflower Oil'],
    instructions: [
      { stepNumber: 1, instruction: 'Heat oil in a wok. Add green curry paste and fry until fragrant, about 2 minutes.' },
      { stepNumber: 2, instruction: 'Add sliced chicken and coat in the paste. Cook until no longer pink on outside.' },
      { stepNumber: 3, instruction: 'Pour in coconut milk. Simmer 12 minutes. Add sliced bell peppers and fish sauce.', durationMinutes: 12 },
      { stepNumber: 4, instruction: 'Finish with torn basil, a squeeze of lime. Serve over jasmine rice.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 6,
    missingIngredients: ['Coconut Milk', 'Bell Pepper (Capsicum)', 'Lime']
  },
  {
    id: 'rec-15',
    title: 'Japanese Miso Ramen',
    description: 'Rich miso broth with springy noodles, a soft-boiled marinated egg, crispy tofu, scallions, and nori.',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Japanese',
    dietaryTags: ['Vegetarian', 'High-Protein'],
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    difficulty: 'Medium',
    servings: 2,
    caloriesPerServing: 460,
    equipment: ['stovetop'],
    requiredIngredients: ['Eggs', 'Firm Tofu', 'Garlic', 'Ginger', 'Soy Sauce', 'Toasted Sesame Oil', 'Scallions / Spring Onions', 'Mushrooms'],
    instructions: [
      { stepNumber: 1, instruction: 'Soft boil eggs 7 minutes, cool in ice water. Peel and marinate in soy sauce, mirin for 1 hour.', durationMinutes: 7 },
      { stepNumber: 2, instruction: 'Pan-fry tofu cubes until golden and crispy on all sides. Drain on paper towel.' },
      { stepNumber: 3, instruction: 'Sauté garlic, ginger, and mushrooms. Whisk in miso paste and dashi or vegetable broth.', durationMinutes: 5 },
      { stepNumber: 4, instruction: 'Cook noodles, divide into bowls with hot broth. Top with egg, tofu, scallions and sesame oil.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 6,
    missingIngredients: ['Firm Tofu', 'Scallions / Spring Onions']
  },

  // ─────────────────────────────────────────
  // MEDITERRANEAN & MIDDLE EASTERN
  // ─────────────────────────────────────────
  {
    id: 'rec-16',
    title: 'Golden Garlic Butter Chicken & Spinach',
    description: 'Tender pan-seared chicken basted in caramelised garlic herb butter over wilted farm-fresh baby spinach.',
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mediterranean',
    dietaryTags: ['Keto', 'Gluten-Free', 'High-Protein'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 420,
    equipment: ['stovetop'],
    requiredIngredients: ['Chicken Breast', 'Garlic', 'Butter', 'Extra Virgin Olive Oil', 'Spinach (Palak)', 'Lemon', 'Black Pepper'],
    instructions: [
      { stepNumber: 1, instruction: 'Season chicken generously with sea salt and cracked black pepper.' },
      { stepNumber: 2, instruction: 'Heat olive oil over medium-high. Sear chicken 5-6 mins per side until golden.', durationMinutes: 12 },
      { stepNumber: 3, instruction: 'Add butter and crushed garlic. Spoon bubbling butter over chicken continuously.' },
      { stepNumber: 4, instruction: 'Add spinach and toss 60 seconds until wilted. Squeeze fresh lemon over everything.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 7,
    missingIngredients: []
  },
  {
    id: 'rec-17',
    title: 'Lebanese Shakshuka',
    description: 'Eggs gently poached in a spiced, slow-cooked tomato and roasted pepper stew, finished with crumbled feta and herbs.',
    imageUrl: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Lebanese',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Quick'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 310,
    equipment: ['stovetop'],
    requiredIngredients: ['Eggs', 'Ripe Tomatoes', 'Bell Pepper (Capsicum)', 'Yellow Onion', 'Garlic', 'Smoked Paprika', 'Ground Cumin', 'Extra Virgin Olive Oil', 'Fresh Cilantro / Coriander'],
    instructions: [
      { stepNumber: 1, instruction: 'Heat olive oil in a wide oven-safe skillet. Sauté diced onion and bell pepper until soft.' },
      { stepNumber: 2, instruction: 'Add garlic, cumin, paprika, and chilli flakes. Stir for 60 seconds.' },
      { stepNumber: 3, instruction: 'Add crushed tomatoes and simmer 12 minutes until sauce thickens.', durationMinutes: 12 },
      { stepNumber: 4, instruction: 'Make wells in the sauce, crack in eggs. Cover and cook 6-8 minutes to your preferred set. Garnish with herbs.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 9,
    missingIngredients: []
  },
  {
    id: 'rec-18',
    title: 'Turkish Chicken Kebab Bowl',
    description: 'Yogurt-marinated grilled chicken over fluffy rice with a fresh salad, herb-green sauce and warm pita on the side.',
    imageUrl: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Turkish',
    dietaryTags: ['High-Protein', 'Gluten-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 3,
    caloriesPerServing: 440,
    equipment: ['grill', 'stovetop'],
    requiredIngredients: ['Chicken Thighs (Boneless/Bone-in)', 'Plain Dahi / Indian Curd / Yogurt', 'Garlic', 'Lemon', 'Smoked Paprika', 'Ground Cumin', 'Extra Virgin Olive Oil', 'Basmati Rice', 'Fresh Cilantro / Coriander'],
    instructions: [
      { stepNumber: 1, instruction: 'Marinate chicken in yogurt, garlic, lemon, paprika, cumin and olive oil for at least 30 minutes.', durationMinutes: 30 },
      { stepNumber: 2, instruction: 'Grill on high heat 5-7 minutes per side until beautifully charred and cooked through.', durationMinutes: 14 },
      { stepNumber: 3, instruction: 'Cook basmati rice with a pinch of cumin and salt until fluffy.' },
      { stepNumber: 4, instruction: 'Slice chicken and arrange over rice. Top with fresh herbs, tomatoes and lemon wedge.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 7,
    missingIngredients: ['Plain Dahi / Indian Curd / Yogurt', 'Smoked Paprika']
  },
  {
    id: 'rec-19',
    title: 'Greek Salad with Grilled Halloumi',
    description: 'Crispy, salty grilled halloumi over a vibrant cucumber, olive, red onion and ripe tomato salad with oregano vinaigrette.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Greek',
    dietaryTags: ['Vegetarian', 'Gluten-Free', 'Keto', 'Quick'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 6,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 340,
    equipment: ['stovetop', 'grill'],
    requiredIngredients: ['Ripe Tomatoes', 'Red Onion', 'Bell Pepper (Capsicum)', 'Lemon', 'Extra Virgin Olive Oil', 'Oregano'],
    instructions: [
      { stepNumber: 1, instruction: 'Slice tomatoes, cucumber, red onion and bell pepper. Arrange on a serving platter.' },
      { stepNumber: 2, instruction: 'Slice halloumi 1cm thick. Grill in a dry hot pan until golden stripes appear, 2-3 mins each side.', durationMinutes: 6 },
      { stepNumber: 3, instruction: 'Whisk olive oil, lemon juice, oregano and salt into a simple vinaigrette.' },
      { stepNumber: 4, instruction: 'Lay grilled halloumi over the salad. Pour dressing and serve immediately.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 6,
    missingIngredients: []
  },

  // ─────────────────────────────────────────
  // AMERICAN & MEXICAN
  // ─────────────────────────────────────────
  {
    id: 'rec-20',
    title: 'Air Fryer Herb-Crusted Salmon',
    description: 'Succulent Atlantic salmon with a crisp lemon garlic crust cooked to perfection in 10 minutes flat.',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    dietaryTags: ['Keto', 'High-Protein', 'Gluten-Free', 'Quick'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 450,
    equipment: ['air_fryer'],
    requiredIngredients: ['Salmon Fillet', 'Lemon', 'Extra Virgin Olive Oil', 'Garlic', 'Black Pepper', 'Smoked Paprika'],
    instructions: [
      { stepNumber: 1, instruction: 'Pat salmon dry. Mix olive oil, garlic, lemon zest, paprika, pepper and brush over fillet.' },
      { stepNumber: 2, instruction: 'Preheat air fryer to 200°C (400°F) for 3 minutes.' },
      { stepNumber: 3, instruction: 'Air fry salmon skin-side down for 8-10 minutes until flaky and golden.', durationMinutes: 10 },
      { stepNumber: 4, instruction: 'Squeeze lemon, serve with a simple salad or roasted vegetables.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 4,
    missingIngredients: ['Salmon Fillet', 'Smoked Paprika']
  },
  {
    id: 'rec-21',
    title: 'Beef & Black Bean Tacos',
    description: 'Juicy seasoned ground beef and smoky black beans in warm tortillas with fresh tomato salsa and lime crema.',
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mexican',
    dietaryTags: ['High-Protein', 'Quick'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 4,
    caloriesPerServing: 480,
    equipment: ['stovetop'],
    requiredIngredients: ['Ground Beef', 'Black Beans', 'Flour Tortillas', 'Ripe Tomatoes', 'Red Onion', 'Lime', 'Ground Cumin', 'Smoked Paprika', 'Garlic', 'Cheddar Cheese'],
    instructions: [
      { stepNumber: 1, instruction: 'Brown ground beef in a hot pan, breaking into small crumbles. Drain excess fat.' },
      { stepNumber: 2, instruction: 'Season with cumin, paprika, garlic, chilli and salt. Stir in drained black beans.', durationMinutes: 5 },
      { stepNumber: 3, instruction: 'Warm tortillas in a dry pan or directly over gas flame.' },
      { stepNumber: 4, instruction: 'Serve beef-bean filling in tortillas with diced tomato, red onion, lime squeeze and cheese.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 8,
    missingIngredients: ['Ground Beef', 'Flour Tortillas']
  },
  {
    id: 'rec-22',
    title: 'Smashed Avocado & Egg on Toast',
    description: 'Rustic whole-grain toast smeared with citrus-spiked smashed avocado, topped with a perfectly poached egg.',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    dietaryTags: ['Vegetarian', 'Quick', 'High-Protein'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    difficulty: 'Easy',
    servings: 1,
    caloriesPerServing: 350,
    equipment: ['stovetop'],
    requiredIngredients: ['Avocado', 'Eggs', 'Lemon', 'Red Pepper Flakes', 'Black Pepper', 'Extra Virgin Olive Oil'],
    instructions: [
      { stepNumber: 1, instruction: 'Toast bread until golden and crisp.' },
      { stepNumber: 2, instruction: 'Mash avocado with lemon juice, salt, black pepper and red pepper flakes.' },
      { stepNumber: 3, instruction: 'Poach egg in barely simmering acidulated water for 3 minutes until white is set.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Spread avocado on toast, lay poached egg on top. Drizzle olive oil and extra chilli flakes.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 6,
    missingIngredients: []
  },
  {
    id: 'rec-23',
    title: 'Chicken & Avocado Burrito Bowl',
    description: 'Smoky grilled chicken over cilantro rice with guacamole, black beans, corn salsa and cool Greek yogurt.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Mexican',
    dietaryTags: ['High-Protein', 'Gluten-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 530,
    equipment: ['stovetop', 'grill'],
    requiredIngredients: ['Chicken Breast', 'Avocado', 'Basmati Rice', 'Black Beans', 'Lime', 'Ground Cumin', 'Smoked Paprika', 'Fresh Cilantro / Coriander', 'Greek Yogurt', 'Garlic'],
    instructions: [
      { stepNumber: 1, instruction: 'Season chicken with cumin, paprika, garlic and lime. Grill 5-6 mins per side.', durationMinutes: 12 },
      { stepNumber: 2, instruction: 'Cook rice, fluff with a fork and fold in chopped cilantro and lime juice.' },
      { stepNumber: 3, instruction: 'Mash avocado with lime juice, garlic, salt and cilantro into chunky guacamole.' },
      { stepNumber: 4, instruction: 'Build bowls: rice base, sliced chicken, black beans, guacamole, yogurt and extra lime.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 8,
    missingIngredients: ['Black Beans', 'Greek Yogurt']
  },

  // ─────────────────────────────────────────
  // MOROCCAN & FRENCH
  // ─────────────────────────────────────────
  {
    id: 'rec-24',
    title: 'Moroccan Chickpea & Tomato Stew',
    description: 'Warming North African stew of chickpeas, tomatoes and spiced root vegetables with harissa and preserved lemon.',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Moroccan',
    dietaryTags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'High-Protein'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    difficulty: 'Easy',
    servings: 4,
    caloriesPerServing: 280,
    equipment: ['stovetop'],
    requiredIngredients: ['Chickpeas / Garbanzo (Chole)', 'Ripe Tomatoes', 'Carrots', 'Yellow Onion', 'Garlic', 'Ground Cumin', 'Smoked Paprika', 'Cinnamon Stick (Dalchini)', 'Extra Virgin Olive Oil', 'Fresh Cilantro / Coriander'],
    instructions: [
      { stepNumber: 1, instruction: 'Sauté onion and garlic in olive oil until soft. Add carrots and cook 5 minutes.', durationMinutes: 7 },
      { stepNumber: 2, instruction: 'Add cumin, paprika, cinnamon stick and stir for 1 minute until spices bloom.' },
      { stepNumber: 3, instruction: 'Add crushed tomatoes and chickpeas. Pour in 1 cup water and simmer 20 minutes.', durationMinutes: 20 },
      { stepNumber: 4, instruction: 'Adjust seasoning, remove cinnamon stick. Ladle into bowls with fresh cilantro and crusty bread.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 8,
    missingIngredients: ['Chickpeas / Garbanzo (Chole)', 'Cinnamon Stick (Dalchini)']
  },
  {
    id: 'rec-25',
    title: 'French Mushroom & Herb Omelette',
    description: 'The classic French folded omelette — silky, barely set inside with earthy sautéed mushrooms and fresh herbs.',
    imageUrl: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
    cuisine: 'French',
    dietaryTags: ['Vegetarian', 'Keto', 'Quick', 'Gluten-Free'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 8,
    difficulty: 'Medium',
    servings: 1,
    caloriesPerServing: 320,
    equipment: ['stovetop'],
    requiredIngredients: ['Eggs', 'Mushrooms', 'Butter', 'Fresh Basil', 'Black Pepper', 'Extra Virgin Olive Oil'],
    instructions: [
      { stepNumber: 1, instruction: 'Sauté sliced mushrooms in butter with a pinch of salt until golden and all moisture evaporates.' },
      { stepNumber: 2, instruction: 'Beat 3 eggs vigorously with salt and pepper. Heat a non-stick pan over medium-low.' },
      { stepNumber: 3, instruction: 'Pour in eggs. As they begin to set, move the pan while stirring gently until custard-like.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Add mushrooms, fold omelette in thirds and slide onto a warm plate. Garnish with fresh herbs.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 6,
    missingIngredients: []
  },

  // ─────────────────────────────────────────
  // HIGH PROTEIN / LOW CARB / KETO
  // ─────────────────────────────────────────
  {
    id: 'rec-26',
    title: 'Tandoori Chicken Skewers',
    description: 'Fiery, smoky yogurt-marinated chicken grilled to charred perfection with a vibrant saffron-spiced marinade.',
    imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Keto', 'Dairy-Free'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Medium',
    servings: 3,
    caloriesPerServing: 360,
    equipment: ['grill', 'oven'],
    requiredIngredients: ['Chicken Breast', 'Plain Dahi / Indian Curd / Yogurt', 'Ginger Garlic Paste', 'Kashmiri Red Chilli Powder (Deggi Mirch)', 'Garam Masala', 'Turmeric Powder (Haldi)', 'Lemon', 'Vegetable / Sunflower Oil'],
    instructions: [
      { stepNumber: 1, instruction: 'Score chicken pieces and marinate in yogurt, ginger garlic paste, all spices and lemon juice for 2 hours.', durationMinutes: 120 },
      { stepNumber: 2, instruction: 'Thread onto soaked wooden skewers. Brush with oil.' },
      { stepNumber: 3, instruction: 'Grill at high heat or bake at 230°C for 18-20 minutes, turning halfway.', durationMinutes: 20 },
      { stepNumber: 4, instruction: 'Rest 5 minutes, serve with mint chutney, sliced onions and lemon wedges.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 6,
    missingIngredients: ['Plain Dahi / Indian Curd / Yogurt', 'Kashmiri Red Chilli Powder (Deggi Mirch)']
  },
  {
    id: 'rec-27',
    title: 'Honey Soy Glazed Salmon',
    description: 'Pan-seared salmon fillet glazed in a sticky honey, soy and garlic reduction — weeknight dinner in 15 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Japanese',
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Quick', 'Dairy-Free'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 400,
    equipment: ['stovetop'],
    requiredIngredients: ['Salmon Fillet', 'Honey', 'Soy Sauce', 'Garlic', 'Ginger', 'Toasted Sesame Oil', 'Scallions / Spring Onions'],
    instructions: [
      { stepNumber: 1, instruction: 'Mix honey, soy sauce, minced garlic and grated ginger into a glaze.' },
      { stepNumber: 2, instruction: 'Heat sesame oil in a non-stick pan. Place salmon skin-side up, sear 4 minutes.', durationMinutes: 4 },
      { stepNumber: 3, instruction: 'Flip, pour glaze over top. Cook 3-4 more minutes basting constantly until glaze caramelises.', durationMinutes: 4 },
      { stepNumber: 4, instruction: 'Serve over rice with sliced scallions and sesame seeds.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 5,
    missingIngredients: ['Salmon Fillet', 'Scallions / Spring Onions']
  },
  {
    id: 'rec-28',
    title: 'Tofu Scramble with Vegetables',
    description: 'Crumbled firm tofu sautéed with turmeric, bell pepper, spinach and spices — a satisfying plant-based scramble.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'American',
    dietaryTags: ['Vegan', 'Vegetarian', 'Gluten-Free', 'High-Protein', 'Dairy-Free'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 12,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 280,
    equipment: ['stovetop'],
    requiredIngredients: ['Firm Tofu', 'Bell Pepper (Capsicum)', 'Spinach (Palak)', 'Garlic', 'Turmeric Powder (Haldi)', 'Ground Cumin', 'Vegetable / Sunflower Oil', 'Soy Sauce'],
    instructions: [
      { stepNumber: 1, instruction: 'Press tofu dry with paper towels and crumble into uneven chunks.' },
      { stepNumber: 2, instruction: 'Heat oil, sauté garlic and bell pepper 4 minutes until softened.' },
      { stepNumber: 3, instruction: 'Add crumbled tofu, turmeric and cumin. Stir-fry on high heat for 5-6 minutes until slightly crispy.', durationMinutes: 6 },
      { stepNumber: 4, instruction: 'Splash in soy sauce. Add spinach and toss until just wilted. Season and serve.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 6,
    missingIngredients: ['Firm Tofu', 'Bell Pepper (Capsicum)']
  },
  {
    id: 'rec-29',
    title: 'Shrimp Stir-Fry with Garlic & Ginger',
    description: 'Plump juicy shrimp tossed in a glossy garlic-ginger sauce with crisp vegetables over steamed jasmine rice.',
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Chinese',
    dietaryTags: ['High-Protein', 'Gluten-Free', 'Quick', 'Dairy-Free'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    difficulty: 'Easy',
    servings: 2,
    caloriesPerServing: 340,
    equipment: ['stovetop'],
    requiredIngredients: ['Shrimp / Prawns', 'Garlic', 'Ginger', 'Soy Sauce', 'Toasted Sesame Oil', 'Scallions / Spring Onions', 'Vegetable / Sunflower Oil', 'Jasmine Rice'],
    instructions: [
      { stepNumber: 1, instruction: 'Devein and pat shrimp dry. Season with salt and pepper.' },
      { stepNumber: 2, instruction: 'Heat wok until smoking. Add oil, garlic and ginger — cook 30 seconds until fragrant.' },
      { stepNumber: 3, instruction: 'Add shrimp and stir-fry 2-3 minutes until pink and just curled. Do not overcook.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Splash soy sauce and sesame oil around the wok. Toss in scallions. Serve over rice.' }
    ],
    matchStatus: 'missing-few',
    matchedIngredientsCount: 6,
    missingIngredients: ['Shrimp / Prawns', 'Jasmine Rice']
  },
  {
    id: 'rec-30',
    title: 'Masala Omelette (Desi Style)',
    description: 'The Indian-style omelette — packed with diced onion, green chilli, tomato, turmeric and fresh coriander.',
    imageUrl: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80',
    cuisine: 'Indian',
    dietaryTags: ['Vegetarian', 'High-Protein', 'Quick', 'Keto', 'Gluten-Free'],
    prepTimeMinutes: 5,
    cookTimeMinutes: 5,
    difficulty: 'Easy',
    servings: 1,
    caloriesPerServing: 270,
    equipment: ['stovetop'],
    requiredIngredients: ['Eggs', 'Yellow Onion', 'Ripe Tomatoes', 'Green Chillies (Hari Mirch)', 'Turmeric Powder (Haldi)', 'Fresh Cilantro / Coriander', 'Vegetable / Sunflower Oil', 'Black Pepper'],
    instructions: [
      { stepNumber: 1, instruction: 'Whisk 3 eggs with turmeric, black pepper and a pinch of salt.' },
      { stepNumber: 2, instruction: 'Finely dice onion, tomato, green chilli and coriander. Fold into egg mixture.' },
      { stepNumber: 3, instruction: 'Heat oil in a pan over medium heat. Pour in egg mixture and cook until almost set.', durationMinutes: 3 },
      { stepNumber: 4, instruction: 'Fold omelette in half and cook 1 more minute. Slide onto plate. Serve with chai and toast.' }
    ],
    matchStatus: 'ready',
    matchedIngredientsCount: 8,
    missingIngredients: []
  }
];
