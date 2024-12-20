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
    const cardsData = [
        {
          frontContent: { title: leftTitle, image: 'lupa.png' },
          backContent: { image: 'precoBaixoVermelho.png', text: leftContent },
        },
        {
          frontContent: { title: centerTitle, image: 'grafico.png'  },
          backContent: { image: 'desenvolvimentoVermelho.png', text: centerContent },
        },
        {
          frontContent: { title: rightTitle, image: 'alvo.png'  },
          backContent: { image: 'incentivoVermelho.png', text: rightContent },
        },
        // Adicione mais cartões conforme necessário
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