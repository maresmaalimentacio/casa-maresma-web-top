'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight } from 'lucide-react';

// Componente para el contador animado corregido y blindado para SSR / Vercel Builds
const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Forzamos a que el ciclo de vida del contador solo se active una vez montado en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, mounted]);

  // Si se está compilando en servidor, renderiza el número final de forma estática para evitar parpadeos
  if (!mounted) return <span>{target.toLocaleString('es-ES')}</span>;

  return <span>{count.toLocaleString('es-ES')}</span>;
};

export default function Home() {
  // Las 6 tiendas reales oficiales de Casa Maresma
  const botigues = [
    {
      nom: "La Botigueta de La Rambla",
      ciutat: "Montcada i Reixac",
      direccio: "C/ Rambla Països Catalans, 4",
      cp: "08110",
      horari: "Dilluns: 17:00h - 20:30h | Dimarts a Divendres: 8:30h - 14:00h i 17:00h - 20:30h | Dissabte: 8:30h - 14:00h",
      telefon: "935 64 64 94",
      img: "/botiga-rambla.jpg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+La+Rambla+Montcada+i+Reixac"
    },
    {
      nom: "La Botigueta de Can Sant Joan",
      ciutat: "Montcada i Reixac",
      direccio: "C/ Masia, 8",
      cp: "08110",
      horari: "Dimarts a Divendres: 8:30h - 14:00h i 17:00h - 20:00h | Dissabte: 8:30h - 14:00h",
      telefon: "931 59 59 38",
      img: "/botiga-sant-joan.jpg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+Can+Sant+Joan+Montcada"
    },
    {
      nom: "La Botigueta del Carrer Major",
      ciutat: "Montcada i Reixac",
      direccio: "Carrer Major, 54",
      cp: "08110",
      horari: "Dimarts a Divendres: 8:30h - 14:00h i 17:00h - 20:00h | Dissabte: 8:30h - 14:00h",
      telefon: "938 58 61 66",
      img: "/botiga-major.jpg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+botigueta+del+Carrer+Major+Montcada"
    },
    {
      nom: "La Botigueta del Central",
      ciutat: "Sabadell",
      direccio: "Plaça Mercat, 1 (Parada 20-23)",
      cp: "08201",
      horari: "Dimarts a Dijous: 8:00h - 14:00h | Divendres: 8:00h - 20:00h | Dissabte: 8:00h - 14:30h",
      telefon: "937 25 51 36",
      img: "/botiga-central.jpg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+del+Central+Mercat+Sabadell"
    },
    {
      nom: "La Botigueta de la Llibertat",
      ciutat: "Barcelona",
      direccio: "Plaça de la Llibertat, 27 (Parada 15-20)",
      cp: "08012",
      horari: "Dimarts a Dijous: 8:00h - 14:30h | Divendres: 8:00h - 20:00h | Dissabte: 8:00h - 15:00h",
      telefon: "932 17 12 60",
      img: "/botiga-llibertat.jpg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+la+Llibertat+Mercat+Barcelona"
    },
    {
      nom: "La Botigueta d'En Quimet",
      ciutat: "Barcelona",
      direccio: "Av. de la República Argentina, 189",
      cp: "08023",
      horari: "Dilluns a Divendres: 8:30h - 14:00h i 17:00h - 20:30h | Dissabte: 8:30h - 14:00h",
      telefon: "934 17 26 54",
      img: "/botiga-quimet.jpg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+d+En+Quimet+Barcelona"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.55, ease: "easeOut" } 
    }
  };

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      
      {/* SECCIÓ: HERO */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center px-4" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/hero-image-rambla.png')" }}>
        <div className="max-w-4xl text-center z-10">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase bg-red-950/50 px-3 py-1 rounded-full border border-red-900">Des de 1989 al teu costat</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 mb-6">
            Menja millor.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Compra al teu barri.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A Casa Maresma seleccionem origen, qualitat i tradició per oferir-te la millor experiència gastronòmica de proximitat. Tallat al teu gust, amb la confiança de sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium px-8 py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-950/50 text-sm tracking-wide uppercase">Descobreix les botigues</button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-4 rounded-xl transition-all text-sm tracking-wide uppercase backdrop-blur-sm">La nostra història</button>
          </div>
        </div>
      </section>

      {/* SECCIÓ: EN XIFRES */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-black border-y border-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-red-500 mb-2">El nostre impacte</h2>
            <p className="text-3xl font-bold tracking-tight md:text-4xl text-white">Casa Maresma en xifres</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
                +<Counter target={35} />
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Anys d'història</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-2">
                +<Counter target={12000} />
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Clients feliços</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
                <Counter target={6} />
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Botigues físiques</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-2">
                <Counter target={100} />%
              </p>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Producte de proximitat</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓ: LES NOSTRES BOTIGUES */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-widest font-bold text-red-500 mb-2">Proximitat</h2>
            <p className="text-3xl font-bold tracking-tight md:text-5xl text-white">Vine a visitar-nos</p>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light text-base">
              Troba la teva botiga Casa Maresma més propera i gaudeix de la millor atenció personalitzada de sempre.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {botigues.map((botiga, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-neutral-900/30 border border-neutral-800/80 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:border-neutral-700"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-neutral-950">
                    <motion.img 
                      src={botiga.img} 
                      alt={botiga.nom}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.35 }}
                    />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md text-red-400 border border-white/5">
                      {botiga.ciutat}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-5 tracking-tight group-hover:text-red-500 transition-colors">
                      {botiga.nom}
                    </h3>
                    
                    <div className="space-y-4 text-gray-400 text-xs font-light">
                      <div className="flex items-start gap-3">
                        <MapPin size={15} className="text-neutral-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-gray-300">
                          {botiga.direccio}<br />
                          <span className="text-neutral-500">{botiga.cp} {botiga.ciutat}</span>
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock size={15} className="text-neutral-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-gray-400">{botiga.horari}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone size={15} className="text-neutral-500 shrink-0" />
                        <span className="font-mono text-gray-300">{botiga.telefon}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6 mt-4">
                  <a 
                    href={botiga.mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-neutral-800/50 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl transition-all text-xs uppercase tracking-wider border border-neutral-700/60 hover:border-red-600 group/btn"
                  >
                    <span>Com arribar-hi</span>
                    <ArrowUpRight size={13} className="text-neutral-400 group-hover/btn:text-white transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}