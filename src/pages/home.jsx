import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  // Sample featured content (in a real app, you would fetch this data)
  const featuredContent = {
    project: {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my skills and projects.",
      image: "/featured-project.jpg",
      link: "https://github.com/yourusername/portfolio"
    },
    art: {
      title: "krishna painting",
      description: "oil painting of krishna",
      image: "/drawing/IMG_20240516_222754_288.jpg",
      link: "/gallery/digital-landscape"
    },
    blog: {
      title: "The Future of Web Development",
      description: "Exploring upcoming trends and technologies shaping the future of web development in 2025.",
      date: "January 15, 2025",
      image: "/featured-blog.jpg",
      link: "/blog/future-web-development"
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-start p-4 md:p-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section with Decorative Elements - ADJUSTED FOR VERTICAL CENTERING */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 z-10 min-h-[70vh] md:min-h-[90vh] pt-4 md:pt-0">
          {/* Decorative Background Elements */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
          
          {/* Enhanced Profile Image - Positioned higher */}
          <div className="relative group order-first md:order-none mx-auto md:mx-0 mt-6 md:mt-0">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-l opacity-75 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
            
            {/* Main container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-112 md:h-112 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
              <img 
                src="/photo_2024-09-13_09-13-24.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Optional subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Text Content - Positioned higher */}
          <div className="max-w-xl md:max-w-2xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800 dark:text-white">
              Hey Friends!
              <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent pt-4 font-extrabold">
                Welcome to my world.
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a second-year BCA student driven by a passion for computer science and art.
              Actively honing my skills in web development and DSA, I aspire to create
              innovative solutions that blend technology with creativity.
            </p>
            
            {/* Modern CTA Buttons */}
            <div className="mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center md:justify-start">
              <button
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 text-base md:text-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                onClick={() => navigate("/about")}
              >
                About Me
              </button>
              
              <button
                className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 text-base md:text-lg bg-white dark:bg-gray-800 border-2 border-amber-500 dark:border-amber-400 text-amber-600 dark:text-amber-400 font-medium rounded-full shadow-md transition-all duration-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:shadow-lg hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator - Reduced space above */}
        <div className="flex justify-center mt-4 mb-12 animate-bounce">
          <svg className="w-10 h-10 text-amber-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
        
        {/* Featured Content Section */}
        <div className="mt-4 md:mt-8 relative">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-16 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Featured Creations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {/* Featured Project Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={featuredContent.project.image} 
                  alt={featuredContent.project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider bg-amber-500 px-3 py-1 rounded-tr-lg">
                    Project
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                  {featuredContent.project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl mb-4 md:mb-6">
                  {featuredContent.project.description}
                </p>
                <button 
                  className="text-amber-500 font-medium flex items-center hover:text-orange-500 transition-colors md:text-lg"
                  onClick={() => navigate("/projects")}
                >
                  View Project
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Featured Art Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={featuredContent.art.image} 
                  alt={featuredContent.art.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider bg-orange-500 px-3 py-1 rounded-tr-lg">
                    Artwork
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                  {featuredContent.art.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl mb-4 md:mb-6">
                  {featuredContent.art.description}
                </p>
                <button 
                  className="text-orange-500 font-medium flex items-center hover:text-amber-500 transition-colors md:text-lg"
                  onClick={() => navigate("/drawings")}
                >
                  View Artwork
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Featured Blog Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={featuredContent.blog.image} 
                  alt={featuredContent.blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <span className="text-white text-sm md:text-base font-semibold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-tr-lg">
                    Blog
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="text-amber-500 dark:text-amber-400 text-sm md:text-base mb-2">
                  {featuredContent.blog.date}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
                  {featuredContent.blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl mb-4 md:mb-6">
                  {featuredContent.blog.description}
                </p>
                <button 
                  className="text-amber-500 font-medium flex items-center hover:text-orange-500 transition-colors md:text-lg"
                  onClick={() => navigate("/blog")}
                >
                  Read Article
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* View All Button */}
          <div className="flex justify-center mt-12 md:mt-16">
            <button
              className="px-8 py-4 md:px-12 md:py-5 text-base md:text-lg lg:text-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
              onClick={() => navigate("/projects")}
            >
              View All Works
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="hidden lg:block absolute bottom-10 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-60 animate-pulse"></div>
      <div className="hidden lg:block absolute top-20 right-20 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-40 animate-bounce"></div>
    </div>
  );
}