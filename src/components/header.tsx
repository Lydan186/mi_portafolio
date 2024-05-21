import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-6">
        <div className="flex items-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <img src="OIG2.jpg" alt="Imagen del header" className="h-14 mr-3" />
          <Link href="/" className="font-bold text-4xl">
            Inicio
          </Link>
        </div>
        <div className="space-x-4 text-x-1 ">
          <Link href ="/user/insert" className="hover:text-gray-400">Sobre mí</Link>
          <Link href="/user/edit" className="hover:text-gray-400">Proyectos personales</Link>
          <a href="https://wa.link/i7dmxq"  className="hover:text-gray-400"  target="_blank" rel="noopener noreferrer">
            Contratame
          </a>
        </div>
      </nav>
    </div>
  );
}