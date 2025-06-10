import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Eye, Paintbrush, Image as ImageIcon, ChevronDown } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [hoveredArtwork, setHoveredArtwork] = useState(null);

  const artworks = [
    {
      id: 1,
      title: 'Digital Landscape',
      medium: 'painting',
      category: 'digital',
      image: '/drawing/butterfly.webp',
      description: 'A serene digital landscape exploring the relationship between nature and technology.',
      year: 2023,
    },
    {
      id: 2,
      title: 'Abstract Emotions',
      medium: 'Oil on Canvas',
      category: 'drawing',
      image: '/drawing/abstract.webp',
      description: 'An abstract representation of human emotions through bold colors and dynamic brushstrokes.',
      year: 2022,
    },
    {
      id: 3,
      title: 'Urban Poetry',
      medium: 'Watercolor',
      category: 'painting',
      image: '/drawing/krishna.webp',
      description: 'A watercolor piece capturing the rhythm and energy of city life.',
      year: 2024,
    },
    {
      id: 4,
      title: 'Geometric Dreams',
      medium: 'Digital Art',
      category: 'painting',
      image: '/drawing/krishna2.webp',
      description: 'Exploring mathematical beauty through geometric patterns and gradient colors.',
      year: 2023,
    },
    
    {
      id: 5,
      title: 'Nature\'s Algorithms',
      medium: 'Digital Art',
      category: 'drawing',
      image: '/drawing/pencilhorse.webp',
      description: 'A fusion of natural forms with algorithmic patterns, created using procedural generation.',
      year: 2024,
    },
    {
      id: 6,
      title: 'Botanical Sketch',
      medium: 'Ink',
      category: 'drawing',
      image: '/drawing/potrait.webp',
      description: 'Detailed botanical illustration capturing the intricate beauty of plant structures.',
      year: 2022,
    }
  ];

  const categories = [
    { id: 'all', name: 'All Artworks' },
    { id: 'painting', name: 'Paintings' },
    { id: 'drawing', name: 'Drawings' }
  ];

  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === filter || artwork.medium === filter);

  const handleFilterChange = useCallback((categoryId) => {
    setFilter(categoryId);
    setSelectedImage(null);
  }, []);

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
    <section id="gallery" className="w-full min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 to-gray-900 py-20 pt-24">
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
        {/* Header Section */}
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
              Art Gallery
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A curated collection of my creative explorations through various mediums and techniques, blending <span className="text-slate-200 font-medium">traditional artistry</span> with <span className="text-slate-200 font-medium">modern innovation</span>.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                filter === category.id
                  ? 'bg-slate-100 text-slate-900'
                  : 'border border-slate-600 text-slate-200 hover:bg-slate-800'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              layout
              variants={itemVariants}
              className="group cursor-pointer relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl transition-all duration-300 hover:shadow-slate-700/20"
              onClick={() => setSelectedImage(artwork.id)}
              onMouseEnter={() => setHoveredArtwork(artwork.id)}
              onMouseLeave={() => setHoveredArtwork(null)}
              whileHover={{ y: -5, scale: 1.01 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-96 md:h-[32rem] object-cover transition-transform duration-500 group-hover:scale-110 contrast-110 brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-slate-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-medium text-lg mb-1">{artwork.title}</h3>
                  <p className="text-sm text-slate-300 font-light flex items-center gap-2">
                    <Paintbrush size={14} />
                    {artwork.medium}
                  </p>
                </div>
                
                {/* Hover Indicator */}
                <motion.div
                  className="absolute top-2 right-2 bg-slate-800 text-slate-200 px-2 py-1 rounded-full text-xs border border-slate-600 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredArtwork === artwork.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Click to View
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-slate-800 rounded-2xl max-w-5xl w-full flex flex-col lg:flex-row border border-slate-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {artworks.find(artwork => artwork.id === selectedImage) && (
                  <>
                    <div className="relative lg:w-3/5">
                      <img
                        src={artworks.find(artwork => artwork.id === selectedImage)?.image}
                        alt={artworks.find(artwork => artwork.id === selectedImage)?.title}
                        className="w-full h-96 lg:h-[32rem] object-contain rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl contrast-110 brightness-110"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-slate-800 text-slate-200 px-2 py-1 rounded-full text-xs flex items-center gap-1 border border-slate-600">
                        <ImageIcon size={14} />
                        {artworks.find(artwork => artwork.id === selectedImage)?.category}
                      </div>
                    </div>
                    <div className="lg:w-2/5 p-6 flex flex-col justify-between h-96 lg:h-[32rem]">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-medium bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 bg-clip-text text-transparent">
                            {artworks.find(artwork => artwork.id === selectedImage)?.title}
                          </h3>
                          <motion.button
                            onClick={() => setSelectedImage(null)}
                            className="text-slate-400 hover:text-slate-200 p-1 rounded-full hover:bg-slate-700 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X size={24} />
                          </motion.button>
                        </div>
                        <p className="text-slate-200 font-medium mb-2 flex items-center gap-2">
                          <Paintbrush size={16} />
                          {artworks.find(artwork => artwork.id === selectedImage)?.medium}
                        </p>
                        <p className="text-slate-400 text-sm mb-4 font-light">
                          {artworks.find(artwork => artwork.id === selectedImage)?.year} 
                        </p>
                        <p className="text-slate-400 mb-6 font-light">
                          {artworks.find(artwork => artwork.id === selectedImage)?.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        
      </div>

      <style>{`
        .metallic-text {
          background: linear-gradient(135deg, 
            #e2e8f0 0%, 
            #f1f5f9 25%, 
            #ffffff 50%, 
            #f1f5f9 75%, 
            #e2e8f0 100%);
          -webkit-background-clip: text;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }
        
        @media (prefers-reduced-motion: no-preference) {
          .metallic-text {
            background-size: 200% 200%;
            animation: metallicShimmer 4s ease-in-out infinite;
          }
        }
        
        @keyframes metallicShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;