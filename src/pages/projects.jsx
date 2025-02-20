const projects = [
  {
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://shreevatsatg-com.vercel.app/projects",
  },
  {
    title: "E-commerce App",
    description: "An online store with authentication, cart system, and payment integration.",
    tech: ["Next.js", "MongoDB"],
    link: "https://myecommerceapp.com",
  },
  {
    title: "Blog Platform",
    description: "A blog website with a custom CMS for creating and managing posts.",
    tech: ["React", "MongoDB", "Express"],
    link: "https://myblog.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#FDF7F2] dark:bg-[#1E1E1E] py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-[#9E6F21] dark:text-[#F38044] text-center mb-8">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#c3c0bc] dark:bg-[#2A2A2A] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <h2 className="text-2xl font-semibold text-[#191919] dark:text-white">
                {project.title}
              </h2>
              <p className="text-[#5B4636] dark:text-gray-400 mt-2">{project.description}</p>
              <p className="text-sm text-[#5B4636] dark:text-gray-400 mt-2">
                <strong>Tech Stack:</strong> {project.tech.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[#9E6F21] dark:text-[#F38044] font-medium hover:underline"
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
