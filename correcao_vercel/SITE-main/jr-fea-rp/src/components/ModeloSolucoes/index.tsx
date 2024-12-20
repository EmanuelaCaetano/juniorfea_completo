'use client'

import React from 'react';
import Image from 'next/image';
import handplus from '../../../public/handplus.png';
import bulb from '../../../public/bulb.png';
import foguete from '../../../public/foguete.png';

interface ModeloSolucaoProps {
  descricao1?: string;
  descricao2?: string;
  descricao3?: string;
}

const ModeloSolucao: React.FC<ModeloSolucaoProps> = ({ descricao1, descricao2, descricao3 }) => {
  return (
    <>
    <div className="grid grid-cols-2 items-center h-full bg-gray-100 p-10 gap-8">

    {/* Card 1 */}
    <div className="flex justify-center items-center">
      <div className="relative group w-full h-96 max-w-md p-10 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="absolute inset-0 bg-white flex flex-col justify-center items-center p-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          <p className="text-gray-600 text-center text-xl font-semibold mt-4">O que é a solução</p>
        </div>
        <div className="absolute inset-0 bg-red-600 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 w-0 h-full bg-red-800 clip-triangle group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></div>
          <div className="absolute bottom-10 left-0 w-full z-10 text-center p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">O que é a solução</h3>
            <p className="text-sm">{descricao1}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <Image
        src={bulb}
        alt="lampada de ideias"
        className="w-24 h-24" // Ajuste o tamanho conforme necessário
      />
    </div>
  
    {/* Card 2 (alterado a ordem da imagem e do card, agora quadrado) */}
    <div className="flex justify-center items-center">
      <Image
        src={handplus}
        alt="Mão com sinais positivos"
        className="w-24 h-24" // Ajuste o tamanho conforme necessário
      />
    </div>
    <div className="flex justify-center items-center">
      <div className="relative group w-full h-96 max-w-md p-10 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="absolute inset-0 bg-white flex flex-col justify-center items-center p-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          <p className="text-gray-600 text-center text-xl font-semibold mt-4">Benefícios</p>
        </div>
        <div className="absolute inset-0 bg-red-600 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 w-0 h-full bg-red-800 clip-triangle group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></div>
          <div className="absolute bottom-10 left-0 w-full z-10 text-center p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Benefícios</h3>
            <p className="text-sm">{descricao2}</p>
          </div>
        </div>
      </div>
    </div>
  
    {/* Card 3 */}
    <div className="flex justify-center items-center">
      <div className="relative group w-full h-96 max-w-md p-10 rounded-xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="absolute inset-0 bg-white flex flex-col justify-center items-center p-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          <p className="text-gray-600 text-center text-xl font-semibold mt-4">Impacto da solução</p>
        </div>
        <div className="absolute inset-0 bg-red-600 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div className="absolute bottom-0 left-0 w-0 h-full bg-red-800 clip-triangle group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></div>
          <div className="absolute bottom-10 left-0 w-full z-10 text-center p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Impacto da solução</h3>
            <p className="text-sm">{descricao3}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <Image
        src={foguete}
        alt="Foguete representando crescimento"
        className="w-24 h-24 " // Ajuste o tamanho conforme necessário
      />
    </div>
  
  </div>
  </>

  
  );
};

export default ModeloSolucao;
