'use client';

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  
  // Email obfuscation
  const [displayEmail, setDisplayEmail] = useState("");

  useEffect(() => {
    // Decode and split email to prevent direct scraping
    const user = ["shreevatsa"].join('');
    const domain = ["shreevatsatg", "com"].join('.');
    setDisplayEmail(`${user}@${domain}`);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("https://formspree.io/f/xzzekbdy", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json"
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-tertiary)] dark:from-gray-900 dark:to-gray-800 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] dark:text-white mb-4">
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-[var(--text-secondary)] dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-[var(--bg-secondary)] dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mr-3"></span>
              Send a Message
            </h2>

            <form 
              onSubmit={handleSubmit} 
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-[var(--text-secondary)] dark:text-gray-300 font-medium mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--bg-tertiary)] dark:border-gray-600 bg-[var(--bg-secondary)] dark:bg-gray-700 text-[var(--text-primary)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] dark:focus:ring-amber-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[var(--text-secondary)] dark:text-gray-300 font-medium mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[var(--bg-tertiary)] dark:border-gray-600 bg-[var(--bg-secondary)] dark:bg-gray-700 text-[var(--text-primary)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] dark:focus:ring-amber-400"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[var(--text-secondary)] dark:text-gray-300 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--bg-tertiary)] dark:border-gray-600 bg-[var(--bg-secondary)] dark:bg-gray-700 text-[var(--text-primary)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] dark:focus:ring-amber-400 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              {/* Hidden field for subject line */}
              <input type="hidden" name="_subject" value="New message from shreevatsatg.com" />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:translate-y-[-2px]'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {error && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg">
                  {error}
                </div>
              )}
              
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg">
                  Thank you for your message! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[var(--bg-secondary)] dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mr-3"></span>
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[var(--accent-primary)]/10 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-[var(--accent-primary)] dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] dark:text-white">Email</h3>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `mailto:${displayEmail}`;
                      }} 
                      className="text-[var(--text-secondary)] dark:text-gray-300 hover:text-[var(--accent-primary)] dark:hover:text-amber-400 transition-colors"
                    >
                      {displayEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--bg-secondary)] dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mr-3"></span>
                Follow Me
              </h2>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Shreevatsatg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--accent-primary)]/10 dark:bg-amber-900/30 p-4 rounded-full text-[var(--accent-primary)] dark:text-amber-400 hover:bg-[var(--accent-primary)] hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  <FaGithub size={24} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/shreevatsa-t-g-7b6509314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--accent-primary)]/10 dark:bg-amber-900/30 p-4 rounded-full text-[var(--accent-primary)] dark:text-amber-400 hover:bg-[var(--accent-primary)] hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                
                <a 
                  href="https://www.instagram.com/shreevatsa_tg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[var(--accent-primary)]/10 dark:bg-amber-900/30 p-4 rounded-full text-[var(--accent-primary)] dark:text-amber-400 hover:bg-[var(--accent-primary)] hover:text-white dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-300"
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