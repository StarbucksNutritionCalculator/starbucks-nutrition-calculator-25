
import { Coffee, Search, Menu as MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetClose 
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link
            to="/menu"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search size={20} className="text-gray-700" />
          </Link>
          
          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Menu"
              >
                <MenuIcon size={20} className="text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <Link 
                    to="/" 
                    className="text-gray-700 hover:text-starbucks-green transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/calculator" 
                    className="text-gray-700 hover:text-starbucks-green transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Calculator
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/menu" 
                    className="text-gray-700 hover:text-starbucks-green transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Menu
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/about" 
                    className="text-gray-700 hover:text-starbucks-green transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    to="/faq" 
                    className="text-gray-700 hover:text-starbucks-green transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
