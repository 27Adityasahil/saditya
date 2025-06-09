import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['home', 'about', 'skills', 'education', 'projects', 'contact'];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Aditya
        </a>

        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition-colors duration-300 ${
                activeSection === item
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item}
            </a>
          ))}
        </div>

        
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize py-2 transition-colors duration-300 ${
                  activeSection === item
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;