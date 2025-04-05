
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Disclaimer = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-gray-600">Last updated: April 5, 2025</p>
        <Separator className="my-4" />
      </div>

      <div className="prose prose-green max-w-none">
        <h2>General Information Disclaimer</h2>
        <p>
          The information contained on the Starbucks Nutrition Calculator website is for general information purposes only.
          We make no representations or warranties of any kind, express or implied, about the completeness, accuracy,
          reliability, suitability, or availability of the information, products, services, or related graphics contained
          on this website for any purpose.
        </p>

        <h2>Non-Affiliation with Starbucks</h2>
        <p>
          <strong>Starbucks Nutrition Calculator is not affiliated with, endorsed by, or connected to Starbucks Corporation in any way.</strong>
          All Starbucks product names, logos, and brands are property of Starbucks Corporation. All company, product, and service
          names used on this website are for identification purposes only.
        </p>
        <p>
          For official information about Starbucks products, please visit the official 
          <a href="https://www.starbucks.com" target="_blank" rel="noopener noreferrer" className="text-starbucks-green hover:text-starbucks-light-green mx-1">
            Starbucks website
          </a>
          or consult with Starbucks staff.
        </p>

        <h2>Nutritional Information Disclaimer</h2>
        <p>
          The nutritional information provided on this website is based on publicly available data and may not reflect
          the most current information available from Starbucks Corporation. Starbucks menu items and ingredients may vary
          by location and may change over time.
        </p>
        <p>
          Actual nutritional content may vary based on:
        </p>
        <ul>
          <li>Regional or seasonal differences in product formulations</li>
          <li>Individual store preparation methods</li>
          <li>Supplier variations in ingredients</li>
          <li>Updates to Starbucks recipes that may not yet be reflected in our database</li>
        </ul>
        <p>
          <strong>
            For the most accurate and up-to-date nutritional information, please refer to the official Starbucks website
            or consult with Starbucks staff.
          </strong>
        </p>

        <h2>Health Information Disclaimer</h2>
        <p>
          The information provided on this website is not intended as nutritional or medical advice and should not be
          used to diagnose, treat, cure, or prevent any disease or health condition. This website does not provide
          dietetic or nutrition counseling services.
        </p>
        <p>
          Always consult with a qualified healthcare professional before starting any diet, exercise program, or
          dietary supplements based on the information contained on this website.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event will Starbucks Nutrition Calculator be liable for any loss or damage including without limitation,
          indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits
          arising out of, or in connection with, the use of this website.
        </p>
        <p>
          Through this website, you may link to other websites which are not under the control of Starbucks Nutrition Calculator.
          We have no control over the nature, content, and availability of those sites. The inclusion of any links does not
          necessarily imply a recommendation or endorsement of the views expressed within them.
        </p>

        <h2>Legal Advice Disclaimer</h2>
        <p>
          Nothing contained on this website should be construed as legal advice. Any information provided on this website
          is for informational purposes only and should not be taken as legal advice for any individual case or situation.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions or concerns about this disclaimer, please contact us at:
        </p>
        <p className="ml-4">
          Email: info@starbucks-nutrition-calculator.com<br />
          Address: 123 Coffee Lane, Seattle, WA 98101
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
