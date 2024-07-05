import Card from '@/Component/Card'
import Portfolio_1 from '@/assets/image/mockup/Portfolio_1.png'
import Portfolio_2 from '@/assets/image/mockup/Portfolio_2.png'
import SkillHub_1 from '@/assets/image/mockup/SkillHub_1.png'
import SkillHub_2 from '@/assets/image/mockup/SkillHub_2.png'
import SER from '@/assets/image/mockup/SER.jpg'
import { useEffect } from 'react'

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
                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                      <Card  
                        imagePath_1 = {Portfolio_1}
                        imagePath_2 = {Portfolio_2}
                        title = 'Portfolio'
                        date = 'Jun 2024'
                        description = 'A online react portfolio use to present myself, my curriculum vitae and the different project made.'
                        technologtList='vscode-html-css-javascript-typescript-react-vite'
                        />
                    </div>
                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                    <Card  
                        imagePath_1 = {SkillHub_1}
                        imagePath_2 = {SkillHub_2}
                        title = 'SkillHub'
                        date = 'Dec 2023'
                        description = 'Skill Hub is an employee training management portal that allows employees to enroll to courses in near future'
                        technologtList='visualstudio-asp-csharp-html-css-javascript-mysql'
                        />
                    </div>
                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                    <Card  
                        imagePath_1 = {SER}
                        imagePath_2 = ""
                        title = 'Speech Emotion Recognition'
                        date = 'Jun 2023'
                        description = 'A mobile application that records the voice of the speaker or audio file and send the data to an online server, where they are analyzed by a multi-modal model created with Python using the Tensorflow library from which information is extract and send back to application to be present to user.'
                        technologtList='pycharm-androidstudio-java-python-sqlite'
                        />
                    </div>
                </div>
            </div>
        </div>
      )
}

export default index