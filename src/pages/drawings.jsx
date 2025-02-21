import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";

// Add the featured artwork to the beginning of the drawings array
const drawings = [
  {
    id: 0,
    src: "/drawing/IMG_20240516_222754_288.jpg",
    alt: "Featured artwork",
    description: "This piece represents my artistic journey, exploring color and form through a contemporary lens."
  },
  { id: 1, src: "/drawing/IMG_20231028_090955.jpg", alt: "Drawing 1", description: "Watercolor exploration of natural forms" },
  { id: 2, src: "/drawing/IMG_20241105_102653.jpg", alt: "Drawing 2", description: "Abstract geometric composition" },
  { id: 3, src: "/drawing/IMG_20241110_165952.jpg", alt: "Drawing 3", description: "Portrait study in charcoal" },
  { id: 4, src: "/drawing/IMG-20220619-WA0005.jpg", alt: "Drawing 4", description: "Urban landscape sketch" },
  { id: 5, src: "/drawing/IMG-20220625-WA0013.jpg", alt: "Drawing 5", description: "Mixed media experimental piece" },
  { id: 6, src: "/drawing/IMG-20220625-WA0023.jpg", alt: "Drawing 6", description: "Digital illustration concept" },
];

export default function Drawings() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = (selectedImageIndex + direction + drawings.length) % drawings.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-neutral-900 transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Header Section */}
      <div className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white">
            My Artwork
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
            A collection of my favorite drawings and creative expressions.
          </p>
        </div>
      </div>

      {/* Featured Section */}
      <div className="px-6 md:px-12 mb-16">
        <div className="max-w-6xl mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5">
              <div className="h-80 md:h-96 lg:h-112 overflow-hidden">
                <img 
                  src={drawings[0].src}
                  alt={drawings[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onClick={() => openLightbox(0)}
                />
              </div>
            </div>
            <div className="md:w-2/5 p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                Featured Work
              </div>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-4">
                Creative Expression
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {drawings[0].description}
              </p>
              <button 
                onClick={() => openLightbox(0)}
                className="self-start px-4 py-2 bg-neutral-800 dark:bg-amber-600 text-white rounded-lg hover:bg-neutral-700 dark:hover:bg-amber-700 transition-colors"
              >
                View Artwork
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">
              Artwork Collection
            </h2>
            <div className="h-px bg-neutral-200 dark:bg-neutral-700 flex-grow mx-4"></div>
            <span className="text-neutral-500 dark:text-neutral-400 text-sm">
              {drawings.length - 1} pieces
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {drawings.slice(1).map((drawing, index) => (
              <div 
                key={drawing.id} 
                className="group bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => openLightbox(index + 1)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={drawing.src} 
                    alt={drawing.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-neutral-800 dark:text-white">
                    {drawing.alt}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {drawing.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Link */}
      <div className="mt-16 bg-neutral-50 dark:bg-neutral-800 py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="text-neutral-700 dark:text-neutral-300" size={20} />
            <h3 className="text-xl font-medium text-neutral-800 dark:text-white">
              Follow for More Artwork
            </h3>
          </div>
          <a 
            href="https://www.instagram.com/shreevatsa_tg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
          >
            @shreevatsa_tg
          </a>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md mx-auto text-sm">
            Check out my Instagram account for behind-the-scenes, works in progress, and new creations.
          </p>
        </div>
      </div>

      {/* Advanced Lightbox */}
      {selectedImageIndex !== null && (
        <Dialog 
          open={true} 
          onClose={closeLightbox} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          <Dialog.Panel className="relative w-full h-full flex flex-col justify-center">
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <div className="w-full h-full flex items-center justify-center px-4 md:px-12 relative">
              <button 
                onClick={() => navigateImage(-1)} 
                className="absolute left-4 md:left-8 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <img 
                src={drawings[selectedImageIndex].src} 
                alt={drawings[selectedImageIndex].alt} 
                className="max-h-[85vh] max-w-[85vw] object-contain" 
              />
              
              <button 
                onClick={() => navigateImage(1)} 
                className="absolute right-4 md:right-8 text-white bg-black/40 hover:bg-black/60 p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4 text-white">
              <h3 className="text-xl font-medium">
                {drawings[selectedImageIndex].alt}
              </h3>
              <p className="text-neutral-300 mt-1">
                {drawings[selectedImageIndex].description}
              </p>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}