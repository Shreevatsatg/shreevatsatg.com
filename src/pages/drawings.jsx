import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const drawings = [
  { id: 1, src: "/images/drawing1.jpg", alt: "Drawing 1" },
  { id: 2, src: "/images/drawing2.jpg", alt: "Drawing 2" },
  { id: 3, src: "/images/drawing3.jpg", alt: "Drawing 3" },
  { id: 4, src: "/images/drawing4.jpg", alt: "Drawing 4" },
  { id: 5, src: "/images/drawing5.jpg", alt: "Drawing 5" },
  {id: 5, src: "/images/drawing6.jpg", alt: "Drawing 6"},
];

export default function Drawings() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#FDF7F2] dark:bg-[#1E1E1E] p-6 text-[#191919] dark:text-white">
      {/* Drawings Header */}
      <header className="container mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold text-[#191919] dark:text-white">My Artwork</h1>
        <p className="mt-4 text-lg text-[#5B4636] dark:text-gray-300 max-w-xl mx-auto">
          A collection of my favorite drawings and creative expressions.
        </p>
      </header>

      {/* Featured Drawing */}
      <section className="container mx-auto max-w-4xl bg-[#c3c0bc] dark:bg-[#2A2A2A] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img className="w-full h-64 object-cover rounded-xl" src="/images/featured-drawing.jpg" alt="Featured Drawing" />
        <h2 className="text-3xl font-bold mt-4 itext-[#191919] text-[#9E6F21] dark:text-[#F38044]">Featured Artwork</h2>
        <p className="mt-2 text-[#5B4636] dark:text-gray-400">A special piece that represents my passion for art.</p>
      </section>

      {/* Drawings Grid */}
      <section className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {drawings.map((drawing) => (
          <div
            key={drawing.id}
            className="bg-[#c3c0bc] dark:bg-[#2A2A2A] p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => setSelectedImage(drawing.src)}
          >
            <img className="w-full h-40 object-cover rounded-lg" src={drawing.src} alt={drawing.alt} />
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <Dialog.Panel className="relative max-w-3xl w-full p-4">
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white">
            <X size={24} />
          </button>
          <img src={selectedImage} alt="Selected drawing" className="w-full rounded-lg" />
        </Dialog.Panel>
      </Dialog>

      {/* Instagram Link */}
      <div className="text-center mt-10">
        <p className="text-[#5B4636] dark:text-gray-300 text-lg">Follow me on Instagram for more artworks:</p>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#9E6F21] dark:text-[#F38044] font-semibold hover:underline text-lg">@yourusername</a>
      </div>
    </div>
  );
}
