import CareerCardDescription from "@/Types/CareerCardDescription";

let contentText = `text-[10px] sm:text-[12px]`;

const index = ({Title, EffectiveFrom, EffectiveTo}: CareerCardDescription) => {
return (
    <div className='flex flex-col sm:flex-row justify-between'>
        <div><p className={contentText}>{Title}</p></div>
        <div><p className = {`text-[#808080] ${contentText}`}>{EffectiveFrom} - {EffectiveTo}</p></div>
    </div>
    )
}

export default index