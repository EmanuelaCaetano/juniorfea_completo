'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const CartaoMascarado = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div 
        className="relative w-80 h-64 bg-gray-200 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Conteúdo */}
        <div className="absolute inset-0 bg-white flex items-center justify-center text-black text-xl font-bold">
          O que é a solução?
        </div>
        {/* Máscara */}
        <motion.div
          initial={{ clipPath: 'polygon(90% 90%, 100% 80%, 100% 100%, 80% 100%)' }}
          animate={isHovered ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' } : { clipPath: 'polygon(90% 90%, 100% 80%, 100% 100%, 80% 100%)' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-16 items-center pt-8 absolute inset-0 bg-red-500"
        >
            <h3>Explicação da solução </h3>
            <p className='text-xs'>O projeto ofertado pela Júnior FEA-RP proporciona aos gestores uma maior segurança ao realizar um novo empreendimento. Isto, trazendo dados concretos que mostram se o projeto é viável.</p>
        </motion.div>
      </div>
    </div>
  );
};



export default CartaoMascarado;
