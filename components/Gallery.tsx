import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Eye, Sparkles, X, Sun, Briefcase, Building2, Camera, Calendar } from 'lucide-react';
import allPhotosData from '../data/photos.json';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const categories = [ // Categorias atualizadas com ícones
  { id: 'ar-livre', name: 'Ar Livre', icon: Sun, color: 'from-[#737065] to-[#BFBAA8]' },
  { id: 'ensaio-corporativo', name: 'Ensaio Corporativo', icon: Briefcase, color: 'from-[#403F38] to-[#737065]' },
  { id: 'ensaio-urbano', name: 'Ensaio Urbano', icon: Building2, color: 'from-[#000B07] to-[#403F38]' },
  { id: 'estudio', name: 'Estúdio', icon: Camera, color: 'from-[#737065] to-[#403F38]' },
  { id: 'eventos', name: 'Eventos', icon: Calendar, color: 'from-[#BFBAA8] to-[#737065]' },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('ar-livre');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredPhotos = activeCategory === 'todos'
  ? allPhotosData.slice(0, 9) // <-- A mágica acontece aqui! Mostra apenas as 9 primeiras se 'Todos' estiver ativo.
  : allPhotosData.filter(photo => photo.category === activeCategory); // <-- Mostra TODAS as fotos para as outras categorias.


  return (
    <section id="gallery" className="py-32 bg-gradient-to-br from-[#F2F2F2] via-white to-[#BFBAA8]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#737065]/10 to-[#BFBAA8]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#BFBAA8]/20 text-[#403F38] rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Explore meu trabalho
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#000B07] via-[#403F38] to-[#737065] bg-clip-text text-transparent">
              Ensaios
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-[#737065] max-w-2xl mx-auto"
          >
            Uma curadoria visual dos momentos mais especiais capturados através da minha lente
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-2xl transition-all duration-300 font-medium ${
                  activeCategory === category.id
                    ? 'text-[#F2F2F2] shadow-xl'
                    : 'text-[#737065] bg-white/60 backdrop-blur-sm border border-[#BBBFBD]/30 hover:bg-white hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {category.name}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Photo Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="group relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#BBBFBD] to-[#BFBAA8] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill // 2. "fill" faz a imagem preencher o container pai
                  className="object-cover transition-transform duration-700 group-hover:scale-110" // 3. "object-cover" garante que a imagem não distorça
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 4. Ajuda o Next.js a escolher o melhor tamanho
                  priority={index < 3} // 5. Carrega as 3 primeiras imagens com prioridade
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
                    <motion.div
                      className="w-8 h-8 bg-[#F2F2F2]/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(242, 242, 242, 0.3)' }}
                    >
                      <Eye className="h-4 w-4" />
                    </motion.div>
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
      {/* Photo zoom modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#000B07]/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
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

    </section>
  );
}
