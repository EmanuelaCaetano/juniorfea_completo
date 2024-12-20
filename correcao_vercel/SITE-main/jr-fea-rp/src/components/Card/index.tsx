"use client";
import Image from "next/image";
import { useState } from "react";

const Card = ({ imageSrc, title, shortDescription, detailedDescription }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className=" w-64 h-80 bg bg-red-600 text-white rounded-xl shadow-lg overflow-hidden relative transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conteúdo inicial do Card */}
      <div className={`p-4 ${isHovered ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        
        <div className="relative h-40 w-full bg-white rounded-t-xl overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            objectFit="cover" 
            className="rounded-t-xl"
          />
        </div>
      
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-sm">{shortDescription}</p>
      </div>

      {/* Conteúdo ao passar o mouse */}
      <div 
        className={`absolute inset-0 bg-white text-red-600 p-4 flex flex-col justify-between items-center rounded-xl transform transition-transform duration-500 ${
          isHovered ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="relative h-40 w-full rounded-t-xl overflow-hidden">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            objectFit="cover" 
            className="rounded-t-xl"
          />
        </div>
        <p className="text-sm text-center my-4">{detailedDescription}</p>
        <button className="mt-2 py-2 px-4 bg-red-600 text-white font-semibold rounded-md">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default Card;
