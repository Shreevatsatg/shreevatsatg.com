'use client';

import { useState } from "react";

// Define types for blog posts
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

// Define type for content section with text or image
export interface ContentSection {
  type: 'text' | 'image';
  content: string; // text content or image URL
  alt?: string; // alt text for images
  caption?: string; // optional caption for images
}

// Define type for featured post with rich content
export interface FeaturedPost extends Omit<BlogPost, 'content'> {
  headerImage?: string;
  headerImageAlt?: string;
  contentSections: ContentSection[];
}

export interface BlogProps {
  blogPosts: BlogPost[];
  featuredPost: FeaturedPost;
  title?: string;
  description?: string;
}

// Featured Post Component with header image support
const FeaturedPostComponent = ({ post, onReadMore }: { 
  post: FeaturedPost;
  onReadMore: (post: FeaturedPost) => void;
}) => (
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg mb-16">
    <div className="relative">
      {post.headerImage ? (
        <img 
          src={post.headerImage} 
          alt={post.headerImageAlt || post.title} 
          className="w-full h-80 object-cover"
        />
      ) : (
        <div className="w-full h-80 bg-amber-100/50 dark:bg-amber-900/20 flex items-center justify-center">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            {post.title}
          </span>
        </div>
      )}
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

// Regular Post Component with text placeholder
const BlogPostCard = ({ post, onReadMore }: { 
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
}) => (
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

// Component to render individual content sections (text or image)
const ContentSection = ({ section }: { section: ContentSection }) => {
  if (section.type === 'text') {
    return (
      <div className="prose prose-amber dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
        {section.content.split('\n').map((paragraph: string, index: number) => (
          paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
        ))}
      </div>
    );
  } else if (section.type === 'image') {
    return (
      <figure className="my-8">
        <img 
          src={section.content} 
          alt={section.alt || ''} 
          className="w-full rounded-lg shadow-md"
        />
        {section.caption && (
          <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
            {section.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return null;
};

// Full Blog Post View Component with support for rich content
const FullBlogPost = ({ 
  post, 
  onBack 
}: { 
  post: BlogPost | FeaturedPost;
  onBack: () => void;
}) => {
  const isFeaturedPost = 'contentSections' in post;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
      {/* Show header image for featured post if available */}
      {isFeaturedPost && (post as FeaturedPost).headerImage && (
        <div className="w-full">
          <img 
            src={(post as FeaturedPost).headerImage} 
            alt={(post as FeaturedPost).headerImageAlt || post.title} 
            className="w-full h-64 object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
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
        
        {/* Render content based on post type */}
        {isFeaturedPost ? (
          // Render rich content with inline images for featured post
          <div>
            {(post as FeaturedPost).contentSections.map((section, index) => (
              <ContentSection key={index} section={section} />
            ))}
          </div>
        ) : (
          // Render regular content for standard posts
          <div className="prose prose-amber dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            {(post as BlogPost).content.split('\n').map((paragraph: string, index: number) => (
              paragraph.trim() ? <p key={index}>{paragraph.trim()}</p> : null
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Blog({ blogPosts, featuredPost, title = "Blog", description = "Thoughts, stories, and ideas about programming, art and personal growth." }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | FeaturedPost | null>(null);
  
  const handleReadMore = (post: BlogPost | FeaturedPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };
  
  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {!selectedPost ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">{title}</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {description}
              </p>
            </div>
            
            <FeaturedPostComponent post={featuredPost} onReadMore={handleReadMore} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map(post => (
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