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
  },
  
  // Adding more Hot Coffees
  {
    id: "pike-place-roast",
    name: "Pike Place® Roast",
    category: "hot-coffees",
    subcategory: "brewed-coffees",
    description: "From our first store in Seattle's Pike Place Market to our coffeehouses around the world, customers requested a freshly brewed coffee they could enjoy throughout the day.",
    nutrition: {
      calories: 5,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 10,
      totalCarbs: 0,
      dietaryFiber: 0,
      sugars: 0,
      protein: 1,
      caffeine: 235
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
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "hot-coffees",
    subcategory: "cappuccinos",
    description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
    nutrition: {
      calories: 140,
      totalFat: 5,
      saturatedFat: 3.5,
      transFat: 0,
      cholesterol: 20,
      sodium: 100,
      totalCarbs: 14,
      dietaryFiber: 0,
      sugars: 13,
      protein: 9,
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
        multiplier: 1.3
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
              calories: -30, 
              totalFat: -5, 
              saturatedFat: -3.5 
            }
          },
          {
            name: "Almond Milk",
            nutritionModifier: { 
              calories: -50, 
              totalFat: -3, 
              saturatedFat: -3.5,
              sugars: -11,
              protein: -7
            }
          }
        ]
      }
    }
  },
  {
    id: "flat-white",
    name: "Flat White",
    category: "hot-coffees",
    subcategory: "flat-whites",
    description: "Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor.",
    nutrition: {
      calories: 170,
      totalFat: 7,
      saturatedFat: 4.5,
      transFat: 0,
      cholesterol: 25,
      sodium: 160,
      totalCarbs: 14,
      dietaryFiber: 0,
      sugars: 14,
      protein: 10,
      caffeine: 130
    },
    sizes: {
      "tall": {
        multiplier: 0.8
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.2
      }
    }
  },
  
  // Adding Cold Coffees
  {
    id: "cold-brew",
    name: "Cold Brew Coffee",
    category: "cold-coffees",
    subcategory: "cold-brews",
    description: "Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat and finished with a splash of milk.",
    nutrition: {
      calories: 5,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 15,
      totalCarbs: 0,
      dietaryFiber: 0,
      sugars: 0,
      protein: 0,
      caffeine: 205
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
      "sweetener": {
        options: [
          {
            name: "No Sweetener",
            nutritionModifier: {}
          },
          {
            name: "Classic Syrup (1 Pump)",
            nutritionModifier: { 
              calories: 20, 
              sugars: 5 
            }
          },
          {
            name: "Vanilla Syrup (1 Pump)",
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
    id: "vanilla-sweet-cream-cold-brew",
    name: "Vanilla Sweet Cream Cold Brew",
    category: "cold-coffees",
    subcategory: "cold-brews",
    description: "Our slow-steeped custom blend of Cold Brew coffee accented with vanilla and topped with a delicate float of house-made vanilla sweet cream.",
    nutrition: {
      calories: 110,
      totalFat: 6,
      saturatedFat: 3.5,
      transFat: 0,
      cholesterol: 20,
      sodium: 25,
      totalCarbs: 14,
      dietaryFiber: 0,
      sugars: 14,
      protein: 1,
      caffeine: 205
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
    }
  },
  {
    id: "iced-caffe-latte",
    name: "Iced Caffè Latte",
    category: "cold-coffees",
    subcategory: "iced-lattes",
    description: "Our dark, rich espresso balanced with milk and served over ice. A perfect milk-forward cooldown.",
    nutrition: {
      calories: 130,
      totalFat: 4.5,
      saturatedFat: 3,
      transFat: 0,
      cholesterol: 20,
      sodium: 115,
      totalCarbs: 13,
      dietaryFiber: 0,
      sugars: 11,
      protein: 8,
      caffeine: 150
    },
    sizes: {
      "tall": {
        multiplier: 0.8
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
    id: "caramel-frappuccino",
    name: "Caramel Frappuccino® Blended Beverage",
    category: "cold-coffees",
    subcategory: "frappuccinos",
    description: "Caramel syrup meets coffee, milk and ice for a rendezvous in the blender, while whipped cream and buttery caramel sauce layer the love on top.",
    nutrition: {
      calories: 380,
      totalFat: 16,
      saturatedFat: 10,
      transFat: 0.5,
      cholesterol: 55,
      sodium: 210,
      totalCarbs: 54,
      dietaryFiber: 0,
      sugars: 54,
      protein: 5,
      caffeine: 90
    },
    sizes: {
      "tall": {
        multiplier: 0.8
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.3
      }
    }
  },
  
  // Adding Teas
  {
    id: "chai-tea",
    name: "Chai Tea",
    category: "teas",
    subcategory: "hot-teas",
    description: "Black tea infused with warm clove, cardamom, cinnamon and ginger notes.",
    nutrition: {
      calories: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 10,
      totalCarbs: 0,
      dietaryFiber: 0,
      sugars: 0,
      protein: 0,
      caffeine: 40
    },
    sizes: {
      "tall": {
        multiplier: 0.8
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
    id: "iced-green-tea",
    name: "Iced Green Tea",
    category: "teas",
    subcategory: "iced-teas",
    description: "Green tea blended with mint, lemongrass and lemon verbena, then given a good shake with ice.",
    nutrition: {
      calories: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 10,
      totalCarbs: 0,
      dietaryFiber: 0,
      sugars: 0,
      protein: 0,
      caffeine: 25
    },
    sizes: {
      "tall": {
        multiplier: 0.8
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.3
      }
    },
    customizations: {
      "sweetener": {
        options: [
          {
            name: "No Sweetener",
            nutritionModifier: {}
          },
          {
            name: "Liquid Cane Sugar (3 Pumps)",
            nutritionModifier: { 
              calories: 60, 
              sugars: 15 
            }
          }
        ]
      }
    }
  },
  {
    id: "matcha-tea-latte",
    name: "Matcha Tea Latte",
    category: "teas",
    subcategory: "tea-lattes",
    description: "Smooth and creamy matcha sweetened just right and served with steamed milk.",
    nutrition: {
      calories: 240,
      totalFat: 7,
      saturatedFat: 4.5,
      transFat: 0,
      cholesterol: 25,
      sodium: 155,
      totalCarbs: 32,
      dietaryFiber: 1,
      sugars: 32,
      protein: 12,
      caffeine: 80
    },
    sizes: {
      "tall": {
        multiplier: 0.8
      },
      "grande": {
        multiplier: 1
      },
      "venti": {
        multiplier: 1.3
      }
    }
  },
  
  // Adding Food Items
  {
    id: "blueberry-muffin",
    name: "Blueberry Muffin",
    category: "food",
    subcategory: "bakery",
    description: "This delicious muffin is dotted throughout with sweet, juicy blueberries and a hint of lemon.",
    nutrition: {
      calories: 360,
      totalFat: 15,
      saturatedFat: 9,
      transFat: 0,
      cholesterol: 60,
      sodium: 270,
      totalCarbs: 52,
      dietaryFiber: 1,
      sugars: 33,
      protein: 6,
      caffeine: 0
    }
  },
  {
    id: "spinach-feta-wrap",
    name: "Spinach, Feta & Egg White Wrap",
    category: "food",
    subcategory: "breakfast",
    description: "Egg whites with spinach, feta cheese, and sun-dried tomato cream cheese inside a whole-wheat wrap.",
    nutrition: {
      calories: 290,
      totalFat: 8,
      saturatedFat: 3.5,
      transFat: 0,
      cholesterol: 20,
      sodium: 840,
      totalCarbs: 34,
      dietaryFiber: 6,
      sugars: 5,
      protein: 20,
      caffeine: 0
    }
  },
  {
    id: "turkey-bacon-sandwich",
    name: "Turkey Bacon & Egg White Sandwich",
    category: "food",
    subcategory: "lunch",
    description: "Sizzling reduced-fat turkey bacon and wholesome egg whites are paired with the rich creaminess of aged Cheddar cheese.",
    nutrition: {
      calories: 230,
      totalFat: 5,
      saturatedFat: 2.5,
      transFat: 0,
      cholesterol: 25,
      sodium: 550,
      totalCarbs: 28,
      dietaryFiber: 2,
      sugars: 2,
      protein: 17,
      caffeine: 0
    }
  },
  {
    id: "protein-box",
    name: "Protein Box",
    category: "food",
    subcategory: "snacks",
    description: "A protein-packed meal with hard-boiled eggs, apple slices, grapes, white cheddar cheese, and multigrain crackers.",
    nutrition: {
      calories: 470,
      totalFat: 25,
      saturatedFat: 7,
      transFat: 0,
      cholesterol: 195,
      sodium: 560,
      totalCarbs: 40,
      dietaryFiber: 5,
      sugars: 18,
      protein: 23,
      caffeine: 0
    }
  }
];
