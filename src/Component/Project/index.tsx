import Card from '@/Component/Card'
import Data from '@/assets/document/Data.tsx'
import { useEffect } from 'react'

let cards = Data.Cards;
let boxStyle = `rounded m-2  sm:w-[95%] w-full glass`;

const index = () => {
    useEffect(() => {
        function appear(){
          let subArea = document.getElementById('subScreenFrame');
          if(subArea){subArea.style.opacity="1";}
        }
        appear()
      }, []);

    return (
        <div className="w-full h-full flex elementScreen transition-opacity opacity-100 duration-300 ease-in-out subScreenFrame" id='Project'>
            <div className="h-full w-full flex">
                <div className="h-[90vh] sm:h-[90%] w-[95%] grid auto-rows-[90vh] auto-cols-[90vw] sm:auto-cols-[80%] sm:auto-rows-[50vh] sm:grid-cols-1 grid-flow-row m-auto custom-scrollbar">
                  {cards.map((cardData, index) => (
                    <div key={`card-${index}`} className={`row-span-1 col-span-1 ${boxStyle}`}>
                        <Card  
                          imagePath_1 = {cardData.ImagePath.Path1}
                          imagePath_2 = {cardData.ImagePath.Path2}
                          title = {cardData.Title}
                          date = {cardData.Date}
                          description = {cardData.Description}
                          technologtList = {cardData.Technologies}
                          />
                    </div>
                  ))}
                </div>
            </div>
        </div>
      )
}

export default index