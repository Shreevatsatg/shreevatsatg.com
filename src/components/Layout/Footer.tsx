import { motion } from 'framer-motion';
import { Heart, Code, } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 py-4 md:py-6 w-full">
      <div className="container mx-auto px-8 relative z-10 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-3 md:space-y-4"
        >
          {/* Thank You Message */}
          <motion.div
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-2xl  font-medium tracking-tight bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent px-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Thank you for visiting! ✨
          </motion.div>
          
          {/* Creator Credit */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base text-slate-400"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-light">Designed with</span>
              <Heart size={14} className="text-slate-200 sm:size-4" />
              <span className="text-slate-200 font-light">by Shreevatsa TG</span>
            </div>
          </motion.div>
          
          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-4 text-xs sm:text-sm text-slate-400"
          >
            <span className="text-slate-200 font-medium">Built with</span>
            <Code size={14} className="text-slate-200 sm:size-4" />
            <span className="text-slate-200 font-medium">React</span>
            <span className="hidden xs:inline">•</span>
            <span className="text-slate-200 font-medium">TypeScript</span>
            <span className="hidden xs:inline">•</span>
            <span className="text-slate-200 font-medium">Tailwind CSS</span>
            <span className="hidden xs:inline">•</span>
            <span className="text-slate-200 font-medium">Framer Motion</span>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-xs sm:text-sm text-slate-400 px-4 font-light"
          >
            © Shreevatsa TG {currentYear}. All rights reserved.
          </motion.div>
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
    </footer>
  );
};

export default Footer;