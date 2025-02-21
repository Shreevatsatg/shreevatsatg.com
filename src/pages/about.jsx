import { Link } from "react-router-dom";
import { FaReact, FaCode, FaLaptopCode, FaCertificate, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 md:p-8">
      <div className="container mx-auto max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        
        {/* Header with Accent Background */}
        <div className="w-full h-32 bg-gradient-to-r from-amber-400 to-orange-500 dark:from-amber-600 dark:to-orange-700 relative">
          <div className="absolute -bottom-16 left-8 md:left-12">
            <img 
              src="\photo_2024-09-22_11-28-31.jpg" 
              alt="Shreevatsa TG"
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white dark:border-gray-800 shadow-lg object-cover"
            />
          </div>
        </div>
        
        {/* Content Container */}
        <div className="pt-20 px-6 md:px-12 pb-10">
          {/* Profile Info */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Shreevatsa TG
            </h1>
            <p className="text-lg text-amber-600 dark:text-amber-400 font-medium mt-1">
              Artist | Software Engineer | Open Source Enthusiast
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl">
              Passionate about full-stack development, problem-solving, and drawing & painting.
            </p>
          </div>

          {/* About Me Section with Card Design */}
          <div className="bg-slate-50 dark:bg-gray-700 rounded-2xl p-6 mb-8 shadow-md transition-all duration-300 hover:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
              <FaLaptopCode className="text-amber-500" /> About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              I am a BCA student (2023 - 2026) with a strong passion for art and full-stack web development and software development.
              I specialize in MERN stack, React.js, and problem-solving using DSA.
              I love collaborating on open-source projects and staying up to date with the latest tech trends.
            </p>
          </div>

          {/* Skills Section with Modern Cards */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 mb-6">
              <FaCode className="text-amber-500" /> Skills & Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "React.js", color: "from-blue-400 to-blue-500" },
                { name: "JavaScript", color: "from-yellow-400 to-yellow-500" },
                { name: "C++", color: "from-blue-500 to-indigo-600" },
                { name: "Tailwind CSS", color: "from-cyan-400 to-teal-500" },
                { name: "Linux", color: "from-gray-600 to-gray-700" },
                { name: "Git & GitHub", color: "from-orange-400 to-red-500" }
              ].map(skill => (
                <div 
                  key={skill.name} 
                  className={`bg-gradient-to-r ${skill.color} rounded-xl p-4 text-white font-medium shadow-md flex items-center justify-center text-center transition-transform duration-300 hover:scale-105 hover:-translate-y-1`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications with Modern Design */}
          <div className="bg-slate-50 dark:bg-gray-700 rounded-2xl p-6 mb-10 shadow-md transition-all duration-300 hover:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2 mb-4">
              <FaCertificate className="text-amber-500" /> Certifications
            </h2>
            <div className="space-y-3">
              {[
                "Web Design (HTML, CSS, WordPress) – Udemy",
                "Linux Command Line Basics – Udemy",
                "Digital 101 – FutureSkills"
              ].map((cert, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                  <span className="text-green-500 flex-shrink-0">✅</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social Links with Modern Design */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-2 mb-4">
              <FaEnvelope className="text-amber-500" /> Connect With Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Feel free to reach out for collaborations, projects, or just to say hello!
            </p>

            <div className="flex justify-center gap-6 mt-4">
              {[
                { href: "mailto:tgshreevatsa@gmail.com", icon: <FaEnvelope />, label: "Email", bgColor: "bg-red-500 hover:bg-red-600" },
                { href: "https://github.com/Shreevatsatg", icon: <FaGithub />, label: "GitHub", bgColor: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600" },
                { href: "https://linkedin.com/in/shreevatsa-t-g-7b6509314", icon: <FaLinkedin />, label: "LinkedIn", bgColor: "bg-blue-600 hover:bg-blue-700" }
              ].map(({ href, icon, label, bgColor }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${bgColor} text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group`}
                  aria-label={label}
                >
                  <span className="text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Back to Home Button with Modern Design */}
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;