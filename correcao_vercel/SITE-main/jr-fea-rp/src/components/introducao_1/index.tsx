'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlurFade from '../ui/blur-fade';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
import { motion } from 'framer-motion';

const IntroSection: React.FC = () => {
  const words = [
    {
      text: 'Experiencie as melhores',
    },
    {
      text: 'oportunidades',
      className: 'text-red-500',
    },
  ];

  return (
    <section className="w-screen h-[80vh] flex flex-col items-center justify-start">
      {/* Top Section com animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-full flex flex-col items-center justify-center bg-black shadow-lg overflow-hidden"
      >
        {/* Imagem de fundo com animação */}
        <Image
          src="/introducao1.jpg"
          alt="Team working"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Gradiente sobreposto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

        {/* Conteúdo sobre a imagem */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-6">
          <h1 className="text-4xl font-bold text-center pt-20">
            <TypewriterEffectSmooth words={words} />
          </h1>
          <BlurFade delay={0.25} inView>
            <p className="mt-2 text-2xl text-center">
              Experiencie um trabalho de qualidade e preço justo. Venha fazer um diagnóstico gratuito.
            </p>
          </BlurFade>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="relative w-full h-[30vh] bg-corPrimaria text-white flex items-center px-6 pl-36 pr-36">
        {/* Conteúdo da esquerda */}
        <div className="flex flex-col justify-center">
          <h2 className="sm:text-2xl text-lg font-bold mb-4">Gestão de Negócios</h2>
          <BlurFade delay={0.25} inView>
            <p className="text-left text-sm max-w-xl">
              Confira abaixo as soluções que podemos oferecer ao seu negócio!
            </p>
          </BlurFade>
        </div>

        {/* Botão */}
        <div className="ml-auto">
          <Link href="/contato">
            <button className="sm:px-8 sm:py-2 px-6 py-2 rounded-md bg-white text-red-500 font-bold transition border-white duration-200 hover:bg-black hover:text-white-500 border-2 border-transparent hover:border-red-500">
              Saiba Mais
            </button>
          </Link>
        </div>

        {/* Triângulo alinhado */}
        <div className="absolute bottom-0 left-0 translate-x-36 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[50px] border-b-white" />
      </div>
    </section>
  );
};

export default IntroSection;





