// import { motion } from "framer-motion";
// import LightGallery from "lightgallery/react";
// import type { LightGalleryProps } from "lightgallery/react";

// import lgZoom from "lightgallery/plugins/zoom";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import type { Variants } from "framer-motion";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// import { Award, CheckCircle2, Ruler, ShieldAlert, ZoomIn } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function GalleryExpertise() {
//   const textVariants: Variants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   const imageVariants: Variants = {
//     hidden: { opacity: 0, scale: 0.94 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   const lightGalleryProps: LightGalleryProps = {
//     speed: 500,
//     plugins: [lgZoom, lgThumbnail],
//     elementClassNames: "lg:col-span-7 grid grid-cols-12 gap-4 auto-rows-[130px] sm:auto-rows-[160px] lg:auto-rows-[175px]",
//   };

//   // Liste des photos — images libres de droits (Unsplash, usage commercial autorisé)
//   const galleryImages = [
//     { src: "dressing.jpg", alt: "Précision de la découpe", span: "col-span-8 row-span-2" },
//     { src: "interieur", alt: "Sciage sur mesure", span: "col-span-4 row-span-3" },
//     { src: "escalier.jpg", alt: "Table & chaises en massif", span: "col-span-4 row-span-1" },
//     { src: "mirr.jpg", alt: "Finitions soignées", span: "col-span-4 row-span-2" },
//     { src: "pergola.jpg", alt: "Outillage de précision", span: "col-span-4 row-span-1" },
//     { src: "et.jpg", alt: "Pièces tournées en bois", span: "col-span-6 row-span-2" },
//     { src: "meuble.jpg", alt: "Plan de travail & conception", span: "col-span-6 row-span-1" },
//     { src: "mobilier.jpg", alt: "Détail quincaillerie bois", span: "col-span-4 row-span-2" },
//     { src: "finition.jpg", alt: "Assemblage artisanal", span: "col-span-4 row-span-1" },
//     { src: "planche.jpg", alt: "Sculpture au ciseau à bois", span: "col-span-4 row-span-2" },
//     { src: "style.jpg", alt: "Notre équipe au travail", span: "col-span-6 row-span-2" },
//     { src: "mm1.jpg", alt: "Outils traditionnels", span: "col-span-6 row-span-1" },
//     { src: "rr.jpg", alt: "Passion du métier", span: "col-span-4 row-span-2" },
//     { src: "r.jpg", alt: "Découpe de plateau massif", span: "col-span-4 row-span-1" },
//     { src: "porte.jpg", alt: "Intérieur de l'atelier", span: "col-span-4 row-span-2" },
//     { src: "console.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l1.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l2.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l3.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l4.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l5.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l6.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l7.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l8.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l9.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l10.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l11.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l12.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l13.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l14.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l15.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l16.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l17.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l18.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l19.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l20.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l21.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l22.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l21.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l22.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l23.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l24.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l25.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l26.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l27.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l28.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l29.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l30.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l31.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//     { src: "l32.jpg", alt: "Espace de finition", span: "col-span-8 row-span-2" },
//   ];

//   return (
//     <section className="relative py-20 md:py-28 bg-stone-50 dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
//       <Navbar />

//       {/* Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] bg-amber-100/10 dark:bg-amber-950/5 rounded-full blur-[130px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* ===================== GALLERY ===================== */}
//           <div className="lg:col-span-7">
//             <div className="mb-8 text-center lg:text-left">
//               <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400">Galerie Signature</span>
//               <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-stone-950 dark:text-stone-50 mt-2">
//                 Nos Réalisations
//               </h2>
//               <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
//                 Cliquez sur les photos pour les agrandir
//               </p>
//             </div>

//             <LightGallery {...lightGalleryProps}>
//               {galleryImages.map((image, index) => (
//                 <motion.a
//                   key={index}
//                   href={image.src}
//                   variants={imageVariants}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   className={`relative overflow-hidden border border-stone-200/60 dark:border-stone-800 group cursor-pointer ${image.span}`}
//                 >
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                   />

//                   {/* Overlay sombre au hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   {/* Indicateur Zoom */}
//                   <div className="absolute top-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
//                     <ZoomIn className="w-5 h-5 text-stone-700 dark:text-amber-400" />
//                   </div>

//                   {/* Légende */}
//                   <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase font-semibold text-stone-950 dark:text-amber-400">
//                     {image.alt}
//                   </div>
//                 </motion.a>
//               ))}
//             </LightGallery>
//           </div>

//           {/* ===================== CONTENU TEXTE ===================== */}
//           <motion.div
//             className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start pt-8 lg:pt-12"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
//           >
//             <motion.span
//               variants={textVariants}
//               className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3"
//             >
//               Notre Philosophie
//             </motion.span>

//             <motion.h2
//               variants={textVariants}
//               className="text-3xl sm:text-4xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight leading-tight"
//             >
//               Le bois noble,
//               <br />
//               <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-amber-700 to-stone-950 dark:from-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
//                 Sans aucun compromis
//               </span>
//             </motion.h2>

//             <motion.p
//               variants={textVariants}
//               className="mt-6 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light max-w-xl leading-relaxed"
//             >
//               Chez Ébénia, nous croyons que la beauté d'un meuble ne doit jamais compromettre sa solidité.
//               Notre méthode signature est spécialement développée pour sublimer chaque fibre du bois et préserver sa durabilité dans le temps.
//             </motion.p>

//             <motion.div
//               variants={textVariants}
//               className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left"
//             >
//               <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
//                 <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
//                 <div>
//                   <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Essences Premium</h4>
//                   <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Bois massif sélectionné avec soin, sans défauts cachés.</p>
//                 </div>
//               </div>

//               <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
//                 <Ruler className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
//                 <div>
//                   <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Respect de la matière</h4>
//                   <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Techniques pensées pour préserver la fibre du bois.</p>
//                 </div>
//               </div>

//               <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
//                 <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
//                 <div>
//                   <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Conseils personnalisés</h4>
//                   <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Recommandations d'entretien adaptées à l'essence de votre mobilier.</p>
//                 </div>
//               </div>

//               <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
//                 <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
//                 <div>
//                   <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Garantie qualité</h4>
//                   <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Un résultat durable et une finition irréprochable.</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       <Footer />
//     </section>
//   );
// }

import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import type { LightGalleryProps } from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import {  ZoomIn } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GalleryExpertise() {
  const lightGalleryProps: LightGalleryProps = {
    speed: 500,
    plugins: [lgZoom, lgThumbnail],
  };

  const galleryImages = [
    { src: "dressing.jpg", alt: "Précision de la découpe" },
    { src: "interieur", alt: "Sciage sur mesure" },
    { src: "escalier.jpg", alt: "Table & chaises en massif" },
    { src: "mirr.jpg", alt: "Finitions soignées" },
    { src: "pergola.jpg", alt: "Outillage de précision" },
    { src: "et.jpg", alt: "Pièces tournées en bois" },
    { src: "meuble.jpg", alt: "Plan de travail & conception" },
    { src: "mobilier.jpg", alt: "Détail quincaillerie bois" },
    { src: "finition.jpg", alt: "Assemblage artisanal" },
    { src: "planche.jpg", alt: "Sculpture au ciseau à bois" },
    { src: "style.jpg", alt: "Notre équipe au travail" },
    { src: "mm1.jpg", alt: "Outils traditionnels" },
    { src: "rr.jpg", alt: "Passion du métier" },
    { src: "r.jpg", alt: "Découpe de plateau massif" },
    { src: "porte.jpg", alt: "Intérieur de l'atelier" },
    { src: "console.jpg", alt: "Espace de finition" },
    ...Array.from({ length: 32 }, (_, i) => ({
      src: `l${i + 1}.jpg`,
      alt: "Réalisations menuiserie",
    })),
  ];

  return (
    <section className="relative min-h-screen py-12 md:py-20 bg-stone-50 dark:bg-stone-950 overflow-hidden">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mt-3 text-stone-950 dark:text-stone-50">
            Nos Réalisations
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400">
            Cliquez sur les images pour les agrandir
          </p>
        </div>

        {/* === STYLE PINTEREST - Masonry === */}
        <LightGallery {...lightGalleryProps}>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4 pb-20">
            {galleryImages.map((image, index) => (
              <motion.a
                key={index}
                href={image.src}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.008 }}
                viewport={{ once: true }}
                className="relative block overflow-hidden rounded-3xl group cursor-pointer break-inside-avoid"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay + Zoom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 bg-white/90 dark:bg-stone-900/90 p-3 rounded-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <ZoomIn className="w-5 h-5 text-stone-700 dark:text-amber-400" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl text-sm opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  {image.alt}
                </div>
              </motion.a>
            ))}
          </div>
        </LightGallery>
      </div>

      {/* Section Philosophie */}
      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-light">
          Le bois noble,{" "}
          <span className="font-bold text-amber-600">sans aucun compromis</span>
        </h2>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Chaque pièce est pensée, taillée et finie avec passion pour durer
          toute une vie.
        </p>
      </div>

      <Footer />
    </section>
  );
}
