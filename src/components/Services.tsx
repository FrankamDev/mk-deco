

import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import servicesData from '../servicesData';

type Service = {
  id: string | number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  featured?: boolean;
};

export default function Services() {
  const navigate = useNavigate();



  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const goToService = (id: string | number) => navigate(`/service/${id}`);

  return (
    <section className="relative py-20 md:py-28 bg-white dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* --- EN-TÊTE DE LA SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20 text-center md:text-left">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3">
              Le Menu MK Deco
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight">
              Nos Prestations <br className="hidden sm:inline" />
              <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-amber-700 to-stone-950 dark:from-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
                D'Exception
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 font-light max-w-sm md:text-right">
            Chaque formule comprend un diagnostic du cheveu, un shampoing soin adapté et une finition hydratante haute brillance.
          </p>
        </div>

        {/* --- GRILLE ASYMÉTRIQUE DES SERVICES (Bento Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {(servicesData as Service[]).map((service) => (
            <motion.div
              key={service.id}
              onClick={() => navigate(`/service/${service.id}`)}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col justify-between overflow-hidden border border-stone-100 dark:border-stone-900 bg-stone-50 dark:bg-stone-900/40 p-6 md:p-8 transition-all duration-300 cursor-pointer ${
                service.featured ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              {/* Numéro en arrière-plan */}
              <span className="absolute top-4 right-6 text-5xl md:text-6xl font-serif font-bold text-stone-200/40 dark:text-stone-800/20 select-none transition-colors duration-300">
                {service.id}
              </span>

              
              <div className="relative z-10">
                <div className="flex items-center gap-4 text-xs font-medium text-stone-500 dark:text-stone-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    {service.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Soin inclus
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-950 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Zone Image & Prix adaptative */}
              <div
                className={`mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between ${
                  service.featured ? 'lg:mt-12' : 'mt-8'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Mini Vignette Photo Ronde */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-stone-200 dark:border-stone-800 shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase font-light text-stone-500 dark:text-stone-400">Tarif</p>
                    <p className="text-lg font-bold text-stone-950 dark:text-amber-400 font-serif">{service.price}</p>
                  </div>
                </div>

                {/* Bouton d'action fléché */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Empêche le clic sur la carte de se déclencher en double
                    goToService(service.id);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-950 dark:bg-stone-800 text-white group-hover:bg-amber-600 dark:group-hover:bg-amber-600 text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300"
                >
                  Choisir
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}