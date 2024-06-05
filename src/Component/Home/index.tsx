import '@/output.css'
let coloredLetters: string ='w-fit h-fit bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent text-center';

const index = () => {
  return (
    <div className={`w-full h-full elementScreen`} id='Home'>
        <div className={`w-full h-full flex flex-col text-center items-center justify-center`}>
            <p className={`text-xl`}>Hello, I am</p>
            <div className={`flex items-center justify-center`}> 
                <p className={`${coloredLetters} text-3xl sm:text-5xl font-bold`}>Hansley Louis Eleonore</p>
            </div>
            <p className={`text-md sm:text-xl`}>software engineer in test</p>
        </div>
    </div>
  )
}

export default index