'use client';

import React, { useEffect } from 'react';
import { loadRepositories } from './carruselUtils';


export default function Carrusel(){
  useEffect(() => {

      loadRepositories('project-carousel');
    
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-green-500">
      <h2 className="text-white text-2xl font-bold mb-4">Mis Proyectos</h2>
      <div className="bg-gradient-to-r from-blue-500 to-green-500 flex overflow-x-auto snap-x snap-mandatory space-x-4" id="project-carousel">
        {/* Los proyectos se generarán dinámicamente aquí */}
      </div>
    </div>
  );
};
