import projectImg from "/public/pexels3.jpg";
import Hero from "@/components/hero";
import Carrusel from "@/components/carrusel";

export default function Edit() {

  return (
    <div>

<Hero 
   imgData={projectImg} imgAlt=""
      title="Proyectos personales" 
      text="Aqui se encontraran los proyectos en los que he participado o he creado." 
      />


      <Carrusel />
    </div>
  );
}
  