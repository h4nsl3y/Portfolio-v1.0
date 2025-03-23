import navigation_icon from '@/assets/image/navigation_icon.png';
import home_icon from '@/assets/image/home_icon.png';
import user_icon from '@/assets/image/user_icon.png';
import code_icon from '@/assets/image/code_icon.png';
import ripple_icon from '@/assets/image/ripple_icon.png'
import document_icon from '@/assets/image/document_icon.png';
import phone_icon from '@/assets/image/phone_icon.png';
import email_icon from '@/assets/image/email_icon.png';
import linkdin_icon from '@/assets/image/linkdin_icon.png';
import github_icon from '@/assets/image/github_icon.png';
import curriculumVitae from '@/assets/document/Curriculum Vitae.pdf'
import NavBarType from '@/Types/NavBarType';

let buttonClass = 'h-[50px] sm:h-fit w-full aspect-square flex flex-row sm:rounded text-center items-center transition-colors duration-300 ease-in-out hover:bg-mainColor hover:shadow-lg hover:shadow-black active:bg-colorSelected cursor-pointer';
let imageClass = 'w-[20px] h-[20px] sm:w-2/5 sm:h-2/5 m-[10px] sm:m-auto dark:invert';

  const index = ( {option, setOption, setNotification, setFollowerText} : NavBarType) => {

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

  const handleNotification = (id: string) => { setNotification(id); };

  const expand = () => {
    let navbar = document.getElementById('navbar');
    if(navbar && window.innerWidth <= 640){
      navbar.style.height =  navbar.style.height == "550px" ? "50px" : "550px";
    }
  }

  const handleFollowerText = (id: string) => { setFollowerText(id); };

  return (
    <div className={`h-[50px] w-full sm:h-full sm:w-[5%] sm:max-w-[100px] flex flex-col justify-between rounded overflow-hidden transition-all duration-300 ${window.innerWidth <= 640 ? "" : "glass"}`} id='navbar'>
      {window.innerWidth <= 640 &&
      <div className='h-fit w-full flex item-center justify-center'>
        <button className={`${buttonClass} bg-mainColorLight dark:bg-blackLavender`}  onClick={()=>expand()}>
          <img src={navigation_icon} className={`${imageClass}`}/>
        </button>
      </div>
       }
        <div className='w-full h-fit flex flex-col item-center justify-center'>
          <div className={`w-full h-fit flex flex-row rounded text-center items-center`} >
            <label className={`${buttonClass} ${option == "Home" ? "bg-mainColorSelected" : "bg-transparent"}`} onMouseEnter={()=>handleFollowerText('Home')} onMouseLeave={()=>handleFollowerText('')}>
              <input type="radio" name="screen" value="Home" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
              <img src={home_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>Home</p> }
            </label>
          </div>
          <div className={`w-full h-fit flex flex-row rounded text-center items-center`}>
            <label className={`${buttonClass} ${option == "About" ? "bg-mainColorSelected" : "bg-transparent"}`} onMouseEnter={()=>handleFollowerText('About')} onMouseLeave={()=>handleFollowerText('')}>
              <input type="radio" name="screen" value="About" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
              <img src={user_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>About</p> }
            </label>
          </div>
          <div className={`w-full h-fit flex flex-row rounded text-center items-center`}>
            <label className={`${buttonClass} ${option == "Project" ? "bg-mainColorSelected" : "bg-transparent"}`} onMouseEnter={()=>handleFollowerText('Project')} onMouseLeave={()=>handleFollowerText('')}>
              <input type="radio" name="screen" value="Project" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
              <img src={code_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>Project</p> }
            </label>
          </div>
          {
            window.innerWidth <= 640
            &&
            <div className={`w-full h-fit flex flex-row rounded text-center items-center`}>
            <label className={`${buttonClass} ${option == "Audio" ? "bg-mainColorSelected" : "bg-transparent"}`} onMouseEnter={()=>handleFollowerText('Audio')} onMouseLeave={()=>handleFollowerText('')}>
              <input type="radio" name="screen" value="Audio" className={`absolute opacity-0 w-[0px] h-[0px]`} onChange={handleOptionChange}/>
              <img src={ripple_icon} className={`${imageClass}`}/>
              <p>Audio</p> 
            </label>
          </div>
          }

          <div className={`w-full h-fit flex flex-row rounded text-center items-center`}>
            <button className={`${buttonClass} bg-transparent`} onClick={()=>{window.open(curriculumVitae, '_blank');}} onMouseEnter={()=>handleFollowerText('Curriculum Vitae')} onMouseLeave={()=>handleFollowerText('')}>
              <img src={document_icon} className={`${imageClass}`}/>
              {window.innerWidth <= 640 && <p>Curriculum Vitae</p> }
            </button>
          </div>
        </div>

        <div className='w-full h-fit flex flex-row sm:flex-col item-center justify-between sm:justify-center'>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('phone')} onMouseEnter={()=>handleFollowerText('Phone')} onMouseLeave={()=>handleFollowerText('')}>
            <img src={phone_icon} className={`${imageClass} m-auto`}/>
          </button>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('email')} onMouseEnter={()=>handleFollowerText('Email')} onMouseLeave={()=>handleFollowerText('')}>
            <img src={email_icon} className={`${imageClass} m-auto`}/>
          </button>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('linkdin')} onMouseEnter={()=>handleFollowerText('Linkdin')} onMouseLeave={()=>handleFollowerText('')}>
            <img src={linkdin_icon} className={`${imageClass} m-auto`}/>
          </button>
          <button className={`${buttonClass} bg-transparent`} onClick={()=>handleNotification('github')} onMouseEnter={()=>handleFollowerText('Github')} onMouseLeave={()=>handleFollowerText('')}>
            <img src={github_icon} className={`${imageClass} m-auto`}/>
          </button>
        </div>
    </div>
  )
}

export default index