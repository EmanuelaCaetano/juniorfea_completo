'use client';

import React from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import BlurFade from '../ui/blur-fade';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="w-screen flex flex-col items-center justify-start">
  {/* Top Section com animação */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative w-full h-screen flex flex-col items-center justify-center bg-black shadow-lg overflow-hidden"
  >
    {/* Imagem de fundo */}
    <div className="relative w-full h-full">
      <Image
        src="/introducao1.jpg"
        alt="Team working"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
    </div>

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

      {/* Botões */}
      <div className="w-full sm:w-auto flex justify-center z-10 pb-4 sm:pb-0">
        <AnimatePresence>
          {/*<Link href="/contato">
            <button className="px-8 py-2 rounded-md bg-white text-red-500 font-bold transition border-white duration-200 hover:bg-black hover:text-white-500 border-2 border-transparent hover:border-red-500">
              Saiba Mais
            </button>
          </Link>*/}
          <a
            href="/contato"
            className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-3xl mt-8 md:mt-16 font-bold drop-shadow-lg hover:bg-corPrimaria hover:text-white hover:scale-110 transition duration-200 ease-in-out"
          >
            Faça um Diagnóstico Gratuito!
          </a>
        </AnimatePresence>
      </div>
    </div>
  </motion.div>

  {/* Bottom Section (30% da altura da tela) */}
  <div className="relative w-full min-h-[32vh] bg-corPrimaria text-white flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 md:px-24 py-8 sm:py-12 gap-6">
    {/* Conteúdo da esquerda */}
    <div className="text-center sm:text-left flex flex-col justify-center max-w-lg">
      <h2 className="sm:text-2xl text-lg font-bold mb-4">Gestão de Negócios</h2>
      <BlurFade delay={0.25} inView>
        <p className="text-left text-sm max-w-xl">
          Confira abaixo as soluções que podemos oferecer ao seu negócio!
        </p>
      </BlurFade>
    </div>

    {/* Triângulo alinhado ao início do texto */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 sm:left-12 md:left-24 sm:translate-x-0 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[30px] border-b-white" />
  </div>
</section>

  );
}

export default IntroSection;





