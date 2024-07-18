import { useEffect,useRef } from 'react';
import NotificationType from '@/Types/NotificationType';

type Props = {
  notificationContent: NotificationType;
}

const index = ({notificationContent}: Props) => {

  const timeout = useRef< any| null>(null);

  function setContent(){
    let titleText = document.getElementById('title');
    let contentText = document.getElementById('content');
    let anchor = document.getElementById("anchorLink");
  
    if(titleText){titleText.textContent=notificationContent.title;}
    if(contentText ){contentText.textContent=notificationContent.content;}
    if(notificationContent.contentType == "href" && anchor){
      (anchor as HTMLAnchorElement).href = notificationContent.content;
      anchor.textContent =notificationContent.content;
    }
    if(notificationContent.contentType == "email" && anchor){
      (anchor as HTMLAnchorElement).href = `mailto:${notificationContent.content}`;
      anchor.textContent =notificationContent.content;
    }
  }


  const cancelTimeout = () => {
    if (timeout.current != null) {
      clearTimeout(timeout.current);
      timeout.current = null;
  }
};

  useEffect(() => {
    setContent();

    let notification = document.getElementById('notificationBody');
    cancelTimeout();
    if(notification){

      if(notificationContent.title != ""){
        notification.style.visibility = "visible";
        notification.style.opacity = "1";
      }
      
      timeout.current = setTimeout(() => 
        {
          notification.style.visibility = "invisible";
          notification.style.opacity = "0";

        },5000)
      return () => {
        if (timeout.current != null) {
            clearTimeout(timeout.current );
        }
    };
    }
  }, [notificationContent]);

  return (
    <div className='h-fit w-fit absolute bottom-3  z-[15] self-center sm:right-3' id='notificationPane'>
      <div className='h-fit w-fit flex items-center justify-center'>

        <div className='f-full w-full rounded flex bg-[#5050a8] text-black dark:bg-[#7b3aff80] dark:text-white items-center justify-center transition-opacity opacity-0 invisible ease-in-out duration-500' id="notificationBody">
          <div className='w-fit text-center justify-center m-2 sm:flex'>
            <p className='text-[#ffffff] text-sm' id='title'></p>
            {notificationContent.contentType == "text" && <p className='text-[#ffffff] text-sm' id='content'></p>}
            {notificationContent.contentType != "text" && 
              <div className='text-center justify-center sm:flex'>
                <a href="#" className='text-[#ffffff] text-sm underline decoration-1 underline-offset-1' id="anchorLink"></a>
              </div>
              }
          </div> 
        </div>
      </div>
    </div>
  )
}

export default index