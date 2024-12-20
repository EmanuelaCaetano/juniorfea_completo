import Card from '@/components/Card';
import PersonInfoSection2 from "@/components/introducao_5"
import CarroselNoticias from '@/components/CarroselNoticias'
import CartoesBlog from "@/components/CartoesBlog"
import CartoesBlog2 from "@/components/CartoesBlog2"
import CartaoTransicao from "@/components/CartaoTransicao"
import CartaoMascarado from "@/components/CartaoMascarado"
import { CACHE_ONE_YEAR } from "next/dist/lib/constants"
import PostList from "@/components/PostLista";
import DeletePost from "@/components/DeletarPost";
import TesteBlog from "@/components/testeBlog";
import ManagePosts from "@/components/EditarPost";


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