import galleryImg from "/public/f30.jpg";
import Hero from "@/components/hero";

export default function Edit() {
    
    return (
      <div>
        <Hero imgData={galleryImg} imgAlt = "f30" title = "Proyectos personales"/>
      </div>
    );
  }
  