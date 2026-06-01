"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full min-h-[calc(100vh-112px)] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. IMAGEN DE FONDO FULLSCREEN */}
      <Image
        src="/hero-image.png"
        alt="Casa Maresma Premium Background"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* 2. OVERLAY ELEGANTE (Capa oscura de contraste estilo Apple/Tesla) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

      {/* 3. CONTENIDO PRINCIPAL CON ANIMACIONES FLUIDAS */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-8 md:px-12 flex flex-col items-start gap-6 text-white">
        
        {/* Pequeño tag superior decorativo */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-widest text-maresma-rojo bg-maresma-rojo/10 px-4 py-1.5 rounded-full border border-maresma-rojo/20"
        >
          Des de 1989 al teu costat
        </motion.span>

        {/* Headline Principal en Catalán */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1]"
        >
          Menja millor. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Compra al teu barri.
          </span>
        </motion.h1>

        {/* Subheadline descriptivo premium */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed"
        >
          A Casa Maresma seleccionem origen, qualitat i tradició per oferir-te la millor experiència gastronòmica de proximitat. Tallat al teu gust, amb la confiança de sempre.
        </motion.p>

        {/* 4. BOTONES DE ACCIÓN (CTAs) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4"
        >
          {/* CTA Principal: Rojo Corporativo */}
          <Link 
            href="/botigues"
            className="w-full sm:w-auto px-8 py-4 bg-maresma-rojo hover:bg-white hover:text-black font-bold text-sm rounded-full transition-all duration-300 tracking-wide uppercase text-center shadow-lg shadow-red-950/40"
          >
            Descobreix les botigues
          </Link>

          {/* CTA Secundario: Estilo Apple translúcido */}
          <Link 
            href="/sobre-nosaltres"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-full transition-all duration-300 tracking-wide uppercase text-center backdrop-blur-sm"
          >
            La nostra història
          </Link>
        </motion.div>

      </div>

      {/* Indicador de scroll discreto abajo del todo */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase font-medium"
      >
        <span>Explora</span>
        <div className="w-1 h-8 bg-zinc-800 rounded-full overflow-hidden relative">
          <div className="w-full h-1/2 bg-maresma-rojo absolute top-0 left-0 animate-bounce" />
        </div>
      </motion.div>

    </div>
  );
}