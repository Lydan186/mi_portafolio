'use client';

import React, { useEffect } from 'react';
import { loadRepositories } from './carruselUtils';

interface CarruselProps {
    githubToken: string;
  }

const Carrusel: React.FC<CarruselProps> = ({ githubToken }) => {
  useEffect(() => {
    loadRepositories('project-carousel', githubToken);
  }, [githubToken]);

  return (
    <div className="bg-gray-700 container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-4">Mis Proyectos</h2>
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-10" id="project-carousel">
        {}
      </div>
    </div>
  );
};

export default Carrusel;