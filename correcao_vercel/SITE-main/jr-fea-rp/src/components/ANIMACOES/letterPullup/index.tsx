import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface LetterPullupProps {
  text: string;
}

const LetterPullup: React.FC<LetterPullupProps> = ({ text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5 },
    }),
  };

  return (
    <div ref={ref} className="overflow-hidden">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={letterVariants}
          className="text-white font-extrabold drop-shadow-lg text-5xl"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default LetterPullup;
