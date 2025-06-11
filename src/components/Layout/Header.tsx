import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Art Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-4  w-11/12 max-w-6xl z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/20'
          : 'bg-slate-900/80 backdrop-blur-lg'
      } rounded-2xl border border-slate-700/50`}
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
            className="text-3xl font-medium tracking-tight metallic-logo py-1"
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
                className="text-slate-300 hover:text-white transition-all duration-300 relative group font-extralight text-md tracking-wide"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4, ease: 'easeOut' }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-slate-400 to-slate-200 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
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
          className="md:hidden absolute top-full  -translate-x-1/2 w-full mt-2 bg-slate-900 backdrop-blur-xl shadow-2xl border border-slate-700/50 rounded-2xl"
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex flex-col space-y-1 p-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-3 px-4 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300 font-medium tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      <style>
        {`
          .metallic-logo {
            background: linear-gradient(135deg, 
              #e2e8f0 0%, 
              #f1f5f9 25%, 
              #ffffff 50%, 
              #f1f5f9 75%, 
              #e2e8f0 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            background-size: 200% 200%;
            text-shadow: 0 2px 8px rgba(0,0,0,0.5);
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          }
          
          @media (prefers-reduced-motion: no-preference) {
            .metallic-logo {
              animation: metallicShimmer 4s ease-in-out infinite;
            }
          }
          
          @keyframes metallicShimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
    </motion.header>
  );
};

export default Header;