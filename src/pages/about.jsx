import { Link } from "react-router-dom";

const About = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#1E1E1E] p-6">
        <div className="bg-white dark:bg-[#2A2A2A] shadow-lg rounded-2xl p-8 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fadeIn">
            About Me
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            👋 Hi, I’m <span className="font-semibold text-[#FA9E67] dark:text-[#F38044]">@Shreevatsa TG</span> <br />
            👀 I’m interested in coding ... <br />
            🌱 I’m currently learning BCA ... <br />
            💞️ I’m looking to collaborate on development ... 
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">What I Do</h2>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>✅ Web Development</li>
              <li>✅ Programming</li>
              <li>✅ Tech Insights & Trends</li>
              <li>✅ Open Source Contributions</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link to="/" className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default About;
