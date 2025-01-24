import { CarrosselImages } from '../CarrosselImagens';

export default function CarrosselClientes(){

  const images = [
    {
      img:
        "/2.png",
      name: "Logo 99 Taxi",
    },
    {
      img:
        "/1.png",
      name: "Logo Danone",
    },
    {
      img:
        "/4.png",
      name: "Logo Coca Cola",
    },
    {
      img:"/3.png",
      name: "Logo Botafogo de Ribeirão Preto",
    },
  
  ];

    return (
      <>
        
    <div className="h-[40rem] pb-16 rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="scroller text-center pb-9 bg-white w-full  ">
          <h2 className={"text-corPrimaria text-4xl pb-16 font-bold drop-shadow-lg"} >Clientes que confiam no nosso trabalho</h2>
          <div className="h-60 pt-24  flex justify-around gap-4 items-center bg-corPrimaria ">
          <CarrosselImages
          items={images}
          direction="right"
          speed="normal" 
          pauseOnHover={false}
          />
            
          </div>
        </div>
    </div>
     </> 
    )
}