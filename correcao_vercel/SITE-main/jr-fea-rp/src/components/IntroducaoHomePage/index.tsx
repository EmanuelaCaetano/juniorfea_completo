'use client'

import React from 'react';
import { motion } from 'framer-motion';
//import LetterPullup from "@/components/ANIMACOES/letterPullup"
import LetterPullup from "@/components/ui/letter-pullup"

interface IntroducaoProps {
  imgPath: string;
  pageTitle:string;
  subTitle: string;
  context: string;
}

const IntroducaoHomePage: React.FC<IntroducaoProps> = ({ imgPath,subTitle, context}) => {
  return (
    <>
<div className="bg-corPrimaria w-full pb-4 rounded-b-lg shadow-lg h-[800px]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[770px] bg-no-repeat bg-cover bg-center flex justify-center drop-shadow-lg rounded-b-2xl"
                style={{ backgroundImage: `url(${imgPath})` }}
            >
  <div className="w-full h-[770px] pt-16 bg-gradient-to-t from-corPrimaria/20 to-black/85 flex flex-col items-center rounded-b-2xl">
    <div className="w-full h-1/6 flex flex-col items-center justify-center mt-40">
      <LetterPullup words="De sonhos a projetos: O impacto é a nossa marca!" />
    </div>
    <div className="flex flex-col items-center">
      <h3 className="text-white font-light pt-4 text-2xl">{subTitle}</h3>
    </div>
    <div className="flex-1 flex flex-col items-center pt-4 px-8">
      <p className="text-white text-xl font-light">{context}</p>
    </div>

  </div>
  </motion.div>
</div>
    </>
  )}

export default IntroducaoHomePage;
