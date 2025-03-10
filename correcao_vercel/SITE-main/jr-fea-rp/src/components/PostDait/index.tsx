"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Subtitle {
  subtitle: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  image: string | null;
  subtitles: Subtitle[];
  createdAt: string | null;
}

const formatDate = (dateString: string | null): string => {
  if (!dateString) return "Data desconhecida";

  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const formatContent = (content: string): string => {
  return content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Negrito
    .replace(/\"\"(.*?)\"\"/g, '<span class="text-corPrimaria">$1</span>') // Cor Primária
    .replace(/-- (.*?)(\n|$)/g, "<li>$1</li>") // Bullet points
    .replace(/<([^<>]+)><([^<>]+)>/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$2</a>'); // Links clicáveis
};

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
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-corPrimaria">Publicado em: {formatDate(post.createdAt)}</p>
        <div className="flex space-x-2">
          <button className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200" onClick={() => navigatePost("prev")}>⬅</button>
          <button className="p-2 border rounded-full bg-gray-100 hover:bg-gray-200" onClick={() => navigatePost("next")}>➡</button>
        </div>
      </div>

      {post.image && (
        <div className="relative w-full aspect-video bg-gray-100 mb-6">
          <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        <aside className="md:w-1/4 pr-4 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Índice</h2>
          <ul className="space-y-2">
            {post.subtitles.map((subtitle, index) => (
              <li key={index}>
                <a href={`#subtitle-${index}`} className="text-blue-600 hover:underline">
                  {subtitle.subtitle}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="md:w-3/4">
          {post.subtitles.map((subtitle, index) => (
            <section key={index} id={`subtitle-${index}`} className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">{subtitle.subtitle}</h3>
              <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: formatContent(subtitle.content) }}></p>
            </section>
          ))}
        </div>
      </div>

      {/* Mais Notícias */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Mais notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((latestPost) => (
            <Link key={latestPost.id} href={`/blog/${latestPost.id}`} className="group">
              <div className="cursor-pointer border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform duration-300 group-hover:scale-105">
                {latestPost.image && (
                  <div className="relative w-full aspect-video bg-gray-100">
                    <Image src={latestPost.image} alt={latestPost.title} layout="fill" objectFit="cover" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{latestPost.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {latestPost.subtitles[0]?.content.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
