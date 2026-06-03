"use client";

import { Montserrat } from "next/font/google"; 
import "./globals.css";
import Link from "next/link";
import Image from "next/image"; 
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Grid, MapPin } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [isTiendasOpen, setIsTiendasOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileTiendasOpen, setIsMobileTiendasOpen] = useState(false);

  // Slugs unificados exactamente con la página de /botigues que creamos antes
  const botigues = [
    { name: "La Rambla (Montcada)", href: "/botigues/la-rambla" },
    { name: "Can Sant Joan (Montcada)", href: "/botigues/can-sant-joan" },
    { name: "Carrer Major (Montcada)", href: "/botigues/carrer-major" },
    { name: "Central (Sabadell)", href: "/botigues/mercat-central" },
    { name: "La Llibertat (Barcelona)", href: "/botigues/mercat-de-la-llibertat" },
    { name: "D'En Quimet (Barcelona)", href: "/botigues/republica-argentina" },
  ];

  return (
    <html lang="ca">
      <body className={`${montserrat.className} antialiased bg-black text-white min-h-screen`}>
        
        {/* NAVBAR PREMIUM CORREGIDA */}
        <nav className="w-full h-28 border-b border-zinc-900 bg-black flex items-center justify-between px-6 md:px-12 fixed top-0 left-0 z-50">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-105">
            <Image 
              src="/logo-casa-maresma.png" 
              alt="Logotipo Casa Maresma"
              width={200} 
              height={100} 
              className="object-contain w-44 md:w-[200px]" 
              priority
            />
          </Link>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            
            <Link href="/" className="text-white hover:text-maresma-rojo transition-colors duration-300">
              Inici
            </Link>

            {/* DESPLEGABLE BOTIGUES DESKTOP */}
            <div className="relative">
              <button 
                onClick={() => setIsTiendasOpen(!isTiendasOpen)}
                className="flex items-center gap-1 text-white hover:text-maresma-rojo transition-colors duration-300 focus:outline-none cursor-pointer uppercase text-xs tracking-wider"
              >
                Botigues
                <span className={`text-[9px] transition-transform duration-300 ${isTiendasOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isTiendasOpen && (
                <div className="absolute top-10 right-0 w-64 bg-zinc-950 border border-zinc-800 rounded-xl p-2 shadow-2xl flex flex-col gap-1 z-50">
                  {/* ENLACE UX DESTACADO: Ver todas en el mosaico */}
                  <Link
                    href="/botigues"
                    onClick={() => setIsTiendasOpen(false)}
                    className="px-4 py-2.5 text-xs font-bold text-red-400 bg-red-950/20 border border-red-900/30 rounded-lg hover:bg-red-600 hover:text-white transition-all flex items-center gap-2"
                  >
                    <Grid size={14} />
                    Veure totes les botigues
                  </Link>
                  
                  <div className="h-[1px] bg-zinc-800 my-1" />

                  {/* Listado de tiendas individuales */}
                  {botigues.map((tienda, idx) => (
                    <Link
                      key={idx}
                      href={tienda.href}
                      onClick={() => setIsTiendasOpen(false)}
                      className="px-4 py-2.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <MapPin size={12} className="text-zinc-600" />
                      {tienda.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/app" className="text-white hover:text-maresma-rojo transition-colors duration-300">
              APP Casa Maresma
            </Link>
            
            <Link href="/blog" className="text-white hover:text-maresma-rojo transition-colors duration-300">
              Blog
            </Link>

            <Link href="/sobre-nosaltres" className="text-white hover:text-maresma-rojo transition-colors duration-300">
              Sobre Nosaltres
            </Link>

            <Link href="/contacte" className="text-white hover:text-maresma-rojo transition-colors duration-300">
              Contacte
            </Link>

            {/* BOTÓN DESCARREGA APP DESKTOP */}
            <Link 
              href="/app" 
              className="ml-4 px-6 py-3 bg-red-600 text-white font-bold text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider shadow-lg"
            >
              Descarrega l'APP
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (Móviles) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white p-2 hover:text-maresma-rojo transition-colors focus:outline-none"
            aria-label="Obrir menú"
          >
            <Menu size={28} />
          </button>
        </nav>

        {/* MENÚ INTERACTIVO MÓVIL FULLWIDTH */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-full h-screen z-50 bg-black/95 backdrop-blur-lg px-6 py-24 flex flex-col justify-between overflow-y-auto"
            >
              {/* Botón X de cerrar */}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsMobileTiendasOpen(false); }}
                className="absolute top-8 right-6 text-zinc-400 hover:text-white p-2 transition-colors focus:outline-none"
                aria-label="Tancar menú"
              >
                <X size={32} />
              </button>

              {/* Enlaces reales en formato gigante */}
              <div className="flex flex-col items-center justify-center my-auto space-y-7 text-center w-full">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-extrabold text-white hover:text-maresma-rojo transition-colors tracking-tight block py-1"
                >
                  Inici
                </Link>

                {/* Desplegable de Tiendas dentro de Móviles */}
                <div className="w-full max-w-xs flex flex-col items-center">
                  <button 
                    onClick={() => setIsMobileTiendasOpen(!isMobileTiendasOpen)}
                    className="text-2xl font-extrabold text-white hover:text-maresma-rojo transition-colors tracking-tight flex items-center gap-2 justify-center py-1 focus:outline-none"
                  >
                    <span>Botigues</span>
                    <span className={`text-sm text-red-500 transition-transform duration-200 ${isMobileTiendasOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  {/* Bloque interno de tiendas con efecto acordeón */}
                  {isMobileTiendasOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full flex flex-col items-center space-y-2.5 mt-4 bg-zinc-900/50 rounded-2xl border border-zinc-800/60 p-3.5"
                    >
                      {/* ENLACE UX DESTACADO MÓVIL: Ir a la página general del mosaico */}
                      <Link 
                        href="/botigues"
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileTiendasOpen(false); }}
                        className="text-sm font-bold text-red-400 bg-red-950/30 border border-red-900/40 rounded-xl hover:text-white hover:bg-red-600 transition-colors py-3 flex items-center justify-center gap-2 w-full"
                      >
                        <Grid size={15} />
                        Veure totes les botigues
                      </Link>

                      <div className="w-full h-[1px] bg-zinc-800/60 my-1" />

                      {/* Tiendas individuales */}
                      {botigues.map((tienda, idx) => (
                        <Link 
                          key={idx}
                          href={tienda.href}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileTiendasOpen(false); }}
                          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors py-1.5 flex items-center justify-center gap-2 w-full border-b border-zinc-900 last:border-none"
                        >
                          <MapPin size={13} className="text-zinc-600" />
                          {tienda.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>

                <Link 
                  href="/app" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-extrabold text-white hover:text-maresma-rojo transition-colors tracking-tight block py-1"
                >
                  APP Casa Maresma
                </Link>

                <Link 
                  href="/blog" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-extrabold text-white hover:text-maresma-rojo transition-colors tracking-tight block py-1"
                >
                  Blog
                </Link>

                <Link 
                  href="/sobre-nosaltres" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-extrabold text-white hover:text-maresma-rojo transition-colors tracking-tight block py-1"
                >
                  Sobre Nosaltres
                </Link>

                <Link 
                  href="/contacte" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-extrabold text-white hover:text-maresma-rojo transition-colors tracking-tight block py-1"
                >
                  Contacte
                </Link>

                <Link 
                  href="/app" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3.5 bg-red-600 text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-lg block w-full max-w-xs"
                >
                  Descarrega l'APP
                </Link>
              </div>

              {/* Pie estético */}
              <div className="text-center text-xs text-zinc-600 font-mono tracking-widest uppercase mt-8">
                Des de 1989 al teu costat
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* COMPENSACIÓN DE ALTURA PARA LA NAVBAR */}
        <main className="pt-28"> 
          {children}
        </main>

      </body>
    </html>
  );
}