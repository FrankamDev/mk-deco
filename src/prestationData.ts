type Service = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  popular?: boolean;
  rating: number;
};
const prestationData: Service[] = [
  {
    id: 1,
    title: "Table à Manger Massif",
    category: "Mobilier",
    description: "Table sur mesure en bois massif, finition soignée et robustesse longue durée.",
    duration: "5 - 7 jours",
    price: "13.000 FCFA",
    image: "./table.jpg",
    popular: true,
    rating: 4.9,
  },
  {
    id: 2,
    title: "Meuble TV Design",
    category: "Mobilier",
    description: "Meuble bas avec rangements et découpes géométriques complexes.",
    duration: "3 - 5 jours",
    price: "5.000 FCFA",
    image: "./meuble.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Banc & Assise Bois",
    category: "Mobilier",
    description: "Assises douces et naturelles pour un intérieur élégant et facile d'entretien.",
    duration: "3 - 4 jours",
    price: "7.000 FCFA",
    image: "./banc.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Dressing Sur-Mesure Premium",
    category: "Sur-Mesure",
    description: "Dressing entièrement personnalisé avec matériaux de haute qualité.",
    duration: "8 - 12 jours",
    price: "12.000 FCFA",
    image: "./dressing.jpg",
    popular: true,
    rating: 4.9,
  },
  
 

  {
    id: 5,
    title: "Meuble Technique Sur-Mesure",
    category: "Sur-Mesure",
    description: "Réalisation sur mesure en bois massif ou matériaux composites.",
    duration: "4 - 6 jours",
    price: "11.000 FCFA",
    image: "./meublee.jpg",
    rating: 4.7,
  },
  
  {
    id: 6,
    title: "Pose de Verrière Style Atelier",
    category: "Sur-Mesure",
    description: "Pose de verrière décorative sur mesure avec personnalisation.",
    duration: "3 - 4 jours",
    price: "12.000 FCFA",
    image: "./../public/table tv.jpg",
    popular: true,
    rating: 4.9,
  },
  {
    id: 7,
    title: "Extension de Terrasse Bois",
    category: "Extérieur",
    description: "Ajout de surface et volume avec structure en bois traité.",
    duration: "5 - 7 jours",
    price: "170.000 FCFA",
    image: "./../public/table tv.jpg",
    rating: 4.7,
  },
 
 
  
  {
    id: 8,
    title: "Plan de Travail Fin & Compact",
    category: "Cuisines",
    description: "Plans de travail fins et compacts avec finition soignée.",
    duration: "5 - 7 jours",
    price: "7.000 FCFA",
    image: "./../public/c2.jpg",
    rating: 4.7,
  },
  {
    id: 9,
    title: "Traitement Vernis Naturel",
    category: "Rénovation",
    description: "Traitement au vernis naturel pour lisser et protéger le bois.",
    duration: "1 jour",
    price: "13.000 FCFA",
    image: "/rr.jpg",
    rating: 4.8,
  },
 
  {
    id: 10,
    title: "Retouche Agencement Cuisine",
    category: "Cuisines",
    description: "Ajustement et entretien d'agencement de cuisine.",
    duration: "1 jour",
    price: "46.000 FCFA",
    image: "./c2.jpg",
    rating: 4.6,
  },
  {
    id: 11,
    title: "Retouche Agencement Cuisine",
    category: "Cuisines",
    description: "Ajustement et entretien d'agencement de cuisine.",
    duration: "1 jour",
    price: "46.000 FCFA",
    image: "./c1.jpg",
    rating: 4.6,
  },
  {
    id: 12,
    title: "Pergola Style Moderne",
    category: "Extérieur",
    description: "Style moderne et structuré pour vos aménagements extérieurs.",
    duration: "4 - 6 jours",
    price: "10.000 FCFA",
    image: "./../public/table tv.jpg",
    rating: 4.7,
  },
  {
    id: 13,
    title: "Finition Brillance & Protection",
    category: "Rénovation",
    description: "Finition illuminatrice pour une brillance exceptionnelle du bois.",
    duration: "1 jour",
    price: "3.000 FCFA",
    image: "/soin/s4.jpg",
    rating: 4.6,
  },
  
  
  {
    id: 14,
    title: "Forfait Rénovation Complète",
    category: "Rénovation",
    description: "Prestation complète : diagnostic, traitement et finition sur site.",
    duration: "6 - 8 jours",
    price: "5.000 FCFA",
    image: "/soin/s5.jpg",
    popular: true,
    rating: 5.0,
  },
 
];

export default prestationData;