
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../data/menuItems';
import { menuCategories } from '../data/menuCategories';
import MenuItemCard from '../components/MenuItemCard';
import { Search } from 'lucide-react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
  };

  const filteredItems = menuItems.filter(item => {
    // Filter by search query
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by category and subcategory
    if (selectedCategory && item.category !== selectedCategory) {
      return false;
    }
    
    if (selectedSubcategory && item.subcategory !== selectedSubcategory) {
      return false;
    }
    
    return true;
  });

  // Find the selected category object
  const selectedCategoryObj = menuCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Starbucks Menu</h1>
        <p className="text-gray-600 max-w-3xl">
          Browse the Starbucks menu and discover nutritional information for all your favorite items. 
          Select an item to see detailed nutrition facts or use it in our calculator.
        </p>
      </header>
      
      <div className="mb-8">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search menu items..."
            className="pl-10 w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-lg border p-4">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            
            <div className="space-y-4">
              <button
                className={`w-full text-left py-2 px-3 rounded ${
                  selectedCategory === '' 
                    ? 'bg-starbucks-green text-white' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedSubcategory('');
                }}
              >
                All Items
              </button>
              
              {menuCategories.map((category) => (
                <div key={category.id} className="space-y-1">
                  <button
                    className={`w-full text-left py-2 px-3 rounded font-medium ${
                      selectedCategory === category.id 
                        ? 'bg-starbucks-green text-white' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </button>
                  
                  {selectedCategory === category.id && category.subcategories && (
                    <div className="ml-4 space-y-1 mt-2">
                      {category.subcategories.map((subcat) => (
                        <button
                          key={subcat.id}
                          className={`w-full text-left py-1.5 px-3 rounded text-sm ${
                            selectedSubcategory === subcat.id 
                              ? 'bg-starbucks-light-green text-white' 
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                          onClick={() => handleSubcategoryChange(subcat.id)}
                        >
                          {subcat.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedSubcategory 
                ? selectedCategoryObj?.subcategories?.find(s => s.id === selectedSubcategory)?.name
                : selectedCategory 
                  ? selectedCategoryObj?.name 
                  : 'All Items'}
              <span className="text-gray-500 ml-2 text-lg">
                ({filteredItems.length} items)
              </span>
            </h2>
          </div>
          
          {filteredItems.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
              <p className="text-gray-600">
                Try adjusting your search or browse different categories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <MenuItemCard 
                  key={item.id}
                  item={item}
                  onClick={() => navigate(`/calculator/${item.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
