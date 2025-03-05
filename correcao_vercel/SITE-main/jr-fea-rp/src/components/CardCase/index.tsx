import React from 'react';
import Marquee from '../ui/marquee';
import Image from 'next/image';

interface CardCaseProps {
  logo: string;
  nps: string;
  challenge: string;
  solution: string;
}

const cases = [
  {
    logo: '/Coca-logo.png',
    nps: '10',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
  {
    logo: '/Danone-Logo.png',
    nps: '9',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
  {
    logo: '/99logo.jpeg',
    nps: '7',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
  {
    logo: '/BFC-logo.png',
    nps: '6',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
  {
    logo: '/CI-logo.png',
    nps: '7',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
  {
    logo: '/Danone-Logo.png',
    nps: '9',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
  {
    logo: '/99logo.jpeg',
    nps: '7',
    challenge: 'Breve descrição sobre o desafio.',
    solution: 'Breve descrição sobre a solução desenvolvida para a empresa.',
  },
];

const CardCase: React.FC<CardCaseProps> = ({ logo, nps, challenge, solution }) => {
  return (
    <div className="h-2000 border rounded-lg p-4 shadow-md flex flex-col justify-between min-w-[500px] mx-4 relative">
      {/* Header com Logo e NPS */}
      <div className="flex items-center justify-between mb-4">
        <Image src={logo} alt="Logo" width={48} height={48} className="h-12 w-auto" />
        <span className="text-xl font-bold text-gray-800">NPS {nps}</span>
      </div>

      {/* Desafio e Solução */}
      <div className="flex justify-between">
        <div className="text-left mr-4">
          <h3 className="text-lg font-semibold">Desafio</h3>
          <p className="text-sm text-gray-600">{challenge}</p>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold">Solução</h3>
          <p className="text-sm text-gray-600">{solution}</p>
        </div>
      </div>

      {/* Botão Saiba Mais */}
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          Saiba mais
        </button>
      </div>

      {/* Linha Vermelha na Parte Inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600 rounded-b-lg"></div>
    </div>
  );
};

const Home: React.FC = () => {
  const firstRow = cases.slice(0, Math.ceil(cases.length / 3));
  const secondRow = cases.slice(Math.ceil(cases.length / 3), Math.ceil((2 * cases.length) / 3));
  const thirdRow = cases.slice(Math.ceil((2 * cases.length) / 3));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="relative flex flex-col items-center justify-center overflow-hidden w-full h-[600px]">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((caseData, index) => (
            <CardCase
              key={index}
              logo={caseData.logo}
              nps={caseData.nps}
              challenge={caseData.challenge}
              solution={caseData.solution}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((caseData, index) => (
            <CardCase
              key={index}
              logo={caseData.logo}
              nps={caseData.nps}
              challenge={caseData.challenge}
              solution={caseData.solution}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]">
          {thirdRow.map((caseData, index) => (
            <CardCase
              key={index}
              logo={caseData.logo}
              nps={caseData.nps}
              challenge={caseData.challenge}
              solution={caseData.solution}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;


