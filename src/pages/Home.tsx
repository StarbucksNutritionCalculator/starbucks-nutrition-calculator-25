
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Search, Calculator, ArrowRight, FileText, Sparkles, Apple, Utensils, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-starbucks-cream to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge className="bg-starbucks-light-green text-white mb-4 py-1.5">Trusted by thousands of coffee lovers</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Know What's In Your <span className="text-starbucks-green">Starbucks</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Make informed choices with our detailed nutrition calculator for all Starbucks beverages and food items.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-starbucks-green hover:bg-starbucks-light-green text-white">
                  <Link to="/calculator" className="flex items-center">
                    <Calculator size={18} className="mr-2" />
                    Use Calculator
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-starbucks-green text-starbucks-green hover:bg-starbucks-green hover:text-white">
                  <Link to="/menu" className="flex items-center">
                    <Search size={18} className="mr-2" />
                    Browse Menu
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="https://placehold.co/600x400/f2f0eb/006241?text=Starbucks+Nutrition&font=playfair"
                  alt="Starbucks Nutrition"
                  className="rounded-lg shadow-xl max-w-md w-full relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 bg-starbucks-green p-4 rounded-lg shadow-lg text-white z-0">
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-starbucks-light-green text-white mb-2">Simple process</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Calculator Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get detailed nutrition information for your favorite Starbucks items in just a few clicks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <div className="bg-starbucks-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Select Your Item
              </h3>
              <p className="text-gray-600">
                Browse our comprehensive menu or search for your favorite Starbucks items.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <div className="bg-starbucks-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Customize Options
              </h3>
              <p className="text-gray-600">
                Choose your size, milk type, and other customizations just like at Starbucks.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
              <div className="bg-starbucks-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. View Nutrition Facts
              </h3>
              <p className="text-gray-600">
                Get detailed nutrition information including calories, fat, sugar, protein, and caffeine.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-starbucks-green hover:text-starbucks-light-green">
              <Link to="/calculator" className="flex items-center justify-center">
                Try the calculator now
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-starbucks-green text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <Badge className="bg-white text-starbucks-green mb-4">Benefits</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Make Healthier Choices
              </h2>
              <p className="text-gray-100 mb-8 text-lg">
                Understanding nutrition facts helps you make informed decisions that align with your health and wellness goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-white text-starbucks-green p-2 rounded-full mr-3 mt-1">
                    <Apple size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Compare Items</h3>
                    <p className="text-sm text-gray-100">Find lower-calorie and lower-sugar alternatives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white text-starbucks-green p-2 rounded-full mr-3 mt-1">
                    <Utensils size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Customization Impact</h3>
                    <p className="text-sm text-gray-100">See how changes affect nutritional content</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white text-starbucks-green p-2 rounded-full mr-3 mt-1">
                    <Database size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Detailed Data</h3>
                    <p className="text-sm text-gray-100">Access comprehensive nutrition information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white text-starbucks-green p-2 rounded-full mr-3 mt-1">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Stay Informed</h3>
                    <p className="text-sm text-gray-100">Track nutrition intake for dietary goals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/1E3932/FFFFFF?text=Healthier+Choices&font=playfair"
                alt="Healthier Choices"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="bg-starbucks-light-green text-white mb-2">FAQ</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get answers to common questions about Starbucks nutrition and our calculator tool.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is this an official Starbucks tool?
              </h3>
              <p className="text-gray-600">
                No, this is not an official Starbucks tool. We've created this calculator based on publicly available nutrition information to help consumers make informed choices.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How accurate is the nutrition information?
              </h3>
              <p className="text-gray-600">
                We strive for accuracy, but nutrition values may vary slightly based on preparation methods, seasonal changes, or regional differences. Always check with Starbucks for official information.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I track my daily Starbucks consumption?
              </h3>
              <p className="text-gray-600">
                While we don't currently offer account tracking, you can export your calculated nutrition data for personal tracking in other apps or tools.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Does the calculator include all Starbucks items?
              </h3>
              <p className="text-gray-600">
                We continually update our database, but some seasonal or regional items may not be included. Our focus is on core menu items available in U.S. locations.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="link" className="text-starbucks-green hover:text-starbucks-light-green">
              <Link to="/faq" className="flex items-center justify-center">
                View all FAQs
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-starbucks-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to make informed choices about your Starbucks order?
          </h2>
          <Button asChild size="lg" className="bg-starbucks-green hover:bg-starbucks-light-green text-white">
            <Link to="/calculator" className="flex items-center">
              Use Nutrition Calculator
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
