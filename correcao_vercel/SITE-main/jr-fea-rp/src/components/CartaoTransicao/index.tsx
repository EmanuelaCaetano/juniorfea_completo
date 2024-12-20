'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CartaoTransicao = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full max-w-md p-4 border rounded-lg shadow-lg"
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ x: hovered ? -50 : 0, y: hovered ? -50 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-white flex justify-center items-center rounded-lg"
        >
          <div className="relative w-full h-96 bg-gradient-to-t from-red-600 to-transparent flex justify-center items-center">
            <h2 className="text-gray-800 text-xl">O que é a solução</h2>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ x: 50, y: 50 }}
          animate={{ x: hovered ? 0 : 50, y: hovered ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-red-600 text-white flex justify-center items-center rounded-lg p-4"
        >
          <div className="flex flex-col items-center">
            <div className="relative w-full h-96 bg-gradient-to-t from-transparent to-red-600 flex justify-center items-center">
              <h2 className="text-white text-xl">Explicação da solução</h2>
            </div>
            <p className="mt-4">
              O projeto ofertado pela Júnior FEA-RP proporciona aos gestores uma maior segurança ao realizar um novo empreendimento. Isto, trazendo dados concretos que mostram se o projeto é viável.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartaoTransicao;
