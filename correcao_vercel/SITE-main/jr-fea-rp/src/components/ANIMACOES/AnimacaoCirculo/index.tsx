'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ElementosCirculo {
  titulo: string;
  items: string[];
  imagemUrl: string;
  imagemUrl2: string;
  link: string;
  query: Record<string, string>;
}

interface AnimacaoCirculoProps {
  elemento: ElementosCirculo;
}

const AnimacaoCirculo = ({ elemento }: AnimacaoCirculoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Círculo com animação */}
      <motion.div
        className={`relative w-64 h-64 flex items-center justify-center rounded-full mr-16 ml-16 cursor-pointer border-corPrimaria border-2 drop-shadow-lg ${
          isHovered ? "bg-corPrimaria" : "bg-white"
        }`}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img src={elemento.imagemUrl2}
        alt=""
        className="absolute w-24 h-24"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        initial={{ opacity: isHovered ? 1 : 0.6 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.8 }}
        />
        <Image src={elemento.imagemUrl} width={150} height={150} alt={elemento.titulo} className="w-24 h-24" />

      </motion.div>
          {/* Título fora do círculo que aumenta durante a animação */}
    
    <motion.h2 
    className="text-corPrimaria font-bold drop-shadow-lg text-2xl mt-4"
    animate={{ scale: isHovered ? 1.2 : 1}}
    transition={{ duration: 0.8}}
    >
      {elemento.titulo}
    </motion.h2>


      {/* Lista de itens animada */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 space-y-2 text-center flex flex-col"
        >
          {elemento.items.map((item, index) => (
            <button
              key={index}
              className="bg-corPrimaria text-white px-4 py-2 rounded-2xl"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AnimacaoCirculo;
