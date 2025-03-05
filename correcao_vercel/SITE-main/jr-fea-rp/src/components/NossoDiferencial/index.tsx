// import Image from 'next/image';
import FlippingCard from '@/components/FlippingCard';

export const NossoDiferencial = () => {
  const cardsData = [
    {
      frontContent: { title: 'Preço Acessível', image: '/precoBaixoBranco.png' },
      backContent: { title: 'Preço Acessível', image: '/precoBaixoVermelho.png', text: 'A Júnior FEA-RP se configura entre as melhores empresas de consultoria empresarial júnior do Brasil, com custos abaixos do mercado. Dessa forma, entregamos projetos de alta qualidade com preços mais acessíveis.' },
    },
    {
      frontContent: { title: 'Desenvolvimento', image: '/desenvolvimentoBranco.png' },
      backContent: { title: 'Desenvolvimento', image: '/desenvolvimentoVermelho.png', text: 'Ajudamos nossos clientes com conhecimentos técnicos e teóricos sobre gestão, visando o apoio ao empreendedorismo e à inovação.' },
    },
    {
      frontContent: { title: 'Incentivo', image: '/incentivoBranco.png' },
      backContent: { title: 'Incentivo', image: '/incentivoVermelho.png', text: 'Acreditamos no potencial de cada empresa e cada cliente. Além de produzirmos soluções, fazemos com que eles também acreditem em seus sonhos e busquem realizá-los.' },
    },
  ];
    return(
        <>
        <div className="w-full mt-40 mb-40 ">
            <h2 className="text-corPrimaria text-4xl text-center font-bold drop-shadow-lg">Nosso Diferencial</h2>
            
            <div className=" mt-16 flex  flex-wrap justify-center gap-8">
        {cardsData.map((card, index) => (
          <FlippingCard
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



