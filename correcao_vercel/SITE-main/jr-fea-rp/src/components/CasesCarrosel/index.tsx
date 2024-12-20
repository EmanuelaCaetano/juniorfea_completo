"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';

interface Slide {
  imageSrc: string;
  text: string;
}

const CarroselContato: React.FC = () => {
  const slides: Slide[] = [
    {
        imageSrc: "/Carrosel.png", // Caminho para a imagem na pasta public
        text: "Já pensou como podemos trabalhar em conjunto? Ótimo! Preencha as informações e nos mostre como poderíamos te ajudar."
      },
      {
        imageSrc: "/Carrosel2.png", // Exemplo com a mesma imagem para simplicidade, substitua se necessário
        text: "Estamos ansiosos para colaborar com você! Compartilhe suas ideias e vamos trabalhar juntos."
      },
      {
        imageSrc: "/Carrosel3.png",
        text: "Preencha o formulário e descubra como podemos fazer a diferença no seu projeto!"
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // 5 segundos
  
      return () => clearInterval(interval); 
    }, [slides.length]);
  
    const { imageSrc, text } = slides[currentIndex];
  
    return (
      <div className="flex flex-col items-center text-center p-4 ">
        <Image
          src={imageSrc}
          alt={`Slide ${currentIndex + 1}`}
          width={100} // Ajuste o tamanho conforme necessário
          height={100}
          
        />
        <p className="px-24 text-gray-700 text-sm">{text}</p>
      </div>
    );
  };

export default CarroselContato;
