
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#what", label: "What?" },
    { href: "#how", label: "How it Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "#quote", label: "Get Quote" },
  ];

  return (
    <nav className="bg-white p-4 fixed w-full z-10 top-0 shadow-sm animate-fade-in">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-playfair text-xl text-maple-red animate-fade-in">MAPLE WRAPS</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-cormorant hover:text-maple-red transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] bg-white">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="font-cormorant text-lg hover:text-maple-red transition-colors duration-300 px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
