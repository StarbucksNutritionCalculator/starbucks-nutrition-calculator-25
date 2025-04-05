
import { Coffee, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-starbucks-green font-semibold text-xl"
        >
          <Coffee size={28} />
          <span>Starbucks Nutrition Finder</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/calculator" 
            className="text-gray-700 hover:text-starbucks-green transition-colors"
          >
            Calculator
          </Link>
          <Link 
            to="/menu" 
            className="text-gray-700 hover:text-starbucks-green transition-colors"
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-starbucks-green transition-colors"
          >
            About
          </Link>
          <Link 
            to="/faq" 
            className="text-gray-700 hover:text-starbucks-green transition-colors"
          >
            FAQ
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search size={20} className="text-gray-700" />
          </button>
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-gray-700"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
