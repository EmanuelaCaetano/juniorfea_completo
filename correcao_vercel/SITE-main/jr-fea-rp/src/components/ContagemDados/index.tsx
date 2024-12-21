'use client'

import AnimacaoContagem from '@/components/ANIMACOES/AnimacaoContagem';
// import { motion } from 'framer-motion';
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
        <div className="bg-corPrimaria mb-40 mr-24 md:mr-16 ml-24 md:ml-16 h-auto md:h-60 rounded-[150px] drop-shadow-lg shadow-1xl flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-[165px] xl:gap-[330px]">
        <div className="flex flex-col">
            <section ref={sectionRef} className="text-white font-extrabold drop-shadow-xl text-7xl">
                <AnimacaoContagem endValue={95} duration={2500}/>
            </section>
            <h2 className="text-white text-2xl pl-4">NPS</h2>
        </div>
        <div className="flex flex-col items-center">
            <section ref={sectionRef} className="text-white font-extrabold drop-shadow-xl text-7xl flex">
                <div className="text-4xl mr-2">+</div>
                <AnimacaoContagem endValue={400} duration={1500}/>
            </section>
            <h2 className="text-white text-2xl ml-8">Projetos Realizados</h2>
        </div>
        <div className="flex flex-col items-center">
            <section ref={sectionRef} className="text-white font-extrabold drop-shadow-xl text-7xl flex">
                <div className="text-4xl mr-2">+</div>
                <AnimacaoContagem endValue={32} duration={2500}/>
            </section>
            <h2 className="text-white text-2xl ml-8">Anos de Mercado</h2>
        </div>
        </div>
    );
};

export default Contagem;