// data.ts

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  metric: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: 'web' | 'stack' | 'design' | 'digital';
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  priceEstimate?: string;
  features: string[];
  isPopular: boolean;
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  tag: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export const HERO_CONTENT = {
  title: "Des solutions digitales qui transforment vos idées en croissance.",
  subtitle: "Développement web, applications et expériences digitales conçues pour aider les entreprises à attirer plus de clients et optimiser leurs activités.",
  primaryCta: "Discuter de mon projet",
  secondaryCta: "Voir mes réalisations",
  whatsappNumber: "237690461830",
  whatsappMessage: "Bonjour, je viens de voir votre site et j'aimerais discuter d'un projet digital avec vous."
};

export const PROBLEMS_DATA: ProblemItem[] = [
  {
    id: "p1",
    title: "Manque de visibilité en ligne",
    description: "Vos concurrents captent toute la part de marché digitale simplement parce qu'ils sont plus faciles à trouver.",
    metric: "-45% d'opportunités"
  },
  {
    id: "p2",
    title: "Processus non digitalisés",
    description: "Vos équipes perdent des heures précieuses sur des tâches manuelles répétitives sans aucune automatisation.",
    metric: "Loss of productivity"
  },
  {
    id: "p3",
    title: "Site web dépassé ou lent",
    description: "Une interface obsolète qui détruit votre crédibilité de marque dès les 3 premières secondes de visite.",
    metric: "80% de rebond"
  },
  {
    id: "p4",
    title: "Difficulté à attirer des clients",
    description: "Aucun tunnel d'acquisition clair pour convertir vos simples visiteurs curieux en clients qualifiés.",
    metric: "Stagnation business"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "s1",
    title: "Développement Web",
    description: "Des infrastructures web sur mesure pensées pour la conversion immédiate et la fluidité absolue.",
    features: ["Sites vitrines d'exception", "Applications web réactives", "Plateformes personnalisées"],
    iconName: "web"
  },
  {
    id: "s2",
    title: "Full Stack Development",
    description: "Une ingénierie robuste du front-end jusqu'à la conception de vos serveurs de données.",
    features: ["Frontend moderne (React)", "Backend sécurisé & évolutif", "APIs RESTful / GraphQL", "Bases de données managées"],
    iconName: "stack"
  },
  {
    id: "s3",
    title: "Design & Branding",
    description: "Une direction artistique pointue alignée avec les objectifs de croissance de votre entreprise.",
    features: ["Interfaces UI/UX immersives", "Identités visuelles & Logos", "Supports marketing digitaux"],
    iconName: "design"
  },
  {
    id: "s4",
    title: "Solutions Digitales",
    description: "Optimisation globale de votre écosystème pour maximiser votre présence sur le marché local et international.",
    features: ["Visibilité Google Business", "Automatisations de workflows", "Audits de performance digitale"],
    iconName: "digital"
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "pkg1",
    name: "STARTER",
    tagline: "Pour les petites entreprises & professionnels indépendants.",
    features: [
      "Site vitrine professionnel d'élite",
      "Design entièrement responsive",
      "Formulaire de contact dynamique & sécurisé",
      "Optimisation mobile avancée",
      "Mise en place Google Analytics & Pixel"
    ],
    isPopular: false
  },
  {
    id: "pkg2",
    name: "BUSINESS",
    tagline: "Pour les entreprises en croissance nécessitant des outils opérationnels.",
    features: [
      "Site web avancé ou E-commerce",
      "Dashboard d'administration privé",
      "Base de données centralisée",
      "Fonctionnalités personnalisées sur mesure",
      "Optimisation SEO & Vitesse poussée"
    ],
    isPopular: true
  },
  {
    id: "pkg3",
    name: "PREMIUM",
    tagline: "Pour les structures exigeant une infrastructure métier exclusive.",
    features: [
      "Application web complète (SaaS / Métier)",
      "Architecture cloud hautement personnalisée",
      "Intégration et développement d'APIs tierces",
      "Sécurité renforcée et chiffrement",
      "Accompagnement stratégique & Support dédié"
    ],
    isPopular: false
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  { phase: "01", title: "Analyse du besoin", description: "Audit complet de vos objectifs business et cadrage technique." },
  { phase: "02", title: "Conception", description: "Prototypage UI/UX et validation de l'architecture logicielle." },
  { phase: "03", title: "Développement", description: "Codage propre, modulaire et hautement documenté (React/TS)." },
  { phase: "04", title: "Tests", description: "Assurance qualité globale, tests de charge, sécurité et vélocité." },
  { phase: "05", title: "Livraison", description: "Déploiement en production sur serveurs cloud haute disponibilité." },
  { phase: "06", title: "Accompagnement", description: "Suivi des métriques, maintenance et optimisation continue." }
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  { id: "pr1", title: "Plateforme Fintech Cameroun", category: "Application Web", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", tag: "SaaS" },
  { id: "pr2", title: "E-Commerce Luxe", category: "Sites Web", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", tag: "Design & Dev" },
  { id: "pr3", title: "Espace Client Omnicanal", category: "Designs", imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80", tag: "UI/UX" },
  { id: "pr4", title: "Système d'Automatisation Logistique", category: "Projets Digitaux", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", tag: "Backend/API" }
];

export const VALUES_DATA: ValueItem[] = [
  { title: "Approche orientée business", description: "Chaque ligne de code écrite a pour unique but de générer de la valeur, des prospects et du chiffre d'affaires pour votre structure." },
  { title: "Code propre et scalable", description: "Utilisation exclusive des meilleurs standards de l'industrie permettant à votre produit d'évoluer sans jamais devoir tout réécrire." },
  { title: "Design professionnel", description: "Des interfaces épurées, modernes et exclusives inspirées des géants du numérique mondial pour asseoir votre autorité." },
  { title: "Communication claire", description: "Pas de jargon technique incompréhensible. Des bilans réguliers, de la transparence absolue et un respect strict des délais." },
  { title: "Solutions personnalisées", description: "Pas de templates préconçus ou de solutions génériques. Votre logiciel est moulé précisément sur vos processus métiers." }
];