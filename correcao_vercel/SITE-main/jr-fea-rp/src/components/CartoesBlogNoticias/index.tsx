"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Slide {
  title: string;
  description: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    title: "Marketing",
    description:
      "Entenda como funcionam os processos do seu negócio e aprenda a crescer em direção ao sucesso!",
    image: "/marketing.jpg", // Substitua pelo caminho real da imagem
    link: "/marketing",
  },
  {
    title: "Vendas",
    description:
      "Descubra estratégias eficientes para alavancar suas vendas e conquistar mais clientes!",
    image: "/vendas.jpg",
    link: "/vendas",
  },
  {
    title: "Empreendedorismo",
    description:
      "Saiba como transformar suas ideias em um negócio de sucesso com dicas essenciais!",
    image: "/empreendedorismo.jpg",
    link: "/empreendedorismo",
  },
];

const CartoesBlogNoticias: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[80vh] flex justify-center items-center overflow-hidden">
      {/* Área do Carrossel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center w-full h-full bg-red-600 rounded-lg p-6 text-white"
        >
          {/* Imagem */}
          <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Texto */}
          <div className="ml-[280px] md:ml-[450px] max-w-[600px] text-left">
            <h2 className="text-2xl md:text-4xl font-bold">{slides[current].title}</h2>
            <p className="text-base md:text-lg mt-4">{slides[current].description}</p>
            <a
              href={slides[current].link}
              className="mt-6 inline-block bg-white text-red-600 px-6 py-3 rounded-md text-lg font-semibold transition hover:bg-gray-200"
            >
              Saiba Mais
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-4 md:p-6 rounded-full hover:bg-gray-800 transition"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-4 md:p-6 rounded-full hover:bg-gray-800 transition"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CartoesBlogNoticias;

