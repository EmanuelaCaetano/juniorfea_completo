'use client';

import AnimacaoContagem from '@/components/ANIMACOES/AnimacaoContagem';
import { useEffect, useRef } from 'react';
import React from 'react';

const Contagem = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Inicie a animação aqui
                }
            },
            { threshold: 0.5 } // Ativa a animação quando 50% do elemento estiver visível
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-gradient-to-r from-red-700 to-red-500 mb-12 md:mr-16 md:ml-16 py-10 md:py-16 px-6 md:px-12 rounded-none md:rounded-[80px] shadow-lg flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-[120px]">
            {/* NPS */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <section
                    ref={sectionRef}
                    className="text-white font-extrabold drop-shadow-xl text-6xl md:text-7xl"
                >
                    <AnimacaoContagem endValue={95} duration={2500} />
                </section>
                <h2 className="text-white text-lg md:text-2xl mt-2">NPS</h2>
            </div>

            {/* Projetos Realizados */}
            <div className="flex flex-col items-center text-center">
                <section
                    ref={sectionRef}
                    className="text-white font-extrabold drop-shadow-xl text-6xl md:text-7xl flex items-center"
                >
                    <div className="text-4xl mr-2" aria-hidden="true">
                        +
                    </div>
                    <AnimacaoContagem endValue={400} duration={1500} />
                </section>
                <h2 className="text-white text-lg md:text-2xl mt-2">Projetos Realizados</h2>
            </div>

            {/* Anos de Mercado */}
            <div className="flex flex-col items-center text-center">
                <section
                    ref={sectionRef}
                    className="text-white font-extrabold drop-shadow-xl text-6xl md:text-7xl flex items-center"
                >
                    <div className="text-4xl mr-2" aria-hidden="true">
                        +
                    </div>
                    <AnimacaoContagem endValue={32} duration={2500} />
                </section>
                <h2 className="text-white text-lg md:text-2xl mt-2">Anos de Mercado</h2>
            </div>
        </div>
    );
};

export default Contagem;


