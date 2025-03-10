"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import db from "../../utils/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Slide {
  id: string;
  title: string;
  previa: string;
  description: string;
  image: string;
  link: string;
  noticia: string;
}

const CartoesBlogNoticias: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const slidesCollection = collection(db, "posts");
        const q = query(slidesCollection, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const slidesData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() } as Slide))
          .filter((slide) => slide.noticia === "sim");
          


        setSlides(slidesData);
      } catch (error) {
        console.error("Erro ao buscar slides:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Carregando slides...</p>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Nenhuma notícia encontrada.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-center md:items-start w-full h-full bg-corPrimaria rounded-lg p-6 text-white"
        >
          {/* Imagem menor (lado esquerdo) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[560px] max-h-[315px]">
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                width={560}
                height={315}
                objectFit="contain"
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* Conteúdo (lado direito) */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold">{slides[current].title}</h2>
            <p className="text-base md:text-lg mt-4">{slides[current].previa}</p>
            <button
              onClick={() => router.push(`/blog/${slides[current].id}`)}
              className="mt-6 bg-white text-corPrimaria px-6 py-3 rounded-md text-lg font-semibold transition hover:bg-gray-200 self-start"
            >
              Saiba Mais
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botões de navegação - Agora eles NÃO SOBREPOEM a imagem */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 lg:left-10 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-4 md:p-6 rounded-full hover:bg-gray-800 transition"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 lg:right-10 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-4 md:p-6 rounded-full hover:bg-gray-800 transition"
      >
        ▶
      </button>

      {/* Indicadores de slide */}
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
