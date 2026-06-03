'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin, Grid } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBotiguesOpen, setIsBotiguesOpen] = useState(false);

  // Lista de rutas internas para el menú móvil
  const botiguesRutes = [
    { nom: "La Rambla (Montcada)", url: "/botigues/la-rambla" },
    { nom: "Can Sant Joan (Montcada)", url: "/botigues/can-sant-joan" },
    { nom: "Carrer Major (Montcada)", url: "/botigues/carrer-major" },
    { nom: "Central (Sabadell)", url: "/botigues/mercat-central" },
    { nom: "La Llibertat (Barcelona)", url: "/botigues/mercat-de-la-llibertat" },
    { nom: "D'En Quimet (Barcelona)", url: "/botigues/republica-argentina" }
  ];

  return (
    <>
      {/* BARRA DE NAVEGACIÓN FIJA */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-wider text-white">
          CASA<span className="text-red-500">MARESMA</span>
        </div>

        {/* Menú para Escritorio: Enlace directo y limpio */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-red-500 transition-colors">Inici</a>
          <a href="#" className="hover:text-red-500 transition-colors">La nostra història</a>
          <a href="/botigues" className="hover:text-red-500 transition-colors">Botigues</a>
        </div>

        {/* Botón Hamburguesa (Móviles) */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white p-1 hover:text-red-500 transition-colors"
          aria-label="Obrir menú"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* MENÚ MÓVIL FULLWIDTH */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen z-50 bg-black/85 backdrop-blur-lg px-6 py-20 flex flex-col justify-between overflow-y-auto"
          >
            {/* Botón para cerrar */}
            <button 
              onClick={() => { setIsMenuOpen(false); setIsBotiguesOpen(false); }}
              className="absolute top-5 right-6 text-neutral-400 hover:text-white p-2 transition-colors"
              aria-label="Tancar menú"
            >
              <X size={26} />
            </button>

            {/* Enlaces principales */}
            <div className="flex flex-col items-center justify-center my-auto space-y-8 text-center w-full">
              <a 
                href="#" 
                onClick={() => setIsMenuOpen(false)} 
                className="text-3xl font-extrabold text-white hover:text-red-500 transition-colors tracking-tight block py-1"
              >
                Inici
              </a>
              <a 
                href="#" 
                onClick={() => setIsMenuOpen(false)} 
                className="text-3xl font-extrabold text-white hover:text-red-500 transition-colors tracking-tight block py-1"
              >
                La nostra història
              </a>
              
              {/* Desplegable de Tiendas Móvil */}
              <div className="w-full max-w-sm flex flex-col items-center">
                <button 
                  onClick={() => setIsBotiguesOpen(!isBotiguesOpen)}
                  className="text-3xl font-extrabold text-white hover:text-red-500 transition-colors tracking-tight flex items-center gap-2 justify-center py-1 focus:outline-none"
                >
                  <span>Botigues</span>
                  <motion.div animate={{ rotate: isBotiguesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={28} className="text-red-500" />
                  </motion.div>
                </button>

                {/* Submenú con Solución UX Integrada */}
                <motion.div 
                  initial={false}
                  animate={{ height: isBotiguesOpen ? "auto" : 0, opacity: isBotiguesOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden w-full flex flex-col items-center mt-4 bg-white/5 rounded-2xl backdrop-blur-sm"
                >
                  <div className="py-3 px-4 w-full space-y-2.5">
                    
                    {/* ENLACE DESTACADO: Ver todas las tiendas (Bento Grid) */}
                    <a 
                      href="/botigues"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-base font-bold text-red-400 bg-red-950/30 border border-red-900/40 rounded-xl hover:text-white hover:bg-red-600 transition-colors py-3 flex items-center justify-center gap-2"
                    >
                      <Grid size={16} />
                      Veure totes les botigues
                    </a>

                    <div className="h-[1px] bg-white/5 my-1" />

                    {/* Tiendas individuales */}
                    {botiguesRutes.map((botiga, idx) => (
                      <a 
                        key={idx}
                        href={botiga.url}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors py-2 flex items-center justify-center gap-2 border-b border-white/5 last:border-none"
                      >
                        <MapPin size={13} className="text-neutral-600" />
                        {botiga.nom}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Sello de marca */}
            <div className="text-center text-xs text-neutral-500 font-mono tracking-widest uppercase mt-8">
              Des de 1989 al teu costat
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}