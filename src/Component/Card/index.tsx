import { useEffect } from 'react'

type Props = {
    imagePath_1: string ;
    imagePath_2: string ;
    title:string;
    date: string;
    description: string;
}

const index = ({imagePath_1, imagePath_2, title ,date ,description}: Props) => {


    function getImageSize(imgPath: string) {
        const img = new Image();
        img.src = imgPath;
            const width = img.naturalWidth;
            const height = img.naturalHeight;
        
        let largest = height < width ? 'h-full' : 'w-1/2 m-auto' ;
        return largest;
    };


  return (
    <div className='w-full h-full'>
        <div className='w-full h-1/6 flex justify-between'>
            <div><p className='m-2'>{title}</p></div>
            <div><p className='text-[#808080] m-2'>{date}</p></div>
        </div>
        <div className='w-full h-4/6 flex flex-col sm:flex-row'>
            <div className={`${getImageSize(imagePath_1)} h-fit sm:w-1/3 sm:h-full flex flex-col`}>
                <img src={imagePath_1} className={` object-contain m-2 ${imagePath_2 == "" ? "h-full" : "h-1/2" }`} />
                { imagePath_2 != "" && <img src={imagePath_2} className='h-1/2 object-contain m-2' />} 
            </div>
            <div className='w-full h-1/2 sm:w-2/3 sm:h-full'>
                <div className='w-full h-full'>
                <p className='text-[10px] md:text-[12px] m-4'>{description}</p> 
                </div>
            </div>
        </div>
        <div className='w-full h-1/6 flex justify-between'>
            <div><p className='m-2'>{title}</p></div>
        </div>
    </div>
  )
}

export default index;