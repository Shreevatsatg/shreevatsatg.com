import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="py-20 bg-[#FDF7F2] dark:bg-[#0f172a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#191919] dark:text-white mb-3">My Blog</h2>
          <div className="w-24 h-1 bg-[#9E6F21] dark:bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-[#5B4636] dark:text-gray-300 max-w-xl mx-auto">
            Exploring the world of tech, coding, and creativity.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="bg-[#c3c0bc] dark:bg-[#1a2235] border border-[#5B4636]/20 dark:border-[#2a3246] rounded-lg overflow-hidden shadow-lg mb-16">
          <div className="relative">
            <img 
              className="w-full h-80 object-cover" 
              src="/featured-blog.jpg" 
              alt="Featured Blog" 
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#9E6F21] dark:bg-[#6366f1] text-white text-xs font-medium px-3 py-1 rounded-full">
                FEATURED
              </span>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-[#191919] dark:text-white mb-2">Featured Blog Post</h2>
            <p className="text-[#5B4636] dark:text-gray-300 mb-4">
              An exciting post about my recent project and learnings.
            </p>
            <Link 
              to="/blog/featured" 
              className="inline-flex items-center text-[#9E6F21] dark:text-[#6366f1] font-medium hover:text-[#8A5F11] dark:hover:text-[#4f46e5] transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <div
              key={post}
              className="bg-[#c3c0bc] dark:bg-[#1a2235] rounded-lg overflow-hidden border border-[#5B4636]/20 dark:border-[#2a3246] shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[#9E6F21]/20 dark:hover:shadow-indigo-900/20"
            >
              <img 
                className="w-full h-48 object-cover" 
                src={`/blog-thumbnail-${post}.jpg`} 
                alt={`Blog ${post}`} 
              />
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="text-xs text-[#5B4636]/70 dark:text-gray-400">Jan {post + 10}, 2025</span>
                  <span className="mx-2 text-[#5B4636]/50 dark:text-gray-500">•</span>
                  <span className="text-xs font-medium text-[#9E6F21] dark:text-[#6366f1]">Development</span>
                </div>
                <h3 className="text-xl font-bold text-[#191919] dark:text-white mb-2">Blog Post {post}</h3>
                <p className="text-[#5B4636] dark:text-gray-300 text-sm mb-4">
                  A short preview of the blog post content that gives readers a glimpse of what to expect...
                </p>
                <Link
                  to={`/blog/post-${post}`}
                  className="inline-flex items-center text-[#9E6F21] dark:text-[#6366f1] font-medium hover:text-[#8A5F11] dark:hover:text-[#4f46e5] transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/blog/all"
            className="inline-flex items-center justify-center py-3 px-6 bg-[#9E6F21] hover:bg-[#8A5F11] dark:bg-[#6366f1] dark:hover:bg-[#4f46e5] text-white font-medium rounded-md transition-colors duration-200"
          >
            View All Blog Posts
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}