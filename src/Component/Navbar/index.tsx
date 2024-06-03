import navigation_icon from '@/assets/image/navigation_icon.png'


let buttonClass = 'w-full aspect-square flex item-center justify-center rounded hover:bg-[#7b3aff80] active:bg-[#7b3aff]';
let imageClass = 'w-2/5 h-2/5 m-auto';

type Props = {}

const index = (props: Props) => {
  return (
    <div className={`h-full w-[5%] max-w-[100px] flex flex-col justify-between rounded shadow-lg shadow-black`}>
        <button className={`${buttonClass}`}>
          <img src={navigation_icon} className={`${imageClass}`}/>
        </button>

        <div className='w-full h-fit flex flex-col item-center justify-center'>
          <button className={`${buttonClass}`}>
            <img src={navigation_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={navigation_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={navigation_icon} className={`${imageClass}`}/>
          </button>
        </div>

        <div className='w-full h-fit flex flex-col item-center justify-center'>
          <button className={`${buttonClass}`}>
            <img src={navigation_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={navigation_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={navigation_icon} className={`${imageClass}`}/>
          </button>
          <button className={`${buttonClass}`}>
            <img src={navigation_icon} className={`${imageClass}`}/>
          </button>
        </div>

    </div>
  )
}

export default index