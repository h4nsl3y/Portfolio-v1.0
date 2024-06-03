import Navbar from '@/Component/Navbar';
import SectionArea from '@/Component/SectionArea'
import './output.css'
import './App.css'

function App() {
    return (
      <div className={`h-screen w-screen bg-[#121231] flex items-center justify-center`}>
        <div className={`h-[90%] w-[90%] flex flex-row items-center justify-between `}>
            <Navbar/>
            <SectionArea/>
        </div>
      </div>
    )
}

export default App
