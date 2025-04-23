'use client';

import { useState, useEffect, useCallback } from "react";
import { Dialog } from "@headlessui/react";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { FaPalette, FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Define types for artwork
interface Artwork {
  id: number;
  src: string;
  alt: string;
  description: string;
}

// Optimize image array with better naming
const artworks: Artwork[] = [
  {
    id: 0,
    src: "/drawing/IMG_20240516_222754_288.jpg",
    alt: "Featured Artwork - Color Exploration",
    description: "This piece represents my artistic journey, exploring color and form through a contemporary lens."
  },
  { id: 1, src: "/drawing/IMG_20231028_090955.jpg", alt: "Oil painting", description: "Oil painting exploration of natural forms" },
  { id: 2, src: "/drawing/IMG_20241105_102653.jpg", alt: "Geometric Abstraction", description: "Abstract geometric composition" },
  { id: 3, src: "/drawing/IMG_20241110_165952.jpg", alt: "Acrylic painting", description: "Portrait study of krishna in acrylic" },
  { id: 4, src: "/drawing/IMG-20220619-WA0005.jpg", alt: "Pencil sketch", description: "Realistic pencil sketch" },
  { id: 5, src: "/drawing/IMG-20220625-WA0013.jpg", alt: "Mandala", description: "Mandala art experimental piece" },
  { id: 6, src: "/drawing/IMG-20220625-WA0023.jpg", alt: "Portrait study", description: "Portrait study in pencil" },
];

// Define props for OptimizedImage component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className: string;
  onClick?: () => void;
  onLoad?: () => void;
}

// Custom image component with loading state
const OptimizedImage = ({ src, alt, className, onClick, onLoad }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };
  
  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-[var(--bg-tertiary)] animate-pulse rounded-md"></div>
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

export default function DrawingsPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  // Improved image preloading strategy
  useEffect(() => {
    // Only preload the featured image
    const img = new Image();
    img.src = artworks[0].src;
    img.onload = () => {
      setIsPageLoading(false);
    };
    img.onerror = () => {
      // Fallback - continue even if image fails to load
      setIsPageLoading(false);
    };
    
    // Faster initial reveal
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Track image loading for progressive reveal
  const handleImageLoaded = useCallback(() => {
    setImagesLoaded(prev => prev + 1);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateImage = useCallback((direction: number) => {
    if (selectedImageIndex === null) return;
    const newIndex = (selectedImageIndex + direction + artworks.length) % artworks.length;
    setSelectedImageIndex(newIndex);
  }, [selectedImageIndex]);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, navigateImage]);

  return (
    <div className="py-12 md:py-16">
      {/* Page Loading Indicator */}
      {isPageLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[var(--bg-primary)]">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-[var(--bg-tertiary)] border-t-[var(--accent-primary)] rounded-full animate-spin"></div>
            <p className="mt-4 text-[var(--text-secondary)]">Loading gallery...</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {/* Header Section with Animation */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text flex items-center justify-center gap-2">
              <FaPalette /> Artistic Portfolio
            </span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A curated collection of my creative explorations through various mediums and techniques.
          </p>
        </motion.div>

        {/* Featured Section with Glass Morphism */}
        <motion.div 
          className="mb-20 gradient-border relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="glass">
            <div className="md:flex">
              <div className="md:w-3/5">
                <div className="h-80 md:h-96 lg:h-[28rem] overflow-hidden relative">
                  <OptimizedImage
                    src={artworks[0].src}
                    alt={artworks[0].alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onClick={() => openLightbox(0)}
                    onLoad={handleImageLoaded}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 pointer-events-none"></div>
                </div>
              </div>
              <div className="md:w-2/5 p-8 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 text-[var(--accent-primary)] text-sm font-medium mb-4">
                    Featured Artwork
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    Creative Expression
                  </h2>
                  <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                    {artworks[0].description}
                  </p>
                  <button 
                    onClick={() => openLightbox(0)}
                    className="btn-primary group"
                  >
                    <span className="relative z-10 flex items-center">
                      View Artwork
                      <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-title inline-flex items-center gap-2">
              <FaImage className="text-[var(--accent-secondary)]" /> Artwork Collection
            </h2>
            <span className="text-[var(--text-secondary)] text-sm font-medium">
              {artworks.length - 1} pieces
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.slice(1).map((artwork, index) => (
              <ArtworkCard 
                key={artwork.id}
                artwork={artwork}
                index={index}
                onImageLoad={handleImageLoaded}
                onOpenLightbox={() => openLightbox(index + 1)}
              />
            ))}
          </div>
        </motion.section>

        {/* Instagram CTA Section */}
        <motion.div 
          className="mt-20 gradient-border relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="text-[var(--accent-primary)]" size={22} />
              <h3 className="text-2xl font-bold">Connect With My Creative Journey</h3>
            </div>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Check out my Instagram account for behind-the-scenes, works in progress, and new creations.
            </p>
            <a 
              href="https://www.instagram.com/shreevatsa_tg"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center"
            >
              <span className="relative z-10 flex items-center">
                Follow @shreevatsa_tg
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
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
              className="absolute top-4 right-4 text-white bg-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/60 p-2 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <div className="w-full h-full flex items-center justify-center px-4 md:px-12 relative">
              <button 
                onClick={() => navigateImage(-1)} 
                className="absolute left-4 md:left-8 text-white bg-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/60 p-2 rounded-full transition-colors"
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
                className="absolute right-4 md:right-8 text-white bg-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)]/60 p-2 rounded-full transition-colors"
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
                <div className="mt-3 text-sm text-[var(--accent-secondary)]">
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

// Artwork Card Component
function ArtworkCard({ artwork, index, onImageLoad, onOpenLightbox }) {
  return (
    <motion.div 
      className="card h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      whileHover={{ scale: 1.02 }}
      onClick={onOpenLightbox}
    >
      <div className="aspect-square overflow-hidden relative rounded-t-xl">
        <OptimizedImage 
          src={artwork.src}
          alt={artwork.alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
          onLoad={onImageLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {artwork.alt}
        </h3>
        <p className="text-[var(--text-secondary)] line-clamp-2">
          {artwork.description}
        </p>
      </div>
    </motion.div>
  );
} 