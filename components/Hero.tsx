// components/Hero.tsx

import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000B07]">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Estrutura Roxo.jpg" // SUGESTÃO: Use uma boa foto da estrutura aqui
          alt="Estrutura de fotos ClickBox em um evento"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#000B07]/70 via-[#403F38]/50 to-[#000B07]/70" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 text-center text-[#F2F2F2] px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* ALTERADO: Título e subtítulo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-[#F2F2F2] via-[#BFBAA8] to-[#BBBFBD] bg-clip-text text-transparent">
              CLICKBOX
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-[#BBBFBD] leading-relaxed"
          >
            A estrutura de fotos moderna e personalizada para o seu evento.
          </motion.p>

          {/* Botão de Ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center items-center mt-12"
          >
            <motion.a
              href="#planos"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl font-semibold overflow-hidden text-[#F2F2F2]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Ver Planos</span>
              <Sparkles className="h-4 w-4 relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Indicador de rolagem continua igual */}
    </section>
  );
}