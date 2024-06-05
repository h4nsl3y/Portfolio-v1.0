import fowardArrow from '@/assets/image/forward_arrow_icon.png';
import backArrow from '@/assets/image/back_arrow_icon.png';

let buttonClass = 'h-full aspect-square flex item-center justify-center rounded transition-colors duration-300 ease-in-out hover:bg-[#7b3aff80] active:bg-[#7b3aff] ';
let image_style: string = 'w-2/5 aspect-square dark:invert m-auto';
let listItemStyle: string = 'h-full aspect-square flex items-center justify-center';
let frameStyle: string = 'h-full w-full flex flex-col items-center justify-center';
let frameTextStyle: string = 'm-auto text-sm';

const carousel = () => {
    
    let gallery = document.getElementById("gallery") ;

    function swipeGallery(value: string){
        if(gallery){
            let imageWidth = gallery.getElementsByTagName('li')[0].offsetWidth;
            gallery.classList.add("scroll-smooth");
            gallery.scrollLeft += ( value == "left" ) ? -imageWidth : imageWidth;
            gallery.classList.remove("scroll-smooth");
        }   
    };
    let isDragging = false, startX: number, startScrollLeft: number;

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
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' className='h-3/5 aspect-square' draggable='false'/>          
                            <p className={`${frameTextStyle}`}>Java</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className='m-4 text-'>Python</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'  className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>C#</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>HTML5</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>CSS3</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>JavaScript</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>TypeScript</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>Selenium</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg'  className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>Cucumber</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'   className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>GitHub</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'  className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>Git</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>AzureDevOps</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' className='h-3/5 aspect-square' draggable='false'/>
                            <p className={`${frameTextStyle}`}>MySQL</p>
                        </div>
                    </li>
                    <li className={`${listItemStyle}`}>
                        <div className={`${frameStyle}`}>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' className='h-3/5 aspect-square' draggable='false'/>
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