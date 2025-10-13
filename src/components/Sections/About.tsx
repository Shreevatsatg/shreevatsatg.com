import { motion } from 'framer-motion';
import { Code, Palette, Coffee, Heart, Globe, Database, GitBranch, Layers, Figma, } from 'lucide-react';

const About = () => {
  const technologies = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Code },
    { name: "Node.js", icon: GitBranch },
    { name: "Tailwind CSS", icon: Palette },
    { name: "MongoDB", icon: Database },
    { name: "GraphQL", icon: Layers },
    { name: "Framer Motion", icon: Code },
    { name: "Figma", icon: Figma },
    { name: "postman", icon: Code}
  ];

  const interests = [
    { icon: Code, title: 'Web Development', description: 'Building responsive and interactive web applications' },
    { icon: Palette, title: 'Art', description: 'Creating beautiful paintings and drawings' },
    { icon: Coffee, title: 'Problem Solving', description: 'Tackling complex algorithmic challenges' },
    { icon: Heart, title: 'Open Source', description: 'Contributing to community-driven projects' },
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
    <section id="about" className="w-full min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-gray-900 ">
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
              About Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A passionate computer science student who believes that the intersection of <span className="text-slate-200 font-medium">technology</span> and <span className="text-slate-200 font-medium">art</span> creates the most beautiful and meaningful experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
           
              
              

            <motion.h3 variants={itemVariants} className="text-2xl font-medium text-slate-200">My Journey</motion.h3>
            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed font-light">
              Currently pursuing my Computer Science degree, I'm deeply fascinated by the endless possibilities 
              that emerge when creativity meets code. My journey began with a simple curiosity about how 
              websites work, which quickly evolved into a passion for creating digital experiences.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed font-light">
              When I'm not coding, you'll find me with a paintbrush in hand, exploring colors and forms on canvas. 
              This artistic practice has taught me to see problems from different perspectives and approach 
              development with a designer's eye.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed font-light">
              I believe that the best solutions come from understanding both the technical requirements and 
              the human emotions behind every project.
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
                className="p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl hover:shadow-slate-700/20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                >
                  <interest.icon className="w-12 h-12 text-slate-200 mb-4" />
                </motion.div>
                <h4 className="font-medium text-slate-200 mb-2">{interest.title}</h4>
                <p className="text-sm text-slate-400 font-light">{interest.description}</p>
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
            className="text-2xl font-medium text-slate-200 text-center mb-8"
          >
            Technologies I Work With
          </motion.h3>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
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
                  <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 backdrop-blur-sm transition-all duration-300 group-hover:border-slate-500 group-hover:shadow-lg group-hover:shadow-slate-600/20 relative overflow-hidden h-20 flex items-center justify-center">
                    <tech.icon className="absolute top-2 right-2 w-5 h-5 text-slate-400 group-hover:text-slate-200 transition-colors duration-300" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-slate-100 transition-colors duration-300 relative z-10 text-center">
                      {tech.name}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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