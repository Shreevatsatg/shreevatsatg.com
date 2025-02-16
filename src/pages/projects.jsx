const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my skills and projects.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      link: "shreevatsatg-com.vercel.app/projects",
    },
    {
      title: "E-commerce App",
      description: "An online store with authentication, cart system, and payment integration.",
      tech: ["Next.js", "MongoDB",],
      link: "https://myecommerceapp.com",
    },
    {
      title: "Blog Platform",
      description: "A blog website with a custom CMS for creating and managing posts.",
      tech: ["react", "mongodb", "express"],
      link: "https://myblog.com",
    },
  ];
  
  const Projects = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">My Projects</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h2 className="text-xl font-semibold text-gray-700">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  