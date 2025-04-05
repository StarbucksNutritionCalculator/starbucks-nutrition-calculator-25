
export type NutritionInfo = {
  calories: number;
  totalFat: number; // in grams
  saturatedFat: number; // in grams
  transFat: number; // in grams
  cholesterol: number; // in mg
  sodium: number; // in mg
  totalCarbs: number; // in grams
  dietaryFiber: number; // in grams
  sugars: number; // in grams
  protein: number; // in grams
  caffeine: number; // in mg
};

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  image?: string;
  description?: string;
  nutrition: NutritionInfo;
  sizes?: {
    [key: string]: {
      multiplier: number;
    };
  };
  customizations?: {
    [key: string]: {
      options: {
        name: string;
        nutritionModifier: Partial<NutritionInfo>;
      }[];
    };
  };
};

export type MenuCategory = {
  id: string;
  name: string;
  subcategories?: { id: string; name: string }[];
};
