import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github} from 'lucide-react';

import { projects } from '../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile' }
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
    <section id="projects" className="w-full min-h-screen flex items-center justify-center relative bg-white dark:bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-neutral-300/20 dark:bg-neutral-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-neutral-300/15 dark:bg-neutral-700/15 rounded-full blur-2xl"></div>
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
            <span className="block metallic-text font-medium py-3">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A collection of my recent work, showcasing my skills in <span className="text-neutral-900 dark:text-neutral-200 font-medium">development</span>, <span className="text-neutral-900 dark:text-neutral-200 font-medium">design</span>, and <span className="text-neutral-900 dark:text-neutral-200 font-medium">problem-solving</span>.
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
                  ? 'bg-black dark:bg-white text-white dark:text-black font-medium'
                  : 'border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900'
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
              className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-700 shadow-2xl group flex flex-col transition-all duration-300 hover:shadow-neutral-300/20 dark:hover:shadow-neutral-700/20"
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of the ${project.title}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 contrast-110 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-200 mb-2 group-hover:text-neutral-950 dark:group-hover:text-neutral-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm flex-1 font-light">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-xs rounded-full text-neutral-700 dark:text-neutral-300 font-light"
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 text-sm"
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
                      className={`flex items-center justify-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 text-sm ${
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


    </section>
  );
};

export default Projects;