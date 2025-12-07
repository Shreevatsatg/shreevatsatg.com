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
    <footer className="bg-white dark:bg-black py-4 md:py-6 w-full border-t border-neutral-300 dark:border-neutral-700 mt-4">
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
            className="text-xl sm:text-2xl md:text-2xl font-medium tracking-tight metallic-text px-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Thank you for visiting! ✨
          </motion.div>
          
          {/* Creator Credit */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-light">Designed with</span>
              <Heart size={14} className="text-neutral-900 dark:text-neutral-200 sm:size-4" />
              <span className="text-neutral-900 dark:text-neutral-200 font-light">by Shreevatsa TG</span>
            </div>
          </motion.div>
          
          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
          >
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">Built with</span>
            <Code size={14} className="text-neutral-900 dark:text-neutral-200 sm:size-4" />
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">React</span>
            <span className="hidden xs:inline">•</span>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">TypeScript</span>
            <span className="hidden xs:inline">•</span>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">Tailwind CSS</span>
            <span className="hidden xs:inline">•</span>
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">Framer Motion</span>
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 px-4 font-light"
          >
            © Shreevatsa TG {currentYear}. All rights reserved.
          </motion.div>
        </motion.div>
      </div>


    </footer>
  );
};

export default Footer;