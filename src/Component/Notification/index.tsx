import { useEffect,useRef } from 'react';
import Data from '@/assets/document/Data';
import NotificationType from '@/Types/NotificationType';

let notificationContent = Data.Notification;

interface Props {
  notificationId: String,
  setNotification: React.Dispatch<React.SetStateAction<string>>;
}

const index = ({notificationId, setNotification}: Props) => {
   let notificationData : NotificationType  =  notificationContent.none;
    switch(notificationId){
      case "phone":
        notificationData = notificationContent.phone;
        break;
      case "email":
        notificationData = notificationContent.email;
        break;
      case "linkdin":
        notificationData =  notificationContent.linkdin;
        break;
      case "github":
        notificationData =  notificationContent.github;
        break;
      default:
        notificationData = notificationContent.none;
        break;
    }

  const timeout = useRef< any| null>(null);

  function setContent(){
    let titleText = document.getElementById('title');
    let contentText = document.getElementById('content');
    let anchor = document.getElementById("anchorLink");
  
    if(titleText){titleText.textContent = notificationData.Title}

    if(contentText ){contentText.textContent=notificationData.Content;}

    if(notificationData.ContentType == "href" && anchor){
      (anchor as HTMLAnchorElement).href = notificationData.Content;
      anchor.textContent =notificationData.Content;
    }
    if(notificationData.ContentType == "email" && anchor){
      (anchor as HTMLAnchorElement).href = `mailto:${notificationData.Content}`;
      anchor.textContent =notificationData.Content;
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
      if(notificationData.Title != ""){ notification.style.visibility = "visible"; notification.style.opacity = "1"; };
      timeout.current = setTimeout(() =>  {notification.style.visibility = "invisible"; notification.style.opacity = "0"; setNotification("none");},5000);
      return () => { if (timeout.current != null) { clearTimeout(timeout.current );}};
    }
  }, [notificationData]);

  return (
    <div className='h-fit w-fit absolute z-[15] top-3 self-center' id='notificationPane'>
      <div className='h-fit w-fit flex items-center justify-center'>

        <div className='f-full w-full glass rounded flex bg-mainColorLight text-black dark:bg-mainColor dark:text-white items-center justify-center transition-opacity opacity-0 invisible ease-in-out duration-500' id="notificationBody">
          <div className='w-fit text-center justify-center m-2 sm:flex'>
            <p className='text-white text-sm' id='title'></p>
            {notificationData.ContentType == "text" && <p className='text-white text-sm' id='content'></p>}
            {notificationData.ContentType != "text" && 
              <div className='text-center justify-center sm:flex'>
                <a href="#" className='text-white text-sm underline decoration-1 underline-offset-1' target="_blank" rel="noopener noreferrer" id="anchorLink"></a>
              </div>
              }
          </div> 
        </div>
      </div>
    </div>
  )
}

export default index