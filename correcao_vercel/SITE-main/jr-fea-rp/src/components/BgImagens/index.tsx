'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";


interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: '/imagemTeste1.jpg', alt: 'Imagem 1' },
  { src: '/imagemTeste2.jpg', alt: 'Imagem 2' },
  { src: '/imagemTeste3.jpg', alt: 'Imagem 2' },
  // Adicione mais imagens aqui
];

const DynamicBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pathname = usePathname();
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Troca a imagem a cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  if (pathname === "/teste") {
    return (<div></div>)}

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative w-full h-[500px]">
      <AnimatePresence>
        <motion.div
          key={currentImage.src}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
        <Image
            src={currentImage.src}
            alt={currentImage.alt}
            layout="fill"
            objectFit="cover"
        />
        {/* Conteúdo animado */}
        <div>
        <div className="w-full h-[500px] bg-red-500 bg-opacity-30 flex flex-col justify-center items-center drop-shadow-lg shadow-2xl">
            <h1 className="text-4xl text-white font-bold">
                Ainda está com Dúvidas? Fale com um Consultor!
            </h1>
            <p className="text-white font-medium pt-8">
            Queremos ouvir você! Marque uma reunião para discutirmos como podemos ajudar sua empresa a alcançar novos patamares. Estamos prontos para colaborar!
            </p>
            <a href="/contato" className="bg-white p-4 rounded-3xl w-1/3 mt-16 font-bold drop-shadow-lg hover:bg-corPrimaria hover:text-white hover:scale-110 transition duration-200 ease-in-out flex justify-center "> Faça um Diagnóstico Gratuito! </a>

      </div>
      </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicBackground;