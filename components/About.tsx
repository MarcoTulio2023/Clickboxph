import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Camera, Award, Users, Heart, Sparkles, Zap, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    {
      icon: Camera,
      value: "10+",
      label: "Anos de Experiência",
      color: "from-[#737065] to-[#403F38]",
      description: "Uma década capturando momentos únicos"
    },
    {
      icon: Users,
      value: "500+",
      label: "Clientes Satisfeitos",
      color: "from-[#000B07] to-[#737065]",
      description: "Histórias contadas através de imagens"
    },
    {
      icon: Award,
      value: "15",
      label: "Prêmios Recebidos",
      color: "from-[#403F38] to-[#737065]",
      description: "Reconhecimento pela excelência"
    },
    {
      icon: Heart,
      value: "100%",
      label: "Dedicação",
      color: "from-[#737065] to-[#BFBAA8]",
      description: "Paixão em cada projeto"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-[#F2F2F2] relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#737065]/10 to-[#BFBAA8]/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-[#000B07]/10 to-[#403F38]/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#BFBAA8]/20 to-[#BBBFBD]/20 text-[#403F38] rounded-full text-sm font-medium mb-6"
              >
                <Sparkles className="h-4 w-4" />
                Conheça minha história
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-[#000B07] via-[#403F38] to-[#737065] bg-clip-text text-transparent">
                  Sobre
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#737065] to-[#BFBAA8] bg-clip-text text-transparent">
                  Gilberto
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 text-lg text-[#737065] leading-relaxed"
            >
              <p>
                Com mais de uma década dedicada à{' '}
                <span className="font-semibold bg-gradient-to-r from-[#737065] to-[#BFBAA8] bg-clip-text text-transparent">
                  arte fotográfica
                </span>
                , transformo momentos cotidianos em memórias eternas. Minha jornada começou com uma simples paixão pela luz e composição, evoluindo para uma obsessão pela perfeição técnica e emocional.
              </p>
              <p>
                Especializando-me em{' '}
                <span className="font-semibold text-[#403F38]">retratos únicos</span>,{' '}
                <span className="font-semibold text-[#737065]">eventos memoráveis</span> e{' '}
                <span className="font-semibold text-[#000B07]">narrativas visuais</span>, 
                desenvolvi uma abordagem que combina técnica de vanguarda com sensibilidade artística. 
                Cada projeto é uma nova história esperando para ser contada.
              </p>
              <p>
                Acredito que a fotografia transcende a simples captura de imagens – é sobre{' '}
                <span className="font-semibold bg-gradient-to-r from-[#BFBAA8] to-[#737065] bg-clip-text text-transparent">
                  conectar almas
                </span>{' '}
                e preservar a essência dos momentos que realmente importam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="#contact"
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#737065] to-[#403F38] text-[#F2F2F2] rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Entre em Contato</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.a>
              
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#BBBFBD] to-[#BFBAA8] shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/assets/Gilberto Santos.png"
                  alt="Foto do fotógrafo Gilberto Santos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#737065] to-[#403F38] text-[#F2F2F2] px-4 py-2 rounded-2xl font-semibold shadow-xl"
                initial={{ scale: 0, rotate: -15 }}
                animate={isInView ? { scale: 1, rotate: -15 } : { scale: 0, rotate: -15 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Especialista</span>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-[#737065]/20 to-[#BFBAA8]/20 rounded-full blur-2xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-[#000B07]/20 to-[#403F38]/20 rounded-full blur-2xl -z-10"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="group relative p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-[#BBBFBD]/50 hover:bg-white transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-8 w-8 text-[#F2F2F2]" />
                </motion.div>
                
                <motion.div
                  className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#000B07] to-[#737065] bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, type: "spring", bounce: 0.4 }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-sm font-semibold text-center mb-2 text-[#403F38]">
                  {stat.label}
                </div>
                
                <div className="text-xs text-center text-[#737065] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#737065]/5 to-[#BFBAA8]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}