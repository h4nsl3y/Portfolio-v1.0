import navigation_icon from '@/assets/image/navigation_icon.png';
import home_icon from '@/assets/image/home_icon.png';
import user_icon from '@/assets/image/user_icon.png'
import code_icon from '@/assets/image/code_icon.png'
import phone_icon from '@/assets/image/phone_icon.png';
import email_icon from '@/assets/image/email_icon.png';
import linkdin_icon from '@/assets/image/linkdin_icon.png';
import github_icon from '@/assets/image/github_icon.png';


let buttonClass = 'w-full aspect-square flex item-center justify-center rounded transition-colors duration-300 ease-in-out hover:bg-[#7b3aff80] hover:shadow-lg hover:shadow-black active:bg-[#7b3aff] ';
let imageClass = 'w-2/5 h-2/5 m-auto dark:invert';

type Props = {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};


const index = ( {option, setOption} : Props) => {

  


  function scroll(id : string){ document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})}
  const handleOptionChange = (btnElement: React.ChangeEvent<HTMLInputElement>) => {

    {/*let parent = btnElement.currentTarget.parentElement;*/}
    setOption(btnElement.target.value);
    scroll(btnElement.target.value);
  };



  return (
    <div className={`h-full w-[5%] max-w-[100px] flex flex-col justify-between rounded shadow-lg shadow-black`}>
        <button className={`${buttonClass}`}>
          <img src={navigation_icon} className={`${imageClass}`}/>
        </button>

        <div className='w-full h-fit flex flex-col item-center justify-center'>
          <label className={`${buttonClass} ${option=='Home' ? 'bg-[#7b3aff80]' : '' }`}>
            <input type="radio" name="screen" value="Home" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
            <img src={home_icon} className={`${imageClass}`}/>
          </label>
          <label className={`${buttonClass} ${option=='About' ? 'bg-[#7b3aff80]' : '' }`}>
          <input type="radio" name="screen" value="About" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
            <img src={user_icon} className={`${imageClass}`}/>
          </label>
          <label className={`${buttonClass} ${option=='Project' ? 'bg-[#7b3aff80]' : '' }`}>
          <input type="radio" name="screen" value="Project" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
            <img src={code_icon} className={`${imageClass}`}/>
          </label>
        </div>

        <div className='w-full h-fit flex flex-col item-center justify-center'>
          <button className={`${buttonClass}`}>
            <img src={phone_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={email_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={linkdin_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={github_icon} className={`${imageClass}`}/>
          </button>
        </div>

    </div>
  )
}

export default index