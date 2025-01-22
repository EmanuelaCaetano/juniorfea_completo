'use client';

import { FadeText } from "@/components/ui/fade-text";
import Image from 'next/image';
import { AnimacaoEscrita } from '@/components/ANIMACOES/AnimacaoEscrita';

export default function SobreJRFEA() {
    return (
        <>
            <div className="bg-corPrimaria text-white drop-shadow-lg py-16 px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 2xl:px-60 flex flex-col justify-center min-h-screen ">
                <AnimacaoEscrita loop={true} texts={["Sobre JR FEA RP", "A maior consultoria do interior"]} />
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-16 pt-8">
                    {/* Texto */}
                    <div className="order-2 lg:order-1 lg:w-1/2 text-center lg:text-left space-y-6 font-bold text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-lg">
                        <FadeText text="Fundada em 1992, a Júnior FEA-RP é uma empresa júnior formada por alunos da FEA USP Ribeirão Preto. Nossos projetos têm como finalidade transformar a ideia dos nossos clientes em realidades de sucesso e contribuir para a vivência empresarial." />
                        <FadeText text="Nos situamos na melhor universidade da América Latina, nossa equipe recebe treinamentos constantes de parceiros como McKinsey & Company e são acompanhados por professores doutores da USP especializados no ramo." />
                        <FadeText text="Com isso, procuramos construir as melhores soluções e estratégias de reconhecimento, posicionamento no mercado e inovação." />
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
    );
}




