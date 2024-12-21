'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Definição dos tipos das props
interface CardContent {
  title: string
  image?: string // Caso a imagem não seja obrigatória
  text?: string  // Caso o texto não seja obrigatório
}

interface SmallFlippingCardProps {
  frontContent: CardContent
  backContent: CardContent
}

const SmallFlippingCard: React.FC<SmallFlippingCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
    setIsAnimating(false)
  }

  return (
    <div
      className="w-[200px] h-[320px] rounded-lg mr-16 ml-16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.4s',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* Frente do cartão */}
        <div
          className="flex flex-col items-center absolute w-full h-full bg-white bg-cover border-[1px] text-white rounded-[60px] p-4 drop-shadow-lg shadow-2xl shadow-corPrimaria"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          <h1 className="text-xl text-black font-medium drop-shadow-2xl pt-8">{frontContent.title}</h1>
          {frontContent.image && <img src={frontContent.image} alt=" " className="w-2/3 pt-6" />}
        </div>

        {/* Verso do cartão */}
        <div
          className="flex flex-col items-center absolute w-full h-full bg-cover border-[1px] bg-corPrimaria text-white rounded-[60px] p-4 drop-shadow-lg shadow-xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <p className="pt-8 text-2xl font-bold text-center">{frontContent.title}</p>
          <p className="pt-8 text-center text-sm">{backContent.text}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SmallFlippingCard



