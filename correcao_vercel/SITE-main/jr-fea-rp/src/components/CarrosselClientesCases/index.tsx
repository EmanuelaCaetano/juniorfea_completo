import React, { useEffect, useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

export const CarrosselClientesCases = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
}: {
  items: {
    name: string;
    img: string;
    cargo: string;
    descricao: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // Memoizando a função addAnimation para evitar recriação desnecessária
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, []);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller py-16 mt-0 mb-40 w-full bg-corPrimaria relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-40 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="hover:scale-110 transition duration-200 ease-in-out bg-white w-[350px] relative rounded-2xl drop-shadow-2xl shadow-black flex-shrink-0 border-slate-700 px-8 py-6"
            key={item.name}
          >
            <blockquote>
              <div className="relative text-center mt-6 flex flex-col items-center">
                <h2 className="p-4 font-bold">{item.name}</h2>
                <h3 className="p-4">{item.cargo}</h3>
                <p className="p-4 font-bold">{item.descricao}</p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
