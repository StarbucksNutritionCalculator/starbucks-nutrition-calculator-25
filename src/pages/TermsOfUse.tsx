
import React from 'react';
import { Separator } from '@/components/ui/separator';

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Use</h1>
      <p className="text-gray-600 mb-6">Last updated: April 6, 2025</p>
      
      <Separator className="mb-6" />
      
      <div className="prose prose-green max-w-none">
        <p className="text-gray-700 mb-4">
          Welcome to Starbucks Nutrition Calculator. By accessing or using our website, you agree to be bound by these Terms of Use.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Use of the Service</h2>
        <p className="text-gray-700 mb-4">
          The Starbucks Nutrition Calculator is provided for informational purposes only. You may use our service for personal, non-commercial purposes. You agree not to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Use the service in any way that could damage or overburden it</li>
          <li>Attempt to gain unauthorized access to any part of the service</li>
          <li>Use the service for any illegal or unauthorized purpose</li>
          <li>Copy, modify, or create derivative works of the service or its content</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content, features, and functionality of our website, including text, graphics, logos, and software, are owned by Starbucks Nutrition Calculator and are protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of our content without explicit permission.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Disclaimer</h2>
        <p className="text-gray-700 mb-4">
          The information provided by our nutrition calculator is based on publicly available data and may not be completely accurate or up-to-date. We do not guarantee the accuracy, completeness, or reliability of any information on our website. The nutrition calculator is not a substitute for professional dietary advice.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          To the fullest extent permitted by applicable law, Starbucks Nutrition Calculator shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Your use of or inability to use our service</li>
          <li>Any unauthorized access to or use of our servers or personal information</li>
          <li>Any errors or inaccuracies in our content</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Third-Party Links</h2>
        <p className="text-gray-700 mb-4">
          Our website may contain links to third-party websites or services not owned or controlled by Starbucks Nutrition Calculator. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These Terms shall be governed by the laws of the United States without regard to its conflict of law provisions. Any disputes relating to these Terms shall be subject to the exclusive jurisdiction of the courts in the United States.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> terms@starbucks-nutrition-calculator.com
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Website:</strong> starbucks-nutrition-calculator.com
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
