
import React from 'react';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Last updated: April 6, 2025</p>
      
      <Separator className="mb-6" />
      
      <div className="prose prose-green max-w-none">
        <p className="text-gray-700 mb-4">
          At Starbucks Nutrition Calculator, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We do not collect personal information unless you voluntarily provide it to us. The types of information we may collect include:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Usage data such as pages visited and features used</li>
          <li>Device information including browser type and operating system</li>
          <li>IP address and approximate location data (country or city level only)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Provide and improve our nutrition calculator service</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Diagnose technical issues and maintain security</li>
          <li>Respond to your inquiries or feedback</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookies</h2>
        <p className="text-gray-700 mb-4">
          Our website uses cookies to enhance your browsing experience. These cookies may store your preferences and provide us with information about how you use our website. You can control cookies through your browser settings.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          Our website may use third-party services such as analytics providers and hosting services. These third parties may have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Children's Privacy</h2>
        <p className="text-gray-700 mb-4">
          Our service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will promptly delete it.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> privacy@starbucks-nutrition-calculator.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Website:</strong> starbucks-nutrition-calculator.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
