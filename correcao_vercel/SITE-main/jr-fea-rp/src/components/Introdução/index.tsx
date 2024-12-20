// components/BackgroundImageComponent.tsx
import React from 'react';

interface IntroducaoProps {
  imgPath: string;
  pageTitle: string;
  context: string;
}

const Introducao: React.FC<IntroducaoProps> = ({ imgPath, pageTitle, context}) => {
  return (
    <>
    <div className="bg-corPrimaria h-[800px] w-full pb-4 rounded-b-lg shadow-lg mb-50">
    <div className="w-full h-[770px] bg-no-repeat  bg-cover bg-center" style={{ backgroundImage: `url(${imgPath})` }}>
        <div className='h-[770px] pt-16  bg-gradient-to-t from-red-500/20  to-black/80'>
            <div className='w-2/5 h-[80px] pl-8 flex items-center bg-black bg-opacity-50'>
                <h2 className='text-white text-4xl font-bold'>{pageTitle}</h2>
            </div>
            <div  className=' w-1/3 h-full pt-8 px-8'>
            <p className='text-white text-xl font-bold'>{context}</p>
            </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Introducao;
