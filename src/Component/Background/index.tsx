import { useEffect } from 'react';
import '@/output.css'

const Background = () => {

  let size = (screen.width < screen.height) ? screen.width : screen.height;
  let difference: number = size / 12;
  let borderSize: number = difference / 4;

  useEffect(() => {
    function setSize(){
      document.querySelectorAll(".circle").forEach((element , index: number) => {
        (element as HTMLDivElement).style.width = `${difference * (index + 1)}px`;
        (element as HTMLDivElement).style.border = `${borderSize}px solid rgba(80, 80, 168, 0.25)`;
        (element as HTMLDivElement).style.borderLeft = `${borderSize}px solid transparent`;
        (element as HTMLDivElement).style.borderRight = `${borderSize}px solid transparent`;
      });  
    } 
    setSize()
  }, []);

  let rotators_class = `circle aspect-square absolute rounded-full border-[${borderSize}px]`;

  return (
    <div className={`w-[${size}px] absolute aspect-square mx-auto flex items-center justify-center z-0`}>
        <div className={`${rotators_class} anti-rotate-item-1`}></div>
        <div className={`${rotators_class} rotate-item-1-5`}></div>
        <div className={`${rotators_class} rotate-item-2`}></div>
        <div className={`${rotators_class} rotate-item-1`}></div>
        <div className={`${rotators_class} anti-rotate-item-2`}></div>
        <div className={`${rotators_class} rotate-item-2`}></div>
        <div className={`${rotators_class} anti-rotate-item-1`}></div>
    </div>
  );
}

export default Background