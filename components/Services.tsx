import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Users, Briefcase, Palette, Calendar, Star, ArrowRight, Zap, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const genericWhatsappUrl = `https://wa.me/5534984273479?text=${encodeURIComponent("Olá! Vi seu site e gostaria de conversar sobre um projeto.")}`;

const services = [
  {
    icon: Users,
    title: 'Retratos Artísticos',
    description: 'Capturamos a essência única de cada pessoa através de retratos que contam histórias profundas e autênticas.',
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Retratos Artísticos.",
    features: [
      'Sessão de até 3 horas',
      '50+ fotos editadas profissionalmente',
      'Galeria online privada premium',
      'Entrega expressa em 5 dias'
    ],
    gradient: 'from-[#737065] to-[#403F38]',
    hoverGradient: 'from-[#BFBAA8] to-[#737065]',
    bgColor: 'from-[#BFBAA8]/20 to-[#BBBFBD]/20',
    popular: false
  },
  {
    icon: Calendar,
    title: 'Eventos Premium',
    description: 'Cobertura cinematográfica completa para casamentos, celebrações e momentos que merecem ser eternizados.',
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Eventos Premium.",
    features: [
      'Cobertura completa do evento',
      'Álbum digital premium + físico',
      '300+ fotos editadas',
      'Backup em nuvem vitalício'
    ],
    gradient: 'from-[#000B07] to-[#737065]',
    hoverGradient: 'from-[#403F38] to-[#737065]',
    bgColor: 'from-[#000B07]/10 to-[#737065]/10',
    popular: true
  },
  {
    icon: Briefcase,
    title: 'Corporate Elite',
    description: 'Headshots executivos e conteúdo corporativo que elevam sua presença profissional ao próximo nível.',
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Corporate Elite.",
    features: [
      'Sessão em estúdio premium',
      'Múltiplas poses e cenários',
      'Retoque profissional avançado',
      'Formatos otimizados para todas as plataformas'
    ],
    gradient: 'from-[#403F38] to-[#737065]',
    hoverGradient: 'from-[#737065] to-[#BFBAA8]',
    bgColor: 'from-[#403F38]/10 to-[#737065]/10',
    popular: false
  },
  {
    icon: Palette,
    title: 'Visual Commerce',
    description: 'Fotografia de produtos que convertem visitantes em clientes através de imagens irresistíveis.',
    whatsappMessage: "Olá! Gostaria de solicitar um orçamento para Visual Commerce.",
    features: [
      'Estúdio com equipamentos de ponta',
      'Múltiplos ângulos e variações',
      'Fundos personalizados',
      'Otimização para e-commerce'
    ],
    gradient: 'from-[#737065] to-[#BFBAA8]',
    hoverGradient: 'from-[#BFBAA8] to-[#737065]',
    bgColor: 'from-[#737065]/10 to-[#BFBAA8]/10',
    popular: false
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-[#F2F2F2] to-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-[#737065]/8 to-[#BFBAA8]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#000B07]/8 to-[#403F38]/8 rounded-full blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#BFBAA8]/20 to-[#737065]/20 text-[#403F38] rounded-full text-sm font-medium mb-6"
          >
            <Zap className="h-4 w-4" />
            Serviços premium
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#000B07] via-[#403F38] to-[#737065] bg-clip-text text-transparent">
              Serviços
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-[#737065] max-w-3xl mx-auto"
          >
            Experiências fotográficas personalizadas que superam expectativas e criam memórias inesquecíveis
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsappUrl = `https://wa.me/5534984273479?text=${encodeURIComponent(service.whatsappMessage)}`;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  delay: 0.5 + index * 0.1,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                {/* Popular badge */}
                {service.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    animate={isInView ? { scale: 1, rotate: -15 } : { scale: 0, rotate: -15 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="absolute -top-4 -right-4 z-10 bg-gradient-to-r from-[#403F38] to-[#737065] text-[#F2F2F2] px-4 py-2 rounded-2xl text-sm font-semibold shadow-xl"
                  >
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      Popular
                    </div>
                  </motion.div>
                )}

                <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br ${service.bgColor} hover:shadow-2xl transition-all duration-500 h-full`}>
                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-[#F2F2F2]" />
                      </motion.div>

                    </div>
                    
                    <CardTitle className="text-2xl font-bold mb-2 group-hover:text-[#000B07] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-[#737065]">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pb-8">
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <motion.div
                            className={`w-5 h-5 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                            whileHover={{ scale: 1.2 }}
                          >
                            <Star className="h-3 w-3 text-[#F2F2F2] fill-current" />
                          </motion.div>
                          <span className="text-sm font-medium text-[#737065]">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-full relative overflow-hidden bg-gradient-to-r ${service.gradient} text-[#F2F2F2] font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-8 w-8 text-[#737065]" />
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.div
            className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-[#BFBAA8]/20 to-[#BBBFBD]/20 rounded-3xl border border-[#737065]/20"
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
              className="w-12 h-12 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl flex items-center justify-center mx-auto mb-4"
            >
              <Camera className="h-6 w-6 text-[#F2F2F2]" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#737065] to-[#BFBAA8] bg-clip-text text-transparent">
              Projeto Personalizado?
            </h3>
            <p className="text-[#737065] mb-6">
              Cada história é única. Vamos criar algo especial juntos, adaptado exatamente às suas necessidades e sonhos.
            </p>
            
            <motion.a
              href={genericWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#737065] to-[#403F38] text-[#F2F2F2] rounded-xl font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Vamos Conversar</span>
              <Heart className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}