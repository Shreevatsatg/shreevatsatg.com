'use client';

import Link from "next/link";
import { FaReact, FaCode, FaLaptopCode, FaCertificate, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 md:p-8">
      <div className="container mx-auto max-w-4xl bg-[var(--bg-secondary)] dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        
        {/* Header with Accent Background */}
        <div className="w-full h-32 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] dark:from-amber-600 dark:to-orange-700 relative">
          <div className="absolute -bottom-16 left-8 md:left-12">
            <img 
              src="\photo_2024-09-22_11-28-31.jpg" 
              alt="Shreevatsa TG"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-[var(--bg-secondary)] dark:border-gray-800 shadow-lg object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="pt-20 p-8 md:p-12">
          {/* Name and Social Links - Added margin-left on medium screens and above */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div className="md:ml-44">
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] dark:text-white mb-2">Shreevatsa TG</h1>
              <p className="text-[var(--text-secondary)] dark:text-gray-300">Creative Developer & Artist</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <a href="https://github.com/Shreevatsatg" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] dark:text-gray-300 hover:text-[var(--accent-primary)] dark:hover:text-amber-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shreevatsa-t-g-7b6509314" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] dark:text-gray-300 hover:text-[var(--accent-primary)] dark:hover:text-amber-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="tgshreevatsa@gmail.com" className="text-[var(--text-secondary)] dark:text-gray-300 hover:text-[var(--accent-primary)] dark:hover:text-amber-400 transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-b border-[var(--bg-tertiary)] dark:border-gray-700 mb-8"></div>
          
          {/* About Me Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-4 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mr-3"></span>
              About Me
            </h2>
            <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate developer and artist based in Bangalore, with a strong interest in creating beautiful, functional digital experiences. With a background in Computer Applications, I combine technical knowledge with creative thinking to build engaging web applications and digital art.
            </p>
            <p className="text-[var(--text-secondary)] dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me painting, exploring new technologies, or contributing to open-source projects. I believe in continuous learning and pushing the boundaries of what's possible with technology and art.
            </p>
          </div>
          
          {/* Skills Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-4 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mr-3"></span>
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--bg-tertiary)] dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaReact className="text-[var(--accent-primary)] mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] dark:text-white">Frontend Development</h3>
                </div>
                <p className="text-[var(--text-secondary)] dark:text-gray-300">
                  React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Responsive Design
                </p>
              </div>
              
              <div className="bg-[var(--bg-tertiary)] dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaCode className="text-[var(--accent-secondary)] mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] dark:text-white">Backend Development</h3>
                </div>
                <p className="text-[var(--text-secondary)] dark:text-gray-300">
                  Node.js, Express, MongoDB, RESTful APIs, Authentication
                </p>
              </div>
              
              <div className="bg-[var(--bg-tertiary)] dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-[var(--accent-primary)] mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] dark:text-white">Other Technical Skills</h3>
                </div>
                <p className="text-[var(--text-secondary)] dark:text-gray-300">
                  Git, GitHub, VS Code, Figma, Adobe Creative Suite, Vercel, Netlify
                </p>
              </div>
              
              <div className="bg-[var(--bg-tertiary)] dark:bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <FaCertificate className="text-[var(--accent-secondary)] mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] dark:text-white">Creative Skills</h3>
                </div>
                <p className="text-[var(--text-secondary)] dark:text-gray-300">
                  Digital Art, UI/UX Design, Traditional Painting, Photography
                </p>
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-4 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mr-3"></span>
              Education
            </h2>
            <div className="bg-[var(--bg-tertiary)] dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] dark:text-white mb-2">Bachelor of Computer Applications</h3>
              <p className="text-[var(--text-secondary)] dark:text-gray-300 mb-1">Manglore univercity, Udupi</p>
              <p className="text-[var(--text-secondary)]/70 dark:text-gray-400">2023 - 2026</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            >
              Back to Home
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 