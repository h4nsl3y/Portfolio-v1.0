import Home from '@/Component/Home'
import About from '@/Component/About'
import Project from '@/Component/Project'
import AudioResponse from '@/Component/AudioResponse'
import '@/output.css'
import Background from '../Background/basic';

interface Props{
  option: string;
}

const index = ({option}: Props) => {
  return (
    <div className={`h-full w-full sm:w-[90%] flex rounded overflow-hidden ${window.innerWidth <= 640 ? "" : "glass"}`}>
      
      {window.innerWidth >= 640 && <Background/>}
      <div className= "h-full w-full z-10 overflow-hidden sm:fade">
        {option == "Home" && <Home/>}
        {option == "About" && <About/>}
        {option == "Project" && <Project/>}
        {option == "Audio" && <AudioResponse/>}
      </div>
    </div>
  )
}

export default index