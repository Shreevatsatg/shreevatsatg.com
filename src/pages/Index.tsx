
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Gallery from '../components/Sections/Gallery';
import Contact from '../components/Sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen items-center justify-center flex flex-col ">
      <Header />
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Contact />
      <Footer />
    </div>
  );
};

export default Index;
