import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";  // Import Home page
import Blog from "./pages/blog";  // Import Blog page
import About from "./pages/about"; // Import About page
import Projects from "./pages/projects";//import projects page
import Contact from "./pages/contact";//import contact page

function App() {
  return (
  <>
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page at "/" */}
        <Route path="/blog" element={<Blog />} />  {/* Blog page at "/blog" */}
        <Route path="/about" element={<About />} />  {/* About page at "/about" */}
        <Route path="/projects" element={<Projects />} />{/* project page at "/project" */}
        <Route path="/contact" element={<Contact />} />{/* contact page at "/contact" */}
      </Routes>
  </>
  );
}

export default App;
