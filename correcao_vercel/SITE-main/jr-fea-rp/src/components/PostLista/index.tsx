"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import db from "../../utils/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface Subtitle {
  subtitle: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  image: string | null;
  subtitles: Subtitle[];
}

const PostList: React.FC = () => {
  const router = useRouter(); // Instância do router para redirecionamento
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os posts no Firestore
  useEffect(() => {
    const fetchPosts = async () => {
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

    fetchPosts();
  }, []);

  // Lógica para redirecionar ao clicar no card
  const handleCardClick = (postId: string) => {
    router.push(`/blog/${postId}`);
  };

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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleCardClick(post.id)} // Adiciona redirecionamento
          >
            {/* Imagem */}
            {post.image && (
              <div className="h-48 bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Conteúdo */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {post.title}
              </h2>
              {post.subtitles.slice(0, 1).map((subtitle, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    {subtitle.subtitle}
                  </h3>
                  <p className="text-gray-600 mt-1 truncate">
                    {subtitle.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;




