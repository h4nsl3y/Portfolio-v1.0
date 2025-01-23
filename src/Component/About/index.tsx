import Carousel from '@/Component/Carousel'
import CareerCard from '@/Component/CareerCard'
import Data from '@/assets/document/Data.tsx';
import { useEffect } from 'react';

let resume = Data.About;
let career = Data.Career; 
let boxStyle: string = `rounded sm:w-[95%] w-full glass`;
let titleText: string = `text-[1rem] sm:text-[1.2rem] 2xl:text-[1.5rem]`;
let contentText: string = `text-[0.6rem] sm:text-[0.7rem] 2xl:text-[0.9rem]`;

const index = () => {
  useEffect(() => {
    function appear(){
      let subArea = document.getElementById('subScreenFrame');
      if(subArea){subArea.style.opacity="1";}
    }
    appear()
  }, []);

  return (
    <div className="w-full h-full flex elementScreen transition-opacity opacity-100 duration-300 ease-in-out subScreenFrame" id='About'>
        <div className="h-full w-full flex">
            <div className="h-[90vh] sm:h-[90%] w-[95%] grid grid-rows-[45vh_45vh_45vh] grid-cols-[90vw] sm:grid-cols-2 sm:grid-rows-2 grid-flow-row sm:grid-flow-col m-auto custom-scrollbar">
                
                <div className={`row-span-1 col-span-1 m-2 ${boxStyle}`}>
                  <div className={`flex m-4 ${titleText}`}>
                    <p>About.</p><p className={`text-colorSelected`}>txt</p>
                  </div>
                  <div className="h-[25vh] m-4 custom-scrollbar">
                      <p className={`${contentText}`}>{resume}</p>
                  </div>
                </div>

                <div className={`row-span-1 col-span-1 m-2 ${boxStyle} flex flex-col justify-between`}>
                  <div className={`flex m-4 ${titleText}`}>
                    <p>Technology.</p><p className={`text-colorSelected`}>js</p>
                  </div>
                  <div className="flex flex-col text-center items-center justify-center mx-4 my-auto">
                    <Carousel/>
                  </div>
                </div>
                <div className={`row-span-2 col-span-1 m-2 ${boxStyle}`}>
                  <div className={`flex m-4 ${titleText}`}>
                    <p>Career.</p><p className={`text-colorSelected`}>txt</p>
                  </div>
                  <div className={`w-full h-[68vh] custom-scrollbar`}>
                    <div className={`w-[95%] grid grid-cols-1 grid-flow-row m-auto`}>
                    {career.map((CareerCards, index) => (
                        <div key={`CareerCard-${index}`} className={`row-span-1 col-span-1 ${boxStyle} sm:mx-4 my-2`}>
                            <CareerCard title={CareerCards.Section} content= {CareerCards.Content}/>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index