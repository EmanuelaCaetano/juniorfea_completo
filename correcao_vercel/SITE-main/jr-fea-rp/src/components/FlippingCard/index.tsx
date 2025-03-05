"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Definindo as interfaces para as props
interface CardContent {
  title?: string;
  image?: string;
  text?: string;
}

interface FlippingCardProps {
  frontContent: CardContent;
  backContent: CardContent;
}

const FlippingCard = ({ frontContent, backContent }: FlippingCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleMouseEnter = () => {
    if (!isAnimating) {
        setIsFlipped(!isFlipped);
        setIsAnimating(true);
    }
  };

  const handleMouseleave = () => {
    setIsFlipped(false);
    setIsAnimating(false);
  };



return (
  <div
    className="w-[300px] h-[360px] rounded-lg mr-16 ml-16"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseleave}
    style={{
      perspective: '1000px',
    }}
  >
    <motion.div
      className="w-full h-full relative"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s',
      }}
      animate={{ rotateY: isFlipped ? 180 : 0, scale: isFlipped ? 0.98 : 1 }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {/* Frente */}
      <div
        className="flex flex-col items-center absolute w-full h-full bg-corPrimaria bg-cover border-corPrimaria border-2 text-white rounded-3xl p-4 drop-shadow-lg shadow-2xl"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)',
        }}
      >
        <h1 className="text-2xl font-medium drop-shadow-2xl pt-8">
          {frontContent.title}
        </h1>
        <Image src={frontContent.image} alt="Imagem frontal" width={150} height={150} className="pt-20" />
      </div>

      {/* Verso */}
      <div
        className="flex flex-col items-center absolute w-full h-full bg-cover border-[1px] border-corPrimaria text-white rounded-3xl p-4 drop-shadow-lg shadow-xl shadow-corPrimaria"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <Image src={backContent.image} alt="Imagem traseira" width={150} height={150} className="pt-4" />
        <p className="text-corPrimaria pt-8 text-center">{backContent.text}</p>
      </div>
    </motion.div>
  </div>
);
};

export default FlippingCard;
