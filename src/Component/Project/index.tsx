import Card from '@/Component/Card'
import Portfolio_1 from '@/assets/image/mockup/Portfolio_1.png'
import Portfolio_2 from '@/assets/image/mockup/Portfolio_2.png'
import SkillHub_1 from '@/assets/image/mockup/SkillHub_1.png'
import SkillHub_2 from '@/assets/image/mockup/SkillHub_2.png'
import SER from '@/assets/image/mockup/SER.jpg'

let boxStyle = `shadow-lg shadow-black rounded m-2`;

const index = () => {
    return (
        <div className="w-full h-full flex elementScreen" id='Project'>
            <div className="h-full w-full flex">
                <div className="h-[90vh] sm:h-[90%] w-[95%] grid auto-rows-[90vh] sm:auto-rows-[50vh] sm:grid-cols-2 grid-flow-row  m-auto custom-scrollbar">
                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                      <Card  
                        imagePath_1 = {Portfolio_1}
                        imagePath_2 = {Portfolio_2}
                        title = 'Portfolio'
                        date = '05 June'
                        description = 'An online portfolio'
                        />
                    </div>
                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                    <Card  
                        imagePath_1 = {SkillHub_1}
                        imagePath_2 = {SkillHub_2}
                        title = 'Portfolio'
                        date = '05 June'
                        description = 'An online portfolio'
                        />
                    </div>
                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                    <Card  
                        imagePath_1 = {SER}
                        imagePath_2 = ""
                        title = 'Portfolio'
                        date = '05 June'
                        description = 'An online portfolio'
                        />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default index