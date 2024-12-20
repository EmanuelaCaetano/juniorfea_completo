import Image from "next/image";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const PersonInfoSection2: React.FC = () => {
  const words = [
    {
      text: "Blog",
    },
  
  ];
  return (
    <section className="relative h-[80vh] flex items-center bg-corPrimaria">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/introducao5.jpg')", // Atualize o caminho correto da imagem
        }}
      />
       {/* Gradiente sobreposto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-red-500 bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start w-full h-full pl-8">
        <div className="text-white max-w-md px-6 text-left"> {/* Alinhado à esquerda */}
          <h2 className="text-4xl font-bold mb-6">
          <TypewriterEffectSmooth words={words} />
          </h2>
          <BlurFade delay={0.25} inView>
            <p className="text-2xl leading-relaxed max-w-[400px]">
            Entenda como funciona os processos do seu negócio e aprenda a crescer em direção ao sucesso!
            </p>
            </BlurFade>
         
            <Link href="/contato" >
        <button  className="px-8 py-2 rounded-md bg-white text-red-500 font-bold transition border-white duration-200 hover:bg-black hover:text-white-500 border-2 border-transparent hover:border-red-500">
  Saiba Mais
</button>
  </Link>      
        </div>
        </div>
      
    </section>
  );
};

export default PersonInfoSection2;


