import React from "react";
import Image from "next/image";

const NoticiasParceiros: React.FC = () => {
  return (
    <div className="bg-corPrimaria pt-8 text-white">
      <h1 className="text-3xl font-bold pl-8 mb-4">Quem confia no nosso trabalho!</h1>
      <p className="text-base mb-8 pl-8">
        Empresas do seu dia-a-dia que confiam na<span className="font-bold text-2xl"> JR FEA RP.</span> 
      </p>
      <div className="w-full h-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 p-8 bg-white">
          {/* Card 1 */}
          <div className="lg:ml-10 bg-white border-2 border-corPrimaria text-black p-30 rounded-lg shadow-md flex flex-col justify-between p-4">
            <div>
              <Image
                src="/BFC.png"
                width={150}
                height={150}
                alt="Botafogo-RP"
                className="w-40 h-40 mb-6 mx-auto"
              />
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Botafogo-SP faz parceria com Empresa Júnior FEA-RP da USP
              </h2>
              <p className="text-xl text-gray-700">
                O Botafogo firmou nesta quarta-feira uma parceria com a Empresa Júnior FEA-RP da USP de Ribeirão Preto, visando a identificação de problemas e elaboração de ações a fim de melhorar as áreas de marketing e gestão do clube.
                <span className="block mt-4 font-semibold">Fonte: G1 (Globo)</span>
              </p>
            </div>
            <button className="mt-6 bg-red-700 text-white py-4 px-6 rounded hover:bg-red-800">
              Ver Notícia
            </button>
          </div>

          {/* Card 2 */}
          <div className="lg:mr-10 bg-white border-2 border-corPrimaria text-black p-30 rounded-lg shadow-md flex flex-col justify-between p-4">
            <div>
              <Image
                src="/gandhi.png"
                width={150}
                height={150}
                alt="Hospital Mahatma Gandhi"
                className="w-50 h-44 mb-6 mx-auto"
              />
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Alunos da USP desenvolvem projeto para auxiliar Hospital Mahatma Gandhi
              </h2>
              <p className="text-xl text-gray-700">
                Desenvolvido pela Empresa Júnior da Faculdade de Economia e Administração da USP de Ribeirão Preto, a Júnior FEA-RP estabeleceu parceria com o hospital, no intuito de auxiliar o planejamento estratégico, melhoria de processos e crescimento do Hospital Mahatma Gandhi, de Catanduva.
              </p>
            </div>
            <button className="mt-6 bg-red-700 text-white py-4 px-6 rounded hover:bg-red-800">
              Ver Notícia
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasParceiros;


