"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getPostData } from "@/app/blog/[id]/page"; // Importa a função do servidor

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

const PostDetails = ({ id }: { id: string }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Busca os dados dos posts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPostData(id);
        if (data) {
          setPost(data.post);
          setLatestPosts(data.latestPosts);
        }
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Carregando post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Post não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Título do post */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {/* Imagem do post */}
      {post.image && (
        <div className="relative h-72 md:h-96 bg-gray-100 mb-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      )}

      {/* Subtítulos e conteúdo */}
      {post.subtitles.map((subtitle, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">{subtitle.subtitle}</h3>
          <p className="text-gray-600 mt-2">{subtitle.content}</p>
        </div>
      ))}

      {/* Exibindo os últimos posts com cards */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Últimos Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {post.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                <a
                  href={`/blog/${post.id}`}
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  Ler mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
