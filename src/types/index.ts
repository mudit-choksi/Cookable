export type IngredientCategory = 
  | 'produce' 
  | 'protein' 
  | 'dairy' 
  | 'pantry' 
  | 'spices' 
  | 'grains'
  | 'baking'
  | 'oils';

export interface AvailableIngredient {
  id: string;
  name: string;
  category: IngredientCategory;
  defaultUnit?: string;
  commonUnits?: string[];
  icon?: string;
}

export interface UserPantryItem {
  id: string;           // generated unique id for user pantry entry
  ingredientId?: string; // id if selected from catalog
  name: string;
  amount?: string;      // e.g. "2", "500", "1/2"
  unit?: string;        // e.g. "cups", "tbsp", "grams", "items"
  category?: IngredientCategory;
}

export type EquipmentType = 
  | 'stovetop'
  | 'oven'
  | 'microwave'
  | 'air_fryer'
  | 'rice_cooker'
  | 'pressure_cooker'
  | 'blender'
  | 'grill'
  | 'slow_cooker';

export interface RecipeStep {
  stepNumber: number;
  instruction: string;
  durationMinutes?: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  cuisine: string;
  dietaryTags: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  servings: number;
  caloriesPerServing: number;
  equipment: EquipmentType[];
  requiredIngredients: string[];
  instructions: RecipeStep[];
  youtubeVideoId?: string;
  matchStatus: 'ready' | 'missing-few' | 'missing-many';
  matchedIngredientsCount: number;
  missingIngredients: string[];
}
