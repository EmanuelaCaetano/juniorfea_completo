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
  { src: '/sobre1.jpg', alt: 'Imagem 1' },
  { src: '/sobre2.jpg', alt: 'Imagem 2' },
  { src: '/sobre3.jpg', alt: 'Imagem 2' },
  // Adicione mais imagens aqui
];

const DynamicImages = () => {
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
            className=''
        />
        {/* Conteúdo animado */}
        <div>
      </div>
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DynamicImages;