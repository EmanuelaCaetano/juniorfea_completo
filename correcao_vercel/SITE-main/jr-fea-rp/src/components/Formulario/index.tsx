"use client";

import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
// import  db  from "@/lib/firebase-client"; // Importa o Firestore
// import { collection, addDoc } from "firebase/firestore"; // Métodos do Firestore
//mudança para commitar

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    projeto_interesse: "",
    email: "",
    investimento: "",
    telefone: "",
    contato: "",
    desafios: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const slides = [
    {
      imageSrc: "/tomando-uma-decisao.png",
      text: "Já pensou como podemos trabalhar em conjunto? Ótimo! Preencha as informações e nos mostre como poderíamos te ajudar.",
    },
    {
      imageSrc: "/decisao.png",
      text: "Estamos ansiosos para colaborar com você! Compartilhe suas ideias e vamos trabalhar juntos.",
    },
    {
      imageSrc: "/marcador-de-decisao.png",
      text: "Preencha o formulário e descubra como podemos fazer a diferença no seu projeto!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para alternar os slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { imageSrc, text } = slides[currentIndex];

  // Função para capturar os valores do formulário
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Função para enviar o formulário ao Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          mensagem: `Projeto de interesse: ${formData.projeto_interesse}\n
                     Investimento: ${formData.investimento}\n
                     Telefone: ${formData.telefone}\n
                     Contato preferido: ${formData.contato}\n
                     Desafios: ${formData.desafios}`,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro na API: ${response.status} - ${errorText}`);
      }
  
      // const data = await response.json();
      alert("Formulário enviado com sucesso!");
      setFormData({
        nome: "",
        projeto_interesse: "",
        email: "",
        investimento: "",
        telefone: "",
        contato: "",
        desafios: "",
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Ocorreu um erro ao enviar o formulário.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-36">
      <div className="flex m-10 border-2 border-red-600 rounded-lg overflow-hidden">
        {/* Lado esquerdo - Formulário */}
        <div className="w-1/2 bg-red-800 p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Contato:</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome */}
              <div className="flex flex-col">
                <label htmlFor="nome" className="mb-1">
                  Nome:
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="p-2 rounded-md border-2 border-gray-300 text-black"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              {/* Projeto de interesse */}
              <div className="flex flex-col">
                <label htmlFor="projeto_interesse" className="mb-1">
                  Qual projeto você tem interesse?
                </label>
                <select
                  id="projeto_interesse"
                  value={formData.projeto_interesse}
                  onChange={handleInputChange}
                  className="p-2 rounded-md border-2 border-gray-300 text-black"
                  required
                >
                  <option value=""></option>
                  <option>Desenvolvimento de Site</option>
                  <option>Marketing Digital</option>
                  <option>Branding</option>
                  <option>Consultoria</option>
                </select>
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2 rounded-md border-2 border-gray-300 text-black"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              {/* Investimento */}
              <div className="flex flex-col">
                <label htmlFor="investimento" className="mb-1">
                  Quanto você espera investir?
                </label>
                <select
                  id="investimento"
                  value={formData.investimento}
                  onChange={handleInputChange}
                  className="p-2 rounded-md border-2 border-gray-300 text-black"
                >
                  <option value=""></option>
                  <option>de 7 a 10 mil</option>
                  <option>de 10 a 15 mil</option>
                  <option>de 15 a 20 mil</option>
                  <option>mais de 20 mil</option>
                </select>
              </div>
              {/* Telefone */}
              <div className="flex flex-col">
                <label htmlFor="telefone" className="mb-1">
                  Telefone:
                </label>
                <input
                  type="tel"
                  id="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="p-2 rounded-md border-2 border-gray-300 text-black"
                  placeholder="Digite seu telefone"
                />
              </div>
              {/* Método de contato */}
              <div className="flex flex-col">
                <label htmlFor="contato" className="mb-1">
                  Como prefere o contato?
                </label>
                <select
                  id="contato"
                  value={formData.contato}
                  onChange={handleInputChange}
                  className="p-2 rounded-md border-2 border-gray-300 text-black"
                >
                  <option value=""></option>
                  <option>Ligação</option>
                  <option>Email</option>
                  <option>Whatsapp</option>
                </select>
              </div>
            </div>
            {/* Desafios */}
            <div className="flex flex-col">
              <label htmlFor="desafios" className="mb-1">
                Quais desafios você encontra na sua empresa hoje?
              </label>
              <textarea
                id="desafios"
                value={formData.desafios}
                onChange={handleInputChange}
                className="p-2 rounded-md border-2 border-gray-300 text-black"
                placeholder="Descreva seus desafios"
              />
            </div>
            {/* Botão de envio */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="text-corPrimaria w-[300px] h-[60px] py-2 px-8 rounded-full border-2 border-corPrimaria drop-shadow-lg hover:bg-corPrimaria hover:scale-110 transition duration-300 hover:text-white font-extrabold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "ENVIAR"}
              </button>
            </div>
          </form>
        </div>

        {/* Lado direito - Imagem e texto */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-4 text-center text-2xl font-bold mb-10">
          <Image src={imageSrc} alt="Descrição visual" width={100} height={100} />
          <p className="px-8 text-gray-700 text-sm mt-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Formulario;

