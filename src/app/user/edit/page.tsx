import galleryImg from "/public/f30.jpg";
import Hero from "@/components/hero";
import Carrusel from "@/components/carrusel";

export default function Edit() {

  return (
    <div className="bg-gray-200">

      <Hero 
      title="Proyectos personales" 
      text="Aqui se encontraran los proyectos en los que he participado o he creado." 
      />
      <Carrusel />
    </div>
  );
}
  