
import CareerCardContent from "@/Component/CareerCardContent"
import CareerCardDescription from "@/Types/CareerCardDescription";

let boxStyle = `shadow-lg shadow-black rounded m-2 glass`;

type CareerCardType = {
    title: String,
    content: CareerCardDescription[]
  }

const index = ({title, content}: CareerCardType) => {

  return (
    <div className={`row-span-1 col-span-1 h-fit ${boxStyle} `}>
    <div className="flex m-4">
      <p>{title}.</p><p className={`text-[#7b3aff]`}>txt</p>
    </div>
      <div className='m-4' id='CareerCardContainer'>

      {content.map((data, index) => (
        <div key={index}>
            <CareerCardContent title={data.title} startDate={data.startDate} endDate={data.endDate}/>
        </div>
      ))}

      </div>
    </div>
  )
}

export default index
