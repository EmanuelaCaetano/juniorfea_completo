'use client'

import AnimacaoCirculo, { ElementosCirculo } from '@/components/ANIMACOES/AnimacaoCirculo';

export default function SolucoesHome() {
  const elementos: ElementosCirculo[] = [
    {
      titulo: "Financeiro",
      items: ["Viabilidade Econômica", "Análise de Custos", "Estruturação Financeira"],
      imagemUrl: "./cifraoVermelho.png",
      imagemUrl2: "./cifraoBranco.png"
    },
    {
      titulo: "Estratégia",
      items: ["Plano de Negócios", "Mapeamento de Processos", "Planejamento Estratégico"],
      imagemUrl: "./alvoVermelho.png",
      imagemUrl2: "./alvoBranco.png"
    },
    {
      titulo: "Marketing",
      items: ["Plano de Marketing", "Estratégias de Marketing", "Marketing Verde"],
      imagemUrl: "./marketingVermelho.png",
      imagemUrl2: "./marketingBranco.png"
    },
    {
      titulo: "Pesquisa",
      items: ["Pesquisa de Mercado", "Pesquisa de Satisfação", "Cliente Oculto"],
      imagemUrl: "./cameraVermelho.png",
      imagemUrl2: "./cameraBranco.png"
    },
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
              <AnimacaoCirculo elemento={elemento} />
            </div>
            <div className="mt-4"></div> {/* Espaçamento entre componentes */}
          </div>
        ))}
      </div>
    </div>
  );
}
















