// components/Contact.tsx

"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Camera, Send, Sparkles, Heart, Zap, CheckCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha os campos obrigatórios (*).");
      return;
    }
    try {
      const response = await fetch("COLE_AQUI_A_SUA_URL_DO_FORMSPREE", {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        }, 4000);
      } else {
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.");
      }
    } catch (error) {
      alert("Ocorreu um erro de rede. Verifique sua conexão e tente novamente.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@clickboxph.com',
      href: `mailto:contato@clickboxph.com?subject=${encodeURIComponent("Contato sobre ClickBox")}&body=${encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços.")}`
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(34) 98427-3479',
      href: `https://wa.me/5534984273479?text=${encodeURIComponent("Olá! Vi seu site e gostaria de mais informações.")}`
    },
    { icon: MapPin, label: 'Localização', value: 'Araguari, MG' },
    { icon: Instagram, label: 'Instagram', value: '@clickbox.ph', href: 'https://www.instagram.com/clickbox.ph/' }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-[#000B07] via-[#403F38] to-[#000B07] relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#737065]/20 to-[#BFBAA8]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#000B07]/20 to-[#403F38]/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#737065]/5 to-transparent"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-40 right-40 text-[#BFBAA8]"
        animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
      >
        <Sparkles className="h-12 w-12" />
      </motion.div>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2F2F2]/10 backdrop-blur-xl border border-[#BBBFBD]/20 text-[#BFBAA8] rounded-full text-sm font-medium mb-6"
          >
            <Zap className="h-4 w-4" />
            Vamos criar algo incrível juntos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-[#F2F2F2]"
          >
            <span className="bg-gradient-to-r from-[#BFBAA8] via-[#737065] to-[#BFBAA8] bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-[#BBBFBD] max-w-3xl mx-auto"
          >
            Transforme sua visão em realidade. Cada projeto é uma nova oportunidade de criar algo extraordinário
          </motion.p>
        </motion.div>

        {/* ==================================================================== */}
        {/* 1. O LAYOUT MUDOU: AGORA É UMA COLUNA ÚNICA E CENTRALIZADA */}
        {/* ==================================================================== */}
        <div className="flex flex-col items-center gap-16">
          
          {/* 2. A ORDEM FOI TROCADA: Os cards de contato agora vêm PRIMEIRO. */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-8 w-full max-w-xl" // Adicionado max-width para telas grandes
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-3xl font-bold mb-8 text-[#F2F2F2] text-center"
              >
                Vamos nos conectar
              </motion.h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  if (info.href) {
                    return (
                      <motion.a 
                        key={index} href={info.href} target="_blank" rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="group flex items-start gap-4 p-4 bg-[#F2F2F2]/5 backdrop-blur-sm rounded-2xl border border-[#737065]/20 hover:bg-[#F2F2F2]/10 transition-all duration-300"
                      >
                        <motion.div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                          <Icon className="h-6 w-6 text-[#F2F2F2]" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-[#F2F2F2]">{info.label}</h4>
                          <p className="text-[#BBBFBD] group-hover:text-[#F2F2F2] transition-colors duration-300">{info.value}</p>
                        </div>
                      </motion.a>
                    );
                  } else {
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="group flex items-start gap-4 p-4 bg-[#F2F2F2]/5 backdrop-blur-sm rounded-2xl border border-[#737065]/20 hover:bg-[#F2F2F2]/10 transition-all duration-300"
                      >
                        <motion.div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                          <Icon className="h-6 w-6 text-[#F2F2F2]" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-[#F2F2F2]">{info.label}</h4>
                          <p className="text-[#BBBFBD] group-hover:text-[#F2F2F2] transition-colors duration-300">{info.value}</p>
                        </div>
                      </motion.div>
                    );
                  }
                })}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="bg-gradient-to-br from-[#737065]/20 to-[#BFBAA8]/20 backdrop-blur-xl border border-[#737065]/30 rounded-3xl p-8"
            >
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="w-12 h-12 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="h-6 w-6 text-[#F2F2F2]" />
              </motion.div>
              <h4 className="text-xl font-bold text-center mb-4 text-[#F2F2F2]">Horário de Atendimento</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-[#BBBFBD]"><span>Segunda - Sexta:</span><span className="font-semibold text-[#F2F2F2]">8h às 19h</span></div>
                <div className="flex justify-between items-center text-[#BBBFBD]"><span>Sábado:</span><span className="font-semibold text-[#F2F2F2]">9h às 15h</span></div>
                <div className="flex justify-between items-center text-[#BBBFBD]"><span>Domingo:</span><span className="font-semibold text-[#BFBAA8]">Emergências</span></div>
              </div>
              <motion.div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#BBBFBD]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>
                <Heart className="h-4 w-4 text-[#BFBAA8]" />
                <span>Respostas rápidas garantidas</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-xl" // Adicionado max-width para telas grandes
          >
            <Card className="bg-[#F2F2F2]/5 backdrop-blur-2xl border border-[#737065]/20 shadow-2xl">
              <CardHeader>
                <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.7, duration: 0.6 }} className="w-12 h-12 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-[#F2F2F2]" />
                </motion.div>
                <CardTitle className="text-2xl text-center text-[#F2F2F2]">Solicite seu Orçamento</CardTitle>
                <CardDescription className="text-center text-[#BBBFBD]">Respondo em até 2 horas durante horário comercial</CardDescription>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.6 }}>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#F2F2F2]">Nome Completo *</label>
                        <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Seu nome completo" className="bg-[#F2F2F2]/10 backdrop-blur-sm border-[#737065]/30 text-[#F2F2F2] placeholder:text-[#BBBFBD] focus:border-[#BFBAA8] focus:ring-[#BFBAA8]/20"/>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, duration: 0.6 }}>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#F2F2F2]">WhatsApp</label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(34) 98427-3479" className="bg-[#F2F2F2]/10 backdrop-blur-sm border-[#737065]/30 text-[#F2F2F2] placeholder:text-[#BBBFBD] focus:border-[#BFBAA8] focus:ring-[#BFBAA8]/20"/>
                      </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1, duration: 0.6 }}>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#F2F2F2]">E-mail *</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="seu@email.com" className="bg-[#F2F2F2]/10 backdrop-blur-sm border-[#737065]/30 text-[#F2F2F2] placeholder:text-[#BBBFBD] focus:border-[#BFBAA8] focus:ring-[#BFBAA8]/20"/>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.1, duration: 0.6 }}>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-[#F2F2F2]">Tipo de Serviço</label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-3 py-2 bg-[#F2F2F2]/10 backdrop-blur-sm border border-[#737065]/30 text-[#F2F2F2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#BFBAA8]/20 focus:border-[#BFBAA8]">
                        <option value="" className="text-[#403F38] bg-[#F2F2F2]">Selecione um serviço</option>
                        <option value="pacote-bronze" className="text-[#403F38] bg-[#F2F2F2]">Pacote Bronze</option>
                        <option value="pacote-ouro" className="text-[#403F38] bg-[#F2F2F2]">Pacote Ouro</option>
                        <option value="pacote-diamante" className="text-[#403F38] bg-[#F2F2F2]">Pacote Diamante</option>
                        <option value="outro" className="text-[#403F38] bg-[#F2F2F2]">Projeto Personalizado</option>
                      </select>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.2, duration: 0.6 }}>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#F2F2F2]">Conte-me sobre sua visão *</label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Descreva seu projeto, data desejada, localização e tudo que considera importante para tornar sua visão realidade..." rows={5} className="bg-[#F2F2F2]/10 backdrop-blur-sm border-[#737065]/30 text-[#F2F2F2] placeholder:text-[#BBBFBD] focus:border-[#BFBAA8] focus:ring-[#BFBAA8]/20"/>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.3, duration: 0.6 }}>
                      <motion.button type="submit" className="w-full relative overflow-hidden bg-gradient-to-r from-[#737065] to-[#403F38] text-[#F2F2F2] font-semibold py-4 px-6 rounded-xl" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-[#BFBAA8] to-[#737065] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        <div className="relative z-10 flex items-center justify-center gap-2">
                          <span>Enviar Mensagem</span>
                          <Send className="h-4 w-4" />
                        </div>
                      </motion.button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", bounce: 0.6 }} className="w-16 h-16 bg-gradient-to-r from-[#737065] to-[#BFBAA8] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-[#F2F2F2]" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#F2F2F2] mb-4">Mensagem Enviada!</h3>
                    <p className="text-[#BBBFBD]">Obrigado pelo contato! Retornarei em breve para transformarmos sua visão em realidade.</p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}