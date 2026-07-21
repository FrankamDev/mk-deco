// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Phone, Mail, MapPin, Clock, ArrowRight, Shield, CreditCard, Sparkles, Gift
// } from 'lucide-react';
// import { BsInstagram, BsYoutube } from 'react-icons/bs';
// import { FaFacebook } from 'react-icons/fa';

// export default function Footer() {
//     const [darkMode, setDarkMode] = useState(() => {
//         if (typeof window !== 'undefined') {
//             return localStorage.getItem('theme') === 'dark' ||
//                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
//         }
//         return false;
//     });

//     const [email, setEmail] = useState('');
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const root = window.document.documentElement;
//         if (darkMode) {
//             root.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             root.classList.remove('dark');
//             localStorage.setItem('theme', 'light');
//         }
//     }, [darkMode]);

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!email) return;

//         setLoading(true);

//         setTimeout(() => {
//             setLoading(false);
//             setIsSubmitted(true);
//             setEmail('');

//             setTimeout(() => setIsSubmitted(false), 4500);
//         }, 1100);
//     };

//     return (
//         <footer className="bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 border-t border-stone-200 dark:border-stone-900 pt-16 pb-8 transition-colors duration-300">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

//                 {/* NEWSLETTER PREMIUM SHARP */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-200 dark:border-stone-900">

//                     <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
//                         <div className="mb-6">
//                             <span className="text-4xl font-serif font-light tracking-tighter text-stone-950 dark:text-white">L'Atelier</span>
//                             <span className="block text-[11px] tracking-[0.25em] text-amber-600 dark:text-amber-400 font-medium uppercase mt-1">NexaTress</span>
//                         </div>
//                         <p className="text-sm text-stone-600 dark:text-stone-400 max-w-md leading-relaxed">
//                             Une communauté exclusive pour les femmes qui exigent l'excellence capillaire.
//                             Rejoignez celles qui ont choisi la différence.
//                         </p>
//                     </div>

//                     {/* NEWSLETTER */}
//                     <div className="lg:col-span-7">
//                         <div className="border border-stone-300 dark:border-stone-700 p-10 md:p-12 bg-white dark:bg-stone-900">
//                             <div className="uppercase tracking-[0.125em] text-xs font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
//                                 <Gift className="w-4 h-4" />
//                                 CERCLE PRIVÉ
//                             </div>

//                             <h3 className="text-3xl font-serif font-light tracking-tight text-stone-950 dark:text-stone-50 mb-4">
//                                 Recevez l’excellence directement
//                             </h3>

//                             <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed mb-8">
//                                 Avant-premières collections • Offres VIP • Conseils d'expertes • Invitations aux événements privés
//                             </p>

//                             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
//                                 <input
//                                     type="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     placeholder="Votre adresse email"
//                                     className="flex-1 bg-transparent border border-stone-300 dark:border-stone-700 px-6 py-4 text-sm focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 transition-colors"
//                                     required
//                                 />
//                                 <motion.button
//                                     whileHover={{ x: 6 }}
//                                     whileTap={{ scale: 0.98 }}
//                                     type="submit"
//                                     disabled={loading}
//                                     className="group px-10 py-4 bg-stone-950 dark:bg-white dark:text-stone-950 text-white font-semibold tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white transition-all duration-300 disabled:opacity-70 whitespace-nowrap"
//                                 >
//                                     {loading ? "Envoi..." : "Rejoindre le Cercle"}
//                                     {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
//                                 </motion.button>
//                             </form>

//                             <AnimatePresence>
//                                 {isSubmitted && (
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 10 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         exit={{ opacity: 0 }}
//                                         className="mt-6 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center gap-2"
//                                     >
//                                         <Sparkles className="w-4 h-4" />
//                                         Bienvenue dans le Cercle Privé. Votre premier email arrive bientôt.
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     </div>
//                 </div>

//                 {/* GRILLE DE NAVIGATION PRINCIPALE */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-stone-200 dark:border-stone-900 text-xs font-light">

//                     <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
//                         <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4">Explorer</h5>
//                         <ul className="space-y-2.5 text-stone-500 dark:text-stone-400">
//                             <li><a href="/" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Accueil</a></li>
//                             <li><a href="/prestations" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Nos Prestations</a></li>
//                             <li><a href="/gallery" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Galerie</a></li>
//                             <li><a href="/salon" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Le Salon</a></li>
//                         </ul>
//                     </div>

//                     <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
//                         <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
//                             <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Horaires
//                         </h5>
//                         <ul className="space-y-2 text-stone-500 dark:text-stone-400">
//                             <li>Mardi - Vendredi : 09h00 - 19h00</li>
//                             <li>Samedi : 08h30 - 18h00</li>
//                             <li className="text-stone-400 dark:text-stone-600">Dimanche - Lundi : Fermé</li>
//                         </ul>
//                     </div>

//                     <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
//                         <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
//                             <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Contact
//                         </h5>
//                         <ul className="space-y-2.5 text-stone-500 dark:text-stone-400">
//                             <li className="flex items-center gap-2 justify-center sm:justify-start">
//                                 <Phone className="w-3 h-3" /> +237 690 46 18 30
//                             </li>
//                             <li className="flex items-center gap-2 justify-center sm:justify-start">
//                                 <Mail className="w-3 h-3" /> contact@nexatress.com
//                             </li>
//                         </ul>
//                     </div>

//                     <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
//                         <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
//                             <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Le Salon
//                         </h5>
//                         <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
//                             Bastos & Odza<br /> Yaoundé
//                         </p>
//                         <div className="flex items-center gap-3">
//                             <a href="#" className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 transition-colors"><BsInstagram className="w-4 h-4" /></a>
//                             <a href="#" className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 transition-colors"><FaFacebook className="w-4 h-4" /></a>
//                             <a href="#" className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 transition-colors"><BsYoutube className="w-4 h-4" /></a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* REASSURANCE */}
//                 <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 py-8 border-b border-stone-200 dark:border-stone-900 text-[10px] uppercase tracking-wider font-medium text-stone-400">
//                     <div className="flex items-center gap-2"><Shield className="w-3.5 homecercle h-3.5 text-emerald-600" /> Réservation Sécurisée</div>
//                     <div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 homecercle text-amber-500" /> Diagnostic Offert</div>
//                     <div className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 homecercle text-blue-500" /> Paiement Flexible</div>
//                 </div>

//                 {/* BAS DE PAGE */}
//                 <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
//                     <p className="text-[11px] text-stone-400 dark:text-stone-500 tracking-wide font-light text-center sm:text-left">
//                         © 2026 NexaTress. Tous droits réservés. Mentions légales — RGPD.
//                     </p>

//                     {/* Toggle Dark Mode */}
//                     <div className="flex items-center gap-3">
//                         <span className="text-[10px] tracking-widest font-medium uppercase text-stone-400 dark:text-stone-500 select-none">
//                             {darkMode ? 'Mode Sombre' : 'Mode Clair'}
//                         </span>
//                         <button
//                             onClick={() => setDarkMode(!darkMode)}
//                             className="relative w-14 h-7 bg-stone-200 dark:bg-stone-800 rounded-full p-1 transition-colors duration-300 focus:outline-none"
//                             aria-label="Interrupteur de thème"
//                         >
//                             <motion.div
//                                 className="w-5 h-5 rounded-full bg-white dark:bg-amber-400 shadow-md flex items-center justify-center text-[10px]"
//                                 layout
//                                 transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                                 animate={{ x: darkMode ? 28 : 0 }}
//                             >
//                                 {darkMode ? '🌙' : '☀️'}
//                             </motion.div>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  CreditCard,
  Sparkles,
  Gift,
} from "lucide-react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => setIsSubmitted(false), 4500);
    }, 1100);
  };

  return (
    <footer className="bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 border-t border-stone-200 dark:border-stone-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* NEWSLETTER PREMIUM SHARP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-200 dark:border-stone-900">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <span className="text-4xl font-serif font-light tracking-tighter text-stone-950 dark:text-white">
                L'Atelier
              </span>
              <span className="block text-[11px] tracking-[0.25em] text-amber-600 dark:text-amber-400 font-medium uppercase mt-1">
                MK-DECO
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 max-w-md leading-relaxed">
              Une communauté exclusive pour ceux qui exigent l'excellence
              artisanale. Rejoignez ceux qui ont choisi la différence.
            </p>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-7">
            <div className="border border-stone-300 dark:border-stone-700 p-10 md:p-12 bg-white dark:bg-stone-900">
              <div className="uppercase tracking-[0.125em] text-xs font-bold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-2">
                <Gift className="w-4 h-4" />
                CERCLE PRIVÉ
              </div>

              <h3 className="text-3xl font-serif font-light tracking-tight text-stone-950 dark:text-stone-50 mb-4">
                Recevez l'excellence directement
              </h3>

              <p className="text-stone-600 dark:text-stone-400 text-[15px] leading-relaxed mb-8">
                Avant-premières créations • Offres VIP • Conseils d'artisans •
                Invitations aux événements privés
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 bg-transparent border border-stone-300 dark:border-stone-700 px-6 py-4 text-sm focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 transition-colors"
                  required
                />
                <motion.button
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="group px-10 py-4 bg-stone-950 dark:bg-white dark:text-stone-950 text-white font-semibold tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:bg-amber-600 dark:hover:bg-amber-400 hover:text-white transition-all duration-300 disabled:opacity-70 whitespace-nowrap"
                >
                  {loading ? "Envoi..." : "Rejoindre le Cercle"}
                  {!loading && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </motion.button>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Bienvenue dans le Cercle Privé. Votre premier email arrive
                    bientôt.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* GRILLE DE NAVIGATION PRINCIPALE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-stone-200 dark:border-stone-900 text-xs font-light">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4">
              Explorer
            </h5>
            <ul className="space-y-2.5 text-stone-500 dark:text-stone-400">
              <li>
                <a
                  href="/"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/prestations"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Nos Prestations
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Galerie
                </a>
              </li>
              <li>
                <a
                  href="/salon"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  Notre Atelier
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />{" "}
              Horaires
            </h5>
            <ul className="space-y-2 text-stone-500 dark:text-stone-400">
              <li>Mardi - Vendredi : 09h00 - 19h00</li>
              <li>Samedi : 08h30 - 18h00</li>
              <li className="text-stone-400 dark:text-stone-600">
                Dimanche - Lundi : Fermé
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />{" "}
              Contact
            </h5>
            <ul className="space-y-2.5 text-stone-500 dark:text-stone-400">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-3 h-3" /> +237 658 62 59 60
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-3 h-3" /> mkdeco.contact@gmail.com
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />{" "}
              Notre Atelier
            </h5>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
              Bonamoussadi
              <br /> Douala
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 transition-colors"
              >
                <BsInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 transition-colors"
              >
                <BsYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* REASSURANCE */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 py-8 border-b border-stone-200 dark:border-stone-900 text-[10px] uppercase tracking-wider font-medium text-stone-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 homecercle h-3.5 text-emerald-600" />{" "}
            Réservation Sécurisée
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 homecercle text-amber-500" /> Devis
            Offert
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-3.5 h-3.5 homecercle text-blue-500" />{" "}
            Paiement Flexible
          </div>
        </div>

        {/* BAS DE PAGE */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-stone-400 dark:text-stone-500 tracking-wide font-light text-center sm:text-left">
            © 2026 MK-DECO. Tous droits réservés. Mentions légales — RGPD.
          </p>

          {/* Toggle Dark Mode */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest font-medium uppercase text-stone-400 dark:text-stone-500 select-none">
              {darkMode ? "Mode Sombre" : "Mode Clair"}
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-14 h-7 bg-stone-200 dark:bg-stone-800 rounded-full p-1 transition-colors duration-300 focus:outline-none"
              aria-label="Interrupteur de thème"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-white dark:bg-amber-400 shadow-md flex items-center justify-center text-[10px]"
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                animate={{ x: darkMode ? 28 : 0 }}
              >
                {/* {darkMode ? "🌙" : "☀️"} */}
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
