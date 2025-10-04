import { motion } from 'framer-motion';
import { Play, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000B07]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#403F38]/20 to-[#737065]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#737065]/20 to-[#BFBAA8]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src='/assets/Gilberto Santos.png'
          alt="Fotografia profissional de Gilberto Santos"
          fill
          className="object-cover opacity-40"
          priority // Importante para a imagem principal carregar rápido
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000B07]/70 via-[#403F38]/50 to-[#000B07]/70" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-40 right-40 text-[#BFBAA8]"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-40 text-[#737065]"
        animate={{
          y: [10, -10, 10],
          rotate: [360, 0],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      >
        <Zap className="h-6 w-6" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center text-[#F2F2F2] px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2F2F2]/10 backdrop-blur-xl rounded-full border border-[#BBBFBD]/20"
          >
            <div className="w-2 h-2 bg-[#BFBAA8] rounded-full animate-pulse" />
            <span className="text-sm font-medium">Disponível para novos projetos</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-[#F2F2F2] via-[#BFBAA8] to-[#BBBFBD] bg-clip-text text-transparent">
              Gilberto
            </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-[#737065] via-[#BFBAA8] to-[#737065] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Santos
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BBBFBD] leading-relaxed"
          >
            Transformando momentos em{' '}
            <span className="bg-gradient-to-r from-[#737065] to-[#BFBAA8] bg-clip-text text-transparent font-semibold">
              arte visual
            </span>
            <br />
            através de uma perspectiva única e atemporal
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.a
              href="#photo-booth"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl font-semibold overflow-hidden text-[#F2F2F2]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#BFBAA8] to-[#737065] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10">Estrutura de Foto</span>
              <Play className="h-4 w-4 relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[#BBBFBD]/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium">Scroll para explorar</span>
          <motion.div
            className="w-6 h-10 border-2 border-[#BBBFBD]/30 rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-[#BFBAA8]/50 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}