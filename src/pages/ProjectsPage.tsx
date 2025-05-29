'use client';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects.",
    tech: ["nextjs", "Tailwind CSS", "Vercel"],
    link: "https://shreevatsatg.com",
    github: "https://github.com/shreevatsatg/shreevatsatg.com"
  },
  {
    title: "E-Commerce Website",
    description: "A fully functional e-commerce website with product listings, cart functionality, and user authentication.",
    tech: ["React", "Express", "MongoDB"],
    link: "",
    github: "https://github.com/Shreevatsatg/mern-ecommerce"
  },
  {
    title: "Stone Paper Scissors Game",
    description: "Simple game to practice HTML, CSS and JavaScript.",
    tech: ["CSS", "HTML", "JavaScript"],
    link: "",
    github: "https://github.com/Shreevatsatg/currencyconverter"
  },
  {
    title: "Weather App",
    description: "A weather application that provides real-time weather information for any location.",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    link: "http://wheatherapp.shreevatsatg.com",
    github: "https://github.com/Shreevatsatg/wheatherapp"
  },
  {
    title: "Currency Converter",
    description: "A currency converter application that allows users to convert between different currencies.",
    tech: ["css", "ExchangeRate API", "javascript"],
    link: "",
    github: "https://github.com/Shreevatsatg/currencyconverter"
  },
  {
    title: "Social Media app with realtime communication",
    description: "A social media application that allows users to communicate with each other in real-time. useing websockets and video and audio call useing webrtc.",
    tech: ["Node.js", "react", "Socket.io", "Tailwind CSS"],
    link: "https://ai-thought-client.vercel.app/",
    github: ""
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page header with animated title */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A collection of my recent work, showcasing my skills in web development, design, and problem-solving.
          </p>
        </motion.div>
        
        {/* Animated decorative elements */}
        <div className="relative">
          <motion.div 
            className="absolute top-20 right-[10%] w-3 h-3 rounded-full bg-[var(--accent-primary)]"
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
            className="absolute bottom-40 left-[5%] w-5 h-5 rounded-full bg-[var(--accent-secondary)]"
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
            className="absolute top-1/3 left-[2%] w-4 h-4 rounded-full bg-[var(--accent-third)]"
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
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Together</h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Interested in working together or have a project in mind? Let's connect and create something amazing!
            </p>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, index }) {
  return (
    <motion.div 
      className="card h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-8 md:p-10 flex flex-col h-full">
        {/* Project title with hover effect */}
        <h2 className="text-2xl font-bold mb-4 group">
          {project.title}
          <span className="block h-1 w-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mt-2 group-hover:w-full transition-all duration-300"></span>
        </h2>
        
        <p className="text-[var(--text-secondary)] mb-6 flex-grow">
          {project.description}
        </p>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--accent-primary)] text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-4 mt-auto">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <span className="relative z-10 flex items-center">
                View Live
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </span>
            </a>
          )}
          
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              <span className="relative z-10 flex items-center">
                GitHub
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 