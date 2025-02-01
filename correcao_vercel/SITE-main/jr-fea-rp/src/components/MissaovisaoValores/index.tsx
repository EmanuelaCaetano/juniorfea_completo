import { FaBullseye, FaHeart, FaEye } from "react-icons/fa";

export default function MissaoVisaoValores() {
  return (
    <>
      <div className="w-full md:w-[400px] h-1/6 px-4 md:pl-8 flex items-center bg-corPrimaria bg-opacity-60 drop-shadow-lg">
        <h2 className="text-white text-2xl md:text-3xl font-bold">Para que estamos aqui</h2>
      </div>

      {/* Responsividade aprimorada */}
      <div className="h-full p-6 md:p-12 lg:p-24 bg-white flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
        {[
          {
            title: "Missão",
            icon: <FaBullseye className="w-full h-[100px] md:h-[150px] mt-6 md:mt-8" />,
            text: "Impulsionar o sucesso dos clientes e o desenvolvimento integral dos membros, alcançando resultados de impacto.",
          },
          {
            title: "Visão",
            icon: <FaEye className="w-full h-[100px] md:h-[150px] mt-6 md:mt-8" />,
            text: "Queremos promover um grande impacto, crescimento e resultado para nossos clientes. Tornando-nos assim, uma referência no ramo de consultoria empresarial júnior.",
          },
          {
            title: "Valor",
            icon: <FaHeart className="w-full h-[100px] md:h-[150px] mt-6 md:mt-8" />,
            text: "Somos guiados por valores de uma evolução que nunca acaba e possibilitando que nossa missão de alcançar e impulsionar grandes resultados seja cumprida e, nossa visão, concretizada.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="max-w-[300px] w-full border-2 text-corPrimaria border-corPrimaria rounded-xl flex flex-col items-center drop-shadow-xl hover:bg-corPrimaria hover:text-white duration-300 transition p-4 font-bold"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl">{item.title}</h2>
            {item.icon}
            <p className="text-center text-lg md:text-xl">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}




