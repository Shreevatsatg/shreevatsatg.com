'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Twitter} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Email obfuscation
  const [displayEmail, setDisplayEmail] = useState('');

  useEffect(() => {
    // Decode and split email to prevent direct scraping
    const user = ['shreevatsa'].join('');
    const domain = ['shreevatsatg', 'com'].join('.');
    setDisplayEmail(`${user}@${domain}`);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://formspree.io/f/xzzekbdy', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: displayEmail,
      link: `mailto:${displayEmail}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7019292083',
      link: 'tel:+917019292083'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Karnataka, India'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shreevatsatg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shreevatsa-t-g-7b6509314/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/shreevatsa_tg', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/Shreevatsatg', label: 'X' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-gray-900 pt-8">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-slate-700/20 to-slate-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-tr from-gray-700/15 to-slate-700/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-light leading-tight tracking-tight"
          >
            <span className="block bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent font-medium metallic-text py-3">
              Let's Connect
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Have a project in mind or just want to chat about <span className="text-slate-200 font-medium">technology</span> and <span className="text-slate-200 font-medium">art</span>? 
            I'd love to hear from you and explore how we can create something amazing together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-medium text-slate-200"
            >
              Get in Touch
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl group transition-all duration-300 hover:shadow-slate-700/20"
                  whileHover={{ x: 5, scale: 1.01 }}
                >
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-200 group-hover:scale-110 transition-transform">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">{info.title}</h4>
                    <p className="text-slate-400 font-light">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <motion.h4
                variants={itemVariants}
                className="font-medium text-slate-200 mb-4"
              >
                Follow My Journey
              </motion.h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    variants={itemVariants}
                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-700 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-medium text-slate-200 mb-6"
            >
              Send a Message
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 font-light"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 font-light"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-200 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 font-light"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 resize-none font-light"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <input
                type="hidden"
                name="_subject"
                value="New message from shreevatsatg.com"
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-slate-100 text-slate-900 py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white'
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {error && (
                <motion.div
                  variants={itemVariants}
                  className="mt-4 p-4 bg-red-900/20 text-red-300 rounded-2xl border border-red-800/50"
                >
                  {error}
                </motion.div>
              )}

              {isSubmitted && (
                <motion.div
                  variants={itemVariants}
                  className="mt-4 p-4 bg-slate-700/20 text-slate-200 rounded-2xl border border-slate-600/50"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>

        
      </div>


    </section>
  );
};

export default Contact;