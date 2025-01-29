"use client"
import { Headphones, Heart, AlertCircle, User, Scale } from "lucide-react"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Valores() {
  const [flippedStates, setFlippedStates] = useState(Array(5).fill(false)); // Estado para cada card

  const handleMouseEnter = (index) => {
    setFlippedStates(prev => prev.map((state, i) => (i === index ? true : state)));
  };

  const handleMouseLeave = (index) => {
    setFlippedStates(prev => prev.map((state, i) => (i === index ? false : state)));
  };

  const cardsData = [
    { frontContent: { title: 'Foco no Cliente', icon: Headphones }, backContent: { text: 'Colocamos as necessidades do cliente no centro, oferecendo soluções personalizadas e eficientes.' }},
    { frontContent: { title: 'Sentimento de Dono', icon: Heart }, backContent: { text: 'Agimos com responsabilidade e proatividade, como se a empresa fosse nossa.' }},
    { frontContent: { title: 'Inconformismo', icon: AlertCircle }, backContent: { text: 'Buscamos sempre melhorar, desafiando padrões e inovando constantemente.' }},
    { frontContent: { title: 'Profissionalismo', icon: User }, backContent: { text: 'Entregamos excelência com comprometimento, disciplina e qualidade.' }},
    { frontContent: { title: 'Ética e Transparência', icon: Scale }, backContent: { text: 'Atuamos com honestidade, clareza e responsabilidade em todas as relações.' }},
  ];

  return (
    <div className="px-4 py-16 mx-auto max-w-7xl">
      <h2 className="text-4xl font-medium text-center text-corPrimaria ">Valores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {cardsData.map((card, index) => (
          <div key={index} className="pt-8 flex flex-col items-center">
            <div
              className="w-40 h-60 rounded-lg mx-12 my-16"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="w-full h-full relative"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.4s',
                }}
                animate={{ rotateY: flippedStates[index] ? 180 : 0, scale: flippedStates[index] ? 0.98 : 1 }}
              >
                {/* Frente do cartão */}
                <div
                  className="flex flex-col items-center absolute w-full h-full bg-cover border-corPrimaria border-2 text-white rounded-3xl p-4 drop-shadow-lg shadow-2xl"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
                >
                  <div className="w-12 h-12">
                    <card.frontContent.icon className="w-full h-full mt-16 text-corPrimaria transition-colors duration-300 ease-in-out group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl text-corPrimaria text-center font-bold drop-shadow-2xl mt-[200px]">{card.frontContent.title}</h3>
                </div>

                {/* Verso do cartão */}
                <div
                  className="flex flex-col items-center absolute w-full h-full bg-cover border-[1px] border-corPrimaria text-white rounded-3xl p-4 drop-shadow-lg shadow-xl shadow-corPrimaria"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-corPrimaria text-sl text-center">{card.backContent.text}</p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
