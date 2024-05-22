

import Link from "next/link";

export default function Header() {

  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-500 w-full absolute text-white z-10 shadow-lg shadow-orange-500/50">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-6">
        <div className="flex items-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <img src="logo2.png" alt="Imagen del header" className="h-14 mr-3" />
          <Link href="/" className="font-bold text-4xl">
            Inicio
          </Link>
        </div>
        <div className="space-x-10">
          <Link href ="/user/insert" className="hover:text-gray-400 text-3xl">Sobre mí</Link>
          <Link href="/user/edit" className="hover:text-gray-400 text-3xl">Proyectos personales</Link>
          <a
            href="https://wa.link/i7dmxq"
            className="hover:text-gray-400 text-4xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/50 text-white font-bold py-2 px-4 rounded">
              Contratame
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}