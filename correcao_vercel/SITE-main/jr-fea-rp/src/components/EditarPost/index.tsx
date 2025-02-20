"use client";
import React, { useEffect, useState } from "react";
import db from "../../utils/firestore";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";

interface Subtitle {
  id: number;
  subtitle: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  image: string | null;
  subtitles: Subtitle[];
  categories: string[]; // Adicionando categorias ao Post
}

const CATEGORIES = ["Estratégia", "Marketing", "Vendas", "Finanças", "Recursos Humanos", "Empreendedorismo"];

const ManagePosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData: Post[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          categories: doc.data().selectedCategories, // Garante que não seja undefined
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

  const handleEditClick = async (postId: string) => {
    try {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setSelectedPost({ id: postId, categories: docSnap.data().selectedCategories, ...docSnap.data() } as Post);
      } else {
        alert("Post não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar post:", error);
    }
  };

  const handleChange = (field: keyof Post, value: any) => {
    if (!selectedPost) return;
    setSelectedPost({ ...selectedPost, [field]: value });
  };

  const handleSubtitleChange = (id: number, field: "subtitle" | "content", value: string) => {
    if (!selectedPost) return;
    const updatedSubtitles = selectedPost.subtitles.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setSelectedPost({ ...selectedPost, subtitles: updatedSubtitles });
  };

  const handleCategoryToggle = (category: string) => {
    if (!selectedPost) return;
    setSelectedPost((prevPost) => {
      if (!prevPost) return null;
      const newCategories = prevPost.categories.includes(category)
        ? prevPost.categories.filter((c) => c !== category)
        : [...prevPost.categories, category];
      return { ...prevPost, categories: newCategories };
    });
  };

  const handleSave = async () => {
    if (!selectedPost) return;

    try {
      const docRef = doc(db, "posts", selectedPost.id);
      await updateDoc(docRef, {
        title: selectedPost.title,
        image: selectedPost.image,
        subtitles: selectedPost.subtitles,
        categories: selectedPost.categories, // Salvar categorias
      });
      alert("Post atualizado com sucesso!");
      setSelectedPost(null);
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
                  {post.subtitles.length} subtítulo(s) - Categorias: {post.categories?.join(", ") || "Nenhuma"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="w-full max-w-4xl mt-10 p-6 bg-white shadow-lg rounded-lg mx-auto"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Editar Post</h1>

          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">Título da Publicação</label>
            <input
              type="text"
              value={selectedPost.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categorias */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">Categorias</label>
            <ul className="flex flex-wrap gap-4">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className={`border border-gray-300 rounded-md p-3 transition ${
                      selectedPost.categories.includes(category) ? "bg-corPrimaria text-white" : "text-gray-700 hover:bg-corPrimaria hover:text-white"
                    }`}
                    onClick={() => handleCategoryToggle(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {selectedPost.subtitles.map((item, index) => (
            <div key={item.id} className="mb-6">
              <label className="block mb-2 text-gray-700 font-medium">Subtítulo {index + 1}</label>
              <input
                type="text"
                value={item.subtitle}
                onChange={(e) => handleSubtitleChange(item.id, "subtitle", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-corPrimaria"
              />
              <textarea
                value={item.content}
                onChange={(e) => handleSubtitleChange(item.id, "content", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-corPrimaria"
              />
            </div>
          ))}

          <div className="mb-6">
            <label className="block mb-2 text-gray-700 font-medium">Imagem</label>
            <input
              type="text"
              value={selectedPost.image || ""}
              onChange={(e) => handleChange("image", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-corPrimaria"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="px-4 py-2 bg-gray-300 text-white rounded-md hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button type="submit" className="px-4 py-2 bg-corPrimaria text-white rounded-md">
              Salvar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ManagePosts;