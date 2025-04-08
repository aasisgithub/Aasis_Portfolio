import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close menu immediately
    
    // Wait for the menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = document.querySelector('header')?.clientHeight || 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Matches the menu close animation duration
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold cursor-pointer"
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.05 }}
          >
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Aasis</span>
            <span className="text-blue-500">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="relative group px-2 py-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={`text-sm font-medium tracking-wider transition-colors ${
                  isDarkMode ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}>
                  {item.label}
                </span>
                <span className={`absolute left-0 bottom-0 w-full h-0.5 ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
              </motion.button>
            ))}
            
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ml-2 ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-300" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-300" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
              ) : (
                <Menu size={24} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? 'open' : 'closed'}
          variants={{
            open: { 
              opacity: 1,
              height: 'auto',
              display: 'block',
              transition: { duration: 0.3 }
            },
            closed: { 
              opacity: 0,
              height: 0,
              transition: { 
                duration: 0.3,
                when: "afterChildren" 
              },
              transitionEnd: { display: 'none' } 
            }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className={`py-4 space-y-2 ${
            isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'
          } backdrop-blur-md rounded-lg mt-2`}>
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-3 ${
                  isDarkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                } rounded-md transition-all`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium tracking-wider">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;