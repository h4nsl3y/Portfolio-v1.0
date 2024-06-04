let boxStyle = `shadow-lg shadow-black rounded flex text-center items-center justify-center m-2`;

const index = () => {
  return (
    <div className="w-full h-full flex elementScreen" id='Project'>
        <div className="h-full w-full">
            <div className="h-[90vh] sm:h-[90%] w-[95%] grid auto-rows-[90vh] sm:auto-rows-[40vh] sm:grid-cols-2 grid-flow-row  m-auto overflow-y-scroll">
                <div className={`row-span-1 col-span-1 ${boxStyle}`}>b1</div>
                <div className={`row-span-1 col-span-1 ${boxStyle}`}>b2</div>
                <div className={`row-span-1 col-span-1 ${boxStyle}`}>b3</div>
            </div>
        </div>
    </div>
  )
}

export default index