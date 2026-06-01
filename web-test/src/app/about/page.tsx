import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-900 font-sans text-white">
      <main className="flex flex-col items-center gap-6 text-center">
        
        <h1 className="text-4xl font-bold tracking-tight text-blue-400">
          Esta es la página "Acerca de" 📖
        </h1>
        
        <p className="text-zinc-300 text-lg max-w-md">
          ¡Felicidades! Has creado tu segunda ruta en Next.js simplemente creando una carpeta.
        </p>

        {/* Un enlace para volver a la Home */}
        <Link 
          href="/" 
          className="px-6 py-3 bg-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-600 transition-colors"
        >
          Volver al inicio
        </Link>

      </main>
    </div>
  );
}