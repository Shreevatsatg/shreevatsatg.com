import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              rows="4" 
              placeholder="Write your message..." 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">Or reach out via:</p>
          <p className="text-gray-800 font-semibold">📧 Email: <a href="mailto:your@email.com" className="text-blue-600">your@email.com</a></p>
          <p className="text-gray-800 font-semibold">📞 Phone: <a href="tel:+1234567890" className="text-blue-600">+123 456 7890</a></p>

          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-xl">
              🔗 GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-xl">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
