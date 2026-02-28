import { motion } from 'framer-motion';
import { Code, Coffee, Rocket, Globe, Database, GitBranch, Layers, Figma,Network } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: GitBranch },
    { name: "MongoDB", icon: Database },
    { name: "GraphQL", icon: Layers },
    { name: "Framer Motion", icon: Code },
    { name: "Figma", icon: Figma },
    { name: "postman", icon: Code}
  ];

  const interests = [
    { icon: Code, title: 'Web Development', description: 'Building responsive and interactive web applications' },
    { icon: Network, title: 'Systems Thinking', description: 'Approaching problems by understanding how components interact within a larger system' },
    { icon: Coffee, title: 'Full-Stack Engineering', description: 'Designing and developing complete web applications from frontend interfaces to backend systems' },
    { icon: Rocket, title: 'Hackathon Prototyping', description: 'Transforming ideas into functional prototypes under tight deadline' },
  ];

  // Duplicate technologies for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

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
    <section id="about" className="w-full min-h-screen flex items-center justify-center relative bg-white dark:bg-black">
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
              About Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            I’m a computer science student focused on building real-world systems and interactive web applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-2">
           
              
              

            <motion.p variants={itemVariants} className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
              I enjoy turning complex ideas into working products — from real-time collaborative tools to AI-powered applications. Most of my learning happens through experimentation, breaking things, and rebuilding them better.

I’m especially interested in scalable architectures, real-time systems, and building platforms that people actually use.

For me, coding isn’t just about writing functions — it’s about engineering complete solutions.
            </motion.p>
            
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-6"
          >
            {interests.map((interest) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-2xl hover:shadow-neutral-300/20 dark:hover:shadow-neutral-700/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
                  <interest.icon className="w-12 h-12 text-neutral-900 dark:text-neutral-200 mb-4" />
                </motion.div>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-200 mb-2">{interest.title}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scrolling Technologies Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-medium text-neutral-900 dark:text-neutral-200 text-center mb-8"
          >
            Technologies I Work With
          </motion.h3>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>
            <motion.div
              className="flex gap-4 py-4"
              animate={{
                x: [0, -50 * technologies.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: `${duplicatedTechnologies.length * 200}px` }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="group relative flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  style={{ width: '180px' }}
                >
                  <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-300 dark:border-neutral-700 backdrop-blur-sm transition-all duration-300 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-hover:shadow-lg group-hover:shadow-neutral-300/20 dark:group-hover:shadow-neutral-600/20 relative overflow-hidden h-20 flex items-center justify-center">
                    <tech.icon className="absolute top-2 right-2 w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors duration-300" />
                    <span className="text-sm font-medium text-neutral-900 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-neutral-100 transition-colors duration-300 relative z-10 text-center">
                      {tech.name}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-neutral-300/20 dark:from-neutral-700/20 to-neutral-400/20 dark:to-neutral-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        
      </div>


    </section>
  );
};

export default About;