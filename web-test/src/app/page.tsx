"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Componente pequeño y optimizado para animar cada número de forma individual
function Counter({ value, direction = "up" }: { value: number; direction?: "up" | "down" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString();
      }
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function Home() {
  return (
    <>
      {/* SECCIÓN 1: HERO FULLSCREEN */}
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
            A Casa Maresma seleccionem origen, qualitat i tradició per oferir-te la millor experiència gastronòmica de proximitat. Tallat al teu guix, amb la confiança de sempre.
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

      {/* SECCIÓN 2: CASA MARESMA EN XIFRES (ESTILO PREMIUM APPLE) */}
      <section className="w-full bg-zinc-950 py-24 md:py-32 border-t border-zinc-900 text-white relative overflow-hidden">
        
        {/* Sutil toque de luz de fondo */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-maresma-rojo/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 md:px-12 relative z-10">
          
          {/* Cabecera de la sección */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-maresma-rojo mb-3">La nostra trajectòria</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Casa Maresma en xifres</h2>
            </div>
            <p className="text-zinc-400 max-w-sm font-light text-sm md:text-base leading-relaxed">
              Darrere de cada tall i de cada producte hi ha un compromís inquebrantable amb la nostra comunitat i la tradició xarcutera.
            </p>
          </div>

          {/* Grid de Contadores Animados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            {/* Contador 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col p-6 bg-zinc-900/40 rounded-3xl border border-zinc-800/60 backdrop-blur-sm"
            >
              <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 flex items-center">
                +<Counter value={12} />
              </span>
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Anys d'història</span>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">Oferint servei i la millor selecció als barris des del primer dia.</p>
            </motion.div>

            {/* Contador 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col p-6 bg-zinc-900/40 rounded-3xl border border-zinc-800/60 backdrop-blur-sm"
            >
              <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 mb-2 flex items-center">
                <Counter value={100} />%
              </span>
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Proximitat garantida</span>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">Treballem directament amb ramaders i productors locals de confiança.</p>
            </motion.div>

            {/* Contador 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col p-6 bg-zinc-900/40 rounded-3xl border border-zinc-800/60 backdrop-blur-sm"
            >
              <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 flex items-center">
                +<Counter value={6} />
              </span>
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Botigues actives</span>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">Punts de venda propers preparats per atendre't amb un tracte personalitzat.</p>
            </motion.div>

            {/* Contador 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col p-6 bg-zinc-900/40 rounded-3xl border border-zinc-800/60 backdrop-blur-sm"
            >
              <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-maresma-rojo mb-2 flex items-center">
                +<Counter value={3000} />
              </span>
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Clients feliços</span>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">La fidelitat dels nostres veïns és el nostre millor segell de qualitat.</p>
            </motion.div>

          </div>

        </div>
      </section>
    </>
  );
}