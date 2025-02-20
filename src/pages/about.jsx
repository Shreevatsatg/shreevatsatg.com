import { Link } from "react-router-dom";
import { FaReact, FaCode, FaLaptopCode, FaCertificate, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FDF7F2] dark:bg-[#181818] flex items-center justify-center p-6">
      <div className="container mx-auto max-w-4xl bg-white dark:bg-[#252525] shadow-lg rounded-2xl p-8 transition-transform duration-300">
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <img 
            src="\photo_2024-09-22_11-28-31.jpg" 
            alt="Shreevatsa TG"
            className="w-40 h-40 rounded-xl border-4 border-transparent shadow-lg hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#E3B882] to-[#F38044] p-1"
          />
          <div className="md:ml-6 mt-6 md:mt-0">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">Shreevatsa TG</h1>
            <p className="text-lg text-[#5B4636] dark:text-gray-400 mt-2">
              Artist | Software Engineer | Open Source Enthusiast
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Passionate about full-stack development, problem-solving, and drawing & painting.
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
            <FaLaptopCode className="mr-2 text-[#9E6F21] dark:text-[#F38044]" /> About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a BCA student (2023 - 2026) with a strong passion for art and full-stack web development  and  software Developer.
            I specialize in MERN stack, React.js, and problem-solving using DSA.
            I love collaborating on open-source projects and staying up to date with the latest tech trends.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
            <FaCode className="mr-2 text-[#9E6F21] dark:text-[#F38044]" /> Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
            {["React.js", "JavaScript", "C++", "Tailwind CSS", "Linux", "Git & GitHub"].map(skill => (
              <div 
                key={skill} 
                className="bg-gray-200 dark:bg-[#3A3A3A] p-4 rounded-lg text-center shadow-md flex items-center justify-center font-semibold hover:shadow-lg transition-transform hover:scale-105"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center">
            <FaCertificate className="mr-2 text-[#9E6F21] dark:text-[#F38044]" /> Certifications
          </h2>
          <ul className="text-gray-700 dark:text-gray-300 list-disc pl-5">
            <li>✅ Web Design (HTML, CSS, WordPress) – Udemy</li>
            <li>✅ Linux Command Line Basics – Udemy</li>
            <li>✅ Digital 101 – FutureSkills</li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4 flex items-center justify-center">
            <FaEnvelope className="mr-2 text-[#9E6F21] dark:text-[#F38044]" /> Contact & Socials
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaborations, projects, or just to say hello!
          </p>

          <div className="flex justify-center space-x-6 mt-4">
            {[
              { href: "mailto:tgshreevatsa@gmail.com", icon: <FaEnvelope />, color: "text-red-500" },
              { href: "https://github.com/Shreevatsatg", icon: <FaGithub />, color: "text-gray-800 dark:text-white" },
              { href: "https://linkedin.com/in/shreevatsa-t-g-7b6509314", icon: <FaLinkedin />, color: "text-blue-500" }
            ].map(({ href, icon, color }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className={`${color} hover:scale-110 transition-transform text-2xl`}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link to="/" className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:bg-opacity-80 hover:shadow-xl transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
