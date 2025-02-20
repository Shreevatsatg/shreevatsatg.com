import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".nav-menu, .menu-button")) {
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

          {/* Dark Mode Toggle - Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 ml-4 rounded-full bg-[#c3c0bc] dark:bg-[#292929] shadow-md hover:shadow-lg transition flex items-center justify-center w-10 h-10"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-800 dark:text-gray-200 text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation (Dark Mode Button First, Menu Second) */}
        <div className="md:hidden flex items-center gap-4 relative">
          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-[#c3c0bc] dark:bg-[#292929] shadow-md hover:shadow-lg transition flex items-center justify-center w-10 h-10"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-gray-800 dark:text-gray-200 text-xl" />
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="menu-button text-3xl p-2 rounded-md hover:bg-[#E6D3B5] dark:hover:bg-[#383838] transition"
          >
            <FiMenu />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              className="nav-menu absolute top-12 right-0 w-48 bg-[#FDF7F2] dark:bg-[#292929] 
              rounded-lg shadow-lg flex flex-col text-center py-2 transition-all duration-300 z-50"
            >
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 hover:bg-[#E6D3B5] dark:hover:bg-[#383838] transition"
              >
                My Projects
              </Link>
              <Link
                to="/drawings"
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 hover:bg-[#E6D3B5] dark:hover:bg-[#383838] transition"
              >
                My Drawings
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 hover:bg-[#E6D3B5] dark:hover:bg-[#383838] transition"
              >
                My Blog
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
