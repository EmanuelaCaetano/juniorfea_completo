'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  endValue: number;
  duration: number;
}

const AnimacaoContagem: React.FC<CountUpProps> = ({ endValue, duration }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = countRef.current;

    if (element) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Element is visible, start the animation
          const startTime = Date.now();

          const animate = () => {
            const frameId = requestAnimationFrame(animate);
            const progress = Math.min(Date.now() - startTime, duration) / duration;
            element.textContent = Math.floor(progress * (endValue)).toString();
            if (progress === 1) cancelAnimationFrame(frameId);
          };

          animate();
        }
      });

      observerRef.current = observer;
      observer.observe(element);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [endValue, duration]);

  return (
    <motion.span ref={countRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      0
    </motion.span>
  );
};

export default AnimacaoContagem;