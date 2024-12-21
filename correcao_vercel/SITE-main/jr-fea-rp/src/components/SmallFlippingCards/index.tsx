'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CardContent {
  title?: string
  image?: string
  text?: string
}

interface SmallFlippingCardProps {
  frontContent: CardContent
  backContent: CardContent
}

const SmallFlippingCard: React.FC<SmallFlippingCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => setIsFlipped(true)
  const handleMouseLeave = () => setIsFlipped(false)

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  }

  return (
    <div
      className="w-[200px] h-[320px] rounded-lg mr-4 ml-4 sm:w-[180px] sm:h-[280px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s' }}
        variants={cardVariants}
        animate={isFlipped ? 'back' : 'front'}
      >
        {/* Frente do cartão */}
        <div
          className="flex flex-col items-center absolute w-full h-full bg-white bg-cover border-[1px] text-white rounded-[60px] p-4 drop-shadow-lg shadow-2xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
        >
          <h1 className="text-xl text-black font-medium drop-shadow-2xl pt-8">{frontContent.title}</h1>
          {frontContent.image && (
            <img src={frontContent.image} alt={frontContent.title || 'Card Image'} className="w-2/3 pt-6" />
          )}
        </div>

        {/* Verso do cartão */}
        <div
          className="flex flex-col items-center absolute w-full h-full bg-cover border-[1px] bg-corPrimaria text-white rounded-[60px] p-4 drop-shadow-lg shadow-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="pt-8 text-2xl font-bold text-center">{backContent.title}</p>
          <p className="pt-8 text-center text-sm">{backContent.text}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SmallFlippingCard




