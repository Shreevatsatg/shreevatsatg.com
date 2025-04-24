import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import DrawingsPage from './pages/DrawingsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update custom properties for interactive cards
      const cards = document.querySelectorAll('.glass-card, .spotlight-container');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading for smoother initial animation
    const timer = setTimeout(() => setLoading(false), 800);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="relative w-24 h-24"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            >
              <div className="absolute inset-0 rounded-full border-t-2 border-[var(--accent-primary)] opacity-75"></div>
              <div className="absolute inset-0 rounded-full border-r-2 border-[var(--accent-secondary)] opacity-75" style={{ transform: 'rotate(45deg)' }}></div>
              <div className="absolute inset-0 rounded-full border-b-2 border-[var(--accent-third)] opacity-75" style={{ transform: 'rotate(90deg)' }}></div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="main"
            className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Futuristic 3D grid background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
              {/* Noise texture overlay for added depth */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise"></div>
              
              {/* Animated gradient orbs */}
              <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-radial from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/10 to-transparent blur-3xl animate-float"></div>
              
              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-radial from-[var(--accent-third)]/20 via-[var(--accent-fifth)]/10 to-transparent blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
              
              {/* Morphing blob */}
              <div className="absolute right-1/4 top-1/3 w-64 h-64 rounded-full morph-blob opacity-10 blur-3xl"></div>
              
              {/* Animated accent particles */}
              <motion.div 
                className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[var(--accent-primary)]"
                animate={{ 
                  y: [0, 30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-[var(--accent-secondary)]"
                animate={{ 
                  x: [0, 20, 0],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 7,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[var(--accent-third)]"
                animate={{ 
                  x: [0, -15, 0],
                  y: [0, 10, 0],
                  opacity: [0.2, 0.7, 0.2]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.04]"></div>
            </div>
            
            {/* Custom cursor effect */}
            <motion.div 
              className="hidden lg:block fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
              animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: 1,
                opacity: 0.5
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 0.5
              }}
              style={{
                background: `radial-gradient(circle, var(--accent-primary), var(--accent-secondary))`
              }}
            />
            
            {/* Main content */}
            <div className="relative z-10">
              <Navbar />
              
              <AnimatePresence mode="wait">
                <main className="min-h-[calc(100vh-5rem)] container mx-auto px-4 pb-16">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/drawings" element={<DrawingsPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
              </AnimatePresence>
              
              {/* Footer with glassmorphism */}
              <footer className="relative z-10 border-t border-[var(--border-color)] py-8">
                <div className="container mx-auto px-4">
                  <div className="glass-card p-6 text-center">
                    <div className="spotlight"></div>
                    <p className="text-[var(--text-secondary)] mb-3">
                      Designed with <span className="text-[var(--accent-third)]">♥</span> by Shreevatsa TG
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] opacity-80">
                      © {new Date().getFullYear()} All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App; 