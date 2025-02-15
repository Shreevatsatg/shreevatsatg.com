const About = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">
            About me
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to our blog! We are passionate about **web development**, **programming**, and **technology**.  
            Our goal is to share **valuable knowledge** and **help developers** grow in their journey.
          </p>
  
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">What We Do</h2>
            <ul className="text-gray-600">
              <li>✅ Web Development Tutorials</li>
              <li>✅ Programming Guides</li>
              <li>✅ Tech Insights & Trends</li>
              <li>✅ Open Source Contributions</li>
            </ul>
          </div>
  
          <div className="mt-8">
            <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  