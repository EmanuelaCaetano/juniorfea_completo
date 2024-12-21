"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import ModeloSolucao from "@/components/ModeloSolucoes";
import CartoesVisaoResultadoAcertividade from "@/components/CartoesVisaoResultadoAcertividade";
import Introducao from "@/components/Introdução";
import RedLine from "@/components/BordaIntroducao";

const ModeloSolucaoFunction = () => {
  const searchParams = useSearchParams();

  // Captura os parâmetros da URL com validação
  const titulo = searchParams?.get("titulo") || "Título não encontrado";
  const descricao = searchParams?.get("descricao") || "Descrição não encontrada";
  const definicao = searchParams?.get("definicao") || "Descrição não encontrada";
  const beneficios = searchParams?.get("beneficios") || "Benefícios não encontrados";
  const impacto = searchParams?.get("impacto") || "Impacto não encontrado";
  const leftTitle = searchParams?.get("leftTitle") || "Título não encontrado";
  const leftContent = searchParams?.get("leftContent") || "Conteúdo não encontrado";
  const centerTitle = searchParams?.get("centerTitle") || "Título não encontrado";
  const centerContent = searchParams?.get("centerContent") || "Conteúdo não encontrado";
  const rightTitle = searchParams?.get("rightTitle") || "Título não encontrado";
  const rightContent = searchParams?.get("rightContent") || "Conteúdo não encontrado";

  return (
    <>
      <Introducao imgPath="/modeloSolucaoIntro.jpeg" pageTitle={titulo} context={descricao} />
      <div className="">
        <RedLine />
        <ModeloSolucao descricao1={definicao} descricao2={beneficios} descricao3={impacto} />
      </div>
      <CartoesVisaoResultadoAcertividade
        leftTitle={leftTitle}
        leftContent={leftContent}
        centerTitle={centerTitle}
        centerContent={centerContent}
        rightTitle={rightTitle}
        rightContent={rightContent}
      />
    </>
  );
};

export default ModeloSolucaoFunction;
