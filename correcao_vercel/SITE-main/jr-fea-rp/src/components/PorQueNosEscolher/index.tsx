export default function PorQueNosEscolher() {
    return (
        <>
            <div className="bg-corPrimaria text-center">
                <h2 className="text-white text-4xl p-8 font-bold drop-shadow-lg">
                    Por que deve nos escolher?
                </h2>
                <div className="flex flex-col lg:flex-row justify-around gap-8 lg:gap-40 px-8 lg:px-40 pb-20 pt-12">
                    <div className="w-full lg:w-1/2 bg-white rounded-2xl p-12 drop-shadow-2xl flex items-center mb-8 lg:mb-0">
                        <p className="text-corPrimaria font-bold text-xl">
                            Aceleramos os resultados da sua empresa, facilitando uma{" "}
                            <span className="font-extrabold underline decoration-3">
                                visão diferenciada de mercado,
                            </span>{" "}
                            através de propostas personalizadas e modernas para melhorar o seu negócio.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 bg-white rounded-2xl p-12 drop-shadow-2xl">
                        <p className="text-corPrimaria font-bold text-2xl">Nós atuamos na:</p>
                        <ol className="text-corPrimaria list-disc pl-4 list-inside text-xl">
                            <li>Gestão Financeira</li>
                            <li>Posicionamento de mercado</li>
                            <li>Captação de clientes</li>
                            <li>Estratégia</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}
