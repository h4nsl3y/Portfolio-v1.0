import CareerCardContent from "@/Component/CareerCardContent"
import CareerCardType from "@/Types/CareerCardType"

const index = ({title, content}: CareerCardType) => {

  return (
    <div >
    <div className={`text-[0.8rem] sm:text-[1rem] 2xl:text-[1.2rem] flex m-4`}>
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