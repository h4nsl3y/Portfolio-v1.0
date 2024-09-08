import Card from '@/Component/Card'
import Data from '@/assets/document/Data';
import { useEffect } from 'react'

let cards = Data.Cards;
let titleText: string = `text-[1rem] sm:text-[1.2rem] 2xl:text-[1.5rem]`;

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
            <div className={`h-[90vh] sm:h-[90%] w-[95%] m-auto rounded glass`}>
                <div className={`${titleText} flex m-4`}>
                  <p>Project.</p><p className={`text-colorSelected`}>txt</p>
                </div>
                <div className="h-full sm:h-[80%] w-[95%] grid auto-rows-[90vh] auto-cols-[90vw] sm:auto-cols-[80%] sm:auto-rows-[50vh] sm:grid-cols-1 grid-flow-row m-auto custom-scrollbar">
                  {cards.map((cardData, index) => (
                    <div key={`card-${index}`} className={`row-span-1 col-span-1 m-2 rounded glass`}>
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