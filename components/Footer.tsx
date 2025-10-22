// components/Footer.tsx

import { motion } from 'framer-motion';
import { Camera, Mail, Phone, Instagram, Heart, Sparkles, ArrowUp, Zap } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Estruturas', href: '#estruturas' },
    { name: 'Planos', href: '#planos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Contato', href: '#contact' },
  ];

  // 1. DADOS DOS CONTATOS ATUALIZADOS E COM LINKS
  const contactInfo = [
    {
      icon: Mail,
      text: 'contato@clickboxph.com', // ALTERADO
      href: 'mailto:contato@clickboxph.com',
    },
    {
      icon: Phone,
      text: '(34) 98427-3479',
      href: `https://wa.me/5534984273479?text=${encodeURIComponent("Olá! Vi seu site e gostaria de mais informações.")}`,
    },
    {
      icon: Instagram,
      text: '@clickbox.ph',
      href: 'https://www.instagram.com/clickbox.ph/',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#000B07] to-[#403F38] text-[#F2F2F2] overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-[#737065]/10 to-[#BFBAA8]/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-r from-[#000B07]/10 to-[#737065]/10 rounded-full blur-3xl"
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

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#737065] via-[#BFBAA8] to-[#737065] rounded-3xl flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Camera className="h-8 w-8 text-[#F2F2F2]" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="h-4 w-4 text-[#BFBAA8]" />
                </motion.div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#BFBAA8] via-[#737065] to-[#BFBAA8] bg-clip-text text-transparent">
                  Gilberto Santos
                </h3>
                <p className="text-[#BBBFBD]">Visual Storyteller</p>
              </div>
            </motion.div>
            
            <p className="text-[#BBBFBD] max-w-md leading-relaxed">
              Transformando momentos ordinários em memórias extraordinárias através da arte fotográfica. 
              Cada clique conta uma história única e especial.
            </p>
            
            <motion.div
              className="flex items-center gap-2 text-sm bg-gradient-to-r from-[#737065]/20 to-[#BFBAA8]/20 backdrop-blur-sm border border-[#737065]/30 rounded-full px-4 py-2 w-fit"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="h-4 w-4 text-[#BFBAA8]" />
              <span className="text-[#BFBAA8]">Disponível para novos projetos</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#BFBAA8] to-[#737065] bg-clip-text text-transparent">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-[#BBBFBD] hover:text-[#F2F2F2] transition-colors duration-300 flex items-center gap-2 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-1 h-1 bg-[#737065] rounded-full group-hover:scale-150 transition-transform duration-300"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 2. CONTATOS AGORA SÃO LINKS CLICÁVEIS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#737065] to-[#BFBAA8] bg-clip-text text-transparent">
              Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index}>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-4 w-4 text-[#F2F2F2]" />
                      </motion.div>
                      <span className="text-[#BBBFBD] group-hover:text-[#F2F2F2] transition-colors duration-300 text-sm">
                        {contact.text}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-[#737065]/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center text-sm text-[#BBBFBD] space-y-2">
              {/* 3. LINK PARA O SEU PORTFÓLIO ADICIONADO AQUI */}
              <a href="https://portfoliotulio.netlify.app/#inicio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Feito com <Heart className="h-4 w-4 inline-block text-[#BFBAA8] fill-current" /> por um amigo programador.
              </a>
              <p>© {currentYear} Clickboxph. Todos os direitos reservados.</p>
            </div>
            
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#"
                className="text-sm text-[#BBBFBD] hover:text-[#F2F2F2] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Política de Privacidade
              </motion.a>
              <motion.a
                href="#"
                className="text-sm text-[#BBBFBD] hover:text-[#F2F2F2] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Termos de Uso
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-r from-[#737065] to-[#403F38] rounded-full flex items-center justify-center shadow-2xl z-50"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ArrowUp className="h-6 w-6 text-[#F2F2F2]" />
      </motion.button>
    </footer>
  );
}