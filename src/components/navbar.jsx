import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, PenTool, FileText, Send, SunMedium, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.nav 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className={`absolute inset-0 ${
          scrolled ? "glass backdrop-blur-xl" : "bg-transparent"
        } ${isMenuOpen ? "backdrop-blur-3xl" : ""}`}></div>
        
        <div className="container mx-auto px-4 flex items-center justify-between relative z-10">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative group z-10"
            onClick={closeMenu}
          >
            <motion.span 
              className="text-2xl md:text-3xl font-bold tracking-tight font-display"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="gradient-text">Shreevatsa</span>
              <span className="text-[var(--text-primary)]">TG</span>
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-third)] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              <NavLink to="/projects" isActive={isActive("/projects")} icon={<Briefcase size={18} />}>Projects</NavLink>
              <NavLink to="/drawings" isActive={isActive("/drawings")} icon={<PenTool size={18} />}>Drawings</NavLink>
              <NavLink to="/blog" isActive={isActive("/blog")} icon={<FileText size={18} />}>Blog</NavLink>
             
            </div>

            {/* Dark Mode Toggle - Desktop */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="relative p-2 rounded-full overflow-hidden spotlight-container"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="spotlight"></div>
              <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full glass">
                {darkMode ? (
                  <SunMedium className="text-[var(--accent-third)] transition-all" size={18} />
                ) : (
                  <Moon className="text-[var(--accent-primary)] transition-all" size={18} />
                )}
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden relative p-2 rounded-full overflow-hidden spotlight-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <div className="spotlight"></div>
            <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full glass">
              {isMenuOpen ? (
                <X className="text-[var(--accent-third)]" size={20} />
              ) : (
                <Menu className="text-[var(--text-primary)]" size={20} />
              )}
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-x-0 top-[4.5rem] z-40 flex flex-col p-5 glass backdrop-blur-2xl border-t border-[var(--border-color)] border-opacity-20 md:hidden"
            >
              <div className="glass-card p-6 flex flex-col items-center gap-6 w-full">
                <div className="spotlight"></div>
                <MobileNavLink to="/projects" onClick={closeMenu} isActive={isActive("/projects")} icon={<Briefcase size={20} />}>Projects</MobileNavLink>
                <MobileNavLink to="/drawings" onClick={closeMenu} isActive={isActive("/drawings")} icon={<PenTool size={20} />}>Drawings</MobileNavLink>
                <MobileNavLink to="/blog" onClick={closeMenu} isActive={isActive("/blog")} icon={<FileText size={20} />}>Blog</MobileNavLink>
                
                
                {/* Dark Mode Toggle - Mobile */}
                <motion.button
                  onClick={() => {
                    setDarkMode(!darkMode);
                    closeMenu();
                  }}
                  className="mt-4 w-full py-3 rounded-xl glass-card border border-[var(--glass-border)] flex items-center justify-center gap-2 text-[var(--text-primary)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="spotlight"></div>
                  {darkMode ? (
                    <>
                      <SunMedium className="text-[var(--accent-third)]" size={18} />
                      <span className="font-medium">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="text-[var(--accent-primary)]" size={18} />
                      <span className="font-medium">Dark Mode</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer that adjusts with scroll state */}
      <div className={`transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}></div>
    </>
  );
}

// Desktop Navigation Link Component
function NavLink({ to, children, isActive, icon }) {
  return (
    <Link 
      to={to} 
      className="relative overflow-hidden group"
    >
      <motion.div 
        className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all ${
          isActive 
            ? "text-[var(--accent-primary)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {icon && <span className={`${isActive ? "text-[var(--accent-primary)]" : "text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)]"} transition-colors`}>{icon}</span>}
        <span>{children}</span>
      </motion.div>
      
      <span 
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-1 rounded-full bg-[var(--accent-primary)] transition-all duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      ></span>
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ to, children, onClick, isActive, icon }) {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="w-full"
    >
      <motion.div
        className={`flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all ${
          isActive 
            ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]" 
            : "text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
        }`}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        {icon && <span className={isActive ? "text-[var(--accent-primary)]" : "text-[var(--text-secondary)]"}>{icon}</span>}
        <span className="font-medium">{children}</span>
      </motion.div>
    </Link>
  );
}