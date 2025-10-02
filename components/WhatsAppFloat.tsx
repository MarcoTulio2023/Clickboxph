import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppFloat() {
  const whatsappNumber = "5534984273479"; // Substitua pelo número real
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de fotografia.");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1, duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="group relative w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 20px rgba(37, 211, 102, 0)",
            "0 0 0 0 rgba(37, 211, 102, 0.7)"
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#128C7E] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center w-full h-full text-white">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaWhatsapp className="h-8 w-8" />
          </motion.div>
        </div>

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          initial={{ x: 10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
        >
          <div className="bg-[#000B07] text-[#F2F2F2] px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap shadow-xl">
            Entre em contato via WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#000B07] border-y-4 border-y-transparent"></div>
          </div>
        </motion.div>

      </motion.button>
    </motion.div>
  );
}