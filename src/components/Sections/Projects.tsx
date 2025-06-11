import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github} from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
      {
      id: 1,
      title: "A Full-stack(MERN) Social Media app with realtime communication",
      description: "A Full-stack(MERN) A social media application that allows users to communicate with each other in real-time. using websockets and video and audio call using webrtc and storing user data in supabase database, it includes features like user authentication, profile management, and real-time chat functionality, frontend deployed on vercel and backend on Render.",
      image: '/project/aithought.webp',
      tags: ["Node.js", "React.js", "Socket.io", "WebRTC"],
      category: 'web',
      demo: "https://ai-thought-client.vercel.app/",
      github: ""
    },
    {
      id: 2,
      title: "bitcoinwala.ai landing page",
      description: "A landing page for bitcoinwala.ai, created pixel perfect UI/UX as in figma design provided by client as a freelance project, it's a platform that provides AI-powered insights and tools for Bitcoin trading.",
      image: '/project/bitcoinwala.webp',
      tags: ["React.js", "Tailwind CSS", "Framer Motion","Figma"],
      category: 'web',
      demo: "https://www.bitcoinwala.ai/",
      github: ""
    },
    {
      id: 3,
      title: "Weather App",
      description: "A Real-Time weather application using React and Tailwind CSS  deployed on vercel that provides real-time weather information for any location using Weather API.",
      image: '/project/wheatherapp.webp',
      tags: ["React.js", "OpenWeather API", "Tailwind CSS"],
      category: 'web',
      demo: "http://wheatherapp.shreevatsatg.com",
      github: "https://github.com/Shreevatsatg/wheatherapp"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my skills and projects, built with React.js and Tailwind CSS. It features a clean design, smooth animations, and is optimized for performance.",
      image: '/project/website.webp',
      tags: ["React.js", "Tailwind CSS", "Vercel"],
      category: 'web',
      demo: "https://shreevatsatg.com",
      github: "https://github.com/shreevatsatg/shreevatsatg.com"
    },
    {
      id: 5,
      title: "Stone Paper Scissors Game",
      description: "Simple Stone Paper Scissors Game to practice HTML, CSS and JavaScript.",
      image: '/project/stonepapperscessor.webp',
      tags: ["CSS", "HTML", "JavaScript"],
      category: 'web',
      demo: "",
      github: "https://github.com/Shreevatsatg/currencyconverter"
    },
    
    {
      id: 6,
      title: "Currency Converter",
      description: "A currency converter application built with HTML, CSS, and JavaScript and Free API that allows users to convert between different currencies.",
      image: '/project/currencyconverter.webp',
      tags: ["CSS", "ExchangeRate API", "JavaScript"],
      category: 'web',
      demo: "",
      github: "https://github.com/Shreevatsatg/currencyconverter"
    },
  
    
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-gray-900 py-20 pt-24">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-slate-700/20 to-slate-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-gray-700/15 to-slate-700/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-light leading-tight tracking-tight"
          >
            <span className="block bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent font-medium metallic-text py-3">
              My Projects
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A collection of my recent work, showcasing my skills in <span className="text-slate-200 font-medium">development</span>, <span className="text-slate-200 font-medium">design</span>, and <span className="text-slate-200 font-medium">problem-solving</span>.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? 'bg-slate-100 text-slate-900 font-medium'
                  : 'border border-slate-600 text-slate-200 hover:bg-slate-800'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={itemVariants}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group flex flex-col transition-all duration-300 hover:shadow-slate-700/20"
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 contrast-110 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium text-slate-200 mb-2 group-hover:text-slate-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm flex-1 font-light">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-700 text-xs rounded-full text-slate-300 font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 rounded-lg font-medium hover:bg-white transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-4 py-2 border border-slate-600 text-slate-200 rounded-lg font-medium hover:bg-slate-800 transition-all duration-300 text-sm ${
                        project.demo ? 'flex-1' : 'w-full'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>

      <style>{`
        .metallic-text {
          background: linear-gradient(135deg, 
            #e2e8f0 0%, 
            #f1f5f9 25%, 
            #ffffff 50%, 
            #f1f5f9 75%, 
            #e2e8f0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }
        
        @media (prefers-reduced-motion: no-preference) {
          .metallic-text {
            background-size: 200% 200%;
            animation: metallicShimmer 4s ease-in-out infinite;
          }
        }
        
        @keyframes metallicShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Projects;