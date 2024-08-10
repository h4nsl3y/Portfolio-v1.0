import CareerCardContent from "@/Component/CareerCardContent"
import CareerCardDescription from "@/Types/CareerCardDescription";

let contentText = `text-[10px] sm:text-[12px]`;

interface CareerCardType {
    title: String,
    content: CareerCardDescription[]
  }

const index = ({title, content}: CareerCardType) => {

  return (
    <div >
    <div className={`${contentText} flex m-4`}>
      <p>{title}.</p><p className={`text-[#7b3aff]`}>txt</p>
    </div>
      <div className='m-4' id='CareerCardContainer'>
      {content.map((data, index) => (
        <div key={`CareerCardDescription-${index}`}>
            <CareerCardContent Title={data.Title} EffectiveFrom={data.EffectiveFrom} EffectiveTo={data.EffectiveTo}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default index