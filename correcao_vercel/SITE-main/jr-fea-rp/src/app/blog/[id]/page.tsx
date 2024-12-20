"use client";

import React, { useEffect, useState } from "react";
import db from "../../../utils/firestore";
import { doc, getDoc, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { use } from "react";

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

const PostDetails: React.FC<{ params: Promise<{ id: string }> }> = ({ params }) => {
  const { id } = use(params);
  const [post, setPost] = useState<Post | null>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;
    window.scrollTo(0, 0);
    // Redefinir estados antes de buscar novos dados
    setPost(null);
    setLoading(true);
  
    const fetchPosts = async () => {
      try {
        const postDoc = doc(db, "posts", id);
        const postSnapshot = await getDoc(postDoc);
  
        if (isMounted && postSnapshot.exists()) {
          setPost({ id: postSnapshot.id, ...postSnapshot.data() } as Post);
        }
  
        const postsCollection = collection(db, "posts");
        const q = query(postsCollection, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
  
        if (isMounted) {
          const postsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Post[];
  
          setAllPosts(postsData);
          setLatestPosts(postsData.filter((doc) => doc.id !== id).slice(0, 3));
        }
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
  
    fetchPosts();
  
    return () => {
      isMounted = false;
    };
  }, [id]); // Atualize sempre que o ID mudar
  
  

  const navigatePost = (direction: "prev" | "next") => {
    if (!allPosts.length) return;

    const currentIndex = allPosts.findIndex((p) => p.id === id);
    if (currentIndex === -1) return;

    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + allPosts.length) % allPosts.length
        : (currentIndex + 1) % allPosts.length;

    router.push(`/blog/${allPosts[newIndex].id}`);
  };

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
      {/* Data e navegação */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">Data da postagem</p>
        <div className="flex space-x-2">
          <button
            className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={() => navigatePost("prev")}
          >
            ⬅
          </button>
          <button
            className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={() => navigatePost("next")}
          >
            ➡
          </button>
        </div>
      </div>

      {/* Imagem */}
      <div className="h-72 md:h-96 bg-gray-100 mb-6">
      {post.image && (
      <img 
      src={post.image} 
      alt={post.title} 
      className="w-full h-full object-contai rounded-lg" 
      />
      )}
      </div>

      {/* Índice e conteúdo */}
      <div className="flex">
        <div className="w-1/4 pr-4">
          <h2 className="text-lg font-semibold mb-2">Índice</h2>
          <ul className="space-y-2">
            {post.subtitles.map((subtitle, index) => (
              <li key={index}>
                <a
                  href={`#subtitle-${index}`}
                  className="text-blue-600 hover:underline"
                >
                  {subtitle.subtitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4">
          {post.subtitles.map((subtitle, index) => (
            <div key={index} id={`subtitle-${index}`} className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                {subtitle.subtitle}
              </h3>
              <p className="text-gray-600 mt-2">{subtitle.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mais notícias */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Mais notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((latestPost) => (
            <div
              key={latestPost.id}
              onClick={() => router.push(`/blog/${latestPost.id}`)}
              className="cursor-pointer border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white"
            >
              {latestPost.image && (
                <div className="h-32 bg-gray-100">
                  <img
                    src={latestPost.image}
                    alt={latestPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {latestPost.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {latestPost.subtitles[0]?.content.substring(0, 100)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;




