import { useState } from 'react';
import NotificationType from '@/Types/NotificationType'
import Navbar from '@/Component/Navbar';
import SectionArea from '@/Component/SectionArea'
import Notification from '@/Component/Notification'
import "@fontsource/jetbrains-mono"; 
import "@fontsource/jetbrains-mono/400.css"; 
import "@fontsource/jetbrains-mono/800.css";
import './output.css'
import './App.css'


function App() {
  
    const [selectedOption, setSelectedOption] = useState<string>('Home');
    const [notificationContent, setNotification] = useState<string>("");

    return (
      <div className={`h-screen w-screen bg-[#5050a8] text-black dark:bg-[#121231] dark:text-white flex items-center justify-center`}>
        <div className={`h-full sm:h-[90%] w-full sm:w-[90%] flex flex-col sm:flex-row items-center justify-between `}>
            <Navbar option={selectedOption} setOption={setSelectedOption} setNotification={setNotification}/>
            <SectionArea option={selectedOption}/>
        </div>
        <Notification notificationId={notificationContent} setNotification={setNotification}/>
      </div>
    )
}

export default App
