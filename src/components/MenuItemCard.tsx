
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types/menu';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Info } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  onClick?: () => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onClick }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <CardContent className="p-4 flex-grow">
        <h3 className="font-medium text-lg mb-1 text-gray-900">{item.name}</h3>
        
        {item.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
        )}
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-sm font-medium text-starbucks-green">
            <span>{item.nutrition.calories}</span>
            <span className="text-xs text-gray-500 ml-1">cal</span>
          </div>
          
          <Link 
            to={`/calculator/${item.id}`}
            className="text-starbucks-green hover:text-starbucks-light-green flex items-center gap-1 text-sm"
            onClick={onClick}
          >
            <Info size={16} />
            <span>Details</span>
          </Link>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 py-3 bg-gray-50 border-t">
        <button
          onClick={onClick}
          className="w-full py-1.5 text-sm font-medium text-starbucks-green hover:text-white border border-starbucks-green hover:bg-starbucks-green rounded transition-colors"
        >
          Calculate Nutrition
        </button>
      </CardFooter>
    </Card>
  );
};

export default MenuItemCard;
