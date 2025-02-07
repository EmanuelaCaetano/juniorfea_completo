"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa6";
import Image from 'next/image';
import Image2 from '../../../public/image.jpg';

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

const solucoesEmpreendedorismo: SolucaoInfo[] = [
  
    {
      titulo: "Plano de Negócio",
      descricao: "Identifique oportunidades no mercado para se diferenciar a partir da ideias de novos produtos ou serviços, entender a viabilidade de mercado e estudar a possibilidade de ampliar o segmento ou nicho de atuação!",
      definicao: "O que é Plano de Negócio?",
      beneficios: "Visão abrangente do negócio, análise de mercado e estruturação interna.",
      impacto: "Trajetória mais clara e estruturada para atingir objetivos financeiros e estratégicos.",
      leftTitle: "Orientação e Visão de Mercado",
      leftContent: "O plano de negócios ajuda a identificar a demanda para o novo negócio e a entender quem serão os clientes, orientando o posicionamento no mercado.",
      centerTitle: "Análise de Riscos e Oportunidades",
      centerContent: "Permite avaliar a rentabilidade e a viabilidade financeira do negócio antes de investir, ajudando na tomada de decisões.",
      rightTitle: "Estratégia e Planejamento",
      rightContent: "Define a missão e os objetivos do negócio, orientando na criação de uma estratégia eficaz e no processo de tomada de decisão."
    },
    {
      titulo: "Mapeamento de Processos",
      descricao: "Te ajudamos a potencializar sua jornada em direção ao sucesso!",
      definicao: "O que é Mapeamento de Processos?",
      beneficios: "Melhoria na eficiência operacional e maior transparência nas atividades empresariais.",
      impacto: "Redução de custos e aumento da qualidade dos produtos e serviços.",
      leftTitle: " Senso de Direção e Prioridade",
      leftContent: "Auxilia na identificação das atividades mais críticas e na priorização de melhorias, criando um caminho claro para a otimização dos processos da empresa.",
      centerTitle: "Vantagem Competitiva",
      centerContent: "Contribui para o aumento da eficiência e eficácia dos processos, permitindo uma melhor adaptação às mudanças do mercado e aos desafios operacionais.",
      rightTitle: "Propósito e Existência",
      rightContent: " Estabelece a importância do entendimento completo dos processos, garantindo que todos os colaboradores compreendam sua função e impacto dentro da organização."
    },
    {
      titulo: "Planejamento Estratégico",
      descricao: "Te ajudamos a potencializar sua jornada em direção ao sucesso!",
      definicao: "O que é Planejamento Estratégico?",
      beneficios: "Assertividade nas ações empresariais e bem-estar dos colaboradores.",
      impacto: "Maior previsibilidade de crescimento e preparação para imprevistos.",
      leftTitle: "Senso de Direção e Prioridade",
      leftContent: "Auxilia na definição de metas de longo prazo e nas ações necessárias para atingi-las, criando um caminho claro para o futuro da empresa.",
      centerTitle: "Vantagem Competitiva",
      centerContent: "Contribui para o posicionamento de mercado e a preparação para enfrentar imprevistos internos e externos.",
      rightTitle: "Propósito e Existência",
      rightContent: "Define a missão, visão e valores, fundamentais para estabelecer a identidade e os objetivos da empresa."
    }
  
];

const ModeloSolucaoEmpreendedorismo = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative flex overflow-hidden rounded-lg shadow-lg transition-all duration-500 ease-in-out transform m-10 border-2 border-red-600 ${
        hovered ? 'bg-red-700 text-white' : 'bg-white text-gray-900'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Conteúdo fixo (sempre visível) */}
      <div className="w-1/2 p-6 flex flex-col justify-center items-center text-center space-y-4">
        <h2 className="text-center text-3xl">Estrategia</h2>
        <p className="mt-2 text-base">
          Descrição dos benefícios do marketing, incluindo métodos para melhorar o
          alcance, engajamento e retenção de clientes. Entenda como a estratégia
          pode alavancar os resultados e a imagem do seu negócio.
        </p>
      </div>

      {/* Camada sobreposta com conteúdo e botões (visível ao passar o mouse) */}
      {hovered && (
        <div className="absolute w-1/2 left-0 top-0 h-full bg-red-700 p-6 flex flex-col justify-center items-center text-center space-y-4 text-white transition-transform duration-500">
          <h2 className="text-3xl font-bold text-center">Estrategia</h2>
          <p className="text-center mt-2 text-base">
            Saiba cada detalhe dos seus clientes, como fidelizá-los e alcançar os seus resultados!
          </p>
          {/* Botões de opções */}
          <div className="mt-4 space-y-2 w-full">
            {solucoesEmpreendedorismo.map((solucao) => (
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
                <button className="w-full px-4 py-2 text-sm font-semibold rounded-lg hover:bg-gray-300 hover:text-corPrimaria focus:outline-none">
                  <div className="flex items-center justify-center space-x-2">
                    {solucao.titulo === "Plano de Negócio" && <FaSearch />}
                    {solucao.titulo === "Mapeamento de Processos" && <FaRegNewspaper  />}
                    {solucao.titulo === "Planejamento Estratégico" && <GoGraph />}
                    <p>{solucao.titulo}</p>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Imagem */}
      <div className="w-1/2  overflow-hidden">
        <Image
          src={Image2}
          alt="Empreendedorismo Visual"
          className={`h-full w-full object-cover transition-transform duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>
    </div>
  );
};

export default ModeloSolucaoEmpreendedorismo;
