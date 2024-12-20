"use client";
import React, { useEffect, useState } from "react";
import db from "../../utils/firestore";
import { collection, getDocs, query, deleteDoc, doc, orderBy } from "firebase/firestore";

interface Post {
  id: string;
  title: string;
}

const DeletePost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar posts
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const postsCollection = collection(db, "posts");
      const q = query(postsCollection, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const postsData = querySnapshot.docs.map((doc) => ({
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

  // Função para deletar um post
  const handleDelete = async (postId: string) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      alert("Post deletado com sucesso!");
      // Atualiza a lista de posts após a exclusão
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Erro ao deletar post:", error);
      alert("Erro ao deletar post.");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Carregando posts...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Nenhum post encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Container externo centralizado */}
      <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Deletar Posts</h1>
        <ul className="w-full space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-md shadow-md bg-white"
            >
              <span className="text-gray-800 font-medium">{post.title}</span>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Deletar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DeletePost;




