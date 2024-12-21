"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";


export const CarrosselClientesCases = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  //className,
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
  //className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
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
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller py-16 mt-40 mb-40 w-full bg-corPrimaria relative z-20  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "  flex min-w-full shrink-0 gap-40 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item/*, idx*/) => (
          <li
            className="hover:scale-110 trasition duration-200 ease-in-out bg-orange-50 w-[350px] relative rounded-2xl drop-shadow-2xl shadow-black flex-shrink-0 border-slate-700 px-8 py-6 "
            style={{
              background:
                " bg-orange-50",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              >
              </div>
              
              <div className="relative text-center mt-6 flex flex-col items-center">                
                <h2 className="p-4 font-bold">{item.name}</h2>
                <h3 className="p-4">{item.cargo}</h3>
                <p className="text-base pt-10">{item.descricao}</p>

              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
