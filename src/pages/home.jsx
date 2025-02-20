import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FDF7F2] dark:bg-[#1E1E1E] text-[#191919] dark:text-white px-6 sm:px-12">
      
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left gap-10 sm:gap-16 md:gap-24">
        
        {/* Profile Image - Appears First on Mobile */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden border-4 border-[#E3B882] dark:border-[#F38044] shadow-xl rounded-[25px]">
          <img src="/photo_2024-09-13_09-13-24.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#191919] dark:text-white">
            Hey Friends!  
            <span className="block text-[#9E6F21] dark:text-[#FA9E67] pt-4">Welcome to my world.</span>
          </h1>
          <p className="mt-4 md:mt-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a second-year BCA student driven by a passion for computer science.
            Actively honing my skills in web development and DSA, I aspire to create
            innovative solutions that blend technology with creativity.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start">
            <button 
              className="bg-[#FA9E67] dark:bg-[#F38044] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#F38044] dark:hover:bg-[#E36D30] transition duration-300"
              onClick={() => navigate("/about")}
            >
              About Me
            </button>
            <button 
              className="bg-white dark:bg-transparent border-2 border-[#E3B882] dark:border-[#F38044] px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#E3B882] dark:hover:bg-[#F38044] hover:text-white transition duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
