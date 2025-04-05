
import { MenuCategory } from "../types/menu";

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-coffees",
    name: "Hot Coffees",
    subcategories: [
      { id: "americanos", name: "Americanos" },
      { id: "brewed-coffees", name: "Brewed Coffees" },
      { id: "cappuccinos", name: "Cappuccinos" },
      { id: "espresso-shots", name: "Espresso Shots" },
      { id: "flat-whites", name: "Flat Whites" },
      { id: "lattes", name: "Lattes" },
      { id: "macchiatos", name: "Macchiatos" },
      { id: "mochas", name: "Mochas" }
    ]
  },
  {
    id: "cold-coffees",
    name: "Cold Coffees",
    subcategories: [
      { id: "cold-brews", name: "Cold Brews" },
      { id: "iced-americanos", name: "Iced Americanos" },
      { id: "iced-lattes", name: "Iced Lattes" },
      { id: "iced-macchiatos", name: "Iced Macchiatos" },
      { id: "iced-mochas", name: "Iced Mochas" },
      { id: "frappuccinos", name: "Frappuccino® Blended Beverages" }
    ]
  },
  {
    id: "teas",
    name: "Teas",
    subcategories: [
      { id: "hot-teas", name: "Hot Teas" },
      { id: "iced-teas", name: "Iced Teas" },
      { id: "tea-lattes", name: "Tea Lattes" }
    ]
  },
  {
    id: "food",
    name: "Food",
    subcategories: [
      { id: "bakery", name: "Bakery" },
      { id: "breakfast", name: "Breakfast" },
      { id: "lunch", name: "Lunch" },
      { id: "snacks", name: "Snacks & Sweets" }
    ]
  }
];
