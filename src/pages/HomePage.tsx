'use client';

import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function HomePage() {
  // Sample featured content
  const featuredContent = {
    project: {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my skills and projects.",
      image: "/photo_2024-09-13_09-13-24.jpg",
      link: "/projects"
    },
    art: {
      title: "Krishna Painting",
      description: "Oil painting of Krishna",
      image: "/drawing/IMG_20240516_222754_288.jpg", 
      link: "/drawings"
    },
    blog: {
      title: "The Future of Web Development",
      description: "Exploring upcoming trends and technologies shaping the future of web development in 2025.",
      date: "January 15, 2025",
      link: "/blog"
    }
  };

  // For the interactive cursor effect
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <>
      {/* Custom cursor effect - visible only on larger screens */}
      <div 
        ref={cursorRef} 
        className="hidden md:block fixed w-10 h-10 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-30 blur-md pointer-events-none z-50 -ml-5 -mt-5 transform transition-transform duration-100"
      ></div>
      
      <div className="py-8 md:py-12">
        {/* Hero Section with Creative Elements */}
        <section className="relative min-h-[80vh] flex items-center mb-24">
          {/* Animated decorative dots/circles */}
          <motion.div 
            className="absolute top-20 right-[20%] w-3 h-3 rounded-full bg-[var(--accent-primary)]"
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-[30%] w-5 h-5 rounded-full bg-[var(--accent-secondary)]"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/3 left-[10%] w-4 h-4 rounded-full bg-[var(--accent-third)]"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative">
            {/* Text Content - 3 columns */}
            <motion.div 
              className="lg:col-span-3 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
                <span className="block mb-2">Hey Friends!</span>
                <span className="gradient-text block">Welcome to my world</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
                I am a computer science student driven by a passion for computer science and art.
                Actively honing my skills in web development and painting, I aspire to create
                innovative solutions that blend technology with creativity.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <Link
                  to="/about"
                  className="btn-primary group"
                >
                  <span className="relative z-10 flex items-center">
                    About Me
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </Link>
                
                <Link
                  to="/contact"
                  className="btn-outline group"
                >
                  <span className="relative z-10 flex items-center">
                    Contact
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="mt-12 flex items-center gap-6">
                <a 
                  href="https://github.com/shreevatsatg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[var(--accent-primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/shreevatsatg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[var(--accent-primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/shreevatsatg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-[var(--accent-primary)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Profile Image - 2 columns */}
            <motion.div 
              className="lg:col-span-2 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Background elements for the image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-3xl blur-md opacity-70 scale-105 animate-pulse-glow"></div>
                
                {/* Glass background */}
                <div className="absolute inset-0 glass rounded-3xl scale-[1.02]"></div>
                
                {/* Image container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <img 
                    src="/photo_2024-09-13_09-13-24.jpg" 
                    alt="Shreevatsa TG" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg glass"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <span className="text-sm font-medium gradient-text">Developer</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg glass"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                >
                  <span className="text-sm font-medium gradient-text">Artist</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Work Section */}
        <section className="mb-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="section-title text-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Creations
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Project Card */}
              <FeaturedCard 
                title={featuredContent.project.title}
                description={featuredContent.project.description}
                image={featuredContent.project.image}
                category="Project"
                link={featuredContent.project.link}
                index={0}
              />
              
              {/* Art Card */}
              <FeaturedCard 
                title={featuredContent.art.title}
                description={featuredContent.art.description}
                image={featuredContent.art.image}
                category="Artwork"
                link={featuredContent.art.link}
                index={1}
              />
              
              {/* Blog Card */}
              <FeaturedCard 
                title={featuredContent.blog.title}
                description={featuredContent.blog.description}
                date={featuredContent.blog.date}
                category="Blog"
                link={featuredContent.blog.link}
                index={2}
              />
            </div>
          </div>
        </section>
        
        {/* Newsletter / Contact CTA */}
        <section className="mb-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="gradient-border relative overflow-hidden rounded-2xl p-8 md:p-12 glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect!</h2>
                <p className="text-lg text-[var(--text-secondary)] mb-8">
                  Have a project in mind or just want to chat about technology and art?
                  I'm always open to new connections and collaborations.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  <span className="relative z-10 flex items-center">
                    Get in Touch
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

// Featured Card Component
function FeaturedCard({ title, description, image, category, link, date, index }) {
  return (
    <motion.div 
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
    >
      {image && (
        <div className="relative h-56 overflow-hidden rounded-t-xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <span className="text-white text-sm font-medium uppercase tracking-wider px-3 py-1 m-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              {category}
            </span>
          </div>
        </div>
      )}
      
      {!image && (
        <div className="relative h-56 overflow-hidden rounded-t-xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-end">
            <span className="text-white text-sm font-medium uppercase tracking-wider px-3 py-1 m-3 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
              {category}
            </span>
          </div>
          <span className="gradient-text text-6xl opacity-20">{category[0]}</span>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        {date && (
          <span className="text-sm text-[var(--accent-primary)] mb-2">
            {date}
          </span>
        )}
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-[var(--text-secondary)] mb-4 flex-grow">
          {description}
        </p>
        
        <Link 
          to={link}
          className="text-[var(--accent-primary)] font-medium flex items-center mt-auto group"
        >
          View {category}
          <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
} 