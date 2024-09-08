import fowardArrow from '@/assets/image/forward_arrow_icon.png';
import backArrow from '@/assets/image/back_arrow_icon.png';
import Data from '@/assets/document/Data';

let technology = Data.Technologies;
let buttonClass = 'h-1/2 aspect-square flex item-center justify-center rounded bg-transparent transition-colors duration-300 ease-in-out hover:bg-mainColor active:bg-colorSelected ';
let image_style: string = 'w-2/5 aspect-square dark:invert m-auto';
let listItemStyle: string = 'h-full aspect-square flex items-center justify-center';
let frameStyle: string = 'h-full w-full flex flex-col items-center justify-center';
let contentText: string = `text-[0.6rem] sm:text-[0.7rem] 2xl:text-[0.9rem]`;

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

            <div className='w-3/4 aspect-square sm:aspect-[3/1] scroller-fade-h overflow-hidden'>
                <ul className='w-full h-full grid grid-flow-col items-center custom-scrollbar-h ' id='gallery'>
                    {technology.map((technologies, index) => (
                        <li className={`${listItemStyle}`} key={`Carousel-${index}`}>
                            <div className={`${frameStyle}`}>
                                <img src={technologies.Path} className='h-3/5 aspect-square' draggable='true'/>          
                                <p className={`${contentText}`}>{technologies.Name}</p>
                            </div>
                        </li>
                    ))}
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