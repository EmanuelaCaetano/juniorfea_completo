import PersonInfoSection2 from "@/components/introducao_5"
import CartoesBlog2 from "@/components/CartoesBlog2"


export default function Home() {
 
  return (
    <>
      <PersonInfoSection2/>
      <div className='pt-8'>

      <div className='w-1/2 lg:w-1/3 h-1/6 pl-8 flex items-center bg-black bg-opacity-50'>
                <h2 className='sm:text-3xl text-white md:text-3xl font-light'>Principais Noticias</h2>
            </div>
        {/*<CarroselNoticias noticias={noticias} />*/}
      </div>
      <div>
            <CartoesBlog2 />
           
      </div>

      
    </>
  );
}