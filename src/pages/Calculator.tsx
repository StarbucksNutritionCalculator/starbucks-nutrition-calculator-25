
import React from 'react';
import { useParams } from 'react-router-dom';
import NutritionCalculator from '../components/NutritionCalculator';

const Calculator = () => {
  const { itemId } = useParams<{ itemId?: string }>();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Starbucks Nutrition Calculator</h1>
        <p className="text-gray-600 max-w-3xl">
          Make informed choices about your favorite Starbucks drinks and food items. 
          Select an item, customize it, and see detailed nutrition information.
        </p>
      </header>
      
      <NutritionCalculator initialItemId={itemId} />
      
      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Nutrition at Starbucks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Making Healthier Choices</h3>
            <p className="text-gray-600 mb-4">
              When visiting Starbucks, there are several ways to reduce calories, sugar, and fat in your order:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Request fewer pumps of syrup or sugar-free options</li>
              <li>Choose non-fat or plant-based milk alternatives</li>
              <li>Skip the whipped cream and toppings</li>
              <li>Order a smaller size</li>
              <li>Try unsweetened teas or Americanos for lower-calorie options</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Nutrition Facts Explained</h3>
            <p className="text-gray-600 mb-4">
              Understanding nutrition information can help you make informed choices:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Calories:</strong> The USDA recommends 1,600-2,400 calories per day for adult women and 2,000-3,000 for adult men.</li>
              <li><strong>Sugar:</strong> The American Heart Association recommends limiting added sugar to 25g daily for women and 36g for men.</li>
              <li><strong>Caffeine:</strong> FDA guidelines suggest 400mg of caffeine per day (about 4-5 cups of coffee) is generally safe for most adults.</li>
              <li><strong>Saturated Fat:</strong> Should be limited to less than 10% of your daily calories.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-starbucks-cream rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Dietary Considerations</h3>
          <p className="text-gray-700 mb-4">
            Starbucks offers several options for various dietary needs:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium text-gray-900 mb-1">Vegan Options</h4>
              <p className="text-sm text-gray-600">
                Plant-based milk alternatives, oatmeal, and select food items are available.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium text-gray-900 mb-1">Gluten-Sensitive</h4>
              <p className="text-sm text-gray-600">
                Many drinks are gluten-free, along with select food options.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium text-gray-900 mb-1">Low Calorie</h4>
              <p className="text-sm text-gray-600">
                Tea, Americanos, and cold brew without add-ins are lower-calorie options.
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h4 className="font-medium text-gray-900 mb-1">Lower Sugar</h4>
              <p className="text-sm text-gray-600">
                Ask for fewer pumps of syrup or sugar-free options to reduce sugar content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
