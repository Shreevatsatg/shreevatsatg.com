import { motion } from "framer-motion";
import { ChevronDown, Mail, ArrowRight } from "lucide-react";
import TiltedCard from "../components/profilephoto";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative bg-white dark:bg-black pt-4 pb-28 lg:pb-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-neutral-300/20 dark:bg-neutral-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-neutral-300/15 dark:bg-neutral-700/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Content (Desktop) / Second on Mobile */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left space-y-8 order-2 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-1 hidden lg:block"
            >
              <span className="inline-block px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-full border border-neutral-300 dark:border-neutral-700">
                Computer Science Student
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight"
            >
              <span className="block text-neutral-800 dark:text-neutral-200 font-extralight">
                Hi, I'm
              </span>
              <span className="block metallic-text font-medium py-3">
                Shreevatsa Tg
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed font-light"
            >
              Passionate about{" "}
              <span className="text-neutral-900 dark:text-neutral-200 font-medium">technology</span>. I
              develop innovative solutions and create digital experiences that
              matter.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 max-w-md mx-auto lg:mx-0"
            >
              <motion.button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Work</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-200 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                <span>Contact</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Photo (Desktop) / First on Mobile */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2 "
          >
            <TiltedCard 
              imageSrc="/profile.jpg"
              altText="profile photo"
              captionText="Shreevatsa Tg"
              containerHeight="450px"
              containerWidth="400px"
              imageHeight="450px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={true}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator - Hidden on mobile, visible on desktop */}
      <motion.div
        className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-3 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors duration-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={20} />
        </motion.button>
        <span className="text-xs text-neutral-500 font-light">Scroll</span>
      </motion.div>


    </section>
  );
};

export default Hero;
