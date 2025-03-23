import CareerCardDescription from "@/Types/CareerCardDescriptionType";

let contentText = `text-[0.6rem] sm:text-[0.7rem] 2xl:text-[0.9rem]`;

const index = ({Title, EffectiveFrom, EffectiveTo}: CareerCardDescription) => {
return (
    <div className='flex flex-col sm:flex-row justify-between'>
        <div><p className={contentText}>{Title}</p></div>
        <div><p className = {`text-[#808080] ${contentText}`}>{EffectiveFrom} - {EffectiveTo}</p></div>
    </div>
    )
}

export default index