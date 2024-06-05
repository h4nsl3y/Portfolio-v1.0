import NotificationType from "@/Types/NotificationType"
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
  setNotification: React.Dispatch<React.SetStateAction<NotificationType>>;
};


  const index = ( {option, setOption, setNotification} : Props) => {

  function scroll(id : string){ document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})}

  const handleOptionChange = (btnElement: React.ChangeEvent<HTMLInputElement>) => {
    setOption(btnElement.target.value);
    scroll(btnElement.target.value);
  };

  const handleNotification = (id: string) => {

    let notificationData: NotificationType = {title:"title", contentType:"text", content:"content" };
    switch(id){
      case "phone":
        notificationData = {title:"Phone : ", contentType:"text", content:"+230-5807-8946" };
        break;
      case "email":
        notificationData = {title:"Email : ", contentType:"email", content:"hansleyeleonore@gmail.com" };
        break;
      case "linkdin":
        notificationData = {title:"Linkdin : ", contentType:"href", content:"https://www.linkedin.com/in/hansley-eleonore-b17705181" };
        break;
      case "github":
        notificationData = {title:"Github : ", contentType:"href", content:"https://github.com/h4nsl3y" };
        break;
    }
    setNotification(notificationData);
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
          <button className={`${buttonClass}`} onClick={()=>handleNotification('phone')}>
            <img src={phone_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`} onClick={()=>handleNotification('email')}>
            <img src={email_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`} onClick={()=>handleNotification('linkdin')}>
            <img src={linkdin_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`} onClick={()=>handleNotification('github')}>
            <img src={github_icon} className={`${imageClass}`}/>
          </button>
        </div>

    </div>
  )
}

export default index