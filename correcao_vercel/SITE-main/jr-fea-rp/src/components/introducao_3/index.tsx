import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
  
const PersonInfoSection: React.FC = () => {
  const words = [
    {
      text: "Se Interessou?",
      className: "text-red-500",
    },
  ];
  return (
    <section className="relative h-[80vh] flex items-center bg-red-500">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/introducao3.jpg')", // Atualize o caminho correto da imagem
        }}
      />
       {/* Gradiente sobreposto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-corPrimaria bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-end w-full h-full">
        <div className="text-white max-w-md px-6 text-center mr-8">
          <h2 className="ml-[40px] font-bold mb-6">
          <TypewriterEffectSmooth words={words} />
          </h2>
          <BlurFade delay={0.25} inView>
            <p className="text-lg leading-relaxed">
              Fale agora com um especialista! Agende um diagnóstico gratuito abaixo.
            </p>
            </BlurFade>
        
           
        </div>
        </div>
     
    </section>
  );
};

export default PersonInfoSection;

