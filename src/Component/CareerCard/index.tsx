import CareerCardContent from "@/Component/CareerCardContent"
import CareerCardDescription from "@/Types/CareerCardDescription";

interface CareerCardType {
    title: String,
    content: CareerCardDescription[]
  }

const index = ({title, content}: CareerCardType) => {

  return (
    <div >
    <div className={`text-[12px] sm:text-[14px] flex m-4`}>
      <p>{title}.</p><p className={`text-colorSelected`}>txt</p>
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