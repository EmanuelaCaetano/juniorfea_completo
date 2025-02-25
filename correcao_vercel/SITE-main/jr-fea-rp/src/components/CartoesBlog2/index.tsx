"use client";

import React, { useEffect, useState, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
  createdAt: string;
  selectedCategories: string[];
}

const CartoesBlog2: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [active, setActive] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    // Ajusta o overflow do body conforme a exibição do modal
    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.selectedCategories.includes(selectedCategory))
    : posts;

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
    <div className="bg-white p-4">
      {/* Filtros de categoria */}
      <ul className="mt-6 flex justify-center gap-6 mb-16">
        {[
          "Estratégia",
          "Marketing",
          "Vendas",
          "Finanças",
          "Recursos Humanos",
          "Empreendedorismo",
        ].map((category) => (
          <li key={category}>
            <button
              type="button"
              className={`border border-gray-300 rounded-md p-3 transition ${
                selectedCategory === category
                  ? "bg-corPrimaria text-white"
                  : "text-gray-700 hover:bg-corPrimaria"
              }`}
              onClick={() =>
                setSelectedCategory((prev) =>
                  prev === category ? null : category
                )
              }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Modal com animações */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.div
                layoutId={`card-${active.id}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div
                  className="bg-white flex flex-col justify-center items-center p-8"
                  layoutId={`image-${active.id}-${id}`}
                >
                  {active.image && (
                    <Image
                      priority
                      width={500}
                      height={500}
                      src={active.image}
                      alt={active.title}
                      className="w-full h-64 sm:rounded-lg object-cover object-top"
                    />
                  )}
                </motion.div>
                <div className="px-8">
                  <div className="bg-corPrimaria pt-4 rounded-lg relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-white text-xs md:text-sm lg:text-base h-60 pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                    >
                      {active.subtitles[0]?.content || "Sem conteúdo disponível."}
                    </motion.div>
                  </div>
                  <div className="flex flex-col justify-between items-center p-4">
                    <button
                      className="w-60 px-4 py-3 text-center text-sm rounded-lg font-bold bg-corPrimaria text-white"
                      onClick={() => {
                        // Fecha o modal antes de navegar
                        setActive(null);
                        router.push(`/blog/${active.id}`);
                      }}
                    >
                      Leia Mais
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Lista de cards */}
      <div className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <motion.div
            layoutId={`card-${post.id}-${id}`}
            key={post.id}
            onClick={() => setActive(post)}
            className="h-[400px] p-4 flex flex-col bg-corPrimaria drop-shadow-lg shadow-2xl hover:bg-red-500 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full h-full">
              <motion.h3 className="text-white text-center">{post.title}</motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CartoesBlog2;

