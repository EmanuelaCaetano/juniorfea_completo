'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: '/duvidas1.jpg', alt: 'Imagem 1' },
  { src: '/duvidas2.jpg', alt: 'Imagem 2' },
  { src: '/duvidas3.jpg', alt: 'Imagem 3' },
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

  if (pathname === '/teste') {
    return <div></div>;
  }

  const currentImage = images[currentImageIndex];

  return (
    <div className="relative w-full min-h-[300px] md:h-[500px]">
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
            className="object-cover"
          />
          {/* Conteúdo animado */}
          <div className="w-full h-full bg-red-500 bg-opacity-30 flex flex-col justify-center items-center drop-shadow-lg shadow-2xl px-6 md:px-10 text-center">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              Ainda está com Dúvidas? Fale com um Consultor!
            </h1>
            <p className="text-white font-medium pt-4 md:pt-8 text-base md:text-2xl">
              Queremos ouvir você! Marque uma reunião para discutirmos como podemos ajudar sua empresa a alcançar novos patamares. Estamos prontos para colaborar!
            </p>
            <a
              href="/contato"
              className="bg-white px-6 py-3 md:px-8 md:py-4 rounded-3xl mt-8 md:mt-16 text-base sm:text-xl md:text-2xl font-bold drop-shadow-lg hover:bg-corPrimaria hover:text-white hover:scale-110 transition duration-200 ease-in-out"
            >
              Faça um Diagnóstico Gratuito!
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicBackground;
