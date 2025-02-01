'use client'

import AnimacaoCirculo, { ElementosCirculo } from '@/components/ANIMACOES/AnimacaoCirculo';
import Link from 'next/link';

export default function SolucoesHome() {
  const elementos: ElementosCirculo[] = [
    {
      titulo: "Financeiro",
      items: ["Viabilidade Econômica", "Análise de Custos", "Estruturação Financeira"],
      imagemUrl: "./cifraoVermelho.png",
      imagemUrl2: "./cifraoBranco.png",
      link: '/ModeloSolucao',
      query: {
        titulo: "Financeiro",
        descricao: "Gestão financeira eficiente para seu negócio!",
        definicao: "Análise detalhada dos custos e viabilidade econômica para otimizar recursos.",
        beneficios: "Maior controle e planejamento financeiro.",
        impacto: "Sustentabilidade econômica e crescimento previsível.",
        leftTitle: "Controle de Gastos",
        leftContent: "Ferramentas para monitorar despesas e receitas com precisão.",
        centerTitle: "Planejamento Orçamentário",
        centerContent: "Estratégias para alocação eficiente de recursos.",
        rightTitle: "Investimentos Inteligentes",
        rightContent: "Sugestões de aplicações financeiras para crescimento sustentável."
      }
    },
    {
      titulo: "Estratégia",
      items: ["Plano de Negócios", "Mapeamento de Processos", "Planejamento Estratégico"],
      imagemUrl: "./alvoVermelho.png",
      imagemUrl2: "./alvoBranco.png",
      link: '/ModeloSolucao',
      query: {
        titulo: "Estratégia",
        descricao: "Planejamento estratégico para impulsionar resultados!",
        definicao: "Desenvolvimento de ações estratégicas baseadas em análise de mercado.",
        beneficios: "Melhor posicionamento e competitividade.",
        impacto: "Decisões mais assertivas e estruturadas.",
        leftTitle: "Análise SWOT",
        leftContent: "Identificação de pontos fortes, fracos, oportunidades e ameaças.",
        centerTitle: "Definição de Metas",
        centerContent: "Objetivos claros e mensuráveis para crescimento sustentável.",
        rightTitle: "Implementação Estratégica",
        rightContent: "Plano de ação para alcançar as metas definidas."
      }
    },
    {
      titulo: "Marketing",
      items: ["Plano de Marketing", "Estratégias de Marketing", "Marketing Verde"],
      imagemUrl: "./marketingVermelho.png",
      imagemUrl2: "./marketingBranco.png",
      link: '/ModeloSolucao',
      query: {
        titulo: "Marketing",
        descricao: "Destaque-se no mercado com estratégias inovadoras!",
        definicao: "Abordagens inteligentes para atrair e fidelizar clientes.",
        beneficios: "Maior engajamento e visibilidade.",
        impacto: "Crescimento sustentável e reconhecimento da marca.",
        leftTitle: "Branding",
        leftContent: "Construção de identidade e posicionamento da marca.",
        centerTitle: "Engajamento Digital",
        centerContent: "Estratégias para redes sociais e campanhas online.",
        rightTitle: "Conversão de Leads",
        rightContent: "Táticas para transformar visitantes em clientes."
      }
    },
    {
      titulo: "Pesquisa",
      items: ["Pesquisa de Mercado", "Pesquisa de Satisfação", "Cliente Oculto"],
      imagemUrl: "./cameraVermelho.png",
      imagemUrl2: "./cameraBranco.png",
      link: '/ModeloSolucao',
      query: {
        titulo: "Pesquisa",
        descricao: "Compreenda seu mercado e melhore sua tomada de decisões!",
        definicao: "Coleta e análise de dados para insights estratégicos.",
        beneficios: "Decisões mais embasadas e redução de riscos.",
        impacto: "Maior competitividade e adaptação ao mercado.",
        leftTitle: "Análise de Dados",
        leftContent: "Interpretação de métricas para insights estratégicos.",
        centerTitle: "Pesquisa de Satisfação",
        centerContent: "Identificação de pontos de melhoria no atendimento e produtos.",
        rightTitle: "Comportamento do Consumidor",
        rightContent: "Estudo de hábitos e preferências para melhor posicionamento de mercado."
      }
    }
  ];

  return (
    <div className="h-auto sm:mt-4 max-w-screen mx-auto px-4 overflow-hidden mb-40">
      <h1 className="text-4xl sm:text-3xl lg:text-5xl text-center mb-8 sm:mb-6 lg:mb-12 text-corPrimaria font-extrabold drop-shadow-lg">
        Soluções
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2 lg:gap-8 max-w-screen-xl mx-auto">
        {elementos.map((elemento, index) => (
          <div
            key={index}
            className="relative w-full flex flex-col justify-start h-[600px] sm:h-[500px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-visible group"
          >
            <div className="transition-transform duration-300 transform group-hover:scale-110 group-hover:z-10 relative">
              <Link href={{ pathname: elemento.link, query: elemento.query }}>
                <AnimacaoCirculo elemento={elemento} />
              </Link>
            </div>
            <div className="mt-4"></div> {/* Espaçamento entre componentes */}
          </div>
        ))}
      </div>
    </div>
  );
}


