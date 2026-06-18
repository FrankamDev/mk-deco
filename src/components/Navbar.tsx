import { useState, useEffect } from 'react';

export default function Navbar() {
    // Gestion et persistance du Dark Mode
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || 
                   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <nav className="fixed top-0 left-0 w-full h-20 px-6 md:px-12 flex items-center justify-between bg-white/90 dark:bg-amber-950/90 backdrop-blur-md border-b border-stone-100 dark:border-stone-800 transition-colors duration-300 z-50">
            
            {/* Logo - Style Salon de coiffure Premium */}
            <div className="flex flex-col cursor-pointer">
                <span className="text-2xl font-serif font-semibold tracking-wide text-stone-900 dark:text-amber-100 uppercase">
                    L'Atelier
                </span>
                <span className="text-[10px] tracking-[0.25em] text-amber-600 dark:text-amber-400 font-light uppercase -mt-1">
                    Haute Coiffure
                </span>
            </div>
            
            {/* Menu Central */}
            <div className="hidden md:flex items-center">
                <ul className="flex items-center gap-8 text-sm tracking-wider font-medium text-stone-600 dark:text-stone-300 uppercase">
                    <li className="cursor-pointer text-stone-900 dark:text-white font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-amber-600">
                        Accueil
                    </li>
                    <li className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        Prestations
                    </li>
                    <li className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        Galerie
                    </li>
                    <li className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        Le Salon
                    </li>
                    <li className="cursor-pointer hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        Contact
                    </li>
                </ul>
            </div>
            
            {/* Actions (Thème + Bouton de réservation) */}
            <div className="flex items-center gap-4">
                {/* Bouton Dark Mode */}
                <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-50 dark:bg-stone-900 text-lg border border-stone-200 dark:border-stone-800 transition-all active:scale-95 hover:bg-stone-100 dark:hover:bg-stone-800"
                    aria-label="Changer de thème"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>

                
                <button className="px-6 py-2.5 text-xs tracking-widest font-semibold uppercase text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-600 dark:hover:bg-amber-500 border border-transparent dark:border-amber-500 rounded-none shadow-sm transition-all duration-300 transform hover:-translate-y-0.5">
                    Réserver
                </button>
            </div>
        </nav>
    );
}