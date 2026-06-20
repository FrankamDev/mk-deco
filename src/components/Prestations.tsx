import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import prestationData from '../prestationData';
import Navbar from './Navbar';
import Footer from './Footer';



export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

 

  const categories = ["Tous", "Tresses", "Soins", "Extensions", "Entretien", "Événements"];

  const filteredServices = activeCategory === "Tous" 
    ? prestationData
    : prestationData.filter(s => s.category === activeCategory);

  return (
    <section className="relative py-20 md:py-28 bg-white dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <Navbar />
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400"
          >
            L'Expérience NexaTress
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight text-stone-950 dark:text-stone-50 mt-4">
            Nos Prestations
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            30 prestations signature réalisées avec passion et expertise
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-stone-950 text-white dark:bg-amber-600 shadow-lg' 
                  : 'bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille des Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.6) }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {service.popular && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs px-4 py-1.5 font-semibold tracking-widest">POPULAIRE</div>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif font-semibold leading-tight text-stone-950 dark:text-stone-100 pr-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
                      <Star className="w-4 h-4 fill-current" /> {service.rating}
                    </div>
                  </div>

                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-6">
                    <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                    <div className="text-2xl font-serif font-bold text-amber-600 dark:text-amber-400">
                      {service.price}
                    </div>
                  </div>

                  <Link 
                    to={`/prestations/${service.id}`}
                    className="w-full py-4 border border-stone-300 dark:text-stone-200 dark:border-stone-700 hover:border-amber-600 hover:bg-amber-600 hover:text-white text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-all group-hover:border-amber-600"
                  >
                    DÉCOUVRIR
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </section>
  );
}