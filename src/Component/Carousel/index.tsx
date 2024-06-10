import fowardArrow from '@/assets/image/forward_arrow_icon.png';
import backArrow from '@/assets/image/back_arrow_icon.png';

import Java from "@/assets/image/icon/java-original.svg";
import Python from "@/assets/image/icon//python-original.svg";
import CSharp from "@/assets/image/icon/csharp-original.svg";
import HTML5 from "@/assets/image/icon/html5-original.svg";
import CSS3 from "@/assets/image/icon/css3-original.svg";
import Javascript from "@/assets/image/icon/javascript-plain.svg";
import TypeScript from "@/assets/image/icon/typescript-plain.svg";
import Selenium from "@/assets/image/icon/selenium-original.svg";
import Cucumber from "@/assets/image/icon/cucumber-plain.svg";
import GitHub from "@/assets/image/icon/github-original.svg";
import Git from "@/assets/image/icon/git-plain.svg";
import AzureDevOps from "@/assets/image/icon/azuredevops-original.svg";
import MySQL from "@/assets/image/icon/mysql-original.svg";
import SQLite from "@/assets/image/icon/sqlite-original.svg";

let buttonClass = 'h-1/2 aspect-square flex item-center justify-center rounded bg-transparent transition-colors duration-300 ease-in-out hover:bg-[#7b3aff80] active:bg-[#7b3aff] ';
let image_style: string = 'w-2/5 aspect-square dark:invert m-auto';
let listItemStyle: string = 'h-full aspect-square flex items-center justify-center';
let frameStyle: string = 'h-full w-full flex flex-col items-center justify-center';
let frameTextStyle: string = 'm-auto text-sm';

const carousel = () => {

        function swipeGallery(value: string){
        let gallery = document.getElementById("gallery")
        if(gallery){
            let imageWidth = gallery.getElementsByTagName('li')[0].offsetWidth;
                gallery.classList.add("scroll-smooth");
                gallery.scrollLeft += ( value == "left" ) ? -imageWidth : imageWidth;
                gallery.classList.remove("scroll-smooth");
            }
       };
            let isDragging = false, startX: number, startScrollLeft: number;
            let gallery = document.getElementById("gallery") ;

            if(gallery){
                const dragStart = (movement: any) =>{
                    isDragging = true;
                    gallery.classList.add("dragging");
                    startX = movement.pageX;
                    startScrollLeft = gallery.scrollLeft;
                }
                const drag = (movement: MouseEvent) =>{
                    if (isDragging){
                        gallery.scrollLeft = startScrollLeft - (movement.pageX - startX);
                    }
                }
                const dragStop = () =>{
                    isDragging = false;
                    gallery.classList.remove("dragging");
                }
                gallery.addEventListener("mousedown", dragStart);
                gallery.addEventListener("mousemove", drag);
                document.addEventListener("mouseup", dragStop);
            }

return (
    <div className='w-full h-full'>
        <div className='w-full h-full flex flex-row items-center justify-center'>
            <button className={`${buttonClass}`} onClick={() =>swipeGallery("left")}>
                <img src={backArrow} className={`w-4/5 ${image_style}`} />
            </button>

            <div className='w-3/4 aspect-square sm:aspect-[3/1] scroller overflow-hidden'>
                <ul className='w-full h-full grid grid-flow-col items-center overflow-hidden' id='gallery'>
                <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={Java} className='h-3/5 aspect-square' draggable='false'/>          
                            <p className={`${frameTextStyle}`}>Java</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={Python} className='h-3/5 aspect-square' draggable='false'/>
                            <p className='m-4 text-'>Python</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={CSharp} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>C#</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={HTML5} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>HTML5</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={CSS3} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>CSS3</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={Javascript} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>JavaScript</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={TypeScript} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>TypeScript</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={Selenium} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>Selenium</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={Cucumber} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>Gherkin</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={GitHub}  className='h-3/5 aspect-square invert' draggable='false'/>
                            <p className={`${frameTextStyle}`}>GitHub</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={Git}  className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>Git</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={AzureDevOps} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>AzureDevOps</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={MySQL} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>MySQL</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src={SQLite} className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>SQLite</p>
                        </div>
                    </li>
                </ul>
            </div>
           
            <button className={`${buttonClass}`} onClick={() =>swipeGallery("right")}>
                <img src={fowardArrow} className={`w-4/5 ${image_style}`} />
            </button>
        </div>
    </div>
  )
};

export default carousel