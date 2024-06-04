import { useState } from 'react';
import Navbar from '@/Component/Navbar';
import SectionArea from '@/Component/SectionArea'
import "@fontsource/jetbrains-mono"; 
import "@fontsource/jetbrains-mono/400.css"; 
import "@fontsource/jetbrains-mono/800.css";
import './output.css'
import './App.css'


function App() {
  
    const [selectedOption, setSelectedOption] = useState<string>('Home');

    return (
      <div className={`h-screen w-screen bg-[#5050a8] text-black dark:bg-[#121231] dark:text-white flex items-center justify-center`}>
        <div className={`h-[90%] w-[90%] flex flex-row items-center justify-between `}>
            <Navbar option={selectedOption} setOption={setSelectedOption}/>
            <SectionArea/>
        </div>
      </div>
    )
}

export default App
