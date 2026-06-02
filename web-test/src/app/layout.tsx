"use client";

import { Montserrat } from "next/font/google"; 
import "./globals.css";
import Link from "next/link";
import Image from "next/image"; 
import { useState } from "react";
// 🆕 Importamos las animaciones de Framer Motion y los iconos para el menú móvil
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  // Estado para el desplegable de escritorio
  const [isTiendasOpen, setIsTiendasOpen] = useState(false);
  // 🆕 Estado para abrir/cerrar el menú de pantalla completa en móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 🆕 Estado para el desplegable interno de tiendas dentro de móviles
  const [isMobileTiendasOpen, setIsMobileTiendasOpen] = useState(false);

  const botigues = [
    { name: "La Botigueta de la Rambla", href: "/botigues/rambla" },
    { name: "La Botigueta del Central", href: "/botigues/central" },
    { name: "La Botigueta de Can Sant Joan", href: "/botigues/can-sant-joan" },
    { name: "La Botigueta de la Llibertat", href: "/botigues/llibertat" },
    { name: "La Botigueta del Carrer Major", href: "/botigues/carrer-major" },
    { name: "La Botigueta d'En Quimet", href: "/botigues/en-quimet" },
  ];

  return (
    <html lang="ca">
      <body className={`${montserrat.className} antialiased bg-black text-white min-h-screen`}>
        
        {/* NAVBAR PREMIUM CORREGIDA (h-28 para hacerla más grande) */}
        <nav className="w-full h-28 border-b border-zinc-900 bg-black flex items-center justify-between px-6 md:px-12 fixed top-0 left-0 z-50">
          
          {/* LOGO MÁS GRANDE Y CON FUERZA */}
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

          {/* MENÚ CON TEXTOS BLANCOS (Se oculta automáticamente en móviles: hidden md:flex) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            
            <Link href="/" className="text-white hover:text-maresma-rojo transition-colors duration-300">
              Inici
            </Link>

            {/* DESPLEGABLE BOTIGUES DESKTOP */}
            <div className="relative">
              <button 
                onClick={() => setIsTiendasOpen(!isTiendasOpen)}
                className="flex items-center gap-1 text-white hover:text-maresma-rojo transition-colors duration-300 focus:outline-none cursor-pointer"
              >
                Botigues
                <span className={`text-xs transition-transform duration-300 ${isTiendasOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isTiendasOpen && (
                <div className="absolute top-10 right-0 w-64 bg-zinc-950 border border-zinc-800 rounded-xl p-2 shadow-2xl flex flex-col gap-1 z-50">
                  {botigues.map((tienda, idx) => (
                    <Link
                      key={idx}
                      href={tienda.href}
                      onClick={() => setIsTiendasOpen(false)}
                      className="px-4 py-2.5 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                    >
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
              className="ml-4 px-6 py-3 bg-maresma-rojo text-white font-bold text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider shadow-lg"
            >
              Descarrega l'APP
            </Link>
          </div>

          {/* 🆕 BOTÓN HAMBURGUESA (Solo se muestra en móviles: md:hidden) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white p-2 hover:text-maresma-rojo transition-colors focus:outline-none"
            aria-label="Obrir menú"
          >
            <Menu size={28} />
          </button>
        </nav>

        {/* 🆕 MENÚ INTERACTIVO MÓVIL FULLWIDTH (PANTALLA NEGRA CON OPACIDAD Y SCROLL BIEN INTEGRADO) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 w-full h-screen z-50 bg-black/90 backdrop-blur-lg px-6 py-24 flex flex-col justify-between overflow-y-auto"
            >
              {/* Botón X de cerrar arriba a la derecha */}
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsMobileTiendasOpen(false); }}
                className="absolute top-8 right-6 text-zinc-400 hover:text-white p-2 transition-colors focus:outline-none"
                aria-label="Tancar menú"
              >
                <X size={32} />
              </button>

              {/* Enlaces reales en formato gigante y centrados */}
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
                    <span className={`text-sm text-maresma-rojo transition-transform duration-200 ${isMobileTiendasOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  {/* Bloque interno de tiendas con efecto acordeón */}
                  {isMobileTiendasOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="w-full flex flex-col items-center space-y-2 mt-4 bg-zinc-900/50 rounded-xl border border-zinc-800/60 p-3"
                    >
                      {botigues.map((tienda, idx) => (
                        <Link 
                          key={idx}
                          href={tienda.href}
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileTiendasOpen(false); }}
                          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors py-1.5 block text-center w-full"
                        >
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

                {/* Botón destacado adaptado al menú móvil */}
                <Link 
                  href="/app" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-3.5 bg-maresma-rojo text-white font-bold text-xs rounded-full uppercase tracking-wider shadow-lg block w-full max-w-xs"
                >
                  Descarrega l'APP
                </Link>
              </div>

              {/* Pie estético del menú de fondo */}
              <div className="text-center text-xs text-zinc-600 font-mono tracking-widest uppercase mt-8">
                Des de 1989 al teu costat
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* COMPENSACIÓN DE ALTURA PARA LA NUEVA NAVBAR h-28 */}
        <main className="pt-28"> 
          {children}
        </main>

      </body>
    </html>
  );
}