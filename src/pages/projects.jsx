const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://shreevatsatg-com.vercel.app",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "E-commerce App",
    description: "An online store with authentication, cart system, and payment integration.",
    tech: ["Next.js", "MongoDB"],
    link: "https://myecommerceapp.com",
    github: "https://github.com/yourusername/ecommerce-app"
  },
  {
    title: "Blog Platform",
    description: "A blog website with a custom CMS for creating and managing posts.",
    tech: ["React", "MongoDB", "Express"],
    link: "https://myblog.com",
    github: "https://github.com/yourusername/blog-platform"
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-[#FDF7F2] dark:bg-[#0f172a] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#191919] dark:text-white mb-3">My Projects</h2>
          <div className="w-24 h-1 bg-[#9E6F21] dark:bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#c3c0bc] dark:bg-[#1a2235] rounded-lg overflow-hidden border border-[#5B4636]/20 dark:border-[#2a3246] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#191919] dark:text-white mb-3">{project.title}</h3>
                <p className="text-[#5B4636] dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="mb-5">
                  <p className="text-[#9E6F21] dark:text-[#6366f1] text-xs font-medium uppercase mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-[#5B4636]/10 dark:bg-[#2a3246] text-[#5B4636] dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center flex-1 py-3 px-4 bg-[#9E6F21] hover:bg-[#8A5F11] dark:bg-[#6366f1] dark:hover:bg-[#4f46e5] text-white font-medium rounded-md transition-colors duration-200"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3 bg-[#5B4636]/10 hover:bg-[#5B4636]/20 dark:bg-[#2a3246] dark:hover:bg-[#343e56] text-[#5B4636] dark:text-white rounded-md transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-3 px-6 bg-[#5B4636]/10 hover:bg-[#5B4636]/20 dark:bg-[#2a3246] dark:hover:bg-[#343e56] text-[#5B4636] dark:text-white font-medium rounded-md transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;