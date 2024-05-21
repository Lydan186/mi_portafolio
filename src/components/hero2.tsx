import React from 'react';
import Image from 'next/image';
import type {StaticImageData} from "next/image";

interface Hero2Props {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
  name: string;
  ubication: string;
  email: string;
  text: string;
}

export default function Hero2(props: Hero2Props) {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <Image src={props.imgData} alt={props.imgAlt} className="max-w-full max-h-full rounded-full shadow-lg flex-shrink-0 hover:scale-110 transition-transform duration-300" />
      <div className="w-full max-w-screen-lg p-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">{props.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Información Personal</h3>
            <p className="text-gray-600">Nombre: {props.name}</p>
            <p className="text-gray-600">Ubicación: {props.ubication}</p>
            <p className="text-gray-600">Correo Electrónico: {props.email}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Habilidades</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Sabe hacer arroz</li>
              <li>Sabe hacer huevo frito</li>
              <li>Sabe hablar lesco</li>
              <li>Sabe como ser su propio jefe</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Personas que pueden recomendarme</h3>
          <ul className="list-disc list-inside text-gray-600">
              <li>Mark Suckerberg</li>
              <li>Barack Obama</li>
              <li>Cristiano Ronaldo</li>
              <li>Luis Barquero Villalobos</li>
              <li>Neil Armstrong</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Experiencias laborales</h3>
          <ul className="list-disc list-inside text-gray-600">
              <li>Amigo del chino quien creo la Abaco</li>
              <li>Compañero de Neil Armstrong</li>
              <li>Compañero de cuarto de Lionel Messi</li>
              <li>Amigo de Juan Santamaria</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 hover:scale-110 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Sobre mí</h3>
        <p className="text-gray-600">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
