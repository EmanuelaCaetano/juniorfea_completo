// import ExpandableCardDemo from "../blocks/expandable-card-demo-standard"
import CartoesExpandiveis from "../CartoesExpandiveis";
import { FaHandshake } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
// ... outras importações

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function MissaoVisaoValores() {
  return (
    <>
      <div className=" h-full p-24 bg-white flex justify-center gap-40">
          <div className="h-[500px] w-[300px] border-2 text-corPrimaria border-corPrimaria rounded-xl flex flex-col items-center drop-shadow-xl hover:bg-corPrimaria hover:text-white duration-300 transition p-4 font-bold">
            <h2 className="text-5xl">Missão</h2>
            <FaHandshake className="w-full h-[150px] mt-8" />
            <p className="text-center text-xl">
              Impulsionar o sucesso dos clientes e o desenvolvimento integral
              dos membros, alcançando resultados de impacto
            </p>
          </div>

        <div className="h-[500px] w-[300px] border-2 text-corPrimaria border-corPrimaria rounded-xl flex flex-col items-center drop-shadow-xl hover:bg-corPrimaria hover:text-white duration-300 transition p-4 font-bold">
          <h2 className="text-5xl">Visão</h2>
          <FaEye className="w-full h-[150px] mt-8" />
          <p className="text-center text-xl">
            Queremos promover um grande impacto, crescimento e resultado para
            nossos clientes. Tornando-nos assim, uma referência no ramo de
            consultoria empresarial júnior.
          </p>
        </div>

        <div className="h-[500px] w-[300px] border-2 text-corPrimaria border-corPrimaria rounded-xl flex flex-col items-center drop-shadow-xl hover:bg-corPrimaria hover:text-white duration-300 transition p-4 font-bold">
          <h2 className="text-5xl">Valor</h2>
          <FaHeart className="w-full h-[150px] mt-8" />
          <p className="text-center text-xl">
            Somos guiados por valores de uma evolução que nunca acaba e
            possibilitando que nossa missão de alcançar e impulsionar grandes
            resultados seja cumprida e, nossa visão, concretizada.{" "}
          </p>
        </div>
        {/*<CartoesExpandiveis/>*/}
      </div>
    </>
  );
}

