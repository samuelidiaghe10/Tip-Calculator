import devices from '../images/illustration-devices.svg'

export const Main = () => {
  return (
    <main className='flex -translate-y-48 lg:translate-y-0  items-center pb-2 lg:flex-row md:px-0 px-5  lg:px-20 lg:gap-10 gap-28 flex-col-reverse'>
        <div className='flex   flex-col gap-10 lg:gap-20'>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-3 items-center'>
                    <p className=' bg-Very-Dark-Blue text-white p-1 px-3 font-semibold rounded-full'>NEW</p>
                    <p className='lg:text-lg text-Grayish-Blue tracking-[4px]'>MONOGRAPH DASHBOARD</p>
                </div>

                <div className='flex flex-col gap-10'>
                    <h1 className='lg:text-5xl text-4xl text-Very-Dark-Blue  font-bold'>
                        POWERFUL INSIGHTS
                        INTO YOUR TEAM
                    </h1>

                    <p className='text-lg text-Very-Dark-Blue w-[18rem]'>
                        Project planning and time tracking
                        for agile teams
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-7'>
                <button className=' hover:bg-red-400 bg-red-500 text-white 
                font-semibold px-3 lg:px-10 py-3 rounded-lg'>
                    SCHEDULE A DEMO
                </button>

                <p className=' text-Dark-Grayish-Blue tracking-widest'>
                    TO SEE A PREVIEW
                </p>
            </div>
        </div>

        <div className='cropped  overflow-hidden w-fit translate-x-5 lg:translate-x-[5rem]'>
            <img className='lg:mt-[10px] mr-0 mb-0 ml-[60px] md:h-full h-[15rem]  lg:ml-[150px]' src={devices} alt="" />
        </div>
    </main>
  )
}
