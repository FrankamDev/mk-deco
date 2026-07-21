import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Hammer, Clock, MapPin } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickReplies?: string[];
  cta?: { label: string; whatsappMessage: string };
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "237658625960";

  const PERSISTENT_BADGE: boolean = true;
  const [hasUnread, setHasUnread] = useState(true);

  const now = () => new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  const scrollToBottom = () => {
    setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }), 50);
  };

  const openWhatsApp = (text: string) => {
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const pushBotMessage = (text: string, quickReplies?: string[], cta?: Message['cta'], delay = 1100) => {
    setIsTyping(true);
    scrollToBottom();
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { id: Date.now().toString(), sender: 'bot', text, time: now(), quickReplies, cta }
      ]);
      scrollToBottom();
    }, delay);
  };

  const pushUserMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text, time: now() }]);
    scrollToBottom();
  };

  // Message d'accueil simulé à la première ouverture
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      pushBotMessage(
        "Bonjour 👋 Bienvenue chez Ébénia. Je suis l'assistant de l'atelier — dites-moi ce qui vous amène et je vous oriente tout de suite.",
        ["Demander un devis", "Voir nos réalisations", "Horaires & Localisation", "Parler à un conseiller"]
      );
    }
    if (isOpen && !PERSISTENT_BADGE) {
      setHasUnread(false);
    }
  }, [isOpen, hasGreeted]);

  const handleQuickReply = (reply: string) => {
    pushUserMessage(reply);

    switch (reply) {
      case "Demander un devis":
        pushBotMessage(
          "Parfait ! Pour vous faire une estimation précise, le plus rapide est d'échanger directement avec notre équipe. Décrivez-nous votre projet (type de meuble, dimensions, délai souhaité) et vous aurez une réponse sous quelques minutes.",
          undefined,
          { label: "Continuer sur WhatsApp", whatsappMessage: "Bonjour Ébénia, je souhaiterais obtenir un devis pour un projet de menuiserie." }
        );
        break;
      case "Voir nos réalisations":
        pushBotMessage(
          "Avec plaisir ! Je peux vous envoyer une sélection de nos réalisations récentes adaptées à ce que vous recherchez.",
          undefined,
          { label: "Recevoir des exemples sur WhatsApp", whatsappMessage: "Bonjour Ébénia, pourriez-vous m'envoyer quelques exemples de vos réalisations ?" }
        );
        break;
      case "Horaires & Localisation":
        pushBotMessage(
          "Nous sommes ouverts du mardi au vendredi de 9h à 19h, et le samedi de 8h30 à 18h. Notre atelier se trouve entre Bastos et Odza, à Yaoundé.",
          ["Demander un devis", "Parler à un conseiller"]
        );
        break;
      case "Parler à un conseiller":
        pushBotMessage(
          "Bien sûr, je vous mets en relation avec un membre de notre équipe dès maintenant.",
          undefined,
          { label: "Ouvrir la discussion WhatsApp", whatsappMessage: "Bonjour Ébénia, je souhaiterais parler à un conseiller." }
        );
        break;
      default:
        break;
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userText = inputValue.trim();
    pushUserMessage(userText);
    setInputValue('');
    pushBotMessage(
      "Merci pour votre message ! Pour vous répondre au mieux et avec toutes les précisions nécessaires, continuons directement sur WhatsApp — notre équipe y est plus réactive.",
      undefined,
      { label: "Continuer sur WhatsApp", whatsappMessage: `Bonjour Ébénia, ${userText}` }
    );
  };

  return (
    <>
      {/* Bouton Flottant avec animation perpétuelle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
        aria-label="Ouvrir le chat WhatsApp"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.div>

        {/* Badge de notification */}
        {hasUnread && !isOpen && (
          <motion.div
            className="absolute -top-1.5 -right-1.5 min-w-[22px] h-[22px] px-1 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            1
          </motion.div>
        )}
      </motion.button>

      {/* Fenêtre de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] h-[520px] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-700 flex flex-col"
          >
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4 flex items-center gap-3 shrink-0">
              <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center">
                <Hammer size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">MK_DECO — Atelier</p>
                <p className="text-xs opacity-90 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  En ligne
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white shrink-0">
                <X size={20} />
              </button>
            </div>

            {/* Zone de messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50 dark:bg-stone-950">
              {messages.length === 0 && !isTyping && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 rounded-full flex items-center justify-center mb-3">
                    <MessageCircle size={30} className="text-emerald-600" />
                  </div>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Ouverture de la conversation...</p>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-md'
                        : 'bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 border border-stone-100 dark:border-stone-700 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-stone-400 mt-1 px-1">{msg.time}</span>

                  {/* Réponses rapides */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-full">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 text-xs font-medium border border-emerald-600 text-emerald-700 dark:text-emerald-400 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* CTA WhatsApp */}
                  {msg.cta && (
                    <button
                      onClick={() => openWhatsApp(msg.cta!.whatsappMessage)}
                      className="mt-2 w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle size={14} />
                      {msg.cta.label}
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Indicateur de frappe */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start">
                  <div className="bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-700 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-stone-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Zone de saisie */}
            <div className="p-3 border-t border-stone-100 dark:border-stone-800 flex items-center gap-2 shrink-0 bg-white dark:bg-stone-900">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Écrivez votre message..."
                className="flex-1 bg-stone-100 dark:bg-stone-800 border-none rounded-full px-4 py-2.5 text-sm text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 shrink-0 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Envoyer"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Info horaires/local rapide */}
            <div className="px-4 py-2 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center gap-3 text-[10px] text-stone-400 shrink-0">
              <span className="flex items-center gap-1"><Clock size={11} /> Réponse sous 5 min</span>
              <span className="flex items-center gap-1"><MapPin size={11} /> Yaoundé</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}