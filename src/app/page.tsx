import homeImg from "/public/a small boat anchored outside at sunset.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero imgData={homeImg} imgAlt = "a small boat anchored outside at sunset" title = "Bienvenido a mi curriculum"/>
  );
}
