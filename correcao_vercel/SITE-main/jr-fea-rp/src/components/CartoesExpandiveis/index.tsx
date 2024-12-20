"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function CartõesExpandiveis() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
            // Aqui mexe com o fundo do item quando ele está ativado
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute  top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            {/* é o cartão que aparece quando o item esta em tela cheia */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-fit   flex flex-col border-2 border-corPrimaria bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <div>
                {/* Divi que cuida do titulo e do botão de visit */}
                <div className="flex  justify-center items-center p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-corPrimaria  dark:text-neutral-200 "
                    >
                      {active.title}
                    </motion.h3>
                    
                  </div>

                  
                </div>
                {/* A div responsavel pela parte de baixo do cartão em tela cheia */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-corPrimaria text-center  text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-center gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-8">
        {cards.map((card, index) => (
            // div responsavel pelo cartão pequeno
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="h-80 p-4 pt-12 mr-4 flex bg-corPrimaria drop-shadow-lg shadow-2xl flex-col  hover:bg-red-500/95 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-8 flex-col items-center w-full ">
            <div className="flex justify-center items-center flex-col ">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                
              </div>
              <motion.div layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} className="flex justify-center items-center flex-col" layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={80}
                  height={80}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-3/4 color rounded-lg "
                />
              </motion.div>
              
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    title: "Missão",
    src: "/coracao.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Impulsionar o sucesso dos clientes e o desenvolvimento integral dos membros, alcançando resultados de impacto
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Visão",
    src: "/visao.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos reiciendis iste illo impedit dolor, fuga earum dolorum recusandae excepturi, minus fugiat quo doloribus laudantium quis est incidunt eos temporibus nam.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "Valores",
    src: "/fogueteBranco.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla sit ab aperiam magnam nostrum ea suscipit harum? Aut sed optio ullam nihil veniam, tenetur illum, repellendus, labore eligendi adipisci magnam?
        </p>
      );
    },
  },
  
];
