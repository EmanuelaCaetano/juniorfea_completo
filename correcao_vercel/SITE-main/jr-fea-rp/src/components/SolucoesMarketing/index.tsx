"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaCalendar } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from 'next/image';
import Image1 from '../../../public/marketing.jpg';
import BlurFade from "../ui/blur-fade";

interface SolucaoInfo {
  titulo: string;
  descricao: string;
  definicao: string;
  beneficios: string;
  impacto: string;
  leftTitle: string;
  leftContent: string;
  centerTitle: string;
  centerContent: string;
  rightTitle: string;
  rightContent: string;
}

const solucoes: SolucaoInfo[] = [

  {
    titulo: "Plano de Marketing",
    descricao: "Te ajudamos na sua estratégia de mercado!",
    definicao: "O plano de marketing tem como objetivo o estudo do mercado de atuação de uma empresa ou de um novo negócio. A partir dele é possível analisar o comportamento dos consumidores e dos concorrentes de um segmento. Dessa forma, auxilia na criação de estratégias para se diferenciar.",
    beneficios: "Estudo do mercado, análise de público-alvo e concorrência.",
    impacto: "Estratégias de mercado mais eficazes e diferenciadas.",
    leftTitle: "Estudo de mercado",
    leftContent: "Entender o mercado é fundamental para criar estratégias mais assertivas, conhecendo os fatores que interferem no segmento.",
    centerTitle: "Pesquisa de Público-alvo",
    centerContent: "Conheça as necessidades do seu público-alvo para compreender melhor o perfil dos seus consumidores.",
    rightTitle: "Análise da Concorrência",
    rightContent: "Identificar seus concorrentes diretos permite criar diferenciais competitivos."
  },

 {
    "titulo": "Estratégia de Marketing",
    "descricao": "Elabore um planejamento estratégico que posiciona sua marca no mercado, aumenta sua visibilidade e atrai o público-alvo certo! Veja os benefícios:",
    "definicao": "Planejamento detalhado para atrair e fidelizar clientes!",
    "beneficios": "Aumento do engajamento e reconhecimento da marca.",
    "impacto": "Resultados mensuráveis e crescimento sustentável.",
    "leftTitle": "Preço Acessível",
    "leftContent": "Júnior FEA-RP é uma empresa de consultoria sem fins lucrativos e com custos abaixo do mercado. Dessa forma, entregamos projetos de qualidade com preços mais acessíveis.",
    "centerTitle": "Visibilidade",
    "centerContent": "Auxiliamos nossos clientes a construírem uma presença forte e impactante no mercado, alinhando estratégias aos objetivos do negócio.",
    "rightTitle": "Resultados",
    "rightContent": "Trabalhamos para que cada estratégia implemente mudanças reais, impulsionando o desempenho de nossos clientes."
},
{
  "titulo": "Marketing Verde",
  "descricao": "Desenvolva estratégias que alinham os objetivos do seu negócio com práticas sustentáveis, valorizando o meio ambiente e conquistando um público consciente! Veja os benefícios:",
  "definicao": "Comunicação responsável e engajamento sustentável!",
  "beneficios": "Conexão com consumidores conscientes e melhoria da imagem da marca.",
  "impacto": "Redução de impacto ambiental e crescimento ético.",
  "leftTitle": "Preço Acessível",
  "leftContent": "Júnior FEA-RP é uma empresa de consultoria sem fins lucrativos e com custos abaixo do mercado. Dessa forma, entregamos projetos de qualidade com preços mais acessíveis.",
  "centerTitle": "Sustentabilidade",
  "centerContent": "Apoiamos empresas na adoção de práticas ambientalmente responsáveis, alinhando rentabilidade à preservação do meio ambiente.",
  "rightTitle": "Engajamento",
  "rightContent": "Inspiramos empresas e consumidores a adotarem um estilo de vida mais consciente, gerando impacto positivo no mercado e na sociedade."
}
  
];

const ModeloSolucao = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative flex overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out transform m-10 border-2 border-red-600 ${
        hovered ? 'bg-red-700 text-white' : 'bg-white text-gray-900'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagem */}
      <div className="w-1/2 overflow-hidden">
        <Image
          src={Image1}
          alt="Marketing Visual"
          className={`h-full w-full object-cover transition-transform duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>

      {/* Descrição e Botões */}
      <div className="w-1/2 p-6 flex flex-col justify-center items-center text-center space-y-4 transition-transform duration-500">
        {hovered ? (
          <>
            <h2 className="text-3xl font-bold text-center">Marketings</h2>
            <p className="text-center mt-2 text-base">
              Saiba cada detalhe dos seus clientes, como fidelizá-los e alcançar os seus resultados!
            </p>
            {/* Botões de opções */}
            <div className="mt-4 space-y-2 w-full">
              {solucoes.map((solucao) => (
                <Link
                  key={solucao.titulo}
                  href={{
                    pathname: '/ModeloSolucao',
                    query: {
                      titulo: solucao.titulo,
                      descricao: solucao.descricao,
                      definicao: solucao.definicao,
                      beneficios: solucao.beneficios,
                      impacto: solucao.impacto,
                      leftTitle: solucao.leftTitle,
                      leftContent: solucao.leftContent,
                      centerTitle: solucao.centerTitle,
                      centerContent: solucao.centerContent,
                      rightTitle: solucao.rightTitle,
                      rightContent: solucao.rightContent
                    },
                  }}
                >
                  <button className="w-full px-4 py-2 text-sm font-semibold rounded-lg hover:bg-gray-300 focus:outline-none">
                    <div className="flex items-center justify-center space-x-2">
                      {solucao.titulo === "Plano de Marketing" && <FaSearch />}
                      {solucao.titulo === "Estratégia de Marketing" && <GoGraph />}
                      {solucao.titulo === "Marketing Verde" && <BsFillPersonLinesFill />}
                      <p>{solucao.titulo}</p>
                    </div>
                  </button>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-3xl">Marketing</h1>
            <p className="mt-2 text-base">
              Descrição dos benefícios do marketing, incluindo métodos para melhorar o
              alcance, engajamento e retenção de clientes. Entenda como a estratégia
              pode alavancar os resultados e a imagem do seu negócio.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ModeloSolucao;
