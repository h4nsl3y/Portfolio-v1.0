import '@/output.css'
import { useEffect } from 'react';
let coloredLetters: string ='w-fit h-fit bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent text-center';

const index = () => {
  
  useEffect(() => {
    function appear(){
      let subArea = document.getElementById('subScreenFrame');
      if(subArea){subArea.style.opacity="1";}
    }
    appear()
  }, []);

  return (
    <div className={`w-full h-full elementScreen transition-opacity opacity-100 duration-500 ease-in-out subScreenFrame`} id='Home'>
        <div className={`w-full h-full flex flex-col text-center items-center justify-center`}>
            <p className={`text-xl`}>Hello, I am</p>
            <div className={`flex items-center justify-center`}> 
                <p className={`${coloredLetters} text-3xl sm:text-5xl font-bold`}>Hansley Louis Eleonore</p>
            </div>
            <p className={`text-md sm:text-xl`}>software engineer in test</p>
        </div>
    </div>
  )
}

export default index