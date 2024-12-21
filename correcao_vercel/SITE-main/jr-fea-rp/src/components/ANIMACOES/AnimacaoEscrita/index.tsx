import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  texts: string[];
  duration?: number;
  //delayBetweenTexts?: number;
  className?: string;
  loop: boolean;
}

export function AnimacaoEscrita({
  texts,
  duration = 100,
  //delayBetweenTexts = 200,
  className,
  loop = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const [i, setI] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true); // Novo estado para controlar a direção da animação

  useEffect(() => {
    const typingEffect = setInterval(() => {
      const currentText = texts[currentTextIndex];

      if (isTyping) {
        // Digitar
        if (i < currentText.length) {
          setDisplayedText(currentText.substring(0, i + 1));
          setI(i + 1);
        } else {
          setIsTyping(false); // Iniciar a animação de apagar
          setTimeout(() => {
            setI(currentText.length - 1);
          }, duration);
        }
      } else {
        // Apagar
        if (i > 0) {
          setDisplayedText(currentText.substring(0, i));
          setI(i - 1);
        } else {
          setIsTyping(true); // Iniciar a animação de digitar novamente
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, texts, currentTextIndex, loop, isTyping]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm m-4",
        className
      )}
    >
      {displayedText}
    </h1>
  );
}