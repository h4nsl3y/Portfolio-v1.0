import { useEffect } from "react"

interface followMember {
    size: string,
    followerIndex: string,
    latence: number
}

const index = ({size, followerIndex, latence}: followMember) => {

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            let follower = document.getElementById(followerIndex);
            let followerEyeL = document.getElementById(`${followerIndex}-eye-l`);
            let followerEyeR = document.getElementById(`${followerIndex}-eye-r`);

            let eyeSize = Math.floor(parseInt(size)/4);
            if (follower) {

                follower.style.height= `${size}px`;

                const y = follower.offsetHeight;
                const x = follower.offsetWidth;
                
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
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


  return (
    <div className={`aspect-square rounded-full bg-white absolute`} id={followerIndex}>
        <div className={`aspect-[1/2] rounded bg-black absolute top-1 left-1`} id={`${followerIndex}-eye-l`}/>
        <div className={`aspect-[1/2] rounded bg-black absolute top-1 left-3`} id={`${followerIndex}-eye-r`}/>
    </div>
  )
}

export default index