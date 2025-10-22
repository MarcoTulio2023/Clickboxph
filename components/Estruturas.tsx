// components/Estruturas.tsx

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Camera } from 'lucide-react';

export function Estruturas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    {
      src: "/assets/Estrutura cinza.jpg",
      alt: "Estrutura ClickBox cinza com decoração de lantejoulas e balões"
    },
    {
      src: "/assets/Estrutura Roxo.jpg",
      alt: "Estrutura ClickBox roxa com letreiro de neon 'Let's Party'"
    }
  ];

  return (
    <section id="estruturas" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-[#403F38] rounded-full text-sm font-medium mb-6">
            <Camera className="h-4 w-4" />
            Nossos Modelos
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#000B07] via-[#403F38] to-[#737065] bg-clip-text text-transparent">
              Conheça as Estruturas
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-lg group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}