import CareerCardDescription from "@/Types/CareerCardDescription"

const index = ({Title, EffectiveFrom, EffectiveTo}: CareerCardDescription) => {
return (
    <div className='flex flex-col sm:flex-row justify-between'>
        <div><p className='text-[10px] sm:text-[12px]'>{Title}</p></div>
        <div><p className='text-[#808080] text-[10px] sm:text-[12px]'>{EffectiveFrom} - {EffectiveTo}</p></div>
    </div>
    )
}

export default index