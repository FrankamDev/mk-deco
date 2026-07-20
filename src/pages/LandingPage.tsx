
import { 
  ArrowRight, ShieldAlert, CheckCircle2, Layers, 
  Paintbrush, Cpu, Check, PhoneCall 
} from 'lucide-react';
import { 
  HERO_CONTENT, PROBLEMS_DATA, SERVICES_DATA, 
  PACKAGES_DATA, PROCESS_DATA, PORTFOLIO_DATA, 
  VALUES_DATA 
} from './data';

export default function LandingPage() {
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${HERO_CONTENT.whatsappNumber}?text=${encodeURIComponent(HERO_CONTENT.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-white font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16">
          <div className="lg:col-span-7 text-left space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/80 border border-slate-700/50 text-[11px] font-mono tracking-widest text-emerald-400 uppercase rounded-full">
              ⚡ Partenaire d'Ingénierie Digitale
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-xl">
              {HERO_CONTENT.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={openWhatsApp}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 rounded-none shadow-xl shadow-emerald-500/10"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-400 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-none"
              >
                {HERO_CONTENT.secondaryCta}
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="border border-slate-800 bg-slate-950/60 backdrop-blur-md p-6 shadow-2xl relative group overflow-hidden rounded-none">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-500" />
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[10px] font-mono text-slate-500">core-architecture.ts</span>
              </div>
              <pre className="text-[11px] font-mono text-slate-400 leading-relaxed overflow-x-auto">
                <code>{`// Écosystème Haute Performance
const EnterpriseApp = {
  frontend: "React + TypeScript",
  styling: "Tailwind CSS (Atomic Design)",
  optimization: "SSR & Edge Caching",
  security: "End-to-End Encryption",
  businessGoal: "High_Conversion_Rate",
  
  status: "READY_TO_SCALE"
};

export default EnterpriseApp;`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION PROBLÈMES */}
      <section className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-rose-500 uppercase font-bold">Le Constat</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Est-ce que votre dispositif digital actuel freine votre business ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEMS_DATA.map((prob) => (
              <div key={prob.id} className="p-6 bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="p-2 w-fit bg-rose-500/10 text-rose-400">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">{prob.title}</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{prob.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-900 text-[11px] font-mono text-rose-500 uppercase tracking-widest font-semibold">
                  {prob.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION SOLUTIONS / SERVICES */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">Solutions Métiers</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Une ingénierie complète au service de votre croissance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="p-8 bg-slate-950 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700/60 transition-all shadow-xl">
                <div className="space-y-4">
                  <div className="p-3 w-fit bg-emerald-500/10 text-emerald-400">
                    {service.iconName === 'web' && <Layers className="w-5 h-5" />}
                    {service.iconName === 'stack' && <Cpu className="w-5 h-5" />}
                    {service.iconName === 'design' && <Paintbrush className="w-5 h-5" />}
                    {service.iconName === 'digital' && <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{service.description}</p>
                </div>
                <ul className="mt-8 space-y-2.5 pt-6 border-t border-slate-900">
                  {service.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs text-slate-300">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION OFFRES / PACKAGES */}
      <section className="py-24 bg-slate-950 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">Grille de Tarification</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Des packages transparents calibrés pour vos besoins</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PACKAGES_DATA.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`p-8 border relative flex flex-col justify-between ${
                  pkg.isPopular 
                    ? 'bg-slate-900 border-emerald-500 shadow-2xl shadow-emerald-500/5' 
                    : 'bg-slate-900/40 border-slate-800'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 bg-emerald-500 text-slate-950 text-[9px] font-mono font-black uppercase tracking-widest">
                    Recommandé
                  </span>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wider text-white">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed">{pkg.tagline}</p>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-slate-800/60">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300 leading-normal">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <button 
                    onClick={openWhatsApp}
                    className={`w-full py-3.5 text-xs font-bold uppercase tracking-widest transition-all ${
                      pkg.isPopular 
                        ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' 
                        : 'bg-transparent border border-slate-700 hover:border-slate-500 text-white'
                    }`}
                  >
                    Obtenir un devis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION PROCESSUS */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">Méthodologie</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Un workflow chirurgical, étape par étape</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {PROCESS_DATA.map((step, i) => (
              <div key={i} className="p-6 bg-slate-950 border border-slate-800/60 relative group">
                <div className="text-3xl font-mono font-black text-slate-800 group-hover:text-emerald-500/20 transition-colors absolute top-4 right-6">
                  {step.phase}
                </div>
                <div className="space-y-3 pr-10">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">Réalisations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Des architectures de pointe déjà en production</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.map((project) => (
              <div key={project.id} className="group relative overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer">
                <div className="h-64 sm:h-80 overflow-hidden relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md text-[9px] font-mono tracking-widest uppercase border border-slate-800 text-slate-300">
                    {project.tag}
                  </span>
                </div>
                <div className="p-6 flex items-center justify-between bg-slate-900 border-t border-slate-800/80">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 block">{project.category}</span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  </div>
                  <div className="p-2 border border-slate-800 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION POURQUOI ME CHOISIR */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold">Vision & Rigueur</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Pourquoi me confier l'avenir technique de votre business ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES_DATA.map((val, idx) => (
              <div key={idx} className="space-y-3 p-6 bg-slate-950/40 border border-slate-800/50">
                <div className="w-1.5 h-6 bg-emerald-500" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white pt-2">{val.title}</h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION FINAL */}
      <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none">
            Votre prochain projet digital <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">commence maintenant.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Pas de réunions interminables. Analysons votre besoin métier, établissons un périmètre d'exécution clair et lançons le développement de votre actif technologique sous 7 jours.
          </p>
          <div className="pt-4">
            <button 
              onClick={openWhatsApp}
              className="mx-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 rounded-none shadow-2xl shadow-emerald-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Parlons de votre projet</span>
            </button>
          </div>
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest pt-8">
            DISPONIBILITÉ ACTUELLE : LIMITÉE À 2 PROJETS SIMULTANÉS
          </div>
        </div>
      </section>

      {/* FOOTER BASIQUE MINI */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900/60 text-center text-[10px] font-mono text-slate-600 uppercase tracking-wider">
        © {new Date().getFullYear()} // Full Stack Freelance Architecture — Tous droits réservés.
      </footer>

    </div>
  );
}