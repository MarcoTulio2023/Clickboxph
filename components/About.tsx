// components/About.tsx

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  PartyPopper, 
  Share2, 
  Building, 
  Wand2, 
  Smartphone, 
  Camera, 
  CheckCircle 
} from 'lucide-react';
import Image from 'next/image';

const beneficios = [
  { icon: PartyPopper, text: "Deixa a festa muito mais moderna e diferente." },
  { icon: Share2, text: "Os convidados postam as fotos na hora e fazem a festa bombar nas redes." },
  { icon: Camera, text: "As polaroides viram lembrancinhas especiais que ninguém esquece." },
  { icon: Building, text: "Para empresas, é uma chance incrível de destacar a marca no evento." }
];

const funcionalidades = [
  {
    icon: Wand2,
    title: "Decoração Personalizada",
    description: "A estrutura é adaptada ao tema do evento (infantil, casamento, formatura, corporativo), criando um espaço totalmente integrado à identidade visual da festa."
  },
  {
    icon: Smartphone,
    title: "Compartilhamento Instantâneo",
    description: "O convidado recebe a foto direto no celular via WhatsApp, podendo postar no Instagram, TikTok ou Status em tempo real."
  },
  {
    icon: Camera,
    title: "Polaroides Personalizadas",
    description: "Além do digital, entregamos impressões no estilo polaroide, que se tornam lembranças físicas inesquecíveis."
  }
];

const paraQuemEIdeal = [
  "Casamentos",
  "Aniversários",
  "Formaturas",
  "Eventos Corporativos",
  "Lançamentos de Produtos",
  "Confraternizações"
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beneficios" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PARTE 1: INTRODUÇÃO E BENEFÍCIOS */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#000B07] via-[#403F38] to-[#737065] bg-clip-text text-transparent">
                Muito mais que uma cabine de fotos
              </span>
            </h2>
            <p className="text-lg text-[#737065] leading-relaxed mb-12">
              A CLICKBOX é uma estrutura moderna, personalizada e totalmente integrada ao seu evento. Decorada de acordo com o tema da festa, ela se torna parte da experiência, garantindo registros autênticos e memoráveis.
            </p>
            <div className="space-y-6">
              {beneficios.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-[#403F38]" />
                    </div>
                    <p className="text-md font-medium text-[#403F38]">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image
              src="/assets/polaroids.jpg"
              alt="Polaroides personalizadas como lembrança de evento"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* PARTE 2: NOVA ÁREA DE FUNCIONALIDADES E "PARA QUEM É IDEAL" */}
        <div className="mt-32">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#737065] to-[#BFBAA8] bg-clip-text text-transparent">
                Uma Experiência Completa
              </span>
            </h3>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Coluna da Esquerda: Funcionalidades */}
            <div className="space-y-10">
              {funcionalidades.map((item, index) => {
                const Icon = item.icon;
                return(
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="flex items-start gap-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#403F38] mb-2">{item.title}</h4>
                      <p className="text-md text-[#737065] leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Coluna da Direita: Para quem é ideal */}
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-bold text-center text-[#403F38] mb-8">Ideal para Todos os Momentos</h4>
              <ul className="space-y-4">
                {paraQuemEIdeal.map((item, index) => (
                   <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-md text-[#737065]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}