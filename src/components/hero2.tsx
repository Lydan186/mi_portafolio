import React from 'react';
import Image from 'next/image';
import type {StaticImageData} from "next/image";

interface Hero2Props {
  imgData: StaticImageData;
  imgAlt: string;
  imgData2: StaticImageData;
  imgAlt2: string;
  title: string;
  name: string;
  ubication: string;
  email: string;
  text: string;
}

export default function Hero2(props: Hero2Props) {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Image 
        src={props.imgData} 
        alt={props.imgAlt} 
        width={400} 
        height={400}
        className="max-w-[200px] max-h-[200px] sm:max-w-[300px] sm:max-h-[300px] md:max-w-[400px] md:max-h-[400px] rounded-full shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300" 
      />

      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${props.imgData2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />

      <div className="w-full max-w-screen-lg p-8 relative">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">{props.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-1xl font-semibold text-gradient mb-2">Información Personal</h3>
            <p className="text-gradient text-1xl">Nombre: {props.name}</p>
            <p className="text-gradient text-1xl">Ubicación: {props.ubication}</p>
            <p className="text-gradient text-1xl">Correo Electrónico: {props.email}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gradient mb-2">Habilidades</h3>
            <ul className="list-disc list-inside text-gradient">
              <li>Sabe hacer arroz</li>
              <li>Sabe hacer huevo frito</li>
              <li>Sabe hablar lesco</li>
              <li>Sabe como ser su propio jefe</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gradient mb-2">Personas que pueden recomendarme</h3>
          <ul className="list-disc list-inside text-gradient">
              <li>Mark Suckerberg</li>
              <li>Barack Obama</li>
              <li>Cristiano Ronaldo</li>
              <li>Luis Barquero Villalobos</li>
              <li>Neil Armstrong</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gradient mb-2">Experiencias laborales</h3>
          <ul className="list-disc list-inside text-gradient">
              <li>5 años trabajando en la pascalina</li>
              <li>4 años lavando platos en la Soda Maggy</li>
              <li>6 años trabajando en bases de datos en el Banco Nacional</li>
              <li>2 años trabajando con el encendedor de Juan Santamaria</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gradient mb-2">Sobre mí</h3>
        <p className="text-gradient">{props.text}</p>
        </div>
      </div>
    </div>
  );
}