"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaCalendar } from "react-icons/fa";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from 'next/image';
import Image3 from '../../../public/image (1).jpg';

interface SolucaoFinanceiraInfo {
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

const solucoesFinanceiras: SolucaoFinanceiraInfo[] = [

  {
    titulo: "Viabilidade Econômica",
    descricao: "Identifique oportunidades no mercado para se diferenciar com novas ideias de produtos ou serviços, avaliar viabilidade de mercado e ampliar o segmento de atuação!",
    definicao: "A viabilidade econômica é um estudo que permite avaliar se um projeto é realizável ou não. A avaliação é feita com base nas análises realizadas sobre as projeções de fluxo de caixa, as quais possibilitam saber se o empreendimento irá gerar retorno ou não, qual será sua rentabilidade e em quanto tempo ele se pagará.",
    beneficios: "Oferece segurança para novos empreendimentos com dados que comprovam a viabilidade.",
    impacto: "Fornece clareza sobre o investimento inicial, retorno esperado e potencial de mercado.",
    leftTitle: "Estudo de Mercado",
    leftContent: "Identifica fatores que afetam o segmento, ajudando a criar estratégias assertivas para o mercado.",
    centerTitle: "Análise de Concorrência",
    centerContent: "Coleta de dados sobre concorrentes diretos auxilia na criação de diferenciais competitivos.",
    rightTitle: "Pesquisa de Público",
    rightContent: "Compreende o perfil e as necessidades do público-alvo, essencial para direcionar as estratégias de mercado."
  },

  {
    titulo: "Análise de Custos",
    descricao: "Avaliação detalhada dos custos para melhor gestão financeira.",
    definicao: "Permite entender e gerenciar custos de maneira mais eficiente.",
    beneficios: "Identificação de redução de despesas.",
    impacto: "Maior rentabilidade e controle financeiro.",
    leftTitle: "Redução de Despesas",
    leftContent: "Ao realizar uma análise detalhada, é possível identificar áreas onde a empresa pode reduzir custos sem comprometer a qualidade dos produtos ou serviços.",
    centerTitle: "Gestão Eficiente",
    centerContent: "O controle mais rigoroso dos custos permite um planejamento mais assertivo, com maior clareza sobre onde investir e como otimizar processos.",
    rightTitle: "Rentabilidade Melhorada",
    rightContent: "Com a análise de custos, a empresa consegue melhorar sua rentabilidade, ajustando despesas e maximizando o retorno financeiro."
  },
  {
    titulo: "Estrutura Financeira",
    descricao: "Ajudamos na organização financeira da sua empresa!",
    definicao: "A Estruturação Financeira visa organizar a parte financeira das empresas, propondo a utilização de ferramentas gerenciais e planilhas para garantir a saúde financeira e continuidade do negócio. Fazem parte do escopo desse serviço a separação das contas jurídica e pessoal, criação de planilhas de Fluxo de Caixa, etc.",
    beneficios: "Otimização da área financeira, resultando em melhorias para outros departamentos.",
    impacto: "Controle financeiro sólido pode ser a diferença entre sucesso e fracasso empresarial.",
    leftTitle: "Renovação das visões da empresa",
    leftContent: "A consultoria não só oferece soluções para problemas financeiros, mas também traz novas ideias e conhecimentos de outros casos.",
    centerTitle: "Garantia de um Fluxo de Caixa Saudável",
    centerContent: "Otimiza a entrada e saída de dinheiro do negócio, reduzindo custos indesejados.",
    rightTitle: "Segurança nas Tomadas de Decisão",
    rightContent: "A estruturação financeira auxilia em decisões assertivas, baseadas em análise de dados confiável."
  }
  
];

const ModeloSolucaoFinanceira = () => {
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
          src={Image3}
          alt="Financeiro Visual"
          className={`h-full w-full object-cover transition-transform duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
      </div>

      {/* Descrição e Botões */}
      <div className="w-1/2 p-6 flex flex-col justify-center items-center text-center space-y-4 transition-transform duration-500">
        {hovered ? (
          <>
            <h2 className="text-3xl font-bold text-center">Financeiro</h2>
            <p className="text-center mt-2 text-base">
              Gerencie melhor seus recursos e tome decisões financeiras mais informadas!
            </p>
            {/* Botões de opções */}
            <div className="mt-4 space-y-2 w-full">
              {solucoesFinanceiras.map((solucao) => (
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
                      {solucao.titulo === "Análise de Custos" && <FaSearch />}
                      {solucao.titulo === "Estrutura Financeira" && <GoGraph />}
                      {solucao.titulo === "Viabilidade Econômica" && <FaCalendar />}
                      <p>{solucao.titulo}</p>
                    </div>
                  </button>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-3xl">Financeiro</h1>
            <p className="mt-2 text-base">
              Conheça as estratégias financeiras para melhorar a sustentabilidade e rentabilidade da sua empresa.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ModeloSolucaoFinanceira;
