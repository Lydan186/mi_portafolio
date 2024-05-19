import Link from "next/link";


export default function Header(){
    return(
        <div className="w-full absolute text-white z-10">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href="/" className="font-bold text-3xl"> Inicio </Link>
                <div className="space-x-4 text-xl">
                    <Link href="/user/insert"> Insertar usuario </Link>
                    <Link href="/user/edit"> Editar usuario </Link>
                    <Link href="/gallery"> Galeria </Link>
                </div>
            </nav> 
        </div>
    )
}