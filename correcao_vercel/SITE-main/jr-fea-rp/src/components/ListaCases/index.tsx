import React from "react";
import BlurFade from "../ui/blur-fade";

const SolucoesInovadoras: React.FC = () => {
  return (
    <div className="p-12">
      <h1 className="ml-[60px] text-3xl font-bold mb-12"> {/* Aumentei o espaçamento aqui */}
        <BlurFade delay={0.25} inView>
          Conheça nosso trabalho
        </BlurFade>
      </h1>

      {/* Solução Inovadora - Cultura Inglesa */}
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-20 border-b pb-8"> {/* Aumentei o espaçamento entre as seções */}
          <img
            src="/CI-logo.png"
            alt="Cultura Inglesa"
            className="w-60 h-auto object-contain mb-4 md:mt-0 ml-10"
          />
          <div className="md:w-3/5 text-center md:text-left px-10"> {/* Adicionei padding aqui */}
            <h2 className="text-xl font-semibold mb-6">Solução Inovadora</h2> {/* Aumentei o espaçamento entre o título e o texto */}
            <p className="text-gray-700">
              Breve descrição sobre o desafio. Breve descrição sobre o desafio. Breve descrição sobre o desafio.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Solução Inovadora - 99 */}
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-20 border-b pb-8"> {/* Aumentei o espaçamento entre as seções */}
        <img
            src="/99logo.jpeg"
            alt="99"
            className="w-60 h-auto object-contain mb-4 md:mt-0 ml-10"
          />
          <div className="md:w-3/5 text-center md:text-left px-10"> {/* Adicionei padding aqui */}
            <h2 className="text-xl font-semibold mb-6">Solução Inovadora</h2> {/* Aumentei o espaçamento entre o título e o texto */}
            <p className="text-gray-700">
              Breve descrição sobre o desafio. Breve descrição sobre o desafio. Breve descrição sobre o desafio.
            </p>
          </div>
          
        </div>
      </BlurFade>

      {/* Solução Inovadora - Coca-Cola */}
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-20 border-b pb-8"> {/* Aumentei o espaçamento entre as seções */}
          <img
            src="/Coca-logo.png"
            alt="Coca-Cola"
            className="w-60 h-auto object-contain mb-4 md:mb-0 ml-10"
          />
          <div className="md:w-3/5 text-center md:text-left px-10"> {/* Adicionei padding aqui */}
            <h2 className="text-xl font-semibold mb-6">Solução Inovadora</h2> {/* Aumentei o espaçamento entre o título e o texto */}
            <p className="text-gray-700">
              Breve descrição sobre o desafio. Breve descrição sobre o desafio. Breve descrição sobre o desafio.
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Solução Inovadora - Danone */}
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-20"> {/* Aumentei o espaçamento entre as seções */}
        <img
            src="/Danone-Logo.png"
            alt="Danone"
            className="w-60 h-auto object-contain mb-4 md:mb-0 ml-10"
          />
          <div className="md:w-3/5 text-center md:text-left px-10"> {/* Adicionei padding aqui */}
            <h2 className="text-xl font-semibold mb-6">Solução Inovadora</h2> {/* Aumentei o espaçamento entre o título e o texto */}
            <p className="text-gray-700">
              Breve descrição sobre o desafio. Breve descrição sobre o desafio. Breve descrição sobre o desafio.
            </p>
          </div>
          
        </div>
      </BlurFade>
    </div>
  );
};


export default SolucoesInovadoras;


