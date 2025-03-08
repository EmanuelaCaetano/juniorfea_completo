"use client";

import React, { useEffect, useState, useRef } from "react";
import db from "../../../utils/firestore";
import { doc, getDoc, collection, query, orderBy, getDocs } from "firebase/firestore";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

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

const PostDetails = () => {
  const params = useParams();
  const id = params?.id as string;
  const [post, setPost] = useState<Post | null>(null);
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);
  const router = useRouter();

  useEffect(() => {
    isMounted.current = true;

    const fetchPosts = async () => {
      setLoading(true);
      try {
        if (!id) return;
        const postDoc = doc(db, "posts", id);
        const postSnapshot = await getDoc(postDoc);

        if (isMounted.current && postSnapshot.exists()) {
          setPost({ id: postSnapshot.id, ...postSnapshot.data() } as Post);
        }

        const postsCollection = collection(db, "posts");
        const q = query(postsCollection, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        if (isMounted.current) {
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
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted.current = false;
    };
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
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <div className="relative h-72 md:h-96 bg-gray-100 mb-6">
          <Image src={post.image} alt={post.title} fill objectFit="contain" className="rounded-lg" />
        </div>
      )}
      {post.subtitles.map((subtitle, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">{subtitle.subtitle}</h3>
          <p className="text-gray-600 mt-2">{subtitle.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetails;