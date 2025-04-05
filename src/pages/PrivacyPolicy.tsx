
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-starbucks-green hover:text-starbucks-light-green transition-colors mb-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600">Last updated: April 5, 2025</p>
        <Separator className="my-4" />
      </div>

      <div className="prose prose-green max-w-none">
        <h2>Introduction</h2>
        <p>
          At Starbucks Nutrition Finder, we respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you about how we look after your personal data when you visit our website
          and tell you about your privacy rights and how the law protects you.
        </p>

        <h2>The Data We Collect</h2>
        <p>
          When you use our nutrition calculator, we do not collect any personally identifiable information.
          The selections you make regarding menu items and customizations are processed in your browser
          and are not stored on our servers.
        </p>

        <h3>Technical Data</h3>
        <p>
          We collect anonymous usage data such as:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Time zone setting and location</li>
          <li>Browser plug-in types and versions</li>
          <li>Operating system and platform</li>
          <li>Other technology on the devices you use to access this website</li>
        </ul>
        
        <h2>Cookies</h2>
        <p>
          We use essential cookies to ensure the proper functioning of our website. These cookies are necessary
          for the website to work and cannot be switched off in our systems.
        </p>
        
        <h3>Analytics Cookies</h3>
        <p>
          We use Google Analytics to collect anonymous information about how visitors use our website.
          These cookies help us understand how visitors interact with our website, which pages are
          popular, and identify any issues visitors may experience.
        </p>
        
        <h2>How We Use Your Data</h2>
        <p>
          We use the data we collect to:
        </p>
        <ul>
          <li>Provide, maintain, and improve our website</li>
          <li>Understand how visitors use our website</li>
          <li>Detect and address technical issues</li>
          <li>Monitor and analyze usage patterns and trends</li>
        </ul>
        
        <h2>Data Sharing and Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your data to third parties without your consent, except
          to trusted third-party service providers who assist us in operating our website and conducting our business,
          so long as those parties agree to keep this information confidential.
        </p>
        
        <h2>Data Security</h2>
        <p>
          We have implemented appropriate security measures to prevent your personal data from being accidentally
          lost, used, or accessed in an unauthorized way, altered, or disclosed.
        </p>
        
        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal data, including:
        </p>
        <ul>
          <li>The right to access your personal data</li>
          <li>The right to request correction of your personal data</li>
          <li>The right to request erasure of your personal data</li>
          <li>The right to restrict processing of your personal data</li>
          <li>The right to data portability</li>
          <li>The right to object to processing of your personal data</li>
        </ul>
        
        <h2>Children's Privacy</h2>
        <p>
          Our website is not intended for children under the age of 13. We do not knowingly collect personal data
          from children under 13. If you are a parent or guardian and you believe your child has provided us with
          personal data, please contact us.
        </p>
        
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our privacy policy from time to time. We will notify you of any changes by posting the
          new privacy policy on this page and updating the "last updated" date.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at:
        </p>
        <p className="ml-4">
          Email: privacy@starbucksnutritionfinder.com<br />
          Address: 123 Coffee Lane, Seattle, WA 98101
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
