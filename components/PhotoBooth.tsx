// components/PhotoBooth.tsx

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Camera, Check, Sparkles, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// ALTERADO: Pacotes e preços baseados no PDF
const photoBoothPackages = [
  {
    title: 'Pacote Bronze',
    price: 'R$ 1.190',
    duration: '2 horas de Clickbox',
    features: ['Sem polaroides'],
    popular: false,
    whatsappMessage: "Olá! Gostaria de um orçamento para o Pacote Bronze da Clickbox."
  },
  {
    title: 'Pacote Ouro',
    price: 'R$ 1.490',
    duration: '4 horas de Clickbox',
    features: ['+ 80 polaroides'],
    popular: true,
    whatsappMessage: "Olá! Gostaria de um orçamento para o Pacote Ouro da Clickbox."
  },
  {
    title: 'Pacote Diamante',
    price: 'R$ 1.990',
    duration: '5 horas de Clickbox',
    features: ['+ polaroides ilimitadas'],
    popular: false,
    whatsappMessage: "Olá! Gostaria de um orçamento para o Pacote Diamante da Clickbox."
  }
];

export function PhotoBooth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planos" className="py-32 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#000B07] via-[#403F38] to-[#737065] bg-clip-text text-transparent">
              Nossos Planos
            </span>
          </h2>
          <p className="text-xl text-[#737065] max-w-3xl mx-auto">
            Todos os pacotes incluem estrutura decorada, equipe completa e fotos digitais com envio instantâneo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {photoBoothPackages.map((pkg, index) => {
            const whatsappUrl = `https://wa.me/5534984273479?text=${encodeURIComponent(pkg.whatsappMessage)}`;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex relative"
              >
                <Card className={`w-full flex flex-col justify-between rounded-2xl shadow-lg transition-all duration-300 ${pkg.popular ? 'border-2 border-yellow-500' : 'border'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold shadow-md">
                      <Star className="h-4 w-4 inline-block mr-1" /> Mais Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-[#403F38]">{pkg.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-between h-full">
                    <div className='text-center'>
                      <p className="text-4xl font-bold mb-2">{pkg.price}</p>
                      <p className="text-md text-[#737065] mb-6">{pkg.duration}</p>
                      <ul className="space-y-2 text-center mb-8">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center justify-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-[#737065]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center mt-auto px-6 py-3 bg-gradient-to-r from-[#737065] to-[#403F38] text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                      Solicitar Orçamento
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}