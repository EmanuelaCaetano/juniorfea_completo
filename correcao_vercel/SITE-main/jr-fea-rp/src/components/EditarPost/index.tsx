"use client";
import React, { useEffect, useState } from "react";
import db from "../../utils/firestore";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";

interface Post {
  id: string;
  title: string;
  image: string | null;
  subtitles: { id: number; subtitle: string; content: string }[];
}

const ManagePosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Carregar todos os posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData: Post[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Post[];
        setPosts(postsData);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Carregar um post específico para edição
  const handleEditClick = async (postId: string) => {
    try {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSelectedPost({ id: postId, ...docSnap.data() } as Post);
      } else {
        alert("Post não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar post:", error);
    }
  };

  // Atualizar campos do post
  const handleChange = (field: "title" | "image" | "subtitles", value: string | null | Subtitle[]) => {
    if (!selectedPost) return;
    setSelectedPost({ ...selectedPost, [field]: value });
  };

  // Atualizar subtítulo ou conteúdo
  const handleSubtitleChange = (id: number, field: "subtitle" | "content", value: string) => {
    if (!selectedPost) return;
    const updatedSubtitles = selectedPost.subtitles.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setSelectedPost({ ...selectedPost, subtitles: updatedSubtitles });
  };

  // Salvar alterações no Firebase
  const handleSave = async () => {
    if (!selectedPost) return;

    try {
      const docRef = doc(db, "posts", selectedPost.id);
      await updateDoc(docRef, {
        title: selectedPost.title,
        image: selectedPost.image,
        subtitles: selectedPost.subtitles,
      });
      alert("Post atualizado com sucesso!");
      setSelectedPost(null); // Volta para a lista de posts
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
      alert("Erro ao salvar alterações.");
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Carregando...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Lista de Posts */}
      {!selectedPost ? (
        <div className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6">Posts Existentes</h1>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-white shadow rounded-md cursor-pointer hover:bg-gray-100"
                onClick={() => handleEditClick(post.id)}
              >
                <h2 className="text-lg font-medium text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-500">
                  {post.subtitles.length} subtítulo(s)
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Edição do Post Selecionado
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg mx-auto"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Editar Post</h1>

          {/* Título */}
          <div className="mb-6">
            <label htmlFor="postTitle" className="block mb-2 text-gray-700 font-medium">
              Título da Publicação
            </label>
            <input
              type="text"
              id="postTitle"
              value={selectedPost.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Digite o título da publicação"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subtítulos e Conteúdo */}
          {selectedPost.subtitles.map((item, index) => (
            <div key={item.id} className="mb-6">
              <label htmlFor={`subtitle-${item.id}`} className="block mb-2 text-gray-700 font-medium">
                Subtítulo {index + 1}
              </label>
              <input
                type="text"
                id={`subtitle-${item.id}`}
                value={item.subtitle}
                onChange={(e) => handleSubtitleChange(item.id, "subtitle", e.target.value)}
                placeholder={`Digite o subtítulo ${index + 1}`}
                className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label htmlFor={`content-${item.id}`} className="block mb-2 text-gray-700 font-medium">
                Conteúdo {index + 1}
              </label>
              <textarea
                id={`content-${item.id}`}
                value={item.content}
                onChange={(e) => handleSubtitleChange(item.id, "content", e.target.value)}
                placeholder={`Digite o conteúdo ${index + 1}`}
                className="w-full min-h-64 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          ))}

          {/* Botão para Salvar */}
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="bg-white text-red-500 border-2 border-red-500 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-red-700 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-8 rounded-md hover:bg-red-600 transition"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ManagePosts;

