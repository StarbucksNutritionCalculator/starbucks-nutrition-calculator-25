
import React from 'react';
import { Link } from 'react-router-dom';
import { Info, FileText, Coffee, Calculator, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">About This Tool</h1>
        <p className="text-gray-600 max-w-3xl">
          Learn more about our Starbucks Nutrition Calculator, how it works, and what makes it useful.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="prose prose-green max-w-none">
            <h2>Our Mission</h2>
            <p>
              At Starbucks Nutrition Calculator, our mission is to empower consumers with accurate, accessible information about the nutritional content of Starbucks menu items. We believe that making informed choices starts with having clear information.
            </p>
            
            <p>
              Whether you're counting calories, managing a health condition, or simply curious about what's in your favorite Starbucks drink, our tool helps you understand the nutritional impact of your choices and how customizations affect the overall nutrition profile.
            </p>
            
            <h2>Who We Are</h2>
            <p>
              We are a team of health-conscious coffee lovers who wanted a better way to understand the nutritional content of Starbucks menu items. Our backgrounds span nutrition, technology, and data analysis, and we've combined these skills to create a comprehensive nutrition calculator.
            </p>
            
            <p>
              This project was born from our own frustrations with trying to find detailed nutrition information that accounts for customizations. We built the tool we wished existed, and we're sharing it with the Starbucks-loving community.
            </p>
            
            <h2>How We Source Our Data</h2>
            <p>
              Our nutrition data comes from publicly available information provided by Starbucks, including:
            </p>
            <ul>
              <li>Published nutrition facts on the Starbucks website</li>
              <li>In-store nutrition information booklets</li>
              <li>Starbucks mobile app nutrition disclosures</li>
            </ul>
            
            <p>
              We regularly update our database to reflect menu changes and new items. However, please note that Starbucks may modify recipes or ingredients at any time, so there may occasionally be slight differences between our calculations and the current official Starbucks nutrition information.
            </p>
            
            <h2>How Our Calculator Works</h2>
            <p>
              Our nutrition calculator uses a proprietary algorithm that:
            </p>
            <ul>
              <li>Starts with base nutrition values for each menu item</li>
              <li>Applies precise scaling for different size options</li>
              <li>Calculates the impact of each customization (milk type, syrup additions, etc.)</li>
              <li>Computes the final nutritional profile based on all selected options</li>
            </ul>
            
            <p>
              This allows for much more accurate nutrition estimates than simply looking at standard menu items, especially for highly customized orders.
            </p>
            
            <h2>Important Disclaimer</h2>
            <p>
              While we strive for accuracy, this tool is provided for informational purposes only and is not affiliated with Starbucks Corporation. All product names, logos, and brands are property of their respective owners.
            </p>
            
            <p>
              The nutrition information provided should be considered estimates. For the most accurate and up-to-date information, please consult the official Starbucks website or speak with Starbucks partners (employees).
            </p>
            
            <p>
              This tool should not be used as a substitute for professional medical or nutritional advice. Always consult with qualified healthcare providers regarding your dietary needs.
            </p>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
              <Info size={18} className="mr-2 text-starbucks-green" />
              Quick Facts
            </h3>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-900 mb-1">Data Accuracy</h4>
                <p className="text-sm text-gray-600">
                  Our nutrition data is based on publicly available Starbucks information and is updated regularly.
                </p>
              </div>
              
              <div className="pb-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-900 mb-1">Menu Coverage</h4>
                <p className="text-sm text-gray-600">
                  We cover core menu items available at U.S. Starbucks locations, with regular updates for seasonal offerings.
                </p>
              </div>
              
              <div className="pb-4 border-b border-gray-200">
                <h4 className="font-medium text-gray-900 mb-1">Customization Options</h4>
                <p className="text-sm text-gray-600">
                  Our calculator accounts for size changes, milk alternatives, syrup additions, and other common modifications.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Not Affiliated with Starbucks</h4>
                <p className="text-sm text-gray-600">
                  This is an independent tool and is not affiliated with, endorsed by, or connected to Starbucks Corporation.
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                <FileText size={18} className="mr-2 text-starbucks-green" />
                Resources
              </h3>
              
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/faq" 
                    className="flex items-center text-starbucks-green hover:text-starbucks-light-green"
                  >
                    <span className="mr-2">FAQ</span>
                    <ExternalLink size={14} />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/calculator" 
                    className="flex items-center text-starbucks-green hover:text-starbucks-light-green"
                  >
                    <span className="mr-2">Nutrition Calculator</span>
                    <ExternalLink size={14} />
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/menu" 
                    className="flex items-center text-starbucks-green hover:text-starbucks-light-green"
                  >
                    <span className="mr-2">Browse Menu</span>
                    <ExternalLink size={14} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to calculate your Starbucks nutrition?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Coffee size={18} className="mr-2" />
            Browse Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
