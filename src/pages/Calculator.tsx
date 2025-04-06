
import React from 'react';
import { useParams } from 'react-router-dom';
import NutritionCalculator from '../components/NutritionCalculator';
import { menuItems } from '../data/menuItems';
import SearchBar from '../components/SearchBar';
import { Coffee, HelpCircle, HeartPulse, Utensils, Flame, Droplets, UtensilsCrossed, Wheat, WheatOff, Info, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

const Calculator = () => {
  const { itemId } = useParams<{ itemId?: string }>();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center">
          <Coffee className="mr-3 text-starbucks-green" />
          Starbucks Nutrition Calculator
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Make informed choices about your favorite Starbucks drinks and food items. 
          Select an item, customize it, and see detailed nutrition information.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <SearchBar items={menuItems} className="mb-8" />
        </div>
      </header>
      
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <NutritionCalculator initialItemId={itemId} />
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Info className="mr-2 text-starbucks-green" />
          Understanding Nutrition at Starbucks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-starbucks-green/10 p-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <HeartPulse className="mr-2 text-starbucks-green" />
                  Making Healthier Choices
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  When visiting Starbucks, there are several ways to reduce calories, sugar, and fat in your order:
                </p>
                
                <ul className="space-y-3 text-gray-600">
                  {[
                    { icon: <Droplets size={16} />, text: "Request fewer pumps of syrup or sugar-free options" },
                    { icon: <Coffee size={16} />, text: "Choose non-fat or plant-based milk alternatives" },
                    { icon: <UtensilsCrossed size={16} />, text: "Skip the whipped cream and toppings" },
                    { icon: <Flame size={16} />, text: "Order a smaller size" },
                    { icon: <Coffee size={16} />, text: "Try unsweetened teas or Americanos for lower-calorie options" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="flex-shrink-0 bg-starbucks-cream p-1.5 rounded-full mr-2 text-starbucks-green group-hover:bg-starbucks-green group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span className="mt-0.5">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-starbucks-green/10 p-4">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <HelpCircle className="mr-2 text-starbucks-green" />
                  Nutrition Facts Explained
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Understanding nutrition information can help you make informed choices:
                </p>
                
                <ul className="space-y-3 text-gray-600">
                  {[
                    { icon: <Flame size={16} />, title: "Calories:", text: "The USDA recommends 1,600-2,400 calories per day for adult women and 2,000-3,000 for adult men." },
                    { icon: <Droplets size={16} />, title: "Sugar:", text: "The American Heart Association recommends limiting added sugar to 25g daily for women and 36g for men." },
                    { icon: <Coffee size={16} />, title: "Caffeine:", text: "FDA guidelines suggest 400mg of caffeine per day (about 4-5 cups of coffee) is generally safe for most adults." },
                    { icon: <HeartPulse size={16} />, title: "Saturated Fat:", text: "Should be limited to less than 10% of your daily calories." }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="flex-shrink-0 bg-starbucks-cream p-1.5 rounded-full mr-2 text-starbucks-green group-hover:bg-starbucks-green group-hover:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span>
                        <strong>{item.title}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-starbucks-cream to-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Utensils className="mr-2 text-starbucks-green" />
            Dietary Considerations
          </h3>
          
          <p className="text-gray-700 mb-6">
            Starbucks offers several options for various dietary needs:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                title: "Vegan Options", 
                icon: <Droplets />, 
                text: "Plant-based milk alternatives, oatmeal, and select food items are available." 
              },
              { 
                title: "Gluten-Sensitive", 
                icon: <WheatOff />, 
                text: "Many drinks are gluten-free, along with select food options." 
              },
              { 
                title: "Low Calorie", 
                icon: <Flame />, 
                text: "Tea, Americanos, and cold brew without add-ins are lower-calorie options." 
              },
              { 
                title: "Lower Sugar", 
                icon: <Coffee />, 
                text: "Ask for fewer pumps of syrup or sugar-free options to reduce sugar content." 
              }
            ].map((option, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                <CardContent className="p-4">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <span className="bg-starbucks-green/10 p-1.5 rounded-full mr-2 text-starbucks-green">
                      {option.icon}
                    </span>
                    {option.title}
                  </h4>
                  <p className="text-sm text-gray-600">{option.text}</p>
                  <div className="mt-3 pt-2 border-t border-gray-100 text-xs text-starbucks-green flex items-center">
                    <span>Learn more</span>
                    <ChevronRight size={14} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-starbucks-green/20 bg-starbucks-green/5 p-4 rounded-lg">
            <div className="flex items-center text-starbucks-green">
              <Info size={18} className="mr-2" />
              <p className="text-sm font-medium">
                Remember that individual nutrition needs vary. Consult a healthcare professional for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
