import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:bg-orange-600 transition-colors"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline">Chat with us</span>
    </motion.a>
  );
}
