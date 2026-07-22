// import { motion } from "framer-motion";
// import LightGallery from "lightgallery/react";
// import type { LightGalleryProps } from "lightgallery/react";

// import lgZoom from "lightgallery/plugins/zoom";
// import lgThumbnail from "lightgallery/plugins/thumbnail";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// import { ZoomIn } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export default function GalleryExpertise() {
//   const lightGalleryProps: LightGalleryProps = {
//     speed: 500,
//     plugins: [lgZoom, lgThumbnail],
//   };

//   const galleryImages = [
//     { src: "/dressing.jpg", alt: "Précision de la découpe" },
//     { src: "/interieur.jpg", alt: "Sciage sur mesure" },
//     { src: "/escalier.jpg", alt: "Table & chaises en massif" },
//     { src: "/mirr.jpg", alt: "Finitions soignées" },
//     { src: "/pergola.jpg", alt: "Outillage de précision" },
//     { src: "/et.jpg", alt: "Pièces tournées en bois" },
//     { src: "/meuble.jpg", alt: "Plan de travail & conception" },
//     { src: "/mobilier.jpg", alt: "Détail quincaillerie bois" },
//     { src: "/finition.jpg", alt: "Assemblage artisanal" },
//     { src: "/planche.jpg", alt: "Sculpture au ciseau à bois" },
//     { src: "/style.jpg", alt: "Notre équipe au travail" },
//     { src: "/mm1.jpg", alt: "Outils traditionnels" },
//     { src: "/rr.jpg", alt: "Passion du métier" },
//     { src: "/r.jpg", alt: "Découpe de plateau massif" },
//     { src: "/porte.jpg", alt: "Intérieur de l'atelier" },
//     { src: "/console.jpg", alt: "Espace de finition" },
//     ...Array.from({ length: 32 }, (_, i) => ({
//       src: `/l${i + 1}.jpg`,
//       alt: "Réalisations menuiserie",
//     })),
//   ];

//   return (
//     <section className="relative min-h-screen py-12 md:py-20 bg-stone-50 dark:bg-stone-950 overflow-hidden">
//       <Navbar />

//       <div className="max-w-screen-2xl mx-auto px-3 sm:px-4">
//         <div className="text-center mb-12">
//           <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400">
//             Galerie
//           </span>
//           <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mt-3 text-stone-950 dark:text-stone-50">
//             Nos Réalisations
//           </h2>
//           <p className="mt-3 text-stone-600 dark:text-stone-400">
//             Cliquez sur les images pour les agrandir
//           </p>
//         </div>

//         {/* === STYLE PINTEREST - Masonry === */}
//         <LightGallery {...lightGalleryProps}>
//           <div className="columns-3 sm:columns-3 md:columns-4 lg:columns-5 gap-2 sm:gap-4 space-y-2 sm:space-y-4 pb-20">
//             {galleryImages.map((image, index) => (
//               <motion.a
//                 key={index}
//                 href={image.src}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.008 }}
//                 viewport={{ once: true }}
//                 className="relative block overflow-hidden rounded-3xl group cursor-pointer break-inside-avoid"
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
//                 />

//                 {/* Overlay + Zoom */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 <div className="absolute top-4 right-4 bg-white/90 dark:bg-stone-900/90 p-3 rounded-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
//                   <ZoomIn className="w-5 h-5 text-stone-700 dark:text-amber-400" />
//                 </div>

//                 <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl text-sm opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
//                   {image.alt}
//                 </div>
//               </motion.a>
//             ))}
//           </div>
//         </LightGallery>
//       </div>

//       {/* Section Philosophie */}
//       <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
//         <h2 className="text-3xl md:text-4xl font-serif font-light">
//           Le bois noble,{" "}
//           <span className="font-bold text-amber-600">sans aucun compromis</span>
//         </h2>
//         <p className="mt-6 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
//           Chaque pièce est pensée, taillée et finie avec passion pour durer
//           toute une vie.
//         </p>
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

import { ZoomIn } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GalleryExpertise() {
  const lightGalleryProps: LightGalleryProps = {
    speed: 500,
    plugins: [lgZoom, lgThumbnail],
    selector: ".gallery-item",
    download: false,
    counter: true,
  };

  const galleryImages = [
    { src: "/dressing.jpg", alt: "Précision de la découpe" },
    { src: "/interieur.jpg", alt: "Sciage sur mesure" },
    { src: "/escalier.jpg", alt: "Table & chaises en massif" },
    { src: "/mirr.jpg", alt: "Finitions soignées" },
    { src: "/pergola.jpg", alt: "Outillage de précision" },
    { src: "/et.jpg", alt: "Pièces tournées en bois" },
    { src: "/meuble.jpg", alt: "Plan de travail & conception" },
    { src: "/mobilier.jpg", alt: "Détail quincaillerie bois" },
    { src: "/finition.jpg", alt: "Assemblage artisanal" },
    { src: "/planche.jpg", alt: "Sculpture au ciseau à bois" },
    { src: "/style.jpg", alt: "Notre équipe au travail" },
    { src: "/mm1.jpg", alt: "Outils traditionnels" },
    { src: "/rr.jpg", alt: "Passion du métier" },
    { src: "/r.jpg", alt: "Découpe de plateau massif" },
    { src: "/porte.jpg", alt: "Intérieur de l'atelier" },
    { src: "/console.jpg", alt: "Espace de finition" },
    ...Array.from({ length: 32 }, (_, i) => ({
      src: `/l${i + 1}.jpg`,
      alt: "Réalisations menuiserie",
    })),
  ];

  return (
    <section className="relative min-h-screen py-12 md:py-20 bg-stone-50 dark:bg-stone-950 overflow-hidden">
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mt-3 text-stone-950 dark:text-stone-50">
            Nos Réalisations
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400">
            Cliquez sur les images pour les agrandir
          </p>
        </div>

        <LightGallery {...lightGalleryProps}>
          <div className="columns-3 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3 sm:gap-4 space-y-4 pb-20">
            {galleryImages.map((image, index) => (
              <motion.a
                key={index}
                href={image.src}
                data-src={image.src}
                className="gallery-item relative block overflow-hidden rounded-3xl group cursor-pointer break-inside-avoid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-stone-900/90 p-3 rounded-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <ZoomIn className="w-5 h-5 text-stone-700 dark:text-amber-400" />
                </div>

                {/* Légende */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl text-sm opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  {image.alt}
                </div>
              </motion.a>
            ))}
          </div>
        </LightGallery>
      </div>

      <Footer />
    </section>
  );
}
