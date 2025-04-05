
import { MenuItem } from "../types/menu";

export const menuItems: MenuItem[] = [
  {
    id: "caffe-latte",
    name: "Caffè Latte",
    category: "hot-coffees",
    subcategory: "lattes",
    description: "Our dark, rich espresso balanced with steamed milk and a light layer of foam.",
    nutrition: {
      calories: 190,
      totalFat: 7,
      saturatedFat: 4.5,
      transFat: 0,
      cholesterol: 25,
      sodium: 170,
      totalCarbs: 19,
      dietaryFiber: 0,
      sugars: 18,
      protein: 13,
      caffeine: 150
    },
    sizes: {
      "tall": {
        multiplier: 0.75
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.25
      }
    },
    customizations: {
      "milk": {
        options: [
          {
            name: "Whole Milk",
            nutritionModifier: {}
          },
          {
            name: "Nonfat Milk",
            nutritionModifier: { 
              calories: -40, 
              totalFat: -7, 
              saturatedFat: -4.5 
            }
          },
          {
            name: "Almond Milk",
            nutritionModifier: { 
              calories: -60, 
              totalFat: -4, 
              saturatedFat: -4.5,
              sugars: -13,
              protein: -10
            }
          }
        ]
      },
      "syrup": {
        options: [
          {
            name: "No Syrup",
            nutritionModifier: {}
          },
          {
            name: "Vanilla Syrup (1 Pump)",
            nutritionModifier: { 
              calories: 20, 
              sugars: 5 
            }
          },
          {
            name: "Caramel Syrup (1 Pump)",
            nutritionModifier: { 
              calories: 20, 
              sugars: 5 
            }
          }
        ]
      }
    }
  },
  {
    id: "caffe-americano",
    name: "Caffè Americano",
    category: "hot-coffees",
    subcategory: "americanos",
    description: "Espresso shots topped with hot water to produce a light layer of crema.",
    nutrition: {
      calories: 15,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 10,
      totalCarbs: 3,
      dietaryFiber: 0,
      sugars: 0,
      protein: 1,
      caffeine: 225
    },
    sizes: {
      "tall": {
        multiplier: 0.7
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.3
      }
    }
  },
  {
    id: "iced-caramel-macchiato",
    name: "Iced Caramel Macchiato",
    category: "cold-coffees",
    subcategory: "iced-macchiatos",
    description: "We combine our rich, full-bodied espresso with vanilla-flavored syrup, milk and ice, then top it off with caramel drizzle for an oh-so-sweet finish.",
    nutrition: {
      calories: 250,
      totalFat: 7,
      saturatedFat: 4.5,
      transFat: 0,
      cholesterol: 25,
      sodium: 150,
      totalCarbs: 35,
      dietaryFiber: 0,
      sugars: 33,
      protein: 10,
      caffeine: 150
    },
    sizes: {
      "tall": {
        multiplier: 0.75
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.4
      }
    },
    customizations: {
      "milk": {
        options: [
          {
            name: "Whole Milk",
            nutritionModifier: {}
          },
          {
            name: "Nonfat Milk",
            nutritionModifier: { 
              calories: -40, 
              totalFat: -7, 
              saturatedFat: -4.5 
            }
          }
        ]
      }
    }
  },
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    category: "food",
    subcategory: "bakery",
    description: "This classic Croissant is made with 100 percent butter to create a golden, crunchy top with soft, flaky layers inside.",
    nutrition: {
      calories: 260,
      totalFat: 15,
      saturatedFat: 9,
      transFat: 0.5,
      cholesterol: 50,
      sodium: 310,
      totalCarbs: 27,
      dietaryFiber: 1,
      sugars: 6,
      protein: 5,
      caffeine: 0
    }
  },
  {
    id: "chai-tea-latte",
    name: "Chai Tea Latte",
    category: "teas",
    subcategory: "tea-lattes",
    description: "Black tea infused with cinnamon, clove, and other warming spices is combined with steamed milk and topped with foam.",
    nutrition: {
      calories: 240,
      totalFat: 4.5,
      saturatedFat: 3,
      transFat: 0,
      cholesterol: 15,
      sodium: 115,
      totalCarbs: 42,
      dietaryFiber: 0,
      sugars: 42,
      protein: 8,
      caffeine: 95
    },
    sizes: {
      "tall": {
        multiplier: 0.75
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.3
      }
    }
  }
];
