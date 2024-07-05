import CareerCardDescription from "@/Types/CareerCardDescription"

const index = ({title, startDate, endDate}: CareerCardDescription) => {
return (
    <div className='flex flex-col sm:flex-row justify-between'>
        <div><p className='font-bold text-[10px] sm:text-[12px]'>{title}</p></div>
        <div><p className='text-[#808080] text-[10px] sm:text-[12px]'>{startDate} - {endDate}</p></div>
    </div>
    )
}

export default index