'use client';

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      
      // In a real app, you would send this data to your backend
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      // .then(response => {
      //   setIsSubmitting(false);
      //   if (response.ok) {
      //     setIsSubmitted(true);
      //     setFormData({ name: "", email: "", message: "" });
      //     setTimeout(() => setIsSubmitted(false), 3000);
      //   } else {
      //     alert("Something went wrong. Please try again.");
      //   }
      // })
      // .catch((error) => {
      //   setIsSubmitting(false);
      //   alert("Error: " + error.message);
      // });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Connect</span>
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
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:translate-y-[-2px]'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></span>
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-amber-500 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                    <a href="mailto:your.email@example.com" className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                      tgshreevatsa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                    <FaPhone className="text-amber-500 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                      +91 7019292083
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></span>
                Follow Me
              </h2>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Shreevatsatg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full text-amber-500 dark:text-amber-400 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  <FaGithub size={24} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/shreevatsa-t-g-7b6509314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full text-amber-500 dark:text-amber-400 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                
                <a 
                  href="https://www.instagram.com/shreevatsa_tg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-100 dark:bg-amber-900/30 p-4 rounded-full text-amber-500 dark:text-amber-400 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 