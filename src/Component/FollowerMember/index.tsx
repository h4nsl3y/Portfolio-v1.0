import { useEffect } from "react"

interface followMember {
    size: string,
    followerIndex: string,
    followerText: string,
    latence: number
}

const index = ({size, followerIndex, followerText, latence}: followMember) => {

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            let follower = document.getElementById(`${followerIndex}`);
            let followerBody = document.getElementById(`${followerIndex}-body`);
            let followerEyeL = document.getElementById(`${followerIndex}-eye-l`);
            let followerEyeR = document.getElementById(`${followerIndex}-eye-r`);

            let eyeSize = Math.floor(parseInt(size)/4);
            if (follower && followerBody) {

                followerBody.style.height= `${size}px`;
                follower.style.height= `${size}px`;

                const y = followerBody.offsetHeight;
                const x = followerBody.offsetWidth;
                
                // Update position immediately without delay
                setTimeout(()=>{
                    follower.style.left = `${(event.pageX - x / 2)+25}px`;
                    follower.style.top = `${(event.pageY - y / 2)+25}px`;
                }, latence);
                
            }
            
            if(followerEyeL){
                followerEyeL.style.height= `${eyeSize}px`;
            }
            if(followerEyeR){
                followerEyeR.style.height= `${eyeSize}px`;
            }
        };

        // Add the event listener
        document.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener
        return () => {document.removeEventListener('mousemove', handleMouseMove);};

    }, []);

  return (
    <div className={`h-[${size}px] absolute w-fit flex flex-row `} id={followerIndex}>
        <div className={`aspect-square bg-white relative rounded-l-sm`} id={`${followerIndex}-body`}>
            <div className={`aspect-[1/2] rounded bg-black absolute top-1 left-1`} id={`${followerIndex}-eye-l`}/>
            <div className={`aspect-[1/2] rounded bg-black absolute top-1 left-3`} id={`${followerIndex}-eye-r`}/>
        </div>
        <div className={`bg-white relative w-fit rounded-r-sm`}>
            <p className={`h-[${size}px] text-black`}>{followerText}</p>
        </div>
    </div>

  )
}

export default index