import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trimStart() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData object
    const formDataToSend = new FormData(e.target);

    fetch("https://formsubmit.co/tgshreevatsa@gmail.com", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        setIsSubmitting(false);
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSubmitted(false), 3000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Let's <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></span>
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:text-white transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:text-white transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:text-white transition-all duration-300"
                  rows="5"
                  placeholder="I'd like to discuss a project..."
                  required
                />
              </div>

              {/* Hidden Inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Message" />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></span>
                Contact Details
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                    <FaEnvelope className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Email</h3>
                    <a href="mailto:tgshreevatsa@gmail.com" className="text-gray-800 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
                      tgshreevatsa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg">
                    <FaPhone className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Phone</h3>
                    <a href="tel:+917019292082" className="text-gray-800 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
                      +91 7019292082
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></span>
                Find Me Online
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="https://github.com/Shreevatsatg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-600 transition-all duration-300 group"
                >
                  <FaGithub className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors duration-300" />
                  <span className="mt-2 text-gray-600 dark:text-gray-400 group-hover:text-amber-500 font-medium transition-colors duration-300">GitHub</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/shreevatsa-t-g-7b6509314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-600 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors duration-300" />
                  <span className="mt-2 text-gray-600 dark:text-gray-400 group-hover:text-amber-500 font-medium transition-colors duration-300">LinkedIn</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/shreevatsa_tg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-600 transition-all duration-300 group"
                >
                  <FaInstagram className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-amber-500 transition-colors duration-300" />
                  <span className="mt-2 text-gray-600 dark:text-gray-400 group-hover:text-amber-500 font-medium transition-colors duration-300">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Message Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl transform animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Thanks for reaching out. I'll get back to you soon.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;