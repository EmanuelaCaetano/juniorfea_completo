"use client";
import React, { useState } from "react";
import db from "../../utils/firestore";
import { collection, addDoc } from "firebase/firestore";
import Image from 'next/image';

const AddPost: React.FC = () => {
  const [title, setTitle] = useState<string>(""); // Título do post
  const [previa, setPrevia] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Categorias do post
  const [image, setImage] = useState<string | null>(null); // Imagem carregada
  const [subtitles, setSubtitles] = useState<
    { id: number; subtitle: string; content: string }[]
  >([{ id: 1, subtitle: "", content: "" }]); // Subtítulos e conteúdos

  // Função para carregar a imagem
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para carregar as categorias
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prevCategories) => {
      const newCategories = prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category];

      console.log("Categorias selecionadas:", newCategories);
      return newCategories;
    });
  };

  // Função para adicionar um novo subtítulo
  const addSubtitle = () => {
    const newId = subtitles.length + 1;
    setSubtitles([...subtitles, { id: newId, subtitle: "", content: "" }]);
  };

  // Função para atualizar os valores dos subtítulos
  const handleSubtitleChange = (
    id: number,
    field: "subtitle" | "content",
    value: string
  ) => {
    setSubtitles(
      subtitles.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Função para salvar os dados no Firebase
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validação: verificar se pelo menos uma categoria foi selecionada
    if (selectedCategories.length === 0) {
      alert("Por favor, selecione pelo menos uma categoria antes de salvar.");
      return; // Impede o envio do formulário
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        previa,
        image,
        subtitles,
        selectedCategories,
        createdAt: new Date(),
      });
      alert("Post adicionado com sucesso!");
      // Resetar os campos do formulário
      setTitle("");
      setPrevia("");
      setImage(null);
      setSelectedCategories([]);
      setSubtitles([{ id: 1, subtitle: "", content: "" }]);
    } catch (error) {
      console.error("Erro ao adicionar post: ", error);
      alert("Erro ao adicionar post.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full px-36 p-6 bg-white shadow-md rounded-md"
      >
        {/* Título */}
        <div className="mb-6">
          <label
            htmlFor="postTitle"
            className="block mb-2 text-gray-700 font-medium"
          >
            Título da Publicação
          </label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título da publicação"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Previa para o cartão */}
        <div className="mb-6">
          <label
            htmlFor="previa"
            className="block mb-2 text-gray-700 font-medium"
          >
            Prévia para o cartão
          </label>
          <textarea
            id="previa"
            value={previa}
            onChange={(e) => setPrevia(e.target.value)}
            placeholder="Digite a prévia da publicação"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Imagem */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-medium">
            Imagem da Publicação
          </label>
          <div className="relative border border-gray-300 rounded-md h-52 flex items-center justify-center bg-gray-100">
            {image ? (
              <Image
                src={image}
                alt="Imagem do Projeto"
                className="h-full object-cover rounded-md"
              />
            ) : (
              <span className="text-gray-500">Nenhuma imagem selecionada</span>
            )}
            <label
              htmlFor="imageUpload"
              className="absolute top-2 right-2 w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-lg font-bold bg-white hover:bg-gray-200 cursor-pointer"
            >
              +
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {/* Categorias */}
        <div className="mb-6">
          <label className="block mb-6 text-gray-700 font-medium">
            Categoria
          </label>
          <ul className="flex gap-6">
            {[
              "Estratégia",
              "Marketing",
              "Vendas",
              "Finanças",
              "Recursos Humanos",
              "Empreendedorismo",
            ].map((category) => (
              <li key={category}>
                <button
                  type="button"
                  className={`border border-gray-300 rounded-md p-3 transition ${
                    selectedCategories.includes(category)
                      ? "bg-corPrimaria text-white"
                      : "text-gray-700 hover:bg-corPrimaria"
                  }`}
                  onClick={() => handleCategoryToggle(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Subtítulos e Conteúdo */}
        {subtitles.map((item, index) => (
          <div key={item.id} className="mb-6">
            <label
              htmlFor={`subtitle-${item.id}`}
              className="block mb-2 text-gray-700 font-medium"
            >
              Subtítulo {index + 1}
            </label>
            <input
              type="text"
              id={`subtitle-${item.id}`}
              value={item.subtitle}
              onChange={(e) =>
                handleSubtitleChange(item.id, "subtitle", e.target.value)
              }
              placeholder={`Digite o subtítulo ${index + 1}`}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label
              htmlFor={`content-${item.id}`}
              className="block mb-2 text-gray-700 font-medium"
            >
              Conteúdo {index + 1}
            </label>
            <textarea
              id={`content-${item.id}`}
              value={item.content}
              onChange={(e) =>
                handleSubtitleChange(item.id, "content", e.target.value)
              }
              placeholder={`Digite o conteúdo ${index + 1}`}
              className="w-full min-h-64 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        ))}

        {/* Adicionar Subtítulo */}
        <div className="mb-6">
          <button
            type="button"
            onClick={addSubtitle}
            className="bg-white text-red-500 border-2 border-red-500 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-red-700 transition"
          >
            Adicionar Subtítulo
          </button>
        </div>

        {/* Botão para Salvar */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-corPrimaria text-white font-bold py-2 px-8 rounded-md hover:bg-red-600 transition"
          >
            Salvar Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;


