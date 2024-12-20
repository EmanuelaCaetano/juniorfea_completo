import Image from "next/image";  
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const InfoSection: React.FC = () => {
  const words = [
    {
      text: "Cases de sucesso",
    },
  ];
  return (
    <section className="h-[80vh] flex items-center justify-start bg-gray-100">
      <div className="relative flex flex-col md:flex-row w-full max-w-full h-full shadow-lg">

        {/* Imagem de fundo */}
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
          
          {/* Left Section: Text Content */}
        <div
          className="absolute z-20 flex flex-col justify-center bg-corPrimaria text-white w-full h-full p-8 md:p-12"
          style={{
            clipPath: "polygon(0 0, 35% 0, 70% 100%, 0% 100%)",
          }}
        >
          <div className="max-w-[50%] pl-8">
            <h2 className="text-4xl font-bold mb-6">
              <TypewriterEffectSmooth words={words} />
            </h2>
            <BlurFade delay={0.25} inView>
              <p className="text-lg leading-relaxed">
                Confira abaixo alguns dos nossos projetos realizados com êxito!
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

export default InfoSection;




