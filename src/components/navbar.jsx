import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSun, FiMoon, FiX } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".nav-menu, .menu-button")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    
    // Track scroll for navbar style changes
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("click", closeMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo with subtle effect */}
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold tracking-tight text-gray-800 dark:text-white transition-transform duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            shreevatsa
          </span>
          <span> tg</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/projects" 
            className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-all duration-300 relative group"
          >
            My Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <Link 
            to="/drawings"
            className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            My Drawings
          </Link>
          
          <Link 
            to="/blog"
            className="px-5 py-2 bg-white dark:bg-gray-800 border border-amber-500 dark:border-amber-400 text-amber-600 dark:text-amber-400 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            My Blog
          </Link>

          {/* Dark Mode Toggle - Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FiSun className="text-amber-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-700 text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <FiSun className="text-amber-400 text-lg" />
            ) : (
              <FiMoon className="text-gray-700 text-lg" />
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="menu-button p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
            aria-expanded={isOpen}
            aria-label="Main menu"
          >
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Full Width */}
      <div 
        className={`md:hidden fixed top-[60px] left-0 right-0 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="py-4 text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300 hover:text-amber-500 dark:hover:text-amber-400"
            >
              My Projects
            </Link>
            <Link
              to="/drawings"
              onClick={() => setIsOpen(false)}
              className="py-4 text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300 hover:text-amber-500 dark:hover:text-amber-400"
            >
              My Drawings
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="py-4 text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300 hover:text-amber-500 dark:hover:text-amber-400"
            >
              My Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}