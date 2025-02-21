import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section with Decorative Elements */}
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 z-10">
          {/* Decorative Background Elements */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
          
          {/* Profile Image with Enhanced Styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
              <img 
                src="/photo_2024-09-13_09-13-24.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Text Content with Modern Typography */}
          <div className="max-w-xl md:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800 dark:text-white">
              Hey Friends!
              <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent pt-4 font-extrabold">
                Welcome to my world.
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a second-year BCA student driven by a passion for computer science and art .
              Actively honing my skills in web development and DSA, I aspire to create
              innovative solutions that blend technology with creativity.
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-5 items-center md:items-start">
              <button
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                onClick={() => navigate("/about")}
              >
                About Me
              </button>
              
              <button
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 border-2 border-amber-500 dark:border-amber-400 text-amber-600 dark:text-amber-400 font-medium rounded-full shadow-md transition-all duration-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="hidden lg:block absolute bottom-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-60 animate-pulse"></div>
      <div className="hidden lg:block absolute top-20 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-40 animate-bounce"></div>
    </div>
  );
}