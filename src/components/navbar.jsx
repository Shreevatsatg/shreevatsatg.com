'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiSun, FiMoon, FiX } from "react-icons/fi";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".nav-menu, .menu-button")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full ${darkMode ? "bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-white" : "bg-gradient-to-r from-slate-50/80 to-slate-100/80 text-gray-800"} backdrop-blur-md shadow-sm`}>
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold tracking-tight text-gray-800 dark:text-white transition-transform duration-300 hover:scale-105"
          >
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Shreevatsa
            </span>
            <span> tg</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/projects" 
              className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-all duration-300 relative group"
            >
              My Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              href="/drawings"
              className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              My Drawings
            </Link>
            
            <Link 
              href="/blog"
              className="px-5 py-2 bg-gray-100 dark:bg-gray-800 border border-amber-500 dark:border-amber-400 text-amber-600 dark:text-amber-400 rounded-full font-medium hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              My Blog
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FiSun className="text-amber-400 text-xl" />
              ) : (
                <FiMoon className="text-gray-700 dark:text-gray-200 text-xl" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FiSun className="text-amber-400 text-lg" />
              ) : (
                <FiMoon className="text-gray-700 dark:text-gray-200 text-lg" />
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="menu-button p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              {isOpen ? (
                <FiX className="text-2xl text-gray-700 dark:text-gray-200" />
              ) : (
                <FiMenu className="text-2xl text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="nav-menu md:hidden fixed top-16 left-0 right-0 z-40 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 shadow-lg"
          style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
        >
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="py-4 text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300 hover:text-amber-500 dark:hover:text-amber-400"
              >
                My Projects
              </Link>
              <Link
                href="/drawings"
                onClick={() => setIsOpen(false)}
                className="py-4 text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300 hover:text-amber-500 dark:hover:text-amber-400"
              >
                My Drawings
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="py-4 text-gray-700 dark:text-gray-200 font-medium transition-colors duration-300 hover:text-amber-500 dark:hover:text-amber-400"
              >
                My Blog
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}