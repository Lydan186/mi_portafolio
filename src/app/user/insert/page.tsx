//import galleryImg from "/public/f30.jpg";
//import Hero from "@/components/hero";}
import galleryImg from "/public/yo8.jpg";
import Hero2 from "@/components/hero2";


export default function Insert() {
    
    return (
      <div>
        
        <Hero2 imgData={galleryImg}
        imgAlt="imagen personal"
        title="Sobre mí" 
        name="Dilan Chavarria Valdez" 
        ubication="Costa Rica, Puntarenas, Golfito, Golfito" 
        email="dilanchava48@gmail.com"
        text="Soy un persona activa que puede resolver problemas en el momento 
        y que no tiene problemas con los demás colaboradores en el trabajo."
        />
      </div>
    );
  }
  