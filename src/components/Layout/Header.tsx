
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`mt-4 w-11/12 max-w-6xl z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-2xl'
          : 'bg-white/80 dark:bg-black/80 backdrop-blur-lg'
      } rounded-2xl border border-gray-300 dark:border-gray-700`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -2, scale: 1.01 }}
    >
      <nav className="w-full px-6 py-3 flex justify-center">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('#home')}
            className="text-3xl font-medium tracking-tight metallic-text py-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            Shreevatsa Tg
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 relative group font-extralight text-md tracking-wide"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4, ease: 'easeOut' }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-200 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full w-full mt-2 bg-white dark:bg-black backdrop-blur-xl shadow-2xl border border-gray-300 dark:border-gray-700 rounded-2xl"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex flex-col space-y-1 p-6">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-xl py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium tracking-wide"
              >
                {item.name}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>
        </motion.div>
      )}


    </motion.header>
  );
};

export default Header;