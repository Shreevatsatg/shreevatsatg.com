
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Gallery from '../components/Sections/Gallery';
import Blog from '../components/Sections/Blog';
import Contact from '../components/Sections/Contact';
import SEO from '../components/SEO';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen items-center justify-center flex flex-col ">
      <SEO 
        title="Shreevatsa TG - Full-Stack Developer & Artist"
        description="The personal portfolio of Shreevatsa TG, a passionate computer science student, full-stack developer, and artist, showcasing projects and artwork."
      />
      <Header />
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Blog />
        <Contact />
      <Footer />
    </div>
  );
};

export default Index;
