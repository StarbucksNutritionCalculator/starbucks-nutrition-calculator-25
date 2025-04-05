
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const TermsOfUse = () => {
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-gray-600">Last updated: April 5, 2025</p>
        <Separator className="my-4" />
      </div>

      <div className="prose prose-green max-w-none">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using the Starbucks Nutrition Finder website, you accept and agree to be bound by the terms
          and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
        </p>

        <h2>Website Use</h2>
        <p>
          The content of this website is for your general information and use only. It is subject to change without notice.
        </p>
        <p>
          This website uses cookies to monitor browsing preferences. If you allow cookies to be used, personal
          information may be stored by us for use by third parties as described in our Privacy Policy.
        </p>
        <p>
          Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, 
          completeness, or suitability of the information and materials found or offered on this website for any particular purpose. 
          You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude 
          liability for any such inaccuracies or errors to the fullest extent permitted by law.
        </p>

        <h2>Non-Affiliation with Starbucks</h2>
        <p>
          Starbucks Nutrition Finder is not affiliated with, endorsed by, or connected to Starbucks Corporation. 
          All Starbucks product names, logos, and brands are property of Starbucks Corporation. 
          All company, product, and service names used on this website are for identification purposes only.
        </p>

        <h2>Nutritional Information Disclaimer</h2>
        <p>
          The nutritional information provided on this website is based on publicly available data and may not reflect
          the most current information available from Starbucks Corporation. Starbucks menu items and ingredients may vary
          by location and may change over time. For the most accurate and up-to-date nutritional information, please refer
          to the official Starbucks website or consult with Starbucks staff.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to,
          the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the
          copyright notice, which forms part of these terms and conditions.
        </p>
        <p>
          All trademarks reproduced on this website, which are not the property of, or licensed to the operator, are
          acknowledged on the website.
        </p>

        <h2>Links to Other Websites</h2>
        <p>
          Our website may contain links to other websites of interest. However, once you have used these links to leave our site,
          you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the
          protection and privacy of any information which you provide while visiting such sites and such sites are not governed
          by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Your use of this website and any information contained on it is entirely at your own risk, for which we shall not be liable.
          It shall be your own responsibility to ensure that any products, services, or information available through this website
          meet your specific requirements.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of the United States of America.
          Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of the
          United States of America.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to revise these terms of use at any time without notice. By using this website, you are agreeing to be
          bound by the then current version of these terms and conditions.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us at:
        </p>
        <p className="ml-4">
          Email: terms@starbucksnutritionfinder.com<br />
          Address: 123 Coffee Lane, Seattle, WA 98101
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
