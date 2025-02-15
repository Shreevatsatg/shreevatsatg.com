import { useNavigate } from "react-router-dom";
import { Link } from "react-router";



export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FAF7F2]">
      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between px-5 py-4">
        <div className="text-3xl font-bold">shreevatsa tg</div>
        <div className="flex items-center gap-6">
          <Link to="/projects" className="text-lg font-medium">Projects</Link>
          <button className="bg-[#FF00E5] text-white px-5 py-2 rounded-xl font-medium" onClick={() => navigate("/blog")}>
            Blog
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between px-5 mt-10 sm:mt-20">
        {/* Left - Image */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img src="/photo_2024-09-13_09-13-24.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Right - Text Content */}
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight underline decoration-[#00AEEF]">
            Hey Friends! 
          </h1>
          <br/>
                    <p className="mt-4 text-lg text-gray-700">
            I am a second-year BCA student driven by a passion for computer science.
            Actively honing my skills in web development and DSA, I aspire to create innovative solutions that
            blend technology with creativity.
          </p>
          <div className="mt-6 flex gap-4 justify-center sm:justify-start">
            <button className="bg-[#FF00E5] text-white px-6 py-3 rounded-xl font-semibold"onClick={() => navigate("/about")}>
              About Me
            </button>
            <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl font-semibold" onClick={() => navigate("/contact")}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
