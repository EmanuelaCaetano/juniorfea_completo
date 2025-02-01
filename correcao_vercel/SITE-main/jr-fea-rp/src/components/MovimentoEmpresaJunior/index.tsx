'use client';

import { FadeText } from "@/components/ui/fade-text";
import Image from 'next/image';
import { AnimacaoEscrita } from '@/components/ANIMACOES/AnimacaoEscrita';

export default function MovimentoEmpresaJunior(){
    return(
        <>
        <div className="bg-corPrimaria text-white drop-shadow-lg py-16 px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 2xl:px-60 flex flex-col justify-center min-h-screen ">

        <AnimacaoEscrita loop={true} texts={["Movimento Empresa Junior", "Presença de peso no MEJ!"]} />
                
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-16 pt-8">
                    {/* Texto */}
                    <div className="order-2 lg:order-1 lg:w-1/2 text-center lg:text-left space-y-6 font-bold text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg">
                        <FadeText text="A Júnior FEA-RP faz parte de um movimento mundial: o Movimento Empresa Júnior. Esse movimento acredita na construção de um país mais empreendedor, competitivo, com melhores empresas, governos e universidades. Um Brasil mais ético, mais educador e colaborativo, com a formação de líderes que empreenderão uma mudança no país." />
                    </div>

                    {/* Imagem */}
                    <div className="order-1 lg:order-2 lg:w-1/2 max-w-full flex justify-center">
                        <Image
                            src="/sobreHomePage.jpg"
                            alt="Foto da equipe JR FEA RP"
                            width={800}
                            height={800}
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


