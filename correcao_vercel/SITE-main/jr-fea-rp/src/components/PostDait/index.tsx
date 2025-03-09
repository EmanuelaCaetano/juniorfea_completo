"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface Subtitle {
  subtitle: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  image: string | null;
  subtitles: Subtitle[];
  createdAt: string | null; // ✅ Garantir que seja uma string
}

const PostDetails: React.FC<{ postData: { post: Post; latestPosts: Post[] } }> = ({ postData }) => {
  const { post, latestPosts } = postData;
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    setAllPosts([post, ...latestPosts]);
  }, [post, latestPosts]);

  const navigatePost = (direction: "prev" | "next") => {
    if (!allPosts.length) return;

    const currentIndex = allPosts.findIndex((p) => p.id === post.id);
    if (currentIndex === -1) return;

    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + allPosts.length) % allPosts.length
        : (currentIndex + 1) % allPosts.length;

    router.push(`/blog/${allPosts[newIndex].id}`);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Data e navegação */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          Publicado em: {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Data desconhecida"}
        </p>
        <div className="flex space-x-2">
          <button className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200" onClick={() => navigatePost("prev")}>
            ⬅
          </button>
          <button className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200" onClick={() => navigatePost("next")}>
            ➡
          </button>
        </div>
      </div>

      {/* Conteúdo do post */}
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <div className="relative h-72 bg-gray-100 mb-6">
          <Image src={post.image} alt={post.title} layout="fill" objectFit="contain" />
        </div>
      )}
      <div>
        {post.subtitles.map((subtitle, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800">{subtitle.subtitle}</h3>
            <p className="text-gray-600 mt-2">{subtitle.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
