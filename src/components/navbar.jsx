import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".nav-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <nav className="bg-[#F5E1C8] dark:bg-[#1E1E1E] text-[#191919] dark:text-white px-8 py-4 shadow-lg transition">
      <div className="container mx-auto flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <Link to="/" className="hover:opacity-80 transition duration-300">
            shreevatsa tg
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/projects" className="hover:text-[#9E6F21] dark:hover:text-[#F4A261] transition duration-300">
            My Projects
          </Link>
          <Link to="/drawings"
            className="bg-[#FA9E67] dark:bg-[#FF7F50] text-white px-5 py-2 rounded-full 
            font-medium shadow-md hover:bg-[#F38044] dark:hover:bg-[#E76F51] transition duration-300">
            My Drawings
          </Link>
          <Link to="/blog"
            className="bg-[#FA9E67] dark:bg-[#FF7F50] text-white px-5 py-2 rounded-full 
            font-medium shadow-md hover:bg-[#F38044] dark:hover:bg-[#E76F51] transition duration-300">
            My Blog
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 ml-4 rounded-full bg-[#c3c0bc] dark:bg-[#292929] shadow-md hover:shadow-lg transition"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-800 dark:text-gray-200 text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`nav-menu fixed md:hidden top-16 left-0 w-full bg-[#FDF7F2] dark:bg-[#292929] 
          flex flex-col items-center gap-6 text-center py-6 transition-all duration-300 shadow-md 
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium">
            My Projects
          </Link>
          <Link to="/drawings" onClick={() => setIsOpen(false)}
            className="bg-[#FA9E67] dark:bg-[#FF7F50] text-white px-5 py-2 rounded-full 
            font-medium shadow-md hover:bg-[#F38044] dark:hover:bg-[#E76F51] transition duration-300">
            My Drawings
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}
            className="bg-[#FA9E67] dark:bg-[#FF7F50] text-white px-5 py-2 rounded-full 
            font-medium shadow-md hover:bg-[#F38044] dark:hover:bg-[#E76F51] transition duration-300">
            My Blog
          </Link>

          {/* Dark Mode Toggle - Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-[#c3c0bc] dark:bg-[#292929] shadow-md hover:shadow-lg transition"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-800 dark:text-gray-200 text-xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

