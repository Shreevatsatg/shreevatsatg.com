import { Link } from "react-router-dom";
import React, { useState } from "react";

// Sample blog post data structure with full content
const blogPosts = [
  {
    id: "featured",
    title: "The Art of Painting: A Creative Escape",
    date: "Feb 20, 2025",
    category: "FEATURED",
    excerpt: "How painting serves as a meditative and expressive outlet in my daily life.",
    content: `
      Amidst coding, workouts, and academics, painting has always been my creative escape. It allows me to express emotions, experiment with colors, and create something truly unique. 
      
      I love working with oil paints on canvas, which brings a bold and striking effect to my artwork. One of my most memorable paintings is  Krishna artwork it  was a rewarding experience that deepened my connection to art.
      
      Painting teaches patience, focus, and the beauty of imperfection. Whether you’re an artist or just starting, embracing creativity through art can be a deeply fulfilling journey.
    `,
    isFeatured: true
  },
  {
    id: "post-1",
    title: "Mastering DSA with C++",
    date: "Jan 11, 2025",
    category: "Programming",
    excerpt: "My strategy for learning data structures and algorithms effectively in C++.",
    content: `
      As a BCA student aspiring to excel in programming, I've dedicated time to learning data structures and algorithms (DSA) using C++. Understanding DSA is crucial for cracking coding interviews and building efficient applications.
      
      My approach includes practicing problems daily on platforms like LeetCode and CodeChef, focusing on concepts like recursion, dynamic programming, and graph theory. I also maintain a repository of solved problems to track my progress.
      
      If you're learning DSA, consistency is key. Start with the basics, solve problems regularly, and don't hesitate to debug your way through tough challenges!
    `
  },
   {
    id: "post-2",
    title: "The Importance of Git and the Terminal for Developers",
    date: "Jan 12, 2025",
    category: "Development Tools",
    excerpt: "Why every developer should master Git and the terminal for efficient workflow and version control.",
    content: `
      In the world of software development, Git and the terminal are indispensable tools for any developer. 
      
      Git is a version control system that allows you to track changes in your code, collaborate seamlessly with others, and maintain a clean project history. Understanding Git commands like commit, push, pull, and branching is essential for working in teams and contributing to open-source projects.
      
      The terminal, on the other hand, provides a powerful way to interact with your system. Whether you're navigating files, running scripts, or using package managers, mastering the terminal improves efficiency and makes development smoother. 
      
      If you’re new to Git and the terminal, start by learning basic commands and gradually explore advanced workflows. These skills will set you apart as a proficient developer!
    `
  },
  {
    id: "post-3",
    title: "Exploring AI & Quantum Computing",
    date: "Jan 12, 2025",
    category: "Tech & Future",
    excerpt: "Why AI and quantum computing excite me and how I plan to explore them further.",
    content: `
      The future of technology fascinates me, especially fields like artificial intelligence and quantum computing. AI is revolutionizing industries, while quantum computing has the potential to redefine problem-solving on a massive scale.
      
      I recently started learning Python for AI/ML and plan to delve deeper into mathematical concepts essential for these fields. My goal is to contribute to AI projects and eventually explore quantum computing applications.
      
      If you're interested in AI and quantum tech, start by building a strong foundation in math and programming. The future belongs to those who innovate!
    `},
  // Add more blog posts following the same structure
];

// Featured Post Component with text instead of image
const FeaturedPost = ({ post, onReadMore }) => (
  <div className="bg-[#c3c0bc] dark:bg-[#1a2235] border border-[#5B4636]/20 dark:border-[#2a3246] rounded-lg overflow-hidden shadow-lg mb-16">
    <div className="relative">
      <div className="w-full h-80 bg-[#9E6F21]/20 dark:bg-[#6366f1]/20 flex items-center justify-center">
        <span className="text-[#5B4636] dark:text-gray-300 font-medium">
          {post.title}
        </span>
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-[#9E6F21] dark:bg-[#6366f1] text-white text-xs font-medium px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#191919] dark:text-white mb-2">{post.title}</h2>
      <p className="text-[#5B4636] dark:text-gray-300 mb-4">
        {post.excerpt}
      </p>
      <button 
        onClick={() => onReadMore(post)}
        className="inline-flex items-center text-[#9E6F21] dark:text-[#6366f1] font-medium hover:text-[#8A5F11] dark:hover:text-[#4f46e5] transition-colors"
      >
        Read More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
    </div>
  </div>
);

// Regular Post Component with text instead of image
const BlogPostCard = ({ post, onReadMore }) => (
  <div className="bg-[#c3c0bc] dark:bg-[#1a2235] rounded-lg overflow-hidden border border-[#5B4636]/20 dark:border-[#2a3246] shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[#9E6F21]/20 dark:hover:shadow-indigo-900/20">
    <div className="w-full h-48 bg-[#9E6F21]/10 dark:bg-[#6366f1]/10 flex items-center justify-center">
      <span className="text-[#5B4636] dark:text-gray-300">
        {post.title}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center mb-3">
        <span className="text-xs text-[#5B4636]/70 dark:text-gray-400">{post.date}</span>
        <span className="mx-2 text-[#5B4636]/50 dark:text-gray-500">•</span>
        <span className="text-xs font-medium text-[#9E6F21] dark:text-[#6366f1]">{post.category}</span>
      </div>
      <h3 className="text-xl font-bold text-[#191919] dark:text-white mb-2">{post.title}</h3>
      <p className="text-[#5B4636] dark:text-gray-300 text-sm mb-4">
        {post.excerpt}
      </p>
      <button
        onClick={() => onReadMore(post)}
        className="inline-flex items-center text-[#9E6F21] dark:text-[#6366f1] font-medium hover:text-[#8A5F11] dark:hover:text-[#4f46e5] transition-colors"
      >
        Read More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
    </div>
  </div>
);

// Full Blog Post View Component
const FullBlogPost = ({ post, onBack }) => (
  <div className="bg-[#c3c0bc] dark:bg-[#1a2235] rounded-lg overflow-hidden border border-[#5B4636]/20 dark:border-[#2a3246] shadow-lg p-6">
    {/* Top navigation */}
    <div className="mb-4">
      <button 
        onClick={onBack}
        className="inline-flex items-center text-[#9E6F21] dark:text-[#6366f1] font-medium hover:text-[#8A5F11] dark:hover:text-[#4f46e5] transition-colors"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to All Posts
      </button>
    </div>
    
    <div className="flex items-center mb-4">
      <span className="text-sm text-[#5B4636]/70 dark:text-gray-400">{post.date}</span>
      <span className="mx-2 text-[#5B4636]/50 dark:text-gray-500">•</span>
      <span className="text-sm font-medium text-[#9E6F21] dark:text-[#6366f1]">{post.category}</span>
    </div>
    
    <h1 className="text-3xl font-bold text-[#191919] dark:text-white mb-6">{post.title}</h1>
    
    <div className="prose prose-brown dark:prose-invert max-w-none text-[#5B4636] dark:text-gray-300">
      {post.content.split('\n').map((paragraph, index) => (
        paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
      ))}
    </div>

    {/* Bottom navigation - new addition */}
    <div className="mt-10 pt-6 border-t border-[#5B4636]/20 dark:border-[#2a3246] flex justify-center">
      <button 
        onClick={onBack}
        className="inline-flex items-center justify-center py-3 px-6 bg-[#9E6F21] hover:bg-[#8A5F11] dark:bg-[#6366f1] dark:hover:bg-[#4f46e5] text-white font-medium rounded-md transition-colors duration-200"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Go Back to Blog
      </button>
    </div>
  </div>
);

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  
  // Get featured post and regular posts
  const featuredPost = blogPosts.find(post => post.isFeatured);
  const regularPosts = blogPosts.filter(post => !post.isFeatured);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    // Scroll to the top when opening a post
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedPost(null);
    // Scroll to the top when going back to the blog list
    window.scrollTo(0, 0);
  };

  // If a post is selected, show the full post view
  if (selectedPost) {
    return (
      <section className="py-20 bg-[#FDF7F2] dark:bg-[#0f172a] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FullBlogPost post={selectedPost} onBack={handleBack} />
        </div>
      </section>
    );
  }

  // Otherwise show the blog list view
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
        {featuredPost && <FeaturedPost post={featuredPost} onReadMore={handleReadMore} />}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} onReadMore={handleReadMore} />
          ))}
        </div>
      </div>
    </section>
  );
}