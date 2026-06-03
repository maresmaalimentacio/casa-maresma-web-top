'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight, Calendar, User, Mail } from 'lucide-react';

const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

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

  if (!mounted) return <span>{target.toLocaleString('es-ES')}</span>;

  return <span>{count.toLocaleString('es-ES')}</span>;
};

export default function Home() {
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

  const NoticiesEnllaços = [
    {
      titol: "Tradició i proximitat: Com seleccionem el millor producte per al teu barri",
      resum: "Et comptem el procés darrere de la nostra selecció diària. Des de l'origen a les nostres deveses de confiança fins al tall personalitzat a la teva botiga.",
      data: "02 Juny, 2026",
      autor: "Casa Maresma",
      categoria: "Qualitat",
      img: "/blog-noticia-1.webp"
    },
    {
      titol: "Nova APP Oficial: La teva targeta de client ara és 100% digital",
      resum: "Estrenem aplicació mòbil per estar més a prop teu. Descobreix com acumular punts amb cada compra de barri i accedir a descomptes exclusius.",
      data: "28 Maig, 2026",
      autor: "Equip Digital",
      categoria: "Novetat",
      img: "/blog-noticia-2.webp"
    },
    {
      titol: "Receptes de sempre: Claus per preparar un dinar tradicional perfecte",
      resum: "Els nostres experts t'ofereixen trucs clàssics de cuina i consells de preparació per treure el màxim partit als nostres elaborats artesans.",
      data: "15 Maig, 2026",
      autor: "Xef Maresma",
      categoria: "Consells",
      img: "/blog-noticia-3.webp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
  };

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center px-4" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/hero-image-rambla.png')" }}>
        <div className="max-w-4xl text-center z-10">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase bg-red-950/50 px-3 py-1 rounded-full border border-red-900">Des de 2014 al teu costat</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 mb-6">
            Menja millor.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Compra al teu barri.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A Casa Maresma seleccionem origen, qualitat i tradició per oferir-te la millor experiència gastronòmica de proximitat. Tallat al teu gust, amb la confianza de sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium px-8 py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-950/50 text-sm tracking-wide uppercase">Descobreix les botigues</button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-4 rounded-xl transition-all text-sm tracking-wide uppercase backdrop-blur-sm">La nostra història</button>
          </div>
        </div>
      </section>

      {/* EN XIFRES */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-black border-y border-neutral-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-red-500 mb-2">El nostre impacte</h2>
            <p className="text-3xl font-bold tracking-tight md:text-4xl text-white">Casa Maresma en xifres</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
                +<Counter target={12} />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Anys d'història</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-2">
                +<Counter target={6000} />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Clients feliços</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
                <Counter target={6} />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Botigues físiques</p>
            </div>
            <div className="bg-neutral-900/40 border border-neutral-900 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-2">
                <Counter target={100} />%
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Producte de proximitat</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTIGUES */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-widest font-bold text-red-500 mb-2">Proximitat</h2>
            <p className="text-3xl font-bold tracking-tight md:text-5xl text-white">Vine a visitar-nos</p>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light text-base">
              Troba la teva botiga Casa Maresma mais propera i gaudeix de la millor atenció personalitzada de sempre.
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
                        <MapPin className="text-neutral-500 shrink-0 mt-0.5" size={15} />
                        <span className="leading-relaxed text-gray-300">
                          {botiga.direccio}<br />
                          <span className="text-neutral-500">{botiga.cp} {botiga.ciutat}</span>
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="text-neutral-500 shrink-0 mt-0.5" size={15} />
                        <span className="leading-relaxed text-gray-400">{botiga.horari}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="text-neutral-500 shrink-0" size={15} />
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
                    <ArrowUpRight className="text-neutral-400 group-hover/btn:text-white transition-colors" size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* APP */}
      <section className="py-28 bg-gradient-to-b from-black to-neutral-950 overflow-hidden border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center w-full min-h-[500px]"
          >
            <div className="absolute w-80 h-80 bg-red-600/10 blur-[130px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[600px] lg:max-w-[950px] h-auto z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
            >
              <img src="/app-mockup-isometric.png" alt="App Casa Maresma Premium Mockup" className="w-full h-auto object-contain" />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase block">Fidelització Digital</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
                Tots els avantatges,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-zinc-600">ara al teu telèfon.</span>
              </h3>
              <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed pt-2">
                Hem digitalitzat la nostra clàssica targeta de client perquè estalviar sigui més fàcil que mai. Descarrega l'aplicació oficial de Casa Maresma i emporta't la teva botiga de confiança a la butxaca.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-zinc-300 text-sm font-medium"><strong className="text-white">Acumulació automàtica de punts:</strong> Cada compra suma avantatges directes per als teus propers talls.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-zinc-300 text-sm font-medium"><strong className="text-white">Promocions exclusives:</strong> Accedeix a ofertes i vals de descompte uniques només per a usuaris de l'APP.</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <p className="text-zinc-300 text-sm font-medium"><strong className="text-white">Informació en temps real:</strong> Consulta l'horari de la teva botiga més propera i rep notificacions importants de barri.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#" className="bg-black hover:bg-zinc-900 text-white border border-zinc-800 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md w-48 group">
                <svg className="w-6 h-6 text-white group-hover:text-red-500 transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z" /></svg>
                <div className="text-left leading-none">
                  <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Download on the</span>
                  <span className="text-sm font-bold block mt-0.5 tracking-tight">App Store</span>
                </div>
              </a>
              <a href="#" className="bg-black hover:bg-zinc-900 text-white border border-zinc-800 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md w-48 group">
                <svg className="w-6 h-6 text-white group-hover:text-red-500 transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.783 12 3.609 22.186A2.33 2.33 0 0 1 3 20.485V3.515c0-.68.225-1.31.609-1.701zm11.238 9.132l3.415-3.414a2.203 2.203 0 0 1 0 3.102l-3.415.312zM4.735 1.092h11.236l-4.433 4.432L4.735 1.092zm7.575 12.04l4.433 4.433H4.735l6.837-5.595z" /></svg>
                <div className="text-left leading-none">
                  <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Get it on</span>
                  <span className="text-sm font-bold block mt-0.5 tracking-tight">Google Play</span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase block">Actualitat</span>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-white">El Blog de Casa Maresma</h2>
            </div>
            <p className="text-zinc-400 font-light text-base max-w-md md:text-right">
              Notícies, novetats i consells gastronòmics per aprofitar al màxim els nostre productes de barri.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {NoticiesEnllaços.map((noticia, idx) => (
              <motion.article
                key={idx}
                variants={cardVariants}
                className="bg-neutral-900/20 border border-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-neutral-800 transition-all duration-300"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-neutral-950">
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md z-10 shadow-md">
                      {noticia.categoria}
                    </div>
                    <motion.img 
                      src={noticia.img} 
                      alt={noticia.titol}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-zinc-500 text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        <span>{noticia.data}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={13} />
                        <span>{noticia.autor}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-red-500 transition-colors duration-300 line-clamp-2 leading-snug">
                      {noticia.titol}
                    </h3>

                    <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-3">
                      {noticia.resum}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a href="/blog" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white group-hover:text-red-400 transition-colors border-b border-white/10 pb-1 group-hover:border-red-400/40">
                    <span>Llegir més</span>
                    <ArrowUpRight className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10 text-zinc-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* COLUMNA 1: LOGO Y REDES */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              {/* Cambia '/logo.png' por la ruta exacta de la imagen que usas en la Navbar */}
              <img src="/logo-casa-maresma.png" alt="Casa Maresma" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm font-normal leading-relaxed text-zinc-400 max-w-xs">
              Selecció, tradició i qualitat des del cor del teu barri. Compromesos amb el producte de proximitat i el servei personalitzat de confiança.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {/* Instagram */}
              <a href="https://www.instagram.com/casamaresma/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors" title="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/casamaresma" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors" title="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@casamaresma" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors" title="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5h-3a2 2 0 0 1-2-2V4h-2v12a4 4 0 0 0-4-4z" /></svg>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓ */}
          <div className="space-y-4">
            <h4 className="text-base uppercase font-bold tracking-widest text-white">Navegació</h4>
            <ul className="space-y-3 text-sm font-normal text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Inici</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Les nostres botigues</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Descarrega l'APP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">El nostre Blog</a></li>
            </ul>
          </div>

          {/* COLUMNA 3: BOTIGUES (NUEVA) */}
          <div className="space-y-4">
            <h4 className="text-base uppercase font-bold tracking-widest text-white">Botigues</h4>
            <ul className="space-y-3 text-sm font-normal text-zinc-400">
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+La+Rambla+Montcada+i+Reixac" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors block">
                  La Rambla <span className="text-xs text-zinc-500">(Montcada)</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+Can+Sant Joan+Montcada" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors block">
                  Can Sant Joan <span className="text-xs text-zinc-500">(Montcada)</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=La+botigueta+del+Carrer+Major+Montcada" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors block">
                  Carrer Major <span className="text-xs text-zinc-500">(Montcada)</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=La+Botigueta+del+Central+Mercat+Sabadell" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors block">
                  Mercat Central <span className="text-xs text-zinc-500">(Sabadell)</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+la+Llibertat+Mercat+Barcelona" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors block">
                  Mercat de la Llibertat <span className="text-xs text-zinc-500">(Bcn)</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=La+Botigueta+d+En+Quimet+Barcelona" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors block">
                  Av. República Argentina <span className="text-xs text-zinc-500">(Bcn)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTE */}
          <div className="space-y-4">
            <h4 className="text-base uppercase font-bold tracking-widest text-white">Contacte</h4>
            <ul className="space-y-4 text-sm font-normal text-zinc-400">
              <li className="flex items-center gap-3">
                <Mail className="text-zinc-500 shrink-0" size={16} />
                <a href="mailto:info@casamaresma.cat" className="hover:text-white transition-colors">info@casamaresma.cat</a>
              </li>
              <li className="flex items-center gap-3 font-mono">
                <Phone className="text-zinc-500 shrink-0" size={16} />
                <span className="text-zinc-200">935 64 64 94</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-zinc-500 shrink-0 mt-0.5" size={16} />
                <span className="text-zinc-400">Barcelona i voltants</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIOR DE COPYRIGHT */}
        <div className="max-w-7xl mx-auto px-6 border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-zinc-500">
          <p>© {new Date().getFullYear()} Casa Maresma. Des de 2014 al teu costat.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Avís Legal</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Política de Privacitat</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

    </main>
  );
}