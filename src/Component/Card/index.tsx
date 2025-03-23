import Technologies from "@/Component/Technologies"
import ProjectCardType from "@/Types/ProjectCardType";

let contentText: string = `text-[0.6rem] sm:text-[0.7rem] 2xl:text-[0.9rem]`;

const index = ({imagePath_1, imagePath_2, title ,date ,description, technologtList}: ProjectCardType) => {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-1/6 flex justify-between'>
            <div><p className={`text-[1rem] m-2`}>{title}</p></div>
            <div><p className={`text-[1rem] m-2`}>{date}</p></div>
        </div>
        <div className='w-full h-4/6 flex flex-col sm:flex-row'>
            <div className={`h-1/2 w-full sm:w-1/3 sm:h-full flex flex-col`}>
                <img src={imagePath_1} className={`${imagePath_2 == "" ? "h-full" : "h-[45%] m-auto" } object-contain`} />
                { imagePath_2 != "" && <img src={imagePath_2} className='h-[45%] object-contain m-auto' />} 
            </div>
            <div className={`w-full h-1/2 sm:w-2/3 sm:h-full flex flex-col text-left items-center justify-center`}>
                <div className = {`object-fit`}>
                    <p className={`${contentText} mx-4 sm:m-4 text-left`}>{description}</p> 
                </div>
            </div>
        </div>
        <div className='w-full h-1/6 bottom-0'>
            <Technologies technologies={technologtList}/>
        </div>
    </div>
  )
}

export default index;