import galleryImg from "/public/f30.jpg";
import Hero from "@/components/hero";


export default function Insert() {
    
    return (
      <div>
        <Hero imgData={galleryImg} imgAlt = "f30" title = "Sobre mí"/>
      </div>
    );
  }
  