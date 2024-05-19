import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-900 w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-6">
        <div className="flex items-center">
          <img src="OIG2.jpg" alt="Imagen del header" className="h-14 mr-3" />
          <Link href="/" className="font-bold text-4xl">
            Inicio
          </Link>
        </div>
        <div className="space-x-4 text-x-1">
          <Link href="/user/insert">Sobre mí</Link>
          <Link href="/user/edit">Proyectos personales</Link>
          <Link href="/gallery">Galeria</Link>
        </div>
      </nav>
    </div>
  );
}