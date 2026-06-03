'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowRight, SlidersHorizontal } from 'lucide-react';

// Datos de las tiendas con su 'slug' para las futuras páginas individuales
const botiguesData = [
  {
    slug: "la-rambla",
    nom: "La Botigueta de La Rambla",
    ciutat: "Montcada",
    direccio: "C/ Rambla Països Catalans, 4",
    cp: "08110",
    horari: "Dilluns: 17:00h - 20:30h | Dimarts a Divendres: 8:30h - 14:00h i 17:00h - 20:30h | Dissabte: 8:30h - 14:00h",
    telefon: "935 64 64 94",
    img: "/botiga-rambla.jpg", // Asegúrate de tener estas fotos en public/ o cámbialas
    mida: "lg:col-span-2 lg:row-span-2" // Tarjeta grande destacada
  },
  {
    slug: "mercat-de-la-llibertat",
    nom: "La Botigueta de la Llibertat",
    ciutat: "Barcelona",
    direccio: "Plaça de la Llibertat, 27 (Parada 15-20)",
    cp: "08012",
    horari: "Dimarts a Dijous: 8:00h - 14:30h | Divendres: 8:00h - 20:00h | Dissabte: 8:00h - 15:00h",
    telefon: "932 17 12 60",
    img: "/botiga-llibertat.jpg",
    mida: "lg:col-span-1 lg:row-span-2" // Tarjeta vertical alta
  },
  {
    slug: "can-sant-joan",
    nom: "La Botigueta de Can Sant Joan",
    ciutat: "Montcada",
    direccio: "C/ Masia, 8",
    cp: "08110",
    horari: "Dimarts a Divendres: 8:30h - 14:00h i 17:00h - 20:00h | Dissabte: 8:30h - 14:00h",
    telefon: "931 59 59 38",
    img: "/botiga-sant-joan.jpg",
    mida: "lg:col-span-1 lg:row-span-1" // Tarjeta estándar
  },
  {
    slug: "mercat-central",
    nom: "La Botigueta del Central",
    ciutat: "Sabadell",
    direccio: "Plaça Mercat, 1 (Parada 20-23)",
    cp: "08201",
    horari: "Dimarts a Dijous: 8:00h - 14:00h | Divendres: 8:00h - 20:00h | Dissabte: 8:00h - 14:30h",
    telefon: "937 25 51 36",
    img: "/botiga-central.jpg",
    mida: "lg:col-span-1 lg:row-span-1" // Tarjeta estándar
  },
  {
    slug: "carrer-major",
    nom: "La Botigueta del Carrer Major",
    ciutat: "Montcada",
    direccio: "Carrer Major, 54",
    cp: "08110",
    horari: "Dimarts a Divendres: 8:30h - 14:00h i 17:00h - 20:00h | Dissabte: 8:30h - 14:00h",
    telefon: "938 58 61 66",
    img: "/botiga-major.jpg",
    mida: "lg:col-span-1 lg:row-span-1" // Tarjeta estándar
  },
  {
    slug: "republica-argentina",
    nom: "La Botigueta d'En Quimet",
    ciutat: "Barcelona",
    direccio: "Av. de la República Argentina, 189",
    cp: "08023",
    horari: "Dilluns a Divendres: 8:30h - 14:00h i 17:00h - 20:30h | Dissabte: 8:30h - 14:00h",
    telefon: "934 17 26 54",
    img: "/botiga-quimet.jpg",
    mida: "lg:col-span-1 lg:row-span-1" // Tarjeta estándar
  }
];

export default function BotiguesPage() {
  const [filtre, setFiltre] = useState('Totes');
  
  // Extraemos las ciudades únicas para generar los botones automáticamente
  const ciutats = ['Totes', 'Barcelona', 'Montcada', 'Sabadell'];

  // Filtramos las tiendas según el botón seleccionado
  const botiguesFiltrades = filtre === 'Totes' 
    ? botiguesData 
    : botiguesData.filter(b => b.ciutat === filtre);

  return (
    <main className="bg-black text-white min-h-screen font-sans pt-28">
      
      {/* CABECERA / HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-10">
          <div className="space-y-3">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase bg-red-950/40 px-3 py-1 rounded-full border border-red-900/60 inline-blockVIP">
              Proximitat Casa Maresma
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Les nostres <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">botigues.</span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg font-light max-w-2xl leading-relaxed">
              Troba el teu establiment de barri de confiança. Sis localitzacions úniques on rebràs la millor selecció de producte i l'atenció artesana de sempre.
            </p>
          </div>

          {/* FILTROS INTERACTIVOS */}
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">
              <SlidersHorizontal size={14} className="text-red-500" />
              <span>Filtra per municipi</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center bg-neutral-900/50 p-1.5 rounded-2xl border border-neutral-800 backdrop-blur-sm">
              {ciutats.map((ciutat) => (
                <button
                  key={ciutat}
                  onClick={() => setFiltre(ciutat)}
                  className={`px-5 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    filtre === ciutat
                      ? 'bg-red-600 text-white shadow-lg shadow-red-950'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {ciutat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOSAICO DINÁMICO (BENTO GRID) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6"
        >
          <AnimatePresence mode="popLayout">
            {botiguesFiltrades.map((botiga) => (
              <motion.div
                key={botiga.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`relative rounded-3xl overflow-hidden group border border-neutral-900 bg-neutral-900/20 backdrop-blur-sm flex flex-col justify-end p-6 ${botiga.mida}`}
              >
                {/* Imagen de fondo de la tienda con overlay oscuro */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={botiga.img} 
                    alt={botiga.nom} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="relative z-10 space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-red-600/20 text-red-400 border border-red-900/60 font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                      {botiga.ciutat}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {botiga.telefon}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                      {botiga.nom}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light flex items-center gap-1.5">
                      <MapPin size={13} className="text-neutral-600 shrink-0" />
                      <span>{botiga.direccio} <span className="text-neutral-600">({botiga.cp})</span></span>
                    </p>
                  </div>

                  {/* Botón interactivo que lleva a su página interna */}
                  <div className="pt-2 border-t border-neutral-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-light max-w-[75%] line-clamp-1">
                      <Clock size={12} className="shrink-0" />
                      <span className="truncate">{botiga.horari}</span>
                    </div>
                    
                    <a 
                      href={`/botigues/${botiga.slug}`}
                      className="inline-flex items-center justify-center bg-white/5 group-hover:bg-red-600 text-white rounded-xl p-2.5 transition-all duration-300 transform group-hover:translate-x-1"
                      title="Entrar a la botiga"
                    >
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Si al filtrar no hay tiendas (caso de seguridad) */}
        {botiguesFiltrades.length === 0 && (
          <div className="text-center py-20 text-zinc-500 text-sm">
            No s'han trobat botigues en aquest municipi.
          </div>
        )}
      </section>

    </main>
  );
}