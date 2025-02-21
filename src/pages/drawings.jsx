import { useState, useEffect, useCallback } from "react";
import { Dialog } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { FaPalette, FaImage } from "react-icons/fa";

// Optimize image array with better naming
const artworks = [
  {
    id: 0,
    src: "/drawing/IMG_20240516_222754_288.jpg",
    alt: "Featured Artwork - Color Exploration",
    description: "This piece represents my artistic journey, exploring color and form through a contemporary lens."
  },
  { id: 1, src: "/drawing/IMG_20231028_090955.jpg", alt: "Oil painting", description: "oil painting exploration of natural forms" },
  { id: 2, src: "/drawing/IMG_20241105_102653.jpg", alt: "Geometric Abstraction", description: "Abstract geometric composition" },
  { id: 3, src: "/drawing/IMG_20241110_165952.jpg", alt: "Acrylic painting", description: "Portrait study of krishna in acrylic" },
  { id: 4, src: "/drawing/IMG-20220619-WA0005.jpg", alt: "Pencil sketch", description: "Realistic pencil sketch" },
  { id: 5, src: "/drawing/IMG-20220625-WA0013.jpg", alt: "Mandala", description: "Mandala art  experimental piece" },
  { id: 6, src: "/drawing/IMG-20220625-WA0023.jpg", alt: "Portrait study", description: "Portrait study in pencil" },
];

// Custom image component with loading state
const OptimizedImage = ({ src, alt, className, onClick, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 dark:bg-gray-700 animate-pulse"></div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} 
        onLoad={handleLoad}
        onClick={onClick}
      />
    </div>
  );
};

export default function ArtGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isPreloadComplete, setIsPreloadComplete] = useState(false);
  
  // Improved image preloading strategy
  useEffect(() => {
    // Only preload the featured image
    const img = new Image();
    img.src = artworks[0].src;
    img.onload = () => {
      setIsPreloadComplete(true);
    };
    img.onerror = () => {
      // Fallback - continue even if image fails to load
      setIsPreloadComplete(true);
    };
    
    // Faster initial reveal
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 300); // Reduced from original 600ms
    
    return () => clearTimeout(timer);
  }, []);

  // Track image loading for progressive reveal
  const handleImageLoaded = useCallback(() => {
    setImagesLoaded(prev => prev + 1);
  }, []);

  const openLightbox = useCallback((index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateImage = useCallback((direction) => {
    const newIndex = (selectedImageIndex + direction + artworks.length) % artworks.length;
    setSelectedImageIndex(newIndex);
  }, [selectedImageIndex]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, navigateImage]);

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 ${
        isPageLoading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Page Loading Indicator */}
      {isPageLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-gray-900">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-slate-200 border-t-amber-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-600 dark:text-gray-400">Loading gallery...</p>
          </div>
        </div>
      )}

      {/* Header Section with Animation */}
      <div className="py-16 px-6 md:px-12 bg-gradient-to-r from-amber-50 to-slate-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-white flex items-center gap-2 transform transition-transform duration-700 ${isPageLoading ? 'translate-y-8' : 'translate-y-0'}`}>
              <FaPalette className="text-amber-500" /> Artistic Portfolio
            </h1>
          </div>
          <div className="overflow-hidden mt-2">
            <p className={`text-lg text-gray-600 dark:text-gray-300 max-w-2xl transform transition-all duration-700 delay-100 ${isPageLoading ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
              A curated collection of my creative explorations through various mediums and techniques.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Section with Progressive Loading */}
      <div className="px-6 md:px-12 mb-16 mt-8">
        <div 
          className={`max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-700 ${
            imagesLoaded > 0 ? 'transform-none opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5">
              <div className="h-80 md:h-96 lg:h-112 overflow-hidden relative">
                <OptimizedImage
                  src={artworks[0].src}
                  alt={artworks[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onClick={() => openLightbox(0)}
                  onLoad={handleImageLoaded}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 pointer-events-none"></div>
              </div>
            </div>
            <div className="md:w-2/5 p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-sm font-medium rounded-full mb-4">
                Featured Art Work
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Creative Expression
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {artworks[0].description}
              </p>
              <button 
                onClick={() => openLightbox(0)}
                className="self-start px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]"
              >
                View Artwork
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid with Staggered Animation */}
      <div className="px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <FaImage className="text-amber-500" /> Artwork Collection
            </h2>
            <div className="h-px bg-amber-200 dark:bg-amber-800/50 flex-grow mx-4"></div>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              {artworks.length - 1} pieces
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.slice(1).map((artwork, index) => (
              <div 
                key={artwork.id} 
                className={`group bg-slate-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:translate-y-[-2px] ${
                  imagesLoaded > index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index % 6) * 100}ms` }}
                onClick={() => openLightbox(index + 1)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <OptimizedImage 
                    src={artwork.src}
                    alt={artwork.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    onLoad={handleImageLoaded}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-gray-800 dark:text-white text-lg">
                    {artwork.alt}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {artwork.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Link with Animation - Matching About Page Style */}
      <div className="mt-16 bg-gradient-to-r from-amber-50 to-slate-50 dark:from-gray-800 dark:to-gray-700 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-amber-500" size={22} />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Connect With My Creative Journey
            </h3>
          </div>
          <a 
            href="https://www.instagram.com/shreevatsa_tg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-600 dark:text-amber-400 font-medium hover:underline inline-block relative group"
          >
            @shreevatsa_tg
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 dark:bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Check out my Instagram account for behind-the-scenes, works in progress, and new creations.
          </p>
          <div className="mt-6">
            <a 
              href="https://www.instagram.com/shreevatsa_tg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox with Improved UX */}
      {selectedImageIndex !== null && (
        <Dialog 
          open={true} 
          onClose={closeLightbox} 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        >
          <Dialog.Panel className="relative w-full h-full flex flex-col justify-center">
            <button 
              onClick={closeLightbox} 
              className="absolute top-4 right-4 text-white bg-amber-600/40 hover:bg-amber-600/60 p-2 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <div className="w-full h-full flex items-center justify-center px-4 md:px-12 relative">
              <button 
                onClick={() => navigateImage(-1)} 
                className="absolute left-4 md:left-8 text-white bg-amber-600/40 hover:bg-amber-600/60 p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <img 
                src={artworks[selectedImageIndex].src} 
                alt={artworks[selectedImageIndex].alt} 
                className="max-h-[85vh] max-w-[85vw] object-contain shadow-2xl transform transition-transform duration-300 rounded-lg" 
              />
              
              <button 
                onClick={() => navigateImage(1)} 
                className="absolute right-4 md:right-8 text-white bg-amber-600/40 hover:bg-amber-600/60 p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 py-6 text-white backdrop-blur-sm">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-medium">
                  {artworks[selectedImageIndex].alt}
                </h3>
                <p className="text-neutral-300 mt-2 max-w-2xl">
                  {artworks[selectedImageIndex].description}
                </p>
                <div className="mt-3 text-sm text-amber-400">
                  {selectedImageIndex + 1} of {artworks.length}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}