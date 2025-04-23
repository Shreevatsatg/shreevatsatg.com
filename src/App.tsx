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

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
        {/* Animated background elements */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          {/* Large gradient orb - top right */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 blur-3xl animate-float"></div>
          
          {/* Medium gradient orb - bottom left */}
          <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-gradient-to-tr from-[var(--accent-secondary)]/20 to-[var(--accent-third)]/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Small accent orb - center left */}
          <div className="absolute top-1/3 -left-16 w-48 h-48 rounded-full bg-gradient-to-tr from-[var(--accent-third)]/20 to-[var(--accent-primary)]/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          
          {/* Extra small accent dots */}
          <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-[var(--accent-primary)] opacity-20 blur-sm animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-[var(--accent-secondary)] opacity-20 blur-sm animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-[var(--accent-third)] opacity-20 blur-sm animate-pulse-glow" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Subtle grid overlay for texture */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <Navbar />
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
          
          {/* Footer */}
          <footer className="relative z-10 border-t border-[var(--border-color)] py-6 mt-auto">
            <div className="container mx-auto px-4 text-center text-[var(--text-secondary)] text-sm">
              <p>© {new Date().getFullYear()} Shreevatsa TG. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App; 