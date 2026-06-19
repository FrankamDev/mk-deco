import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "237690461830";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour NexaTress, je viens de visiter votre site et je souhaiterais avoir plus d'informations."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Bouton Flottant avec animation perpétuelle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
        aria-label="Ouvrir le chat WhatsApp"
        
        // Animation de flottement continu
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.div>

        {/* Petit indicateur "En ligne" qui pulse */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.button>

      {/* Fenêtre de Chat (même style que précédemment) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-700"
          >
            <div className="bg-emerald-600 text-white p-4 flex items-center gap-3">
              <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-semibold">NexaTress - Conciergerie</p>
               <p className="text-xs opacity-90 flex items-center gap-1.5">
  Réponse rapide 
  <span className="relative flex h-2 w-2">
    {/* Point qui pulse */}
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
  </span>
  En ligne
</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="ml-auto text-white/80 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 text-center">
              <div className="mx-auto w-20 h-20 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={40} className="text-emerald-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Besoin d'aide ?
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Parlez directement à notre équipe via WhatsApp.<br />
                Réponse en moins de 5 minutes.
              </p>
            </div>

            <div className="p-5 border-t border-stone-100 dark:border-stone-800">
              <button
                onClick={openWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all"
              >
                Discuter sur WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}