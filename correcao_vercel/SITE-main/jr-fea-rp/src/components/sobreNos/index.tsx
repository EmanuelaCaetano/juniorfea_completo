import DynamicImages from "../BgAnimacao";


export default function SobreNos () {
    return(
        <>
                <div className="w-full h-full pt-16  ">
                <div className='w-1/3 h-1/6 pl-8 flex items-center bg-corPrimaria bg-opacity-60 drop-shadow-lg '>
                    <h2 className='text-white text-3xl font-bold'>Sobre Nós</h2>
                </div>
                <div className=" h-full  p-16 flex ">
                    <div  className=' w-full h-68 rounded-2xl flex flex-col justify-center p-8 text-xl text-center font-normal  bg-corPrimaria drop-shadow-2xl shadow-lg text-white'>
                        <div className="order-2 lg:order-1">
                        <p className="pt-8 pl-4 pr-4">Fundada em <b>1992</b>, a Júnior FEA-RP é uma empresa júnior formada por alunos de Administração, Contabilidade, Economia e Finanças da <b>FEA USP Ribeirão Preto</b>. Nossos projetos têm como finalidade transformar a ideia dos nossos clientes em realidades de sucesso e contribuir para a vivência empresarial. 
                        </p>
                        <br></br>
                        <p className="pl-4 pr-4">Nos situamos na <b>melhor universidade da América Latina</b>, nossa equipe recebe treinamentos constantes de parceiros como <b>McKinsey & Company e Bain & Company</b>, além de sermos acompanhados por <b>professores doutores da USP</b> especializados no ramo. 
                        </p>
                        <br></br>
                        <p className="pl-4 pr-4 pb-8">
                        Com isso, procuramos construir as melhores <b>soluções e estratégias de reconhecimento, posicionamento no mercado e inovação.</b></p>
                        <p className="pl-4 pr-4 pb-8">
                        Somos a empresa júnior que mais promove vivência empresarial no Brasil</p>
                        <p className="pl-4 pr-4 pb-8">
                        Somos Tetra Alto Impacto </p>
                        <p className="pl-4 pr-4 pb-8">
                        Somos a maior consultoria mpresarial do interior</p>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <DynamicImages />   
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
            <img src="/fotoMej.jpg" className="p-20 w-auto lg:w-[1000px] h-auto h-[700px] rounded-lg drop-shadow-lg drop-shadow-lg opacity-88 rounded-lg hover:scale-105 duration-300"></img>
            </div>
        </>
    )
}
