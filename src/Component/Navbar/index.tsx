import NotificationType from "@/Types/NotificationType"
import navigation_icon from '@/assets/image/navigation_icon.png';
import home_icon from '@/assets/image/home_icon.png';
import user_icon from '@/assets/image/user_icon.png';
import code_icon from '@/assets/image/code_icon.png';
import document_icon from '@/assets/image/document_icon.png';
import phone_icon from '@/assets/image/phone_icon.png';
import email_icon from '@/assets/image/email_icon.png';
import linkdin_icon from '@/assets/image/linkdin_icon.png';
import github_icon from '@/assets/image/github_icon.png';

import curriculumVitae from '@/assets/document/Curriculum Vitae.pdf';

let buttonClass = 'h-[50px] sm:h-fit w-full aspect-square flex flex-row sm:rounded text-center items-center transition-colors duration-300 ease-in-out hover:bg-[#7b3aff80] hover:shadow-lg hover:shadow-black active:bg-[#7b3aff] ';
let imageClass = 'w-[20px] h-[20px] sm:w-2/5 sm:h-2/5 m-[10px] sm:m-auto dark:invert';

type Props = {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  setNotification: React.Dispatch<React.SetStateAction<NotificationType>>;
};

  const index = ( {option, setOption, setNotification} : Props) => {

  const handleOptionChange = (btnElement: React.ChangeEvent<HTMLInputElement>) => {
    if(option != btnElement.target.value){
      let subscreens = document.getElementsByClassName('subScreenFrame');
      Array.from(subscreens).forEach(element => {
        (element as HTMLElement).style.opacity = '0';
      });
  
      const timeout = setTimeout(() => {
        setOption(btnElement.target.value);
      },500)
      return () => clearTimeout(timeout);
    }
  };

  const handleNotification = (id: string) => {

    let notificationData: NotificationType = {title:"title", contentType:"text", content:"content" };
    switch(id){
      case "phone":
        notificationData = {title:"Phone : ", contentType:"text", content:"+230-5807-8946"};
        break;
      case "email":
        notificationData = {title:"Email : ", contentType:"email", content:"hansleyeleonore@gmail.com"};
        break;
      case "linkdin":
        notificationData = {title:"Linkdin : ", contentType:"href", content:"https://www.linkedin.com/in/hansley-eleonore-b17705181"};
        break;
      case "github":
        notificationData = {title:"Github : ", contentType:"href", content:"https://github.com/h4nsl3y"};
        break;
    }
    setNotification(notificationData);
  };
  const expand = () =>{
    let navbar = document.getElementById('navbar');
    if(navbar && window.innerWidth <= 640){
      navbar.style.height =  navbar.style.height == "550px" ? "50px" : "550px";
    }
  }


  return (
    <div className={`h-[50px] w-full sm:h-full sm:w-[5%] sm:max-w-[100px] flex flex-col justify-between rounded overflow-hidden transition-all duration-300 ${window.innerWidth <= 640 ? "" : "glass"}`} id='navbar'>
      
      {window.innerWidth <= 640 &&
      <div className='h-fit w-full flex item-center justify-center'>
        <button className={`${buttonClass} bg-[#5050a8] dark:bg-[#121231]`}  onClick={()=>expand()}>
          <img src={navigation_icon} className={`${imageClass}`}/>
        </button>
      </div>
       }

        <div className='w-full h-fit flex flex-col item-center justify-center'>
        <div className={`w-full h-fit flex flex-row rounded text-center items-center `} >
            <label className={`${buttonClass} ${option == "Home" ? "bg-[#7b3aff]" : "bg-transparent"}`}>
              <input type="radio" name="screen" value="Home" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
              <img src={home_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>Home</p> }
            </label>
          </div>
          <div className={`w-full h-fit flex flex-row rounded text-center items-center`}>
            <label className={`${buttonClass} ${option == "About" ? "bg-[#7b3aff]" : "bg-transparent"}`}>
              <input type="radio" name="screen" value="About" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
              <img src={user_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>About</p> }
            </label>
          </div>
          <div className={`w-full h-fit flex flex-row rounded text-center items-center`}>
            <label className={`${buttonClass} ${option == "Project" ? "bg-[#7b3aff]" : "bg-transparent"}`}>
              <input type="radio" name="screen" value="Project" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
              <img src={code_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>Project</p> }
            </label>
          </div>
          <div className={`w-full h-fit flex flex-row rounded text-center items-center`}>
            <a href={curriculumVitae} download='Curriculum Vitae.pdf' className={`${buttonClass}`}>
              <img src={document_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>Curriculum Vitae</p> }
            </a>
          </div>
        </div>

        <div className='w-full h-fit flex flex-row sm:flex-col item-center justify-between sm:justify-center'>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('phone')}>
            <img src={phone_icon} className={`${imageClass} m-auto`}/>
          </button>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('email')}>
            <img src={email_icon} className={`${imageClass} m-auto`}/>
          </button>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('linkdin')}>
            <img src={linkdin_icon} className={`${imageClass} m-auto`}/>
          </button>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('github')}>
            <img src={github_icon} className={`${imageClass} m-auto`}/>
          </button>
        </div>
    </div>
  )
}

export default index