'use client';

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaCode, FaLaptopCode, FaCertificate, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Email obfuscation
  const [displayEmail, setDisplayEmail] = useState("");

  useEffect(() => {
    // Decode and split email to prevent direct scraping
    const user = ["shreevatsa"].join("");
    const domain = ["shreevatsatg", "com"].join(".");
    setDisplayEmail(`${user}@${domain}`);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await response.json();
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page header with animated title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h1>
        </motion.div>
        {/* Profile card with glass morphism */}
        <motion.div
          className="mb-20 gradient-border relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass p-8 md:p-10 md:flex items-start gap-12">
            {/* Profile image with floating animation */}
            <motion.div
              className="relative mb-8 md:mb-0 w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-third)] rounded-2xl blur-md opacity-70 scale-105 animate-pulse-glow"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
                <img
                  src="/profile2.jpg"
                  alt="Shreevatsa TG"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg glass"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <span className="text-sm font-medium gradient-text">
                  Developer
                </span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg glass"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
              >
                <span className="text-sm font-medium gradient-text">
                  Artist
                </span>
              </motion.div>
            </motion.div>

            {/* Bio content */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Shreevatsa TG
                </h2>
                <p className="text-lg text-[var(--text-secondary)]">
                  Creative Developer & Artist
                </p>
              </div>

              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                I'm a passionate developer and artist based in Karnataka, with a
                strong interest in creating beautiful, functional digital
                experiences. With a background in Computer Applications, I
                combine technical knowledge with creative thinking to build
                engaging applications and art.
              </p>

              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                When I'm not coding, you can find me painting, or exploring new
                technologies. I believe in continuous learning and pushing the
                boundaries of what's possible with technology and art.
              </p>

              {/* Social links */}
              <div className="flex gap-4">
                <SocialLink
                  href="https://github.com/Shreevatsatg"
                  icon={<FaGithub size={20} />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/shreevatsa-t-g-7b6509314"
                  icon={<FaLinkedin size={20} />}
                  label="LinkedIn"
                />
                <SocialLink
                  href={`mailto:${displayEmail}`}
                  icon={<FaEnvelope size={20} />}
                  label="Email"               
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* Skills section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title mb-10">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              icon={
                <FaReact className="text-[var(--accent-primary)]" size={24} />
              }
              title="Frontend Development"
              skills="React, Next.js, TypeScript, Tailwind CSS, Bootstrap css, Framer Motion, Responsive Design"
              delay={0}
            />

            <SkillCard
              icon={
                <FaCode className="text-[var(--accent-secondary)]" size={24} />
              }
              title="Backend Development"
              skills="Node.js, Express, MongoDB, RESTful APIs, Authentication"
              delay={0.1}
            />

            <SkillCard
              icon={
                <FaLaptopCode
                  className="text-[var(--accent-primary)]"
                  size={24}
                />
              }
              title="Other Technical Skills"
              skills="Git, GitHub, VS Code, Vercel, Netlify"
              delay={0.2}
            />

            <SkillCard
              icon={
                <FaCertificate
                  className="text-[var(--accent-third)]"
                  size={24}
                />
              }
              title="Creative Skills"
              skills="Digital Art, Drawing, Traditional Painting, Photography"
              delay={0.3}
            />
          </div>
        </motion.section>
        {/* Education section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="section-title mb-10">Education</h2>

          <motion.div
            className="card p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-[var(--text-secondary)] mb-1">
                  Mangalore University, Udupi
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--accent-primary)] font-medium">
                  2023 - 2026
                </span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact section */}

        <div className="text-center grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] dark:text-white mb-4">
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"></div>
        <div className="bg-[var(--bg-secondary)] dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-white mb-6 flex items-center">
            <span className="w-8 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full mr-3"></span>
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-[var(--text-secondary)] dark:text-gray-300 font-medium mb-2"
              >
                Your Name
              </label>
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
              <label
                htmlFor="email"
                className="block text-[var(--text-secondary)] dark:text-gray-300 font-medium mb-2"
              >
                Email Address
              </label>
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
              <label
                htmlFor="message"
                className="block text-[var(--text-secondary)] dark:text-gray-300 font-medium mb-2"
              >
                Your Message
              </label>
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
            <input
              type="hidden"
              name="_subject"
              value="New message from shreevatsatg.com"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:translate-y-[-2px]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
      </div>
    </div>
  );
}

// Skill Card Component
function SkillCard({ icon, title, skills, delay }) {
  return (
    <motion.div 
      className="card p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-[var(--text-secondary)]">{skills}</p>
    </motion.div>
  );
}

// Social Link Component
function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 glass rounded-full flex items-center justify-center hover:text-[var(--accent-primary)] transition-colors"
    >
      {icon}
    </a>
  );
} 