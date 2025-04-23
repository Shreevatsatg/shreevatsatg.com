import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full ${darkMode ? "bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-white" : "bg-gradient-to-r from-slate-50/80 to-slate-100/80 text-gray-800"} backdrop-blur-md shadow-sm`}>
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold tracking-tight text-gray-800 dark:text-white transition-transform duration-300 hover:scale-105"
          >
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Shreevatsa
            </span>
            <span> tg</span>
          </Link>

          {/* Navigation Links - Visible on all screen sizes */}
          <div className="flex items-center gap-3 md:gap-8">
            <Link 
              to="/projects" 
              className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 font-medium transition-all duration-300 relative group text-sm md:text-base"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <Link 
              to="/drawings"
              className="px-3 md:px-5 py-1 md:py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-sm md:text-base"
            >
              Drawings
            </Link>
            
            <Link 
              to="/blog"
              className="px-3 md:px-5 py-1 md:py-2 bg-gray-100 dark:bg-gray-800 border border-amber-500 dark:border-amber-400 text-amber-600 dark:text-amber-400 rounded-full font-medium hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-sm md:text-base"
            >
              Blog
            </Link>

            {/* Dark Mode Toggle - Only visible on md screens and up */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:block p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FiSun className="text-amber-400 text-xl" />
              ) : (
                <FiMoon className="text-gray-700 dark:text-gray-200 text-xl" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}