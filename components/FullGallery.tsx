import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, X, Eye, Heart, Sparkles, Filter, Grid3x3, Grid2x2 } from 'lucide-react';
import { Button } from './ui/button';
import allPhotosData from '../data/photos.json';

import { Sun, Briefcase, Building2, Camera, Calendar } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const allPhotos: Photo[] = allPhotosData;

const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'ar-livre', name: 'Ar Livre' },
  { id: 'ensaio-corporativo', name: 'Ensaio Corporativo' },
  { id: 'ensaio-urbano', name: 'Ensaio Urbano' },
  { id: 'estudio', name: 'Estúdio' },
  { id: 'eventos', name: 'Eventos' }
];

// O resto do arquivo continua igual...

interface FullGalleryProps {
  category?: string;
  onClose: () => void;
}

export function FullGallery({ category = 'todos', onClose }: FullGalleryProps) {
  const [activeCategory, setActiveCategory] = useState(category);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [gridSize, setGridSize] = useState<2 | 3>(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredPhotos = activeCategory === 'todos' 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-[#F2F2F2] to-[#BFBAA8]/30 z-50 overflow-auto"
      ref={ref}
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="sticky top-0 z-40 bg-[#F2F2F2]/80 backdrop-blur-xl border-b border-[#BBBFBD]/20 px-4 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <motion.button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 bg-[#737065] text-[#F2F2F2] rounded-xl font-medium hover:bg-[#403F38] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </motion.button>
            
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#000B07] to-[#737065] bg-clip-text text-transparent">
                Galeria Completa
              </h1>
              <p className="text-[#737065]">
                {filteredPhotos.length} {filteredPhotos.length === 1 ? 'foto' : 'fotos'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Grid size toggle */}
            <div className="flex items-center gap-2 bg-[#BFBAA8]/20 rounded-xl p-1">
              <motion.button
                onClick={() => setGridSize(2)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  gridSize === 2 ? 'bg-[#737065] text-[#F2F2F2]' : 'text-[#737065] hover:bg-[#BFBAA8]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid2x2 className="h-4 w-4" />
              </motion.button>
              <motion.button
                onClick={() => setGridSize(3)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  gridSize === 3 ? 'bg-[#737065] text-[#F2F2F2]' : 'text-[#737065] hover:bg-[#BFBAA8]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid3x3 className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#737065] to-[#403F38] text-[#F2F2F2] shadow-xl'
                  : 'bg-white/60 backdrop-blur-sm text-[#737065] border border-[#BBBFBD]/30 hover:bg-white hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid ${gridSize === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6`}
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#BBBFBD] to-[#BFBAA8] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#000B07]/80 via-[#000B07]/0 to-[#000B07]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Content overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-[#F2F2F2] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                >
                  <h3 className="font-semibold text-lg mb-2">{photo.alt}</h3>
                  <div className="flex items-center justify-between text-sm">
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-[#F2F2F2]/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Sparkles className="h-4 w-4 text-[#BFBAA8]" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Photo modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#000B07]/90 backdrop-blur-xl z-60 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-[#F2F2F2] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#000B07]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#F2F2F2]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Image */}
              <div className="relative">
                <ImageWithFallback
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#000B07] mb-2">{selectedPhoto.alt}</h3>
                <div className="flex items-center gap-6 text-[#737065]">
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}