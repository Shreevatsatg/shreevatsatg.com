'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown, Sparkles, Code, PencilRuler, Send } from 'lucide-react';

export default function HomePage() {
  // Sample featured content
  const featuredContent = {
    project: {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my skills and projects.",
      image: "/profile.jpg",
      link: "/projects"
    },
    art: {
      title: "Krishna Painting",
      description: "Oil painting of Krishna",
      image: "/drawing/krishna.jpg", 
      link: "/drawings"
    },
    blog: {
      title: "Clothing Billboards in Udupi & Manipal",
      description: "Clothing Billboards in Udupi & Manipal: A Visual and Market Perspective ",
      image: "/blog/peter england.jpg",   
      link: "/blog"
    }
  };

  // Scroll animations
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);
  
  // 3D card tilt effect
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    const offsetX = ((x - middleX) / middleX) * 10;
    const offsetY = ((y - middleY) / middleY) * 10;
    
    setRotateX(-1 * offsetY);
    setRotateY(offsetX);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  // Smooth spring animations for rotation
  const springX = useSpring(rotateX, { damping: 15, stiffness: 150 });
  const springY = useSpring(rotateY, { damping: 15, stiffness: 150 });

  return (
    <>
      {/* Hero Section with 3D and parallax effects */}
      <section className="relative  overflow-hidden">
        <motion.div
          className="container mx-auto px-4"
          style={{ opacity, y: y1 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Text content */}
            <motion.div
              className="lg:w-3/5 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 mb-6 rounded-full glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Sparkles className="w-4 h-4 mr-2 text-[var(--accent-primary)]" />
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Computer Science Student & Creative Developer
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="block">Hey Friends!</span>
                <span className="gradient-text">I'm Shreevatsa</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I am a computer science student driven by a passion for computer
                science and art. Actively honing my skills in{" "}
                <span className="text-[var(--accent-primary)]">
                  web development
                </span>{" "}
                and <span className="text-[var(--accent-third)]">painting</span>
                , I aspire to create innovative solutions that blend technology
                with creativity.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link to="/about" className="btn-primary group">
                  <span className="relative z-10 flex items-center">
                    About Me
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link to="/contact" className="btn-outline group">
                  <span className="relative z-10 flex items-center">
                    Contact
                    <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>

              {/* Social media */}
              <motion.div
                className="flex items-center gap-6 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <a
                  href="https://github.com/shreevatsatg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-[var(--text-secondary)] transition-all duration-300 group-hover:text-[var(--accent-primary)] group-hover:scale-110" />
                </a>
                <a
                  href="https://linkedin.com/in/shreevatsatg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-[var(--text-secondary)] transition-all duration-300 group-hover:text-[var(--accent-primary)] group-hover:scale-110" />
                </a>
                <a
                  href="https://twitter.com/shreevatsatg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-[var(--text-secondary)] transition-all duration-300 group-hover:text-[var(--accent-primary)] group-hover:scale-110" />
                </a>
              </motion.div>
            </motion.div>

            {/* 3D Profile image card */}
            <motion.div
              className="lg:w-2/5 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div
                ref={cardRef}
                className="tilt-card spotlight-container w-72 h-72 md:w-96 md:h-96 mx-auto relative z-10"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={
                  {
                    "--rotateX": `${springX}deg`,
                    "--rotateY": `${springY}deg`,
                  } as React.CSSProperties
                }
              >
                {/* Blob background */}
                <div className="absolute -inset-10 bg-gradient-to-br from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/10 to-[var(--accent-third)]/5 rounded-full blur-3xl animate-pulse-glow"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="spotlight"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/20 to-[var(--accent-third)]/20 backdrop-blur-md border border-white/10"></div>
                </div>

                {/* Card content */}
                <div className="tilt-card-content h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/profile.jpg"
                    alt="Shreevatsa TG"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--accent-primary)]/10 backdrop-blur-sm rounded-full border border-[var(--accent-primary)]/20 animate-pulse-glow"></div>
                <div
                  className="absolute -top-6 -left-6 w-16 h-16 bg-[var(--accent-third)]/10 backdrop-blur-sm rounded-full border border-[var(--accent-third)]/20 animate-pulse-glow"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-[var(--text-secondary)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">What I Do</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Web Development */}
              <motion.div
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="spotlight"></div>
                <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">
                  Web Development
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  I build modern, responsive websites and web applications using
                  React, Next.js, and other cutting-edge technologies.
                </p>
              </motion.div>

              {/* UI/UX Design */}
              <motion.div
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="spotlight"></div>
                <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-third)] flex items-center justify-center">
                  <PencilRuler className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">
                  UI/UX Design
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  I create intuitive and visually appealing user interfaces and
                  experiences that engage users and achieve business goals.
                </p>
              </motion.div>

              {/* Digital Art */}
              <motion.div
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="spotlight"></div>
                <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-third)] to-[var(--accent-fifth)] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Art</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  I express my creativity through traditional painting and
                  digital art, exploring various techniques and styles.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Featured Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* Featured Project */}
              <FeaturedCard
                title={featuredContent.project.title}
                description={featuredContent.project.description}
                image={featuredContent.project.image}
                category="Project"
                link={featuredContent.project.link}
                index={0}
              />

              {/* Featured Art */}
              <FeaturedCard
                title={featuredContent.art.title}
                description={featuredContent.art.description}
                image={featuredContent.art.image}
                category="Art"
                link={featuredContent.art.link}
                index={1}
              />

              {/* Featured Blog */}
              <FeaturedCard
                title={featuredContent.blog.title}
                description={featuredContent.blog.description}
                image={featuredContent.blog.image}
                category="Blog"
                link={featuredContent.blog.link}
                index={2}
              />
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech stack marquee */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-10">
          <motion.h2
            className="text-center text-2xl font-display font-bold text-[var(--text-secondary)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Technologies I Work With
          </motion.h2>
        </div>

        <div className="marquee relative">
          <div className="marquee-content flex gap-12 items-center">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "MongoDB",
              "GraphQL",
              "Framer Motion",
              "Figma",
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] shadow-sm"
              >
                <span className="text-lg font-medium">{tech}</span>
              </div>
            ))}
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "MongoDB",
              "GraphQL",
              "Framer Motion",
              "Figma",
            ].map((tech, index) => (
              <div
                key={index + 9}
                className="flex items-center px-4 py-2 bg-[var(--bg-secondary)] rounded-lg border border-[var(--border-color)] shadow-sm"
              >
                <span className="text-lg font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedCard({ title, description, image, category, link, date, index }) {
  return (
    <motion.div
      className="group spotlight-container glass-card relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
    >
      <div className="spotlight"></div>
      
      {/* Category tag */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-medium text-white bg-[var(--accent-primary)] rounded-full">
        {category}
      </div>
      
      {/* Card content */}
      <Link to={link} className="block h-full">
        <div className="p-6 h-full flex flex-col">
          {image && (
            <div className="mb-6 rounded-xl overflow-hidden aspect-video">
              <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          )}
          
          <h3 className="text-xl font-bold mb-2 font-display">{title}</h3>
          
          {date && <p className="text-sm text-[var(--text-secondary)] mb-2">{date}</p>}
          
          <p className="text-[var(--text-secondary)] flex-grow">{description}</p>
          
          <div className="mt-6 text-[var(--accent-primary)] font-medium flex items-center">
            <span>Read more</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 