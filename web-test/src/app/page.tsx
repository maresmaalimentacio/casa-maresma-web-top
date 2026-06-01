'use client';

import React, { useEffect, useState } from 'react';

// Componente para el contador animado
const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [target, duration]);

  return <span>{count.toLocaleString('es-ES')}</span>;
};

export default function Home() {
  // Datos de ejemplo para las tiendas (puedes cambiar las direcciones y horarios a tu gusto)
  const botigues = [
    {
      nom: "Casa Maresma - Central",
      direccio: "Carrer de la Riera, 14",
      ciutat: "Mataró (08301)",
      horari: "Dilluns a Dissabte: 8:00h - 21:00h",
      telefon: "937 55 00 00",
      mapsUrl: "https://maps.google.com"
    },
    {
      nom: "Casa Maresma - Mercat",
      direccio: "Plaça de Cuba, 5",
      ciutat: "Mataró (08302)",
      horari: "Dilluns a Divendres: 8:30h - 14:00h / 17:00h - 20:30h",
      telefon: "937 55 01 01",
      mapsUrl: "https://maps.google.com"
    },
    {
      nom: "Casa Maresma - Mar",
      direccio: "Passeig Marítim, 82",
      ciutat: "Vilassar de Mar (08340)",
      horari: "Dilluns a Diumenge: 9:00h - 22:00h",
      telefon: "937 55 02 02",
      mapsUrl: "https://maps.google.com"
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      
      {/* SECCIÓ: HERO (La que ya tenías desplegada) */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center px-4" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')" }}>
        <div className="max-w-4xl text-center z-10">
          <span className="text-red-500 font-bold tracking-widest text-xs uppercase bg-red-950/50 px-3 py-1 rounded-full border border-red-900">Des de 1989 al teu costat</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 mb-6">
            Menja millor.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Compra al teu barri.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A Casa Maresma seleccionem origen, qualitat i tradició per oferir-te la millor experiència gastronòmica de proximitat. Tallat al teu gust, amb la confiança de sempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-medium px-8 py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-950/50 text-sm tracking-wide uppercase">Descobreix les botigues</button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-4 rounded-xl transition-all text-sm tracking-wide uppercase backdrop-blur-sm">La nostra història</button>
          </div>
        </div>
      </section>

      {/* SECCIÓ: EN XIFRES (Los contadores animados) */}
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
                <Counter target={8} />
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

      {/* 🆕 NUEVA SECCIÓ: LES NOSTRES BOTIGUES */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-bold text-red-500 mb-2">Proximitat</h2>
            <p className="text-3xl font-bold tracking-tight md:text-4xl text-white">Vine a visitar-nos</p>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light">
              Troba la teva botiga Casa Maresma més propera i gaudeix de la millor atenció personalitzada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {botigues.map((botiga, index) => (
              <div key={index} className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-2xl hover:border-red-900/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{botiga.nom}</h3>
                  <div className="space-y-3 text-gray-400 text-sm font-light">
                    <p className="flex items-start gap-2">
                      <span className="text-red-500 font-normal">📍</span> 
                      <span>{botiga.direccio}<br />{botiga.ciutat}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-red-500 font-normal">🕒</span> 
                      <span>{botiga.horari}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-red-500 font-normal">📞</span> 
                      <span>{botiga.telefon}</span>
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-800/60">
                  <a 
                    href={botiga.mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-neutral-800 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl transition-colors text-xs uppercase tracking-wider"
                  >
                    Com arribar-hi
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}