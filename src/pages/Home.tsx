
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Search, Calculator, ArrowRight, FileText } from 'lucide-react';

const Home = () => {
  return (
    <>
      <section className="bg-starbucks-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Starbucks Nutrition Finder
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Make informed choices about your favorite Starbucks beverages and food items with our detailed nutrition calculator.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/calculator"
                  className="bg-starbucks-green text-white py-3 px-6 rounded-md font-medium hover:bg-starbucks-light-green transition-colors flex items-center justify-center"
                >
                  <Calculator size={18} className="mr-2" />
                  Use Calculator
                </Link>
                <Link
                  to="/menu"
                  className="border border-starbucks-green text-starbucks-green py-3 px-6 rounded-md font-medium hover:bg-starbucks-green hover:text-white transition-colors flex items-center justify-center"
                >
                  <Search size={18} className="mr-2" />
                  Browse Menu
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/600x400/f2f0eb/006241?text=Starbucks+Nutrition&font=playfair"
                alt="Starbucks Nutrition"
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-starbucks-green text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Select Your Item
              </h3>
              <p className="text-gray-600">
                Browse through our comprehensive Starbucks menu or search for your favorite items.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-starbucks-green text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Customize Options
              </h3>
              <p className="text-gray-600">
                Choose your size, milk type, and other customizations just like you would at Starbucks.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-starbucks-green text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. View Nutrition Facts
              </h3>
              <p className="text-gray-600">
                Get detailed nutrition information including calories, fat, sugar, protein, and caffeine content.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/calculator"
              className="inline-flex items-center text-starbucks-green hover:text-starbucks-light-green font-medium"
            >
              Try the calculator now
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-starbucks-light-green text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Make Healthier Choices
              </h2>
              <p className="text-gray-200 mb-6">
                Understanding the nutrition facts of your Starbucks favorites can help you make informed decisions that align with your health goals.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-white text-starbucks-green p-1 rounded-full mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Compare nutrition between different menu items
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-starbucks-green p-1 rounded-full mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Understand how customizations affect nutritional content
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-starbucks-green p-1 rounded-full mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Find lower-calorie and lower-sugar alternatives
                </li>
                <li className="flex items-start">
                  <div className="bg-white text-starbucks-green p-1 rounded-full mr-3 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Track your nutritional intake for dietary goals
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/1E3932/FFFFFF?text=Healthier+Choices&font=playfair"
                alt="Healthier Choices"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Get answers to common questions about Starbucks nutrition and our calculator tool.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is this an official Starbucks tool?
              </h3>
              <p className="text-gray-600">
                No, this is not an official Starbucks tool. We've created this calculator based on publicly available nutrition information to help consumers make informed choices.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How accurate is the nutrition information?
              </h3>
              <p className="text-gray-600">
                We strive for accuracy, but nutrition values may vary slightly based on preparation methods, seasonal changes, or regional differences. Always check with Starbucks for official information.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I track my daily Starbucks consumption?
              </h3>
              <p className="text-gray-600">
                While we don't currently offer account tracking, you can export your calculated nutrition data for personal tracking in other apps or tools.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Does the calculator include all Starbucks items?
              </h3>
              <p className="text-gray-600">
                We continually update our database, but some seasonal or regional items may not be included. Our focus is on core menu items available in U.S. locations.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/faq"
              className="inline-flex items-center text-starbucks-green hover:text-starbucks-light-green font-medium"
            >
              View all FAQs
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-starbucks-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to make informed choices about your Starbucks order?
          </h2>
          <Link
            to="/calculator"
            className="bg-starbucks-green text-white py-3 px-8 rounded-md font-medium hover:bg-starbucks-light-green transition-colors inline-flex items-center"
          >
            Use Nutrition Calculator
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
