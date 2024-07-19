import Carousel from '@/Component/Carousel'
import CareerCard from '@/Component/CareerCard'
import Data from '@/assets/document/Data.json';
import { useEffect } from 'react';

let resume = Data.About;
let career = Data.Career; 
let boxStyle = `rounded sm:w-[95%] w-full glass`;

const index = () => {
  useEffect(() => {
    function appear(){
      let subArea = document.getElementById('subScreenFrame');
      if(subArea){subArea.style.opacity="1";}
    }
    appear()
  }, []);

  return (
    <div className="w-full h-full flex elementScreen transition-opacity opacity-100 duration-300 ease-in-out  subScreenFrame" id='About'>
        <div className="h-full w-full flex">
            <div className="h-[90vh] sm:h-[90%] w-[95%] grid grid-rows-[45vh_45vh_45vh] grid-cols-[90vw] sm:grid-cols-2 sm:grid-rows-2 grid-flow-row sm:grid-flow-col m-auto custom-scrollbar">
                
                <div className={`row-span-1 col-span-1 m-2 ${boxStyle}`}>
                  <div className="flex m-4">
                    <p>About.</p><p className={`text-[#7b3aff]`}>txt</p>
                  </div>
                  <div className="object-contains flex flex-col m-4 ">
                    <p className="text-[10px] sm:text-[12px]">{resume}</p>
                  </div>
                </div>

                <div className={`row-span-1 col-span-1 m-2 ${boxStyle} flex flex-col justify-between`}>
                  <div className="flex m-4">
                    <p>Technology.</p><p className={`text-[#7b3aff]`}>js</p>
                  </div>
                  <div className="flex flex-col text-center items-center justify-center mx-4 my-auto">
                    <Carousel/>
                  </div>
                </div>

                <div className={`row-span-2 col-span-1 m-2 ${boxStyle}`}>
                  <div className="flex m-4">
                    <p>Career.</p><p className={`text-[#7b3aff]`}>txt</p>
                  </div>

                  <div className={`w-full h-[65vh] custom-scrollbar`}>
                    <div className={`w-[95%] grid grid-cols-1 grid-flow-row m-auto`}>
                    {career.map((CareerCards, index) => (
                        <div key={`CareerCard-${index}`} className={`row-span-1 col-span-1 ${boxStyle} sm:mx-4 my-4`}>
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