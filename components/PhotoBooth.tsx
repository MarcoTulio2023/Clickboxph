import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Camera, Check, Sparkles, Star, ArrowRight, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import photoBooth1 from '../public/assets/Estrutura cinza.jpg';
import photoBooth2 from '../public/assets/Estrutura Roxo.jpg';
import React from 'react';

const photoBoothPackages = [
  {
    title: 'Estrutura Básica',
    description: 'Perfeita para eventos íntimos e comemorações especiais',
    image: photoBooth1.src,
    price: 'R$ 350',
    duration: 'Até 4 horas',
    features: [
      'Estrutura profissional com iluminação LED',
      'Backdrop personalizado',
      'Props temáticos inclusos',
      'Impressão instantânea de fotos',
      'Galeria digital com todas as fotos',
      '1 operador especializado'
    ],
    gradient: 'from-[#737065] to-[#403F38]',
    hoverGradient: 'from-[#BFBAA8] to-[#737065]',
    popular: false
  },
  {
    title: 'Estrutura Premium',
    description: 'Experiência completa com tecnologia de ponta para eventos exclusivos',
    image: photoBooth2.src,
    price: 'R$ 580',
    duration: 'Até 6 horas',
    features: [
      'Estrutura deluxe com efeitos especiais',
      'Sistema de iluminação inteligente',
      'Backdrop temático profissional',
      'Props premium e personalizados',
      'Impressão instantânea dupla',
      'Álbum digital premium',
      'Compartilhamento em redes sociais',
      '2 operadores especializados',
      'Personalização completa da marca'
    ],
    gradient: 'from-[#000B07] to-[#737065]',
    hoverGradient: 'from-[#403F38] to-[#737065]',
    popular: true
  }
];

export function PhotoBooth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  const whatsappUrl = `https://wa.me/5534984273479?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`;

  return (
    <section id="photo-booth" className="py-32 bg-gradient-to-br from-[#000B07] via-[#403F38]/20 to-[#F2F2F2] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#BFBAA8]/10 to-[#737065]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#403F38]/10 to-[#000B07]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#BFBAA8]/20 text-[#F2F2F2] rounded-full text-sm font-medium mb-6"
          >
            <Camera className="h-4 w-4" />
            Cabines fotográficas premium
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#F2F2F2] via-[#BFBAA8] to-[#737065] bg-clip-text text-transparent">
              Estrutura de Foto
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-[#BBBFBD] max-w-3xl mx-auto"
          >
            Cabines fotográficas profissionais que transformam qualquer evento em uma experiência inesquecível
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {photoBoothPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                delay: 0.5 + index * 0.2,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Popular badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  animate={isInView ? { scale: 1, rotate: -15 } : { scale: 0, rotate: -15 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-[#BFBAA8] to-[#737065] text-[#000B07] px-4 py-2 rounded-2xl text-sm font-semibold shadow-xl"
                >
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Mais Popular
                  </div>
                </motion.div>
              )}

              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-[#F2F2F2]/95 to-[#BFBAA8]/20 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image section */}
                <div className="relative h-80 overflow-hidden rounded-t-lg cursor-pointer" onClick={() => setSelectedImage(pkg.image)}>
                  <motion.img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000B07]/50 to-transparent" />
                  
                  {/* Floating price */}
                  <motion.div
                    className="absolute top-4 left-4 bg-[#F2F2F2]/90 backdrop-blur-sm rounded-2xl px-4 py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </div>
                    <div className="text-xs text-[#737065] font-medium">
                      {pkg.duration}
                    </div>
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-[#F2F2F2]"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-6 w-6" />
                  </motion.div>
                </div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${pkg.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Camera className="h-6 w-6 text-[#F2F2F2]" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl font-bold text-[#000B07] group-hover:text-[#403F38] transition-colors duration-300">
                        {pkg.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-[#737065]">
                        {pkg.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pb-8">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.7 + index * 0.2 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          className={`w-5 h-5 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Check className="h-3 w-3 text-[#F2F2F2]" />
                        </motion.div>
                        <span className="text-sm text-[#737065] leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full relative overflow-hidden bg-gradient-to-r ${pkg.gradient} text-[#F2F2F2] font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${pkg.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      <span>Solicitar Orçamento</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </motion.a>
                </CardContent>

                {/* Background pattern */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Zap className="h-full w-full text-[#737065]" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal de Imagem */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
            >
              <img src={selectedImage} alt="Estrutura de foto em tamanho maior" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
              <button 
                onClick={() => setSelectedImage(null)} 
                className="absolute -top-4 -right-4 bg-white text-black rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg"
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.div
            className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-[#F2F2F2]/10 to-[#BFBAA8]/10 backdrop-blur-xl rounded-3xl border border-[#BBBFBD]/20"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 bg-gradient-to-r from-[#BFBAA8] to-[#737065] rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Camera className="h-6 w-6 text-[#000B07]" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-4 text-[#403F38]">
              Evento Personalizado?
            </h3>
            <p className="text-[#737065] mb-6">
              Cada celebração é única. Vamos criar uma experiência fotográfica especial, adaptada ao seu evento e orçamento.
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#BFBAA8] to-[#737065] text-[#000B07] rounded-xl font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Solicitar Orçamento</span>
              <Sparkles className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}