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
      className=" w-full min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-gray-900 pt-26 lg:pt-20"
    >
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Minimal accent shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-slate-700/20 to-slate-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-gray-700/15 to-slate-700/10 rounded-full blur-2xl"></div>
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
              <span className="inline-block px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-full border border-slate-700">
                Computer Science Student
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight"
            >
              <span className="block text-slate-200  font-extralight">
                Hello, I'm
              </span>
              <span className="block bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent font-medium metallic-text py-3 ">
                Shreevatsa Tg
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light"
            >
              Passionate about blending{" "}
              <span className="text-slate-200 font-medium">technology</span> and{" "}
              <span className="text-slate-200 font-medium">creativity</span>. I
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
                className="group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-slate-100 text-slate-900 rounded-lg font-medium hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
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
                className="group px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-slate-600 text-slate-200 rounded-lg font-medium hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
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
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal scroll indicator - Hidden on mobile, visible on desktop */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-3 text-slate-500 hover:text-slate-300 transition-colors duration-300 rounded-full hover:bg-slate-800 "
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={20} />
        </motion.button>
        <span className="text-xs text-slate-500 font-light">Scroll</span>
      </motion.div>

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

export default Hero;
