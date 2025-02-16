import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send form data
    const form = e.target;
    const formDataToSend = new FormData(form);

    fetch("https://formsubmit.co/tgshreevatsa@gmail.com", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true); // Show success message
          setFormData({ name: "", email: "", message: "" }); // Reset form
          setTimeout(() => setIsSubmitted(false), 3000); // Hide message after 3 sec
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((error) => alert("Error: " + error.message));
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
   
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Me</h2>
  
        {/* Success Message Popup (Centered) */}
        {isSubmitted && (
   
           
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-lg text-center">
             ✅ Message Sent Successfully!
           </div>
          </div>
           )}
       
  
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
  
          {/* FormSubmit Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Form Message" />
  
          {/* Button Section - Fixed Position */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto px-6"
            >
              Send Message
            </button>
          </div>
        </form>
  
        <div className="mt-6 text-center">
          <p className="text-gray-700">Or reach out via:</p>
          <p className="text-gray-800 font-semibold">
            📧 Email: <a href="mailto:tgshreevatsa@gmail.com" className="text-blue-600">tgshreevatsa@gmail.com</a>
          </p>
          <p className="text-gray-800 font-semibold">
            📞 Phone: <a href="tel:+917019292082" className="text-blue-600">+91 7019292082</a>
          </p>
  
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/Shreevatsatg" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-xl">
              🔗 GitHub
            </a>
            <a href="https://linkedin.com/in/shreevatsa-t-g-7b6509314" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-xl">
              🔗 LinkedIn
            </a>
            <a href="https://www.instagram.com/shreevatsa_tg" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 text-xl">
              🔗 Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default Contact;
