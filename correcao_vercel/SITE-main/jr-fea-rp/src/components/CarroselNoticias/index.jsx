"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const CarroselNoticias = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Array de informações das notícias
  const noticias = [
    {
      title: "Marketing",
      description: "Entenda como funcionam os processos do seu negócio e aprenda a crescer em direção ao sucesso!",
      imageSrc: "/marketing.png"
    },
    {
      title: "Tecnologia",
      description: "Descubra as últimas tendências em tecnologia e inovação.",
      imageSrc: "/image.png" 
    },
    {
      title: "Economia",
      description: "Fique por dentro das novidades econômicas e financeiras.",
      imageSrc: "/image1.jpeg" 
    },
  ];

  // Muda para o próximo slide automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % noticias.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [noticias.length]);

  // Função para mudar manualmente o slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {noticias.map((noticia, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex overflow-hidden rounded-lg shadow-lg m-10 border-2 border-red-600 transition-all duration-500 ease-in-out transform bg-white">
            
            {/* Imagem da notícia */}
            <div className="w-1/2 overflow-hidden">
              {noticia.imageSrc && (
                <Image
                  src={noticia.imageSrc}
                  alt={noticia.title}
                  width={500} // Ajuste a largura da imagem
                  height={300} // Ajuste a altura da imagem
                  objectFit="cover"
                  className={`h-full w-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
                />
              )}
            </div>

            {/* Conteúdo da notícia */}
            <div
  className={`w-1/2 p-6 mt-22 flex flex-col justify-between text-left transition-transform duration-500 ${
    hovered ? 'bg-red-700 text-white' : 'bg-red-600 text-white'
  }`}
>
  {/* Container de título e descrição */}
  <div className="space-y-4">
    <h3 className="text-2xl font-bold">{noticia.title}</h3>
    <p className="text-base leading-relaxed">{noticia.description}</p>
  </div>
  
  {/* Botão na parte inferior */}
  <div className="flex justify-start mt-6">
    <button className="py-2 px-8 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-200 transition-colors">
      Saiba Mais
    </button>
  </div>
</div>


          </div>
        </div>
      ))}

      {/* Botões de Navegação */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          className="text-white text-2xl bg-red-600 bg-opacity-75 p-6 rounded-full hover:bg-opacity-100 transition-opacity"
          onClick={() => goToSlide((currentIndex - 1 + noticias.length) % noticias.length)}
        >
          ❮
        </button>
        <button
          className="text-white text-2xl bg-red-600 bg-opacity-75 p-6 rounded-full hover:bg-opacity-100 transition-opacity"
          onClick={() => goToSlide((currentIndex + 1) % noticias.length)}
        >
          ❯
        </button>
      </div>

      {/* Indicadores de Página */}
      <div className="flex justify-center space-x-2 mt-6">
        {noticias.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarroselNoticias;

