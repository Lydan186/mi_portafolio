import galleryImg from "/public/f30.jpg";
import Hero from "@/components/hero";
import Carrusel from "@/components/carrusel"

export default function Edit() {
    
    return (
      <div>
        <Hero imgData={galleryImg} imgAlt = "f30" title = "Proyectos personales"/>
        <Carrusel githubToken="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" />
      </div>
    );
  }
  