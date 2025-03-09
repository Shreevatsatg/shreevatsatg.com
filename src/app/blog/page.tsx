'use client';

import { useState } from "react";

// Define types for blog posts
interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  isFeatured?: boolean;
}

// Sample blog post data structure with full content
const blogPosts: BlogPost[] = [
  {
    id: "featured",
    title: "The Art of Painting: A Creative Escape",
    date: "Feb 20, 2025",
    category: "FEATURED",
    excerpt: "How painting serves as a meditative and expressive outlet in my daily life.",
    content: `
      Amidst coding, workouts, and academics, painting has always been my creative escape. It allows me to express emotions, experiment with colors, and create something truly unique. 
      
      I love working with oil paints on canvas, which brings a bold and striking effect to my artwork. One of my most memorable paintings is  Krishna artwork it  was a rewarding experience that deepened my connection to art.
      
      Painting teaches patience, focus, and the beauty of imperfection. Whether you're an artist or just starting, embracing creativity through art can be a deeply fulfilling journey.
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
    title: "Git & Terminal: Essential Developer Tools",
    date: "Dec 05, 2024",
    category: "Tools",
    excerpt: "Why mastering Git and terminal commands is crucial for modern developers.",
    content: `
      As developers, we rely on various tools to streamline our workflow. Two tools I consider essential are Git and the terminal. Git revolutionizes how we track changes and collaborate on projects, making version control intuitive and powerful.
      
      Learning Git commands like commit, push, pull, merge, and rebase has significantly improved my development process. I can experiment with features in separate branches without affecting the main codebase, and easily collaborate with other developers.
      
      The terminal, on the other hand, provides a powerful way to interact with your system. Whether you're navigating files, running scripts, or using package managers, mastering the terminal improves efficiency and makes development smoother. 
      
      If you're new to Git and the terminal, start by learning basic commands and gradually explore advanced workflows. These skills will set you apart as a proficient developer!
    `
  }
];

interface PostProps {
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}

// Featured Post Component with text instead of image
const FeaturedPost = ({ post, onReadMore }: PostProps) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg mb-16">
    <div className="relative">
      <div className="w-full h-80 bg-amber-100/50 dark:bg-amber-900/20 flex items-center justify-center">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {post.title}
        </span>
      </div>
      <div className="absolute top-4 left-4">
        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{post.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {post.excerpt}
      </p>
      <button 
        onClick={() => onReadMore(post)}
        className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-md hover:from-amber-600 hover:to-orange-600 transition-colors"
      >
        Read More
      </button>
    </div>
  </div>
);

// Regular Post Component with text instead of image
const BlogPostCard = ({ post, onReadMore }: PostProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-amber-500/20 dark:hover:shadow-amber-500/10">
    <div className="w-full h-48 bg-amber-50 dark:bg-amber-900/10 flex items-center justify-center">
      <span className="text-gray-700 dark:text-gray-300">
        {post.title}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center mb-3">
        <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
        <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
        <span className="text-xs font-medium text-amber-500 dark:text-amber-400">{post.category}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {post.excerpt}
      </p>
      <button
        onClick={() => onReadMore(post)}
        className="text-amber-500 dark:text-amber-400 font-medium hover:text-orange-500 dark:hover:text-orange-400 transition-colors flex items-center"
      >
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
);

interface FullPostProps {
  post: BlogPost;
  onBack: () => void;
}

// Full Blog Post View Component
const FullBlogPost = ({ post, onBack }: FullPostProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg p-6">
    {/* Top navigation */}
    <div className="mb-4">
      <button
        onClick={onBack}
        className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Blog
      </button>
    </div>
    
    <div className="flex items-center mb-4">
      <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
      <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
      <span className="text-sm font-medium text-amber-500 dark:text-amber-400">{post.category}</span>
    </div>
    
    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{post.title}</h1>
    
    <div className="prose prose-amber dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
      {post.content.split('\n').map((paragraph: string, index: number) => (
        paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
      ))}
    </div>
  </div>
);

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };
  
  const featuredPost = blogPosts.find(post => post.isFeatured);
  const regularPosts = blogPosts.filter(post => !post.isFeatured);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {!selectedPost ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Thoughts, stories, and ideas about programming, art, and personal growth.
              </p>
            </div>
            
            {featuredPost && <FeaturedPost post={featuredPost} onReadMore={handleReadMore} />}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map(post => (
                <BlogPostCard key={post.id} post={post} onReadMore={handleReadMore} />
              ))}
            </div>
          </>
        ) : (
          <FullBlogPost post={selectedPost} onBack={handleBack} />
        )}
      </div>
    </div>
  );
} 