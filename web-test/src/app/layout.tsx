"use client";

import { Montserrat } from "next/font/google"; 
import "./globals.css";
import Link from "next/link";
import Image from "next/image"; 
import { useState } from "react";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [isTiendasOpen, setIsTiendasOpen] = useState(false);

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
        <nav className="w-full h-28 border-b border-zinc-900 bg-black flex items-center justify-between px-12 fixed top-0 left-0 z-50">
          
          {/* LOGO MÁS GRANDE Y CON FUERZA */}
          <Link href="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-105">
            <Image 
              src="/logo-casa-maresma.png" 
              alt="Logotipo Casa Maresma"
              width={200} 
              height={100} 
              className="object-contain" 
              priority
            />
          </Link>

          {/* MENÚ CON TEXTOS BLANCOS CORREGIDOS */}
          <div className="flex items-center gap-8 text-sm font-semibold tracking-wide">
            
            <Link href="/" className="text-white hover:text-maresma-rojo transition-colors duration-300">
              Inici
            </Link>

            {/* DESPLEGABLE BOTIGUES */}
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

            {/* BOTÓN DESCARREGA APP */}
            <Link 
              href="/app" 
              className="ml-4 px-6 py-3 bg-maresma-rojo text-white font-bold text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider shadow-lg"
            >
              Descarrega l'APP
            </Link>

          </div>

        </nav>

        {/* COMPENSACIÓN DE ALTURA PARA LA NUEVA NAVBAR h-28 */}
        <main className="pt-28"> 
          {children}
        </main>

      </body>
    </html>
  );
}