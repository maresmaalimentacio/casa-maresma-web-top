'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowUpRight, Smartphone, CheckCircle2 } from 'lucide-react';

// Componente para el contador animado blindado para SSR
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
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
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
            A Casa Maresma seleccionem origen, qualitat i tradició per oferir-te la millor experiència gastronòmica de proximitat. Tallat al teu gust, amb la confianza de sempre.
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

      {/* 🆕 SECCIÓ: APP CASA MARESMA (ESTIL APPLE / TESLA ULTRA MODERNA) */}
      <section className="py-28 bg-gradient-to-b from-black to-neutral-950 overflow-hidden border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA 1: MOCKUP SMARTPHONE AVANÇAT CON ANIMACIÓN */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center items-center w-full min-h-[500px]"
          >
            {/* Efecto halo de luz de fondo (Estilo Tesla/Apple) */}
            <div className="absolute w-72 h-72 bg-red-600/10 blur-[120px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

            {/* Chasis exterior del Smartphone */}
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-[280px] h-[570px] bg-neutral-900 rounded-[48px] p-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] border-4 border-neutral-800 flex-shrink-0"
            >
              {/* Pantalla interna reflectante */}
              <div className="w-full h-full bg-black rounded-[40px] overflow-hidden relative border border-neutral-950 flex flex-col justify-between p-6 style={{ backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)' }}">
                
                {/* Dynamic Island / Isla superior del móvil */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-4.5 bg-neutral-900 rounded-full z-20 flex items-center justify-end px-2">
                  <div className="w-1.5 h-1.5 bg-neutral-950 rounded-full border border-neutral-800/40" />
                </div>

                {/* Interfaz simulada de la APP (Estética Premium) */}
                <div className="mt-6 flex justify-between items-center z-10">
                  <span className="text-[10px] font-black tracking-widest text-neutral-400">CASA MARESMA</span>
                  <Smartphone size={12} className="text-red-500 animate-pulse" />
                </div>

                {/* Contenido Central del Mockup */}
                <div className="my-auto space-y-4 text-center z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-red-950/50">
                    <span className="text-xl font-black tracking-tighter text-white">CM</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">Targeta Client Digital</h4>
                    <p className="text-[10px] text-zinc-500 mt-1">Acumula punts i gaudeix de descomptes exclusius de barri.</p>
                  </div>
                  {/* Código QR simulado */}
                  <div className="w-28 h-28 bg-white p-2 rounded-xl mx-auto shadow-inner flex items-center justify-center opacity-90">
                    <div className="w-full h-full bg-cover" style={{ backgroundImage: "url('/placeholder-qr.png')", filter: "contrast(120%)" }} />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-400 block bg-zinc-900 py-1 rounded-md border border-white/5">ID: #8925_MARESMA</span>
                </div>

                {/* Estado inferior del móvil */}
                <div className="text-center pb-2 z-10">
                  <p className="text-[9px] text-zinc-600 font-mono">Des de 1989 al teu costat</p>
                </div>

                {/* Reflejo de cristal de la pantalla */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10" />
              </div>
            </motion.div>
          </motion.div>

          {/* COLUMNA 2: INFORMACIÓN CORPORATIVA Y ENLACES OFICIALES */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
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

            {/* Listado de características clave */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm font-medium"><strong className="text-white">Acumulació automàtica de punts:</strong> Cada compra suma avantatges directes per als teus propers talls.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm font-medium"><strong className="text-white">Promocions exclusives:</strong> Accedeix a ofertes i vals de descompte únics només per a usuaris de l'APP.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-zinc-300 text-sm font-medium"><strong className="text-white">Informació en temps real:</strong> Consulta l'horari de la teva botiga més propera i rep notificacions importants de barri.</p>
              </div>
            </div>

            {/* CONTENEDOR DE BOTONES DE DESCARGA OFICIALES (ESTILO TIENDA DE APLICACIONES) */}
            <div className="flex flex-wrap gap-4 pt-6">
              
              {/* Botón App Store (Apple) */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black hover:bg-zinc-900 text-white border border-zinc-800 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md w-48 group"
              >
                {/* Icono de Apple simulado de forma vectorial */}
                <svg className="w-6 h-6 text-white group-hover:text-red-500 transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-.99 2.94 1.07.08 2.16-.52 2.82-1.33z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Download on the</span>
                  <span className="text-sm font-bold block mt-0.5 tracking-tight">App Store</span>
                </div>
              </a>

              {/* Botón Google Play (Android) */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black hover:bg-zinc-900 text-white border border-zinc-800 px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md w-48 group"
              >
                {/* Icono de Google Play simulado de forma vectorial */}
                <svg className="w-6 h-6 text-white group-hover:text-red-500 transition-colors shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.783 12 3.609 22.186A2.33 2.33 0 0 1 3 20.485V3.515c0-.68.225-1.31.609-1.701zm11.238 9.132l3.415-3.414a2.203 2.203 0 0 1 0 3.102l-3.415.312zM4.735 1.092h11.236l-4.433 4.432L4.735 1.092zm7.575 12.04l4.433 4.433H4.735l6.837-5.595z" />
                </svg>
                <div className="text-left leading-none">
                  <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Get it on</span>
                  <span className="text-sm font-bold block mt-0.5 tracking-tight">Google Play</span>
                </div>
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}