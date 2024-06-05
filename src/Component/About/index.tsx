import Carousel from '@/Component/Carousel'

let boxStyle = `shadow-lg shadow-black rounded m-2`;

const index = () => {
  return (
    <div className="w-full h-full flex elementScreen " id='About'>
        <div className="h-full w-full flex">
            <div className="h-[90vh] sm:h-[90%] w-[95%] grid grid-rows-[45vh_45vh_45vh] grid-cols-[75vw]  sm:grid-cols-2 sm:grid-rows-2 grid-flow-row sm:grid-flow-col m-auto custom-scrollbar">
                
                <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                  <div className="flex m-4">
                    <p>About.</p><p className={`text-[#7b3aff]`}>txt</p>
                  </div>
                  <div className="object-contains flex flex-col m-4 ">
                    <p className="text-[10px] sm:text-[12px]">Few things are as enjoyable as the process of developing and testing software.
                    This is why I have chosen to pursue my passion as my profession.
                    I see myself as someone who never gives up in the face of challenges, but instead,
                    turn these into opportunities through which I sharpen my skills. Considering myself
                    a quick learner, I am confident in trying new things and can adapt easily to a new environment.</p>
                  </div>
                </div>

                <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                  <div className="flex m-4">
                    <p>Technology.</p><p className={`text-[#7b3aff]`}>js</p>
                  </div>
                  <div className="flex m-4">
                    <Carousel/>
                  </div>
                </div>

                <div className={`row-span-2 col-span-1 ${boxStyle}`}>
                  <div className="flex m-4">
                    <p>Stuff.</p><p className={`text-[#7b3aff]`}>txt</p>
                  </div>

                  <div className='w-[95%] grid grid-rows-2 grid-cols-1 auto-rows-[45%] grid-flow-row m-auto'>

                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                    <div className="flex m-4">
                      <p>Work experience.</p><p className={`text-[#7b3aff]`}>txt</p>
                    </div>
                      <div className='m-4'>
                        <div className='flex flex-col sm:flex-row justify-between'>
                          <div><p className='font-bold'>Dayforce</p></div>
                          <div><p className='text-[#808080]'>Oct 2023 - Ongoing</p></div>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between'>
                          <div><p className='font-bold'>IQera</p></div>
                          <div><p className='text-[#808080]'>Oct 2022 - Dec 2022</p></div>
                        </div>
                      </div>
                    </div>

                    <div className={`row-span-1 col-span-1 ${boxStyle}`}>
                    <div className="flex m-4">
                      <p>Education.</p><p className={`text-[#7b3aff]`}>txt</p>
                    </div>
                      <div className='m-4'>
                        <div className='flex flex-col sm:flex-row justify-between'>
                          <div><p className='font-bold'>Bachelor's degree</p></div>
                          <div><p className='text-[#808080]'>Sep 2020 - Dec 2023</p></div>
                        </div>
                        <div className='flex flex-col sm:flex-row justify-between'>
                          <div><p className='font-bold'>High School Certificate</p></div>
                          <div><p className='text-[#808080]'>Dec 2019</p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index