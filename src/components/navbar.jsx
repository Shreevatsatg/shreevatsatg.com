import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu on clicking a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-[#F5E1C8] text-[#191919] px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:opacity-80 transition duration-300">
            shreevatsa tg
          </Link>
        </div>

        {/* Hamburger Icon (Mobile View) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links (Desktop & Mobile Dropdown) */}
        <div
          className={` shadow-md md:shadow-none *
          absolute md:static top-16 left-0 w-full md:w-auto bg-[#FDF7F2] md:bg-transparent md:flex items-center gap-6 text-center py-4 md:py-0 transition-all duration-300 ${isOpen ? "block z-50" : "hidden"
          }`}
        >
          <ul className="md:flex flex-col md:flex-row items-center w-full md:w-auto">
            <li>
              <Link 
                to="/projects" 
                onClick={handleLinkClick}
                className="block md:inline-block text-lg font-medium hover:text-[#9E6F21] transition duration-300 py-2 md:px-4"
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className="block md:inline-block text-lg font-medium hover:text-[#9E6F21] transition duration-300 py-2 md:px-4"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/blog"
                onClick={handleLinkClick}
                className="block md:inline-block bg-[#FA9E67] text-white px-5 py-2 rounded-full 
                font-medium shadow-md hover:bg-[#F38044] transition duration-300 mt-2 md:mt-0 md:ml-4"
              >
                My Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
