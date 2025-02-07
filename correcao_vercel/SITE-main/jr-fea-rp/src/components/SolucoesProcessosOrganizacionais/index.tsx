"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { GoGraph } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import Image4 from '../../../public/image (2).jpg';

interface SolucaoProcessoInfo {
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

const solucoesProcessos: SolucaoProcessoInfo[] = [
  {
    titulo: "Pesquisa de Mercado",
    descricao: "Identifique oportunidades no mercado para se diferenciar a partir de ideias de novos produtos ou serviços, entender a viabilidade de mercado e estudar a possibilidade de ampliar o segmento ou nicho de atuação!",
    definicao: "O que é Plano de Negócio?",
    beneficios: "Fornece uma visão ampla do negócio, analisando aspectos de mercado, operações e projeções financeiras.",
    impacto: "Possibilita um planejamento estratégico mais concreto e sustentado, com foco nos objetivos financeiros e competitivos.",
    leftTitle: "Orientação e Visão de Mercado",
    leftContent: "Analisa a demanda e o perfil do cliente, ajudando no posicionamento e na adaptação ao mercado.",
    centerTitle: "Análise de Riscos e Oportunidades",
    centerContent: "Identifica a viabilidade financeira e os riscos associados antes de investir, garantindo maior segurança.",
    rightTitle: "Estratégia e Planejamento",
    rightContent: "Define a missão e os objetivos do negócio, auxiliando na tomada de decisões estratégicas."
  },
  {
    titulo: "Pesquisa de Satisfação",
    descricao: "Avalie a satisfação dos seus clientes para identificar pontos fortes e áreas de melhoria, garantindo a excelência no atendimento e fidelização dos consumidores!",
    definicao: "O que é Pesquisa de Satisfação?",
    beneficios: "Fornece feedback direto dos clientes, permitindo ajustes e melhorias nos produtos, serviços e atendimento.",
    impacto: "Aumenta a fidelização e a lealdade dos clientes, além de melhorar a reputação da marca.",
    leftTitle: "Orientação e Visão de Mercado",
    leftContent: "Analisa a percepção dos clientes sobre os produtos e serviços, ajudando a empresa a se alinhar melhor às expectativas do mercado.",
    centerTitle: "Análise de Riscos e Oportunidades",
    centerContent: " Identifica áreas problemáticas e oportunidades de melhoria, permitindo uma resposta proativa para evitar perdas e maximizar a satisfação do cliente.",
    rightTitle: "Estratégia e Planejamento",
    rightContent: " Define ações estratégicas baseadas no feedback dos clientes, auxiliando na tomada de decisões que visam a melhoria contínua e o aumento da satisfação."
  },
  {
    "titulo": "Cliente Oculto",
    "descricao": "Saiba em quais pontos a experiência dos seus consumidores pode melhorar",
    "definicao": "Avaliação prática da experiência do cliente!",
    "beneficios": "Fortalecimento da marca e aumento da satisfação do cliente.",
    "impacto": "Processos otimizados e vantagens competitivas no mercado.",
    "leftTitle": "Diferenciação da Concorrência",
    "leftContent": "Ofereça um diferencial para empresas que buscam mudanças e vantagens competitivas frente aos concorrentes.",
    "centerTitle": "Ações Mais Assertivas",
    "centerContent": "Permita que gestores identifiquem e corrijam falhas no atendimento, direcionando treinamentos de forma eficaz.",
    "rightTitle": "Aumento da Produtividade",
    "rightContent": "Corrija erros nos processos, instruindo equipes para realizarem seu trabalho de forma mais eficiente e assertiva.",
  }
];

const ModeloSolucaoProcessosOrganizacionais = () => {
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
        <h2 className="text-center text-3xl">Pesquisa</h2>
        <p className="mt-2 text-base">
          Conheça soluções que melhoram a eficiência e a qualidade dos processos da sua empresa.
        </p>
      </div>

      {/* Camada sobreposta com conteúdo e botões (visível ao passar o mouse) */}
      {hovered && (
        <div className="absolute w-1/2 left-0 top-0 h-full bg-red-700 p-6 flex flex-col justify-center items-center text-center space-y-4 text-white transition-transform duration-500">
          <h2 className="text-3xl font-bold text-center">Pesquisa</h2>
          <p className="text-center mt-2 text-base">
            Explore estratégias para otimizar e automatizar os processos internos da sua empresa!
          </p>
          {/* Botões de opções */}
          <div className="mt-4 space-y-2 w-full">
            {solucoesProcessos.map((solucao) => (
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
                    {solucao.titulo === "Pesquisa de Mercado" && <FaSearch />}
                    {solucao.titulo === "Pesquisa de Satisfação" && <GoGraph />}
                    {solucao.titulo === "Cliente Oculto" && <FaSearch />}
                    <p>{solucao.titulo}</p>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Imagem */}
      <div className="w-1/2 overflow-hidden">
        <Image
          src={Image4} // Substitua pelo caminho real da sua imagem
          alt="Processos Organizacionais Visual"
          className={`h-full w-full object-cover transition-transform duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>
    </div>
  );
};

export default ModeloSolucaoProcessosOrganizacionais;

