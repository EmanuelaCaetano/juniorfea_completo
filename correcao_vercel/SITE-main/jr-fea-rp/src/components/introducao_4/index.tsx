import Image from "next/image";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const InfoSection2: React.FC = () => {
  const words = [
    {
      text: "Quem somos?",
    },

  ];
  return (
    <section className="h-[80vh] flex items-center justify-start bg-gray-100">
      <div className="relative flex flex-col md:flex-row w-full max-w-full h-full shadow-lg">
        {/* Left Section: Image */}
        <div className="relative w-full h-full z-0">
          {/* Imagem de fundo com animação */}
        <Image
          src="/introducao2.jpg"
          alt="Team working"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Gradiente sobreposto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
        </div>

        {/* Right Section: Text Content */}
        <div
          className="absolute z-10 flex flex-col justify-center bg-corPrimaria text-white w-full h-full p-8 text-right"
          style={{
            clipPath: "polygon(70% 0, 100% 0, 100% 100%, 30% 100%)", // Polígono invertido para o lado direito
          }}
        >
          {/* Caixa de contenção para o texto */}
          <div className="ml-auto max-w-[50%] pr-8">
            <TypewriterEffectSmooth words={words} className="ml-[30%] md:ml-[40%] lg:[50%]font-bold mb-6 "/>
            
            <BlurFade delay={0.25} inView>
            <p className="text-sl sm:text-l md:text-xl ml-4 sm:ml-4 md:ml-4 lg:ml-4 leading-relaxed max-w-[800px]">
            Empresa Júnior da melhor universidade da América Latina!
            Construindo as melhores estratégias de reconhecimento, posicionamento no mercado e inovação.
            </p>
            </BlurFade>
           
            <Link href="/contato" >
        <button  className="px-8 py-2 rounded-md bg-white text-red-500 font-bold transition border-white duration-200 hover:bg-black hover:text-white-500 border-2 border-transparent hover:border-red-500">
  Saiba Mais
</button>
  </Link> 
        </div>
          </div>
        </div>
      
    </section>
  );
};

export default InfoSection2;





