import Data from "@/assets/document/Data"

let techImage = Data.Technologies;
let listItemClass = "h-full sm:h-full aspect-square flex items-center justify-center";
let imageItemClass = "h-1/2 aspect-square m-auto";
          
interface Props {
    technologies : string;
}

const index = ({technologies}: Props) => {
    let technologyList : string[] = technologies.split("-")
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <ul className='w-full h-3/4 sm:h-full flex flex-row overflow-auto custom-scrollbar-h sm:justify-end'>     
          {techImage.map((element) => (
            technologyList.includes(element.Name.toLocaleLowerCase()) ? (<li className={`${listItemClass}`}><img src={ element.Path} className={`${imageItemClass}`}/></li>) : null
          ))}
        </ul>
    </div>
  )
}

export default index
