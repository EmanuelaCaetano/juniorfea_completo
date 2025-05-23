'use client'

import React from 'react';
import { motion } from 'framer-motion';
//import LetterPullup from "@/components/ANIMACOES/letterPullup"
import LetterPullup from "@/components/ui/letter-pullup"
import { AnimatePresence } from 'framer-motion';

interface IntroducaoProps {
  imgPath: string;
  pageTitle:string;
  subTitle: string;
  context: string;
}

const IntroducaoHomePage: React.FC<IntroducaoProps> = ({ imgPath, subTitle, context }) => {
  return (
    <>
      <div className="bg-corPrimaria w-full pb-4 shadow-lg h-[800px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[770px] bg-no-repeat bg-cover bg-center flex justify-center drop-shadow-lg rounded-b-2xl"
          style={{ backgroundImage: `url(${imgPath})` }}
        >
          <div className="w-full h-[770px] pt-16 bg-gradient-to-t from-corPrimaria/20 to-black/85 flex flex-col items-center rounded-b-2xl">
            {/* Texto principal */}
            <div className="w-full h-1/6 flex flex-col items-center justify-center mt-40">
              <LetterPullup
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold sm:font-semibold md:font-medium lg:font-normal xl:font-light"
                words="De sonhos a projetos: O impacto é a nossa marca!"
              />
            </div>
            {/* Subtítulo */}
            <div className="flex flex-col items-center">
              <h3 className="text-white pt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold sm:font-semibold md:font-medium lg:font-normal xl:font-light">
                {subTitle}
              </h3>
            </div>
            {/* Contexto */}
            <div className="flex-1 flex flex-col items-center pt-4 px-8">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold sm:font-semibold md:font-medium lg:font-normal xl:font-light">
                {context}
              </p>
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
            
          </div>

          
        </motion.div>
      
      
      </div>

    </>
  );
};



export default IntroducaoHomePage;
