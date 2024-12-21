'use client'
import React from "react";
import SmallFlippingCard from "../SmallFlippingCards";

interface cardProps {
  leftTitle: string;
  leftContent: string;
  centerTitle: string;
  centerContent: string;
  rightTitle: string;
  rightContent: string;
}


const CartoesVisaoResultadoAcertividade: React.FC<cardProps> = ({ leftTitle, leftContent, centerTitle, centerContent, rightTitle, rightContent }) => {
  interface CardContent {
    title: string;
    image: string;
    text?: string; // Adicione caso `text` não seja obrigatório
  }
  
  const cardsData: { frontContent: CardContent; backContent: CardContent }[] = [
    {
      frontContent: { title: leftTitle, image: 'lupa.png' },
      backContent: { title: "Back Title 1", image: 'precoBaixoVermelho.png', text: leftContent },
    },
    {
      frontContent: { title: centerTitle, image: 'grafico.png' },
      backContent: { title: "Back Title 2", image: 'desenvolvimentoVermelho.png', text: centerContent },
    },
    {
      frontContent: { title: rightTitle, image: 'alvo.png' },
      backContent: { title: "Back Title 3", image: 'incentivoVermelho.png', text: rightContent },
    },
  ];
  
        return(
            <>
            <div className="w-full mt-40 mb-40 ">
                
                <div className=" mt-16 flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
              <SmallFlippingCard
                key={index}
                frontContent={card.frontContent}
                backContent={card.backContent}
              />
          ))}
        </div>  
                
            </div>
            </>
        )
}

export default CartoesVisaoResultadoAcertividade