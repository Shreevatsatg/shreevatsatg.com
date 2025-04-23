'use client';

import { Link } from "react-router-dom";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects.",
    tech: ["nextjs", "Tailwind CSS", "Vercel"],
    link: "https://shreevatsatg.com",
    github: "https://github.com/shreevatsatg/shreevatsatg.com"
  },
  {
    title: "e-commerce website",
    description: "A fully functional e-commerce website with product listings, cart functionality, and user authentication.",
    tech: ["React", "express", "mongodb"],
    link: "",
    github: "https://github.com/Shreevatsatg/mern-ecommerce"
    
  },
  {
    title: "stone papper scissors game",
    description: "simple game to practice html,css and javascript.",
    tech: ["css", "html","javascript"],
    link: "",
    github: "https://github.com/Shreevatsatg/currencyconverter"
  },
  {
    title: "Weather App",
    description: "A weather application that provides real-time weather information for any location.",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    link: "http://wheatherapp.shreevatsatg.com/",
    github: "https://github.com/Shreevatsatg/wheatherapp"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] dark:text-white mb-4">
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-[var(--text-secondary)] dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work, showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[var(--bg-secondary)] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-3">{project.title}</h2>
                <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--accent-primary)]/10 dark:bg-amber-900/30 text-[var(--accent-primary)] dark:text-amber-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
                    >
                      View Live
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg font-medium hover:bg-[var(--accent-primary)] hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-6">
            Interested in working together? Let's build something amazing!
          </p>
          <Link 
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 