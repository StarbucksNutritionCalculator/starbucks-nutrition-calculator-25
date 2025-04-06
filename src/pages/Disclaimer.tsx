
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h1>
      <p className="text-gray-600 mb-6">Last updated: April 6, 2025</p>
      
      <Separator className="mb-6" />
      
      <div className="prose prose-green max-w-none">
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Not an Official Starbucks Website</h2>
        <p className="text-gray-700 mb-4">
          Starbucks Nutrition Calculator (starbucks-nutrition-calculator.com) is not affiliated with, authorized, endorsed by, or in any way officially connected with Starbucks Corporation, or any of its subsidiaries or affiliates. The official Starbucks website can be found at www.starbucks.com.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Nutrition Information</h2>
        <p className="text-gray-700 mb-4">
          The nutrition information provided on this website is based on publicly available data and may not be completely accurate, comprehensive, or up-to-date. Starbucks may update their menu items, ingredients, or nutritional information without notice.
        </p>
        
        <p className="text-gray-700 mb-4">
          We strive to provide accurate information, but there may be discrepancies between the information on this website and the actual nutritional content of Starbucks products. Nutrition values may vary based on:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Product preparation and serving methods</li>
          <li>Regional or seasonal variations</li>
          <li>Changes to recipes or ingredients</li>
          <li>Different sizes and customization options</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Not Medical Advice</h2>
        <p className="text-gray-700 mb-4">
          The information provided on this website is for general informational purposes only and is not intended as medical or nutritional advice, or as a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        
        <p className="text-gray-700 mb-4">
          Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition or dietary needs. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Trademarks</h2>
        <p className="text-gray-700 mb-4">
          The Starbucks name, logo, and related trademarks are the property of Starbucks Corporation. All other trademarks, service marks, and product names used on this website are the property of their respective owners. We acknowledge that we are not the owners of these trademarks and that we are not affiliated with the trademark owners.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. We will not be liable for any direct, indirect, or consequential loss or damage arising under this disclaimer or in connection with our website, whether arising in tort, contract, or otherwise.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Educational Purpose</h2>
        <p className="text-gray-700 mb-4">
          This website exists for educational purposes only, to help consumers make informed choices about nutrition at Starbucks. It is designed to provide general information about nutritional content and not as a tool for precise dietary planning or medical purposes.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this disclaimer, please contact us at:
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> disclaimer@starbucks-nutrition-calculator.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Website:</strong> starbucks-nutrition-calculator.com
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
