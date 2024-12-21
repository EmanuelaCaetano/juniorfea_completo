"use client";

import React, { useEffect, useState, useId, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import db from "../../utils/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

interface Post {
  id: string;
  title: string;
  description: string;
  image: string | null;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<Post | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Fetch posts from Firebase
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

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Close modal on outside click
  useOutsideClick(ref, () => setActive(null));

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
    <div className="bg-white p-16">
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className=" w-full max-w-[500px]  h-full md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div  className="bg-white flex flex-col justify-center items-center p-8"
               layoutId={`image-${active.title}-${id}`} >
                <Image
                    priority
                    width={200}
                    height={200}
                    src={active.image}
                    alt={active.title}
                    className="w-full h-64 sm:rounded-lg object-cover"
                />
              </motion.div>
              <div className="px-8">
                
                <div className="bg-corPrimaria pt-4 rounded-lg relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={active.description}
                    className="text-white text-xs md:text-sm lg:text-base h-60 pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                  </motion.div>
                </div>
                <div className="flex flex-col justify-between items-center p-4">
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href= 'https://www.google.com.br/'
                    target="_blank"
                    className="w-60 px-4 py-3 text-center text-sm rounded-lg font-bold bg-corPrimaria text-white" 
                  > Visit
                    
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {posts.map((post) => (
          <motion.div
            layoutId={`card-${post.id}-${id}`}
            key={post.id}
            onClick={() => setActive(post)}
            className="h-96 p-4 flex flex-col bg-corPrimaria drop-shadow-lg shadow-2xl hover:bg-red-500 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            {post.image && (
              <Image
                width={100}
                height={100}
                src={post.image || "../../public/foguete.png"}
                alt={post.title}
                className="h-48 w-full rounded-lg object-cover"
              />
            )}
            <div className="mt-4">
              <h3 className="text-white text-lg font-medium">{post.title}</h3>
              <p className="text-white mt-2">{post.description}</p>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}
