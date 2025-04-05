
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this an official Starbucks nutrition calculator?",
      answer: "No, this is not an official Starbucks tool. We've created this calculator based on publicly available nutrition information to help consumers make informed choices about their Starbucks purchases. For official nutrition information, please visit the Starbucks website or contact Starbucks directly."
    },
    {
      question: "How accurate is the nutrition information in this calculator?",
      answer: "We strive for accuracy by sourcing our nutrition data from publicly available information. However, nutrition values may vary slightly based on preparation methods, seasonal ingredient changes, or regional differences. This tool should be used as a general guide, and for the most up-to-date and accurate information, we recommend checking with Starbucks directly."
    },
    {
      question: "Does this calculator include all Starbucks menu items?",
      answer: "Our database includes the most popular and core menu items available at U.S. Starbucks locations. However, we may not include all seasonal, limited-time offerings, or regional specialties. We regularly update our database to include new items, but there may be some delay between a new product launch and its addition to our calculator."
    },
    {
      question: "Can I see how customizations affect nutrition information?",
      answer: "Yes! One of the key features of our calculator is the ability to see how different customizations (like milk type, syrup choices, and size options) affect the nutritional content of your Starbucks order. Simply select your item and explore the customization options to see how they change the nutrition values."
    },
    {
      question: "How can I find healthier options at Starbucks?",
      answer: "Our calculator allows you to compare different menu items and customizations to find options that better fit your nutritional goals. Generally, choosing smaller sizes, non-fat or plant-based milks, fewer pumps of syrup, and skipping whipped cream can help reduce calories, fat, and sugar. Brewed coffee, tea, Americanos, and cold brew (without added sweeteners) are typically lower in calories."
    },
    {
      question: "Why do the nutrition values change when I select a different size?",
      answer: "The nutrition information scales proportionally with the size of your beverage. A larger size contains more of all ingredients, which increases all nutrition values. Our calculator automatically adjusts these values based on Starbucks' standard sizing ratios."
    },
    {
      question: "Can I export or save my nutrition calculations?",
      answer: "Yes, you can export the nutrition information for your customized Starbucks order by clicking the Export button on the calculator results. This will download a text file with the complete nutrition breakdown that you can save or use with other nutrition tracking tools."
    },
    {
      question: "How often is the nutrition database updated?",
      answer: "We strive to update our database whenever Starbucks makes significant menu changes or introduces new permanent items. Seasonal items may be added during their availability period. However, we recommend checking the official Starbucks website for the most current information, especially for newly released items."
    },
    {
      question: "Does the calculator account for dietary restrictions like vegan or gluten-free options?",
      answer: "While our calculator provides comprehensive nutrition information, it does not currently have specific filters for dietary restrictions. However, you can use the customization options to select plant-based milks and review ingredients to help make choices that align with your dietary needs. We're working on adding more specific dietary filters in the future."
    },
    {
      question: "Why might the nutrition information differ from what I see at Starbucks?",
      answer: "Differences can occur for several reasons: Starbucks may update their recipes or ingredients, regional variations may exist, or barista preparation might vary slightly. Additionally, Starbucks rounds some nutrition values differently than we do. Our calculator provides a good approximation, but the official Starbucks nutrition information should be considered the most authoritative source."
    },
    {
      question: "What is the daily recommended intake for calories, sugar, and caffeine?",
      answer: "The general guidance is that most adults need between 1,600-2,400 calories per day (women) and 2,000-3,000 calories per day (men), though individual needs vary. The American Heart Association recommends limiting added sugar to 25g per day for women and 36g for men. For caffeine, the FDA suggests 400mg per day (about 4-5 cups of coffee) is generally safe for most healthy adults."
    },
    {
      question: "How can I contact you with suggestions or corrections?",
      answer: "We welcome your feedback! If you notice any discrepancies in our nutrition information or have suggestions for improving our calculator, please use the contact form on our website. We're committed to providing the most accurate and helpful tool possible."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-3xl">
          Find answers to common questions about Starbucks nutrition and how to use our calculator tool.
        </p>
      </header>

      <div className="max-w-3xl mx-auto mb-12">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-medium text-gray-900">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="max-w-3xl mx-auto p-6 bg-starbucks-cream rounded-lg text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Have another question?
        </h2>
        <p className="text-gray-700 mb-4">
          If you haven't found the answer to your question, you might find more information in our resources section.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/calculator"
            className="bg-starbucks-green text-white py-2 px-4 rounded font-medium hover:bg-starbucks-light-green transition-colors"
          >
            Try the Calculator
          </Link>
          <Link
            to="/about"
            className="border border-starbucks-green text-starbucks-green py-2 px-4 rounded font-medium hover:bg-starbucks-green hover:text-white transition-colors"
          >
            About This Tool
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Starbucks Nutrition</h2>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <p>
            Making informed choices about your Starbucks order can help you maintain a balanced diet while still enjoying your favorite beverages and food items. Here are some helpful insights about Starbucks nutrition:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Beverage Customizations
          </h3>
          <p>
            One of the best ways to control the nutritional content of your Starbucks order is through customizations:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Asking for fewer pumps of syrup can significantly reduce sugar and calories</li>
            <li>Switching to non-fat milk can reduce fat content while maintaining protein</li>
            <li>Plant-based milk alternatives like almond milk typically contain fewer calories</li>
            <li>Skipping whipped cream can save 80-110 calories and 8-11g of fat</li>
            <li>Smaller sizes naturally contain less of everything, including calories and sugar</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Sugar in Starbucks Beverages
          </h3>
          <p>
            Many Starbucks drinks contain significant amounts of sugar, primarily from the flavored syrups and sauces. 
            A standard pump of syrup contains about 5g of sugar and 20 calories. 
            Grande-sized flavored beverages typically contain 3-4 pumps, adding 15-20g of sugar before considering any sugar naturally present in milk.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Caffeine Considerations
          </h3>
          <p>
            Caffeine content varies widely across the Starbucks menu:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Espresso-based drinks typically contain 75mg (single shot) to 150mg (double shot) of caffeine</li>
            <li>Brewed coffee generally has more caffeine than espresso-based drinks</li>
            <li>Cold brew contains more caffeine than regular iced coffee due to its brewing method</li>
            <li>Decaf coffee still contains a small amount of caffeine (about 15-30mg)</li>
            <li>Many teas contain caffeine, with black teas having the highest amounts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
