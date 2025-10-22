// components/Header.tsx

import { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '#home' },
    { name: 'Estruturas', href: '#estruturas' },
    { name: 'Planos', href: '#planos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F2F2F2]/10 backdrop-blur-2xl border-b border-[#737065]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo e nome da empresa */}
          <motion.a
            href="#home"
            className="flex-shrink-0 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-[#000B07] via-[#403F38] to-[#737065] rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Camera className="h-5 w-5 text-[#BFBAA8]" />
                </motion.div>
              </div>
              <div>
                <motion.h1 className="text-xl font-medium text-[#000B07]">
                  CLICKBOX
                </motion.h1>
                <motion.p className="text-xs text-[#737065]">
                  Estrutura de Fotos
                </motion.p>
              </div>
            </div>
          </motion.a>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-6 py-2 text-sm font-medium text-[#403F38] hover:text-[#000B07] transition-colors duration-300 group"
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#000B07] to-[#403F38] group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
          </nav>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Navegação Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#F2F2F2]/80 backdrop-blur-xl rounded-2xl border border-[#BBBFBD]/20 mt-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-4 py-3 text-[#403F38] hover:text-[#000B07] hover:bg-[#BFBAA8]/20 rounded-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}