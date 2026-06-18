export default function Hero() {
    return (
        // bg-white devient bg-stone-950 en mode sombre
        <section className="min-h-screen pt-24 px-6 flex flex-col justify-center bg-white dark:bg-stone-950 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Le texte passe de stone-900 à amber-100 */}
                <h1 className="text-4xl md:text-6xl font-serif text-stone-900 dark:text-amber-100 uppercase tracking-wide">
                    Révélez votre éclat unique
                </h1>
                
                {/* Le sous-titre passe de stone-600 à stone-400 */}
                <p className="mt-6 text-lg text-stone-600 dark:text-stone-400 font-light max-w-xl mx-auto">
                    Une expérience de coiffure sur-mesure dans un cadre intime et chaleureux.
                </p>
                
            </div>
        </section>
    );
}