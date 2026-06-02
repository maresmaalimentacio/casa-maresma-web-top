'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBotiguesOpen, setIsBotiguesOpen] = useState(false);

  // Enlaces rápidos y limpios para el desplegable del menú móvil
  const botiguesRutes = [
    { nom: "La Rambla (Montcada)", url: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+La+Rambla+Montcada+i+Reixac" },
    { nom: "Can Sant Joan (Montcada)", url: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+Can+Sant+Joan+Montcada" },
    { nom: "Carrer Major (Montcada)", url: "https://www.google.com/maps/search/?api=1&query=La+botigueta+del+Carrer+Major+Montcada" },
    { nom: "Central (Sabadell)", url: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+del+Central+Mercat+Sabadell" },
    { nom: "La Llibertat (Barcelona)", url: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+de+la+Llibertat+Mercat+Barcelona" },
    { nom: "D'En Quimet (Barcelona)", url: "https://www.google.com/maps/search/?api=1&query=La+Botigueta+d+En+Quimet+Barcelona" }
  ];

  return (
    <>
      {/* BARRA DE NAVEGACIÓN FIJA */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-black tracking-wider text-white">
          CASA<span className="text-red-500">MARESMA</span>
        </div>

        {/* Menú para Escritorio (Oculto en móviles) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#" className="hover:text-red-500 transition-colors">Inici</a>
          <a href="#" className="hover:text-red-500 transition-colors">La nostra història</a>
          <a href="#" className="hover:text-red-500 transition-colors">Botigues</a>
        </div>

        {/* Botón Hamburguesa (Solo visible en móviles) */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white p-1 hover:text-red-500 transition-colors"
          aria-label="Obrir menú"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* MENÚ MÓVIL FULLWIDTH (PANTALLA NEGRA TRANSPARENTE CON SCROLL) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen z-50 bg-black/85 backdrop-blur-lg px-6 py-20 flex flex-col justify-between overflow-y-auto"
          >
            {/* Botón para cerrar arriba a la derecha */}
            <button 
              onClick={() => { setIsMenuOpen(false); setIsBotiguesOpen(false); }}
              className="absolute top-5 right-6 text-neutral-400 hover:text-white p-2 transition-colors"
              aria-label="Tancar menú"
            >
              <X size={26} />
            </button>

            {/* Enlaces principales centrados y grandes */}
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
              
              {/* Contenedor del Desplegable de Tiendas */}
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

                {/* Submenú de las tiendas con animación de altura suave */}
                <motion.div 
                  initial={false}
                  animate={{ height: isBotiguesOpen ? "auto" : 0, opacity: isBotiguesOpen ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden w-full flex flex-col items-center space-y-3 mt-4 bg-white/5 rounded-xl backdrop-blur-sm"
                >
                  <div className="py-3 px-4 w-full space-y-3">
                    {botiguesRutes.map((botiga, idx) => (
                      <a 
                        key={idx}
                        href={botiga.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-neutral-300 hover:text-red-400 transition-colors py-1.5 flex items-center justify-center gap-2 border-b border-white/5 last:border-none"
                      >
                        <MapPin size={14} className="text-neutral-500" />
                        {botiga.nom}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Sello de marca en el pie del menú */}
            <div className="text-center text-xs text-neutral-500 font-mono tracking-widest uppercase mt-8">
              Des de 1989 al teu costat
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}