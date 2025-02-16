import { Link } from "react-router-dom";

const About = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
            About me
          </h1>
          <p className="text-gray-600 text-lg">
          👋 Hi, I’m @Shreevatsa tg 
          👀 I’m interested in coding ...
          🌱 I’m currently learning bca ...
          💞️ I’m looking to collaborate on development ...

          </p>
  
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">What I Do</h2>
            <ul className="text-gray-600">
              <li>✅ Web Development </li>
              <li>✅ Programming </li>
              <li>✅ Tech Insights & Trends</li>
              <li>✅ Open Source Contributions</li>
            </ul>
          </div>
  
          <div className="mt-8">
            <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  