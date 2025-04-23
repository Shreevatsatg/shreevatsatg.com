import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if a nav link is active
  const isActive = (path) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "py-3 backdrop-blur-xl" 
          : "py-5"
      } ${
        darkMode 
          ? isMenuOpen 
            ? "bg-gray-900/95" 
            : scrolled ? "bg-gray-900/80" : "bg-transparent"
          : isMenuOpen 
            ? "bg-white/95" 
            : scrolled ? "bg-white/80" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative group z-10"
            onClick={closeMenu}
          >
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="gradient-text">Shreevatsa</span>
              <span className="text-gray-800 dark:text-white">TG</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-third)] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              
              <NavLink to="/projects" isActive={isActive("/projects")}>Projects</NavLink>
              <NavLink to="/drawings" isActive={isActive("/drawings")}>Drawings</NavLink>
              <NavLink to="/blog" isActive={isActive("/blog")}>Blog</NavLink>
              
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative p-2 rounded-full overflow-hidden group"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">
                {darkMode ? (
                  <FiSun className="text-[var(--accent-secondary)] group-hover:text-white text-xl" />
                ) : (
                  <FiMoon className="text-gray-700 group-hover:text-white text-xl" />
                )}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-800 dark:text-white focus:outline-none z-20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 z-10 flex flex-col justify-center items-center p-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center gap-8 w-full">
            <MobileNavLink to="/" onClick={closeMenu} isActive={isActive("/")}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={closeMenu} isActive={isActive("/about")}>About</MobileNavLink>
            <MobileNavLink to="/projects" onClick={closeMenu} isActive={isActive("/projects")}>Projects</MobileNavLink>
            <MobileNavLink to="/drawings" onClick={closeMenu} isActive={isActive("/drawings")}>Drawings</MobileNavLink>
            <MobileNavLink to="/blog" onClick={closeMenu} isActive={isActive("/blog")}>Blog</MobileNavLink>
            <MobileNavLink to="/contact" onClick={closeMenu} isActive={isActive("/contact")}>Contact</MobileNavLink>
            
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                closeMenu();
              }}
              className="mt-4 flex items-center justify-center gap-2 p-3 w-full rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium"
            >
              {darkMode ? (
                <>
                  <FiSun className="text-xl" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="text-xl" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer that adjusts with scroll state */}
      <div className={`transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}></div>
    </>
  );
}

// Desktop Navigation Link Component
function NavLink({ to, children, isActive }) {
  return (
    <Link 
      to={to} 
      className={`relative px-2 py-1 text-base font-medium transition-all duration-300 ${
        isActive 
          ? "text-[var(--accent-primary)]" 
          : "text-gray-700 dark:text-gray-200 hover:text-[var(--accent-primary)] dark:hover:text-[var(--accent-primary)]"
      } overflow-hidden group`}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transform origin-left transition-all duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      ></span>
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ to, children, onClick, isActive }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`w-full text-center py-3 text-lg font-medium ${
        isActive 
          ? "gradient-text" 
          : "text-gray-800 dark:text-white"
      } transition-all`}
    >
      {children}
    </Link>
  );
}