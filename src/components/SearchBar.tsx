
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { MenuItem } from '../types/menu';
import { useNavigate, useLocation } from 'react-router-dom';

interface SearchBarProps {
  items: MenuItem[];
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isHashRouter = location.pathname.startsWith('/#/');

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.category.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 8); // Limit results to 8 items for better UI

  const handleSelect = (itemId: string) => {
    navigate(`/calculator/${itemId}`);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (!isOpen && e.target.value) {
      setIsOpen(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Input
          placeholder="Search for a drink or food item..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => searchQuery && setIsOpen(true)}
          className="pl-10 pr-10 py-6 rounded-xl text-base border-gray-200 shadow-sm focus:border-starbucks-green focus:ring focus:ring-starbucks-green/20 transition-all"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        {searchQuery && (
          <button 
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200">
          <Command>
            <CommandInput placeholder="Type to search..." className="hidden" />
            <CommandList>
              {searchQuery.length > 0 && (
                <>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    {filteredItems.map(item => (
                      <CommandItem 
                        key={item.id} 
                        onSelect={() => handleSelect(item.id)}
                        className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-50"
                      >
                        <div className="flex-1 mr-2">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.category}</div>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
