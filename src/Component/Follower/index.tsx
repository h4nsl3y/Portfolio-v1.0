import { useEffect } from "react"
import FollowerMemberType from "@/Types/FollowerMemberType";

const index = ({followerText}: FollowerMemberType) => {

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            let follower = document.getElementById(`follower`);
            let followerBody = document.getElementById(`follower-body`);
            let followerEye = document.getElementById(`follower-eye`);

            if (follower && followerBody) {

                const y = followerBody.offsetHeight;
                const x = followerBody.offsetWidth;
                
                // Update position immediately without delay
                setTimeout(()=>{
                    follower.style.left = `${(event.pageX - x / 2)+25}px`;
                    follower.style.top = `${(event.pageY - y / 2)+25}px`;
                }, 50);
            }
            if(followerEye){followerEye.style.height= `${Math.floor(20/2)}px`;}
        };

        // Add the event listener
        document.addEventListener('mousemove', handleMouseMove);
        // Clean up the event listener
        return () => {document.removeEventListener('mousemove', handleMouseMove);};

    }, []);

  return (
    <div className={`h-[20px] absolute w-fit flex flex-row `} id='follower'>
        <div className={`aspect-square  relative rounded-full`} id={`follower-body`}>
            <div className={`aspect-square rounded-full bg-white absolute top-1 left-1 shadow-sm shadow-white`} id={`follower-eye`}/>
        </div>
        <div className={`bg-white relative w-fit rounded-r-sm`}>
            {followerText!= "" && <p className={`h-[20px] text-black text-[0.8rem] mx-2`}>{followerText}</p>}
        </div>
    </div>

  )
}

export default index