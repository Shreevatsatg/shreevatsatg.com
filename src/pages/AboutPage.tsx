'use client';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaCode, FaLaptopCode, FaCertificate, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page header with animated title */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h1>
        </motion.div>
        
        {/* Profile card with glass morphism */}
        <motion.div 
          className="mb-20 gradient-border relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass p-8 md:p-10 md:flex items-start gap-12">
            {/* Profile image with floating animation */}
            <motion.div 
              className="relative mb-8 md:mb-0 w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-third)] rounded-2xl blur-md opacity-70 scale-105 animate-pulse-glow"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                <img 
                  src="/photo_2024-09-22_11-28-31.jpg" 
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
            </motion.div>
            
            {/* Bio content */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Shreevatsa TG</h2>
                <p className="text-lg text-[var(--text-secondary)]">Creative Developer & Artist</p>
              </div>
              
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                I'm a passionate developer and artist based in Karnataka, with a strong interest in creating beautiful, functional digital experiences. With a background in Computer Applications, I combine technical knowledge with creative thinking to build engaging applications and art.
              </p>
              
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                When I'm not coding, you can find me painting, or exploring new technologies. I believe in continuous learning and pushing the boundaries of what's possible with technology and art.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                <SocialLink href="https://github.com/Shreevatsatg" icon={<FaGithub size={20} />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/shreevatsa-t-g-7b6509314" icon={<FaLinkedin size={20} />} label="LinkedIn" />
                <SocialLink href="mailto:shreevatsa@shreevatsatg.com" icon={<FaEnvelope size={20} />} label="Email" />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Skills section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title mb-10">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard 
              icon={<FaReact className="text-[var(--accent-primary)]" size={24} />}
              title="Frontend Development"
              skills="React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design"
              delay={0}
            />
            
            <SkillCard 
              icon={<FaCode className="text-[var(--accent-secondary)]" size={24} />}
              title="Backend Development"
              skills="Node.js, Express, MongoDB, RESTful APIs, Authentication"
              delay={0.1}
            />
            
            <SkillCard 
              icon={<FaLaptopCode className="text-[var(--accent-primary)]" size={24} />}
              title="Other Technical Skills"
              skills="Git, GitHub, VS Code, Vercel, Netlify"
              delay={0.2}
            />
            
            <SkillCard 
              icon={<FaCertificate className="text-[var(--accent-third)]" size={24} />}
              title="Creative Skills"
              skills="Digital Art, Drawing, Traditional Painting, Photography"
              delay={0.3}
            />
          </div>
        </motion.section>
        
        {/* Education section */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="section-title mb-10">Education</h2>
          
          <motion.div 
            className="card p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Bachelor of Computer Applications</h3>
                <p className="text-[var(--text-secondary)] mb-1">Mangalore University, Udupi</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--accent-primary)] font-medium">
                  2023 - 2026
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>
        
        {/* CTA section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/contact" 
            className="btn-primary group inline-flex items-center"
          >
            <span className="relative z-10 flex items-center">
              Get in Touch
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

// Skill Card Component
function SkillCard({ icon, title, skills, delay }) {
  return (
    <motion.div 
      className="card p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-[var(--text-secondary)]">{skills}</p>
    </motion.div>
  );
}

// Social Link Component
function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 glass rounded-full flex items-center justify-center hover:text-[var(--accent-primary)] transition-colors"
    >
      {icon}
    </a>
  );
} 