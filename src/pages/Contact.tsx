// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

// export default function Contact() {
//     // États pour la phrase interactive
//     const [style, setStyle] = useState('Box Braids');
//     const [urgency, setUrgency] = useState('ce mois-ci');
//     const [name, setName] = useState('');
//     const [contactInfo, setContactInfo] = useState('');
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!name || !contactInfo) return;

//         // 1. Définition du numéro (Format international sans le +)
//         const phoneNumber = "237690461830";

//         // 2. Construction de la phrase exacte personnalisée pour ton WhatsApp
//         const message = `Bonjour NexaTress, je m'appelle ${name}. Je souhaiterais planifier une prestation de ${style} idéalement ${urgency}. Vous pouvez me recontacter au ${contactInfo}.`;

//         // 3. Encodage strict du texte pour les URL (gère les espaces, accents, etc.)
//         const encodedMessage = encodeURIComponent(message);

//         // 4. Déclenchement de l'animation de succès locale
//         setIsSubmitted(true);

//         // 5. Redirection instantanée vers WhatsApp après un micro-délai pour laisser l'animation respirer
//         setTimeout(() => {
//             window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
//             setIsSubmitted(false); // Reset le formulaire après l'ouverture
//         }, 1200);
//     };

//     const transitionEase = [0.16, 1, 0.3, 1];

//     return (
//         <section className="relative min-h-screen pt-28 pb-16 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-500 overflow-hidden">
            
//             {/* Effets de lumière */}
//             <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-200/20 dark:bg-amber-950/10 rounded-full blur-[120px] pointer-events-none" />
//             <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-rose-200/10 dark:bg-stone-900/40 rounded-full blur-[100px] pointer-events-none" />

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
//                 {/* --- BLOC GAUCHE : INFOS TEXTE --- */}
//                 <div className="lg:col-span-5 flex flex-col justify-between space-y-12 order-2 lg:order-1">
//                     <div className="text-center lg:text-left">
//                         <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3">
//                             Consultation Instantanée
//                         </span>
//                         <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight leading-tight">
//                             Prendre Contact <br />
//                             <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-amber-700 to-stone-950 dark:from-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
//                                 Via WhatsApp
//                             </span>
//                         </h1>
//                         <p className="mt-4 text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
//                             Remplissez votre demande sur-mesure. Notre système va générer votre message et ouvrir votre discussion privée avec notre équipe.
//                         </p>
//                     </div>

//                     {/* Cartes physiques */}
//                     <div className="space-y-6 max-w-sm mx-auto lg:mx-0 w-full text-left">
//                         <div className="flex gap-4 items-center p-4 bg-stone-50 dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60">
//                             <div className="w-10 h-10 bg-stone-950 dark:bg-amber-600 text-white flex items-center justify-center shrink-0">
//                                 <Phone className="w-4 h-4" />
//                             </div>
//                             <div>
//                                 <h4 className="text-[10px] tracking-widest uppercase font-semibold text-stone-400">WhatsApp Client</h4>
//                                 <p className="text-sm font-medium text-stone-900 dark:text-stone-200">+237 690 46 18 30</p>
//                             </div>
//                         </div>

//                         <div className="flex gap-4 items-center p-4 bg-stone-50 dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60">
//                             <div className="w-10 h-10 bg-stone-950 dark:bg-amber-600 text-white flex items-center justify-center shrink-0">
//                                 <Mail className="w-4 h-4" />
//                             </div>
//                             <div>
//                                 <h4 className="text-[10px] tracking-widest uppercase font-semibold text-stone-400">Courriel Conciergerie</h4>
//                                 <p className="text-sm font-medium text-stone-900 dark:text-stone-200">salon@nexatress.com</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="pt-6 border-t border-stone-200 dark:border-stone-900 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-center lg:justify-start gap-2">
//                         <Clock className="w-4 h-4 text-emerald-600" />
//                         <span>Réponse instantanée sur votre smartphone</span>
//                     </div>
//                 </div>

//                 {/* --- BLOC DROIT : LE FORMULAIRE INTERACTIF --- */}
//                 <div className="lg:col-span-7 order-1 lg:order-2">
//                     <div className="bg-stone-50 dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900 p-6 sm:p-10 relative overflow-hidden">
                        
//                         <AnimatePresence mode="wait">
//                             {!isSubmitted ? (
//                                 <motion.form 
//                                     onSubmit={handleSubmit}
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                     exit={{ opacity: 0 }}
//                                     className="space-y-10"
//                                 >
//                                     {/* Étape 1 : Les puces */}
//                                     <div>
//                                         <label className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-4">
//                                             1. Votre Inspiration Capitale
//                                         </label>
//                                         <div className="flex flex-wrap gap-2.5">
//                                             {['Box Braids', 'Cornrows', 'Fausses Locks', 'Sur-mesure / Autre'].map((item) => (
//                                                 <button
//                                                     key={item}
//                                                     type="button"
//                                                     onClick={() => setStyle(item)}
//                                                     className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 border rounded-none ${
//                                                         style === item 
//                                                             ? 'bg-stone-950 border-stone-950 text-white dark:bg-amber-600 dark:border-amber-600' 
//                                                             : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-400'
//                                                     }`}
//                                                 >
//                                                     {item}
//                                                 </button>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Étape 2 : La phrase narrative */}
//                                     <div className="space-y-6">
//                                         <label className="text-xs font-bold uppercase tracking-widest text-stone-400 block">
//                                             2. Personnalisez le message automatique
//                                         </label>
                                        
//                                         <div className="text-lg sm:text-2xl font-serif font-light text-stone-900 dark:text-stone-100 leading-relaxed text-left">
//                                             Bonjour, je m'appelle{' '}
//                                             <input 
//                                                 type="text" 
//                                                 value={name}
//                                                 onChange={(e) => setName(e.target.value)}
//                                                 placeholder="votre nom" 
//                                                 className="border-b border-stone-300 dark:border-stone-700 bg-transparent px-2 py-0 text-amber-700 dark:text-amber-400 placeholder:text-stone-300 dark:placeholder:text-stone-800 focus:outline-none focus:border-amber-600 font-medium tracking-wide text-base sm:text-xl w-40 sm:w-48"
//                                                 required
//                                             />
//                                             . Je souhaiterais planifier une prestation de <span className="text-stone-950 dark:text-white font-normal underline decoration-amber-600/60 decoration-2">{style}</span>{' '}
//                                             idéalement{' '}
//                                             <select 
//                                                 value={urgency} 
//                                                 onChange={(e) => setUrgency(e.target.value)}
//                                                 className="bg-transparent border-b border-stone-300 dark:border-stone-700 text-amber-700 dark:text-amber-400 outline-none cursor-pointer focus:border-amber-600 font-medium font-sans text-base sm:text-xl"
//                                             >
//                                                 <option value="cette semaine">cette semaine</option>
//                                                 <option value="ce mois-ci">ce mois-ci</option>
//                                                 <option value="pour un événement particulier">pour un événement</option>
//                                             </select>.
//                                             Vous pouvez me recontacter au{' '}
//                                             <input 
//                                                 type="text" 
//                                                 value={contactInfo}
//                                                 onChange={(e) => setContactInfo(e.target.value)}
//                                                 placeholder="Téléphone ou Mail" 
//                                                 className="border-b border-stone-300 dark:border-stone-700 bg-transparent px-2 py-0 text-amber-700 dark:text-amber-400 placeholder:text-stone-300 dark:placeholder:text-stone-800 focus:outline-none focus:border-amber-600 font-medium tracking-wide text-base sm:text-xl w-44 sm:w-56"
//                                                 required
//                                             />.
//                                         </div>
//                                     </div>

//                                     {/* Bouton d'action connecté à WhatsApp */}
//                                     <button 
//                                         type="submit" 
//                                         className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase text-white bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-none shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
//                                     >
//                                         <Send className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
//                                         Ouvrir dans WhatsApp
//                                     </button>
//                                 </motion.form>
//                             ) : (
//                                 /* ÉTAT DE SUCCÈS PENDANT LA REDIRECTION */
//                                 <motion.div 
//                                     initial={{ opacity: 0, scale: 0.95 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     className="py-16 text-center flex flex-col items-center justify-center"
//                                 >
//                                     <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
//                                         <CheckCircle className="w-8 h-8" />
//                                     </div>
//                                     <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 dark:text-white">
//                                         Connexion à WhatsApp...
//                                     </h3>
//                                     <p className="mt-3 text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light max-w-sm leading-relaxed">
//                                         Préparation de votre salon privé avec {name}. Si l'application ne s'ouvre pas automatiquement, vérifiez vos pop-ups.
//                                     </p>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>

//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
    // États pour les options de personnalisation de la prestation
    const [style, setStyle] = useState('Box Braids');
    const [place, setPlace] = useState('au salon (Paris 2e)');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState('en matinée (9h - 12h)');
    
    // États pour l'identité du client
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !contactInfo || !date) return;

        // Numéro de conciergerie officiel NexaTress
        const phoneNumber = "237690461830";

        // Formatage de la date en version lisible pour le message
        const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        // Construction de la phrase ultra-complète pour le gestionnaire du salon
        const message = `Bonjour NexaTress, je m'appelle ${name}. Je souhaiterais réserver une prestation de ${style} à effectuer ${place}. Je serais disponible le ${formattedDate}, idéalement ${timeSlot}. Vous pouvez me recontacter sur mon ${contactInfo} pour confirmer le créneau.`;

        const encodedMessage = encodeURIComponent(message);
        setIsSubmitted(true);

        // Redirection fluide vers WhatsApp
        setTimeout(() => {
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
            setIsSubmitted(false);
        }, 1200);
    };

    return (
        <section className="relative min-h-screen pt-28 pb-16 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-500 overflow-hidden">
            <Navbar/>
            <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-200/20 dark:bg-amber-950/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-rose-200/10 dark:bg-stone-900/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* --- BLOC GAUCHE : IDENTITÉ ET RÉASSURANCE --- */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-12 order-2 lg:order-1">
                    <div className="text-center lg:text-left">
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3">
                            Planification Privée
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight leading-tight">
                            Votre Séance <br />
                            <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-amber-700 to-stone-950 dark:from-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
                                Sur-Mesure
                            </span>
                        </h1>
                        <p className="mt-4 text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                            Configurez votre demande de rendez-vous en quelques secondes. Nos stylistes préparent votre diagnostic capillaire avant même notre premier échange.
                        </p>
                    </div>

                    <div className="space-y-6 max-w-sm mx-auto lg:mx-0 w-full text-left">
                        <div className="flex gap-4 items-center p-4 bg-stone-50 dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60">
                            <div className="w-10 h-10 bg-stone-950 dark:bg-amber-600 text-white flex items-center justify-center shrink-0">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-[10px] tracking-widest uppercase font-semibold text-stone-400">Rayon d'action</h4>
                                <p className="text-xs font-medium text-stone-900 dark:text-stone-200">Salon Privé Paris IIe & Déplacements Île-de-France</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-stone-200 dark:border-stone-900 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-center lg:justify-start gap-2">
                        <Clock className="w-4 h-4 text-emerald-600" />
                        <span>Frais de déplacement offerts dès 150€ de prestation</span>
                    </div>
                </div>

                {/* --- BLOC DROIT : FORMULAIRE NARRATIF ENRICHI --- */}
                <div className="lg:col-span-8 order-1 lg:order-2">
                    <div className="bg-stone-50 dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900 p-6 sm:p-10 relative overflow-hidden">
                        
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form 
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-10"
                                >
                                    {/* Étape 1 : Le Style Capillaire */}
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-stone-400 block mb-4">
                                            1. Nature de votre projet capillaire
                                        </label>
                                        <div className="flex flex-wrap gap-2.5">
                                            {['Box Braids', 'Cornrows / Nattes collées', 'Fausses Locks', 'Twists / Vanilles', 'Soin profond & Tresses'].map((item) => (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    onClick={() => setStyle(item)}
                                                    className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 border ${
                                                        style === item 
                                                            ? 'bg-stone-950 border-stone-950 text-white dark:bg-amber-600 dark:border-amber-600' 
                                                            : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400 dark:bg-stone-950 dark:border-stone-800 dark:text-stone-400'
                                                    }`}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Étape 2 : La Phrase Narrative Augmentée */}
                                    <div className="space-y-6">
                                        <label className="text-xs font-bold uppercase tracking-widest text-stone-400 block">
                                            2. Détails de votre réservation
                                        </label>
                                        
                                        <div className="text-lg sm:text-2xl font-serif font-light text-stone-900 dark:text-stone-100 leading-relaxed text-left space-y-4">
                                            <div>
                                                Bonjour, mon nom est{' '}
                                                <input 
                                                    type="text" required value={name} onChange={(e) => setName(e.target.value)}
                                                    placeholder="votre prénom et nom" 
                                                    className="border-b border-stone-300 dark:border-stone-700 bg-transparent px-2 py-0 text-amber-700 dark:text-amber-400 placeholder:text-stone-200 dark:placeholder:text-stone-800 focus:outline-none focus:border-amber-600 font-medium tracking-wide text-base sm:text-xl w-52 sm:w-64"
                                                />.
                                            </div>

                                            <div>
                                                Je souhaite planifier une pose de <span className="text-stone-950 dark:text-white font-normal underline decoration-amber-600/60 decoration-2">{style}</span>,
                                                à réaliser{' '}
                                                <select 
                                                    value={place} onChange={(e) => setPlace(e.target.value)}
                                                    className="bg-transparent border-b border-stone-300 dark:border-stone-700 text-amber-700 dark:text-amber-400 outline-none cursor-pointer focus:border-amber-600 font-medium font-sans text-base sm:text-xl"
                                                >
                                                    <option value="au salon (Paris 2e)">directement au salon de Paris</option>
                                                    <option value="à mon domicile (Île-de-France)">à mon domicile privé</option>
                                                </select>.
                                            </div>

                                            <div>
                                                Idéalement, je réserve pour la journée du{' '}
                                                <input 
                                                    type="date" required value={date} onChange={(e) => setDate(e.target.value)}
                                                    className="border-b border-stone-300 dark:border-stone-700 bg-transparent px-2 py-0 text-amber-700 dark:text-amber-400 focus:outline-none focus:border-amber-600 font-sans font-medium text-base sm:text-xl cursor-pointer"
                                                />,{' '}
                                                plutôt{' '}
                                                <select 
                                                    value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}
                                                    className="bg-transparent border-b border-stone-300 dark:border-stone-700 text-amber-700 dark:text-amber-400 outline-none cursor-pointer focus:border-amber-600 font-medium font-sans text-base sm:text-xl"
                                                >
                                                    <option value="en matinée (9h - 12h)">en matinée (9h — 12h)</option>
                                                    <option value="en après-midi (13h - 17h)">en après-midi (13h — 17h)</option>
                                                    <option value="en fin de journée (17h30 - 20h)">en fin de journée (17h30 — 20h)</option>
                                                </select>.
                                            </div>

                                            <div>
                                                Vous pouvez me joindre sur mon{' '}
                                                <input 
                                                    type="text" required value={contactInfo} onChange={(e) => setContactInfo(e.target.value)}
                                                    placeholder="Numéro WhatsApp ou E-mail" 
                                                    className="border-b border-stone-300 dark:border-stone-700 bg-transparent px-2 py-0 text-amber-700 dark:text-amber-400 placeholder:text-stone-200 dark:placeholder:text-stone-800 focus:outline-none focus:border-amber-600 font-medium tracking-wide text-base sm:text-xl w-56 sm:w-72"
                                                />.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bouton final */}
                                    <button 
                                        type="submit" 
                                        className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-widest uppercase text-white bg-emerald-600 hover:bg-emerald-500 rounded-none shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                    >
                                        <Send className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                        Confirmer le créneau sur WhatsApp
                                    </button>
                                </motion.form>
                            ) : (
                                /* ÉTAT DE REDIRECTION INTERMÉDIAIRE */
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-20 text-center flex flex-col items-center justify-center"
                                >
                                    <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 dark:text-white">
                                        Génération de votre fiche...
                                    </h3>
                                    <p className="mt-3 text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-light max-w-sm leading-relaxed">
                                        Votre choix ({style} {place}) est enregistré. Ouverture instantanée de la messagerie...
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            </div>
<Footer/>
        </section>
    );
}