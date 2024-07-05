import Home from '@/Component/Home'
import About from '@/Component/About'
import Project from '@/Component/Project'
import '@/output.css'

type Props = {
  option: string;
}

const index = ({option}: Props) => {
  return (
    <div className={`h-full w-full sm:w-[90%] flex rounded overflow-hidden ${window.innerWidth <= 640 ? "" : "glass"}`}>
      <div className= "h-full w-full z-10 overflow-hidden sm:fade">
        {option == "Home" && <Home/>}
        {option == "About" && <About/>}
        {option == "Project" && <Project/>}
      </div>
    </div>
  )
}

export default index