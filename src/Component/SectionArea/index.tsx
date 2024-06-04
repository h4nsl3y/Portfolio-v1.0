import Home from '@/Component/Home'
import About from '@/Component/About'
import Project from '@/Component/Project'
import '@/output.css'

type Props = {
  option: string;
};

const index = ({option}: Props) => {
  return (
    <div className={`h-full w-[90%] flex rounded shadow-lg shadow-black overflow-hidden`}>
      <div className= "h-[300%] sm:h-full w-full z-10 overflow-hidden sm:fade">
        <Home/>
        <About/>
        <Project/>
      </div>
    </div>
  )
}

export default index