import { useState } from 'react';
import Navbar from '@/Component/Navbar';
import SectionArea from '@/Component/SectionArea';
import Notification from '@/Component/Notification';
import "@fontsource/jetbrains-mono"; 
import "@fontsource/jetbrains-mono/400.css"; 
import "@fontsource/jetbrains-mono/800.css";
import './output.css';
import './App.css';
import Follower from "@/Component/Follower";

function App() {
  
    const [selectedOption, setSelectedOption] = useState<string>('Home');
    const [notificationContent, setNotification] = useState<string>("");
    const [followerText, setFollowerText] = useState<string>("");

    return (
      <div className={`h-screen w-screen bg-white text-black dark:bg-blackLavender dark:text-white flex items-center justify-center`}>
        <div className={`h-full sm:h-[90%] w-full sm:w-[90%] flex flex-col sm:flex-row items-center justify-between `}>
            <Navbar option={selectedOption} setOption={setSelectedOption} setNotification={setNotification} setFollowerText={setFollowerText}/>
            <SectionArea option={selectedOption}/>
        </div>
        <Notification notificationId={notificationContent} setNotification={setNotification}/>
        {window.innerWidth >= 640 && <Follower followerText={followerText}/> }
      </div>
    )
}

export default App
