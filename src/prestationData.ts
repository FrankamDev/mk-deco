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
    { id: 1, title: "Box Braids Longues", category: "Tresses", description: "Tresses classiques avec mèches premium, finition parfaite et tenue longue durée.", duration: "5h - 7h", price: "190€", image: "/services/box-braids.jpg", popular: true, rating: 4.9 },
    { id: 2, title: "Cornrows Design", category: "Tresses", description: "Nattes collées avec motifs géométriques complexes.", duration: "3h30 - 5h", price: "145€", image: "/services/cornrows.jpg", rating: 4.8 },
    { id: 3, title: "Twists / Vanilles", category: "Tresses", description: "Twists doux et naturels pour un look élégant et facile d'entretien.", duration: "3h - 4h30", price: "130€", image: "/services/twists.jpg", rating: 4.7 },
    { id: 4, title: "Fausses Locks (Faux Locs)", category: "Tresses", description: "Locks temporaires ultra-réalistes avec mèches de haute qualité.", duration: "6h - 8h", price: "230€", image: "/services/faux-locs.jpg", popular: true, rating: 4.9 },
    { id: 5, title: "Tresses Jumbo", category: "Tresses", description: "Tresses épaisses et volumineuses pour un effet spectaculaire.", duration: "3h - 4h30", price: "125€", image: "/services/jumbo.jpg", rating: 4.6 },
    { id: 6, title: "Knotless Box Braids", category: "Tresses", description: "Box Braids sans nœuds à la racine pour plus de confort.", duration: "5h - 7h", price: "210€", image: "/services/knotless.jpg", popular: true, rating: 4.9 },
    { id: 7, title: "Passion Twists", category: "Tresses", description: "Twists légers et volumineux avec un rendu bohème chic.", duration: "4h - 5h30", price: "165€", image: "/services/passion-twists.jpg", rating: 4.8 },
    { id: 8, title: "Tresses Crochets (Crochet Braids)", category: "Tresses", description: "Technique au crochet avec cheveux synthétiques ou naturels.", duration: "4h - 6h", price: "175€", image: "/services/crochet.jpg", rating: 4.7 },
    { id: 9, title: "Soin Profond + Reconstruction", category: "Soins", description: "Soin intensif avec protéines et hydratation profonde.", duration: "1h45", price: "75€", image: "/services/soin-profond.jpg", rating: 4.8 },
    { id: 10, title: "Pose de Perruque HD Lace", category: "Extensions", description: "Pose de perruque lace frontale invisible avec personnalisation.", duration: "3h - 4h30", price: "195€", image: "/services/perruque-hd.jpg", popular: true, rating: 4.9 },
    { id: 11, title: "Extensions de Tresses", category: "Extensions", description: "Ajout de longueur et volume avec tresses protectrices.", duration: "5h - 7h", price: "260€", image: "/services/extensions-tresses.jpg", rating: 4.7 },
    { id: 12, title: "Braids Mi-Longues", category: "Tresses", description: "Tresses mi-longues élégantes et légères.", duration: "4h - 5h", price: "155€", image: "/services/braids-milongues.jpg", rating: 4.6 },
    { id: 13, title: "Tresses avec Perles & Accessoires", category: "Tresses", description: "Tresses décorées avec perles, bijoux et accessoires.", duration: "4h30 - 6h", price: "170€", image: "/services/braids-perles.jpg", rating: 4.8 },
    { id: 14, title: "Masque Capillaire Luxe", category: "Soins", description: "Masque personnalisé avec huiles rares et actifs précieux.", duration: "1h15", price: "55€", image: "/services/masque-luxe.jpg", rating: 4.5 },
    { id: 15, title: "Weave / Pose de Tissages", category: "Extensions", description: "Pose de tissages naturels ou synthétiques.", duration: "3h - 5h", price: "180€", image: "/services/weave.jpg", rating: 4.6 },
    { id: 16, title: "Tresses Fulani", category: "Tresses", description: "Style traditionnel Fulani avec motifs authentiques.", duration: "4h - 6h", price: "160€", image: "/services/fulani.jpg", rating: 4.7 },
    { id: 17, title: "Coloration + Tresses", category: "Coloration", description: "Coloration professionnelle + pose de tresses.", duration: "5h - 7h", price: "240€", image: "/services/coloration.jpg", rating: 4.8 },
    { id: 18, title: "Retouche Box Braids", category: "Entretien", description: "Retouche et réajustement des tresses existantes.", duration: "2h30 - 4h", price: "90€", image: "/services/retouche.jpg", rating: 4.5 },
    { id: 19, title: "Tresses Enfant (6-12 ans)", category: "Enfants", description: "Tresses adaptées aux enfants avec soin particulier.", duration: "2h - 3h", price: "75€", image: "/services/enfants.jpg", rating: 4.9 },
    { id: 20, title: "Soin Anti-Chute", category: "Soins", description: "Traitement renforçant contre la chute de cheveux.", duration: "1h30", price: "85€", image: "/services/anti-chute.jpg", rating: 4.7 },
    { id: 21, title: "Braids avec Laine", category: "Tresses", description: "Tresses avec laine pour volume et texture unique.", duration: "4h - 6h", price: "135€", image: "/services/braids-laine.jpg", rating: 4.6 },
    { id: 22, title: "Pose de Clip-Ins", category: "Extensions", description: "Extensions temporaires à clips pour un volume instantané.", duration: "1h30 - 2h30", price: "120€", image: "../../public/men/1.jpg", rating: 4.5 },
    { id: 23, title: "Tresses Sénégalaises", category: "Tresses", description: "Tresses fines et serrées style sénégalais.", duration: "5h - 7h", price: "155€", image: "/services/senegalaise.jpg", rating: 4.7 },
    { id: 24, title: "Soins Kératine", category: "Soins", description: "Traitement à la kératine pour lisser et renforcer.", duration: "2h30", price: "180€", image: "/services/keratine.jpg", rating: 4.8 },
    { id: 25, title: "Tresses Mixtes (Braids + Twists)", category: "Tresses", description: "Création mixte combinant plusieurs techniques.", duration: "5h - 6h30", price: "195€", image: "/services/mixtes.jpg", rating: 4.8 },
    { id: 26, title: "Retouche Perruque", category: "Entretien", description: "Ajustement et entretien de perruque.", duration: "1h30", price: "70€", image: "/services/retouche-perruque.jpg", rating: 4.6 },
    { id: 27, title: "Braids avec Rasta", category: "Tresses", description: "Style rasta moderne et structuré.", duration: "4h30 - 6h", price: "165€", image: "/services/rasta.jpg", rating: 4.7 },
    { id: 28, title: "Soin Brillance & Hydratation", category: "Soins", description: "Soin illuminateur pour une brillance exceptionnelle.", duration: "1h", price: "60€", image: "/services/brillance.jpg", rating: 4.6 },
    { id: 29, title: "Tresses Courtes Chic", category: "Tresses", description: "Tresses courtes modernes et sophistiquées.", duration: "3h - 4h", price: "110€", image: "/services/courtes.jpg", rating: 4.5 },
    { id: 30, title: "Forfait Mariage", category: "Événements", description: "Prestation complète pour mariée : tresses + coiffure + maquillage.", duration: "6h - 8h", price: "450€", image: "/services/mariage.jpg", popular: true, rating: 5.0 },
  ];

  export default prestationData