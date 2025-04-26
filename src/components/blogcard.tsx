'use client';

import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

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

// Featured Post Component with enhanced design
const FeaturedPostComponent = ({ post, onReadMore }: { 
  post: FeaturedPost;
  onReadMore: (post: FeaturedPost) => void;
}) => (
  <motion.div 
    className="mb-16 gradient-border relative overflow-hidden rounded-2xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    <div className="glass">
      <div className="md:flex">
        <div className="md:w-3/5">
          <div className="h-80 md:h-96 overflow-hidden relative">
            {post.headerImage ? (
              <img 
                src={post.headerImage} 
                alt={post.headerImageAlt || post.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 flex items-center justify-center">
                <span className="text-2xl font-bold">{post.title}</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/80 to-[var(--accent-secondary)]/80 text-white text-xs font-medium">
                {post.category}
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 p-8 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[var(--text-secondary)] text-sm mb-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-4 group">
              {post.title}
              <span className="block h-1 w-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mt-2 group-hover:w-full transition-all duration-300"></span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              {post.excerpt}
            </p>
            <button 
              onClick={() => onReadMore(post)}
              className="btn-primary group"
            >
              <span className="relative z-10 flex items-center">
                Read Article
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Regular Post Component with improved styling
const BlogPostCard = ({ post, onReadMore, index }: { 
  post: BlogPost;
  onReadMore: (post: BlogPost) => void;
  index: number;
}) => (
  <motion.div 
    className="card h-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="p-8 md:p-10 flex flex-col h-full">
      <div className="flex items-center mb-3">
        <span className="text-xs text-[var(--text-secondary)]">{post.date}</span>
        <span className="mx-2 text-[var(--text-secondary)]">•</span>
        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--accent-primary)] text-xs font-medium">
          {post.category}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group">
        {post.title}
        <span className="block h-1 w-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mt-2 group-hover:w-full transition-all duration-300"></span>
      </h3>
      
      <p className="text-[var(--text-secondary)] mb-6 flex-grow">
        {post.excerpt}
      </p>
      
      <button
        onClick={() => onReadMore(post)}
        className="btn-primary text-sm self-start group"
      >
        <span className="relative z-10 flex items-center">
          Read Article
          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
      </button>
    </div>
  </motion.div>
);

// Component to render individual content sections (text or image)
const ContentSection = ({ section }: { section: ContentSection }) => {
  if (section.type === 'text') {
    return (
      <motion.div 
        className="prose prose-lg max-w-none text-[var(--text-primary)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {section.content.split('\n').map((paragraph: string, index: number) => (
          paragraph.trim() ? <p key={index} className="text-[var(--text-secondary)]">{paragraph.trim()}</p> : null
        ))}
      </motion.div>
    );
  } else if (section.type === 'image') {
    return (
      <motion.figure 
        className="my-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden rounded-lg">
          <img 
            src={section.content} 
            alt={section.alt || ''} 
            className="w-full rounded-lg shadow-md transition-transform duration-700 hover:scale-105"
          />
        </div>
        {section.caption && (
          <figcaption className="text-center text-sm text-[var(--text-secondary)] mt-2 italic">
            {section.caption}
          </figcaption>
        )}
      </motion.figure>
    );
  }
  return null;
};

// Full Blog Post View Component with enhanced styling
const FullBlogPost = ({ 
  post, 
  onBack 
}: { 
  post: BlogPost | FeaturedPost;
  onBack: () => void;
}) => {
  const isFeaturedPost = 'contentSections' in post;
  
  return (
    <motion.div 
      className="glass gradient-border rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Show header image for featured post if available */}
      {isFeaturedPost && (post as FeaturedPost).headerImage && (
        <div className="w-full h-80 overflow-hidden">
          <img 
            src={(post as FeaturedPost).headerImage} 
            alt={(post as FeaturedPost).headerImageAlt || post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-8 md:p-10">
        {/* Top navigation */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Blog
          </button>
        </div>
        
        <div className="flex items-center mb-4">
          <span className="text-sm text-[var(--text-secondary)]">{post.date}</span>
          <span className="mx-2 text-[var(--text-secondary)]">•</span>
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--accent-primary)] text-sm font-medium">
            {post.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {post.title}
          <span className="block h-1 w-24 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mt-4"></span>
        </h1>
        
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
          <div className="prose prose-lg max-w-none text-[var(--text-primary)]">
            {(post as BlogPost).content.split('\n').map((paragraph: string, index: number) => (
              paragraph.trim() ? <p key={index} className="text-[var(--text-secondary)]">{paragraph.trim()}</p> : null
            ))}
          </div>
        )}
      </div>
    </motion.div>
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
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {!selectedPost ? (
          <>
            {/* Page header with animated title */}
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">{title}</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                {description}
              </p>
            </motion.div>

            {/* Animated decorative elements */}
            <div className="relative">
              <motion.div
                className="absolute top-20 right-[10%] w-3 h-3 rounded-full bg-[var(--accent-primary)]"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-40 left-[5%] w-5 h-5 rounded-full bg-[var(--accent-secondary)]"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/3 left-[2%] w-4 h-4 rounded-full bg-[var(--accent-third)]"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <FeaturedPostComponent
                post={featuredPost}
                onReadMore={handleReadMore}
              />

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {blogPosts.map((post, index) => (
                  <BlogPostCard
                    key={post.id}
                    post={post}
                    onReadMore={handleReadMore}
                    index={index}
                  />
                ))}
              </div>

              {/* CTA section */}
              <motion.div
                className="mt-20 gradient-border relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="glass p-8 md:p-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Have a Topic to Discuss?
                  </h2>
                  <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                    Interested in collaborating on a blog post or have thoughts
                    about the topics covered? I'd love to hear from you!
                  </p>
                  <Link
                    to="/about"
                    className="btn-primary group inline-flex items-center"
                  >
                    <span className="relative z-10 flex items-center">
                      Get in Touch
                      <svg
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </motion.div>

            </div>
          </>
        ) : (
          <FullBlogPost post={selectedPost} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}