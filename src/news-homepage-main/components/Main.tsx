import webDesktop from '../assets/images/image-web-3-desktop.jpg'
import webMobile from '../assets/images/image-web-3-mobile.jpg'

export const Main = () => {
  return (
    <main className='flex lg:flex-row flex-col gap-10'>
        <div className='flex flex-col gap-5'>
            <div>
                <img className='lg:inline hidden' src={webDesktop} alt="" />
                <img className='lg:hidden inline w-full' src={webMobile} alt="" />
            </div>

            <div className='flex lg:flex-row flex-col gap-5 w-full  lg:gap-32 '>
                <h2 className='lg:text-6xl text-4xl font-bold text-Very-dark-blue w-10/12'>
                    The Bright
                    Future of
                    Web 3.0?
                </h2>

                <div className='flex flex-col w-fit  items-start gap-5'>
                    <p className=' text-Dark-grayish-blue   text-lg'>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?
                    </p>

                    <button className=' bg-Soft-red duration-500 hover:bg-Very-dark-blue hover:text-white text-Very-dark-blue tracking-widest py-3 px-10 font-semibold    '>
                        READ MORE
                    </button>
                </div>
            </div>
        </div>

        <div className=' bg-Very-dark-blue flex flex-col gap-6 lg:w-[60rem] h-fit lg:px-10 lg:py-14 p-7'>
            <h2 className='text-4xl lg:text-5xl font-semibold text-Soft-orange'>New</h2>
            <div className='flex flex-col gap-7 divide-y-2 '>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-white font-semibold hover:text-Soft-orange duration-500 cursor-pointer text-xl'>
                        Hydrogen VS Electric Cars
                    </h3>

                    <p className=' text-Grayish-blue'>
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                </div>

                <div className='flex flex-col pt-5 gap-3'>
                    <h3 className='text-white font-semibold hover:text-Soft-orange duration-500 cursor-pointer text-xl'>
                        The Downsides of AI Artistry
                    </h3>

                    <p className=' text-Grayish-blue'>
                        What are the possible adverse effects of 
                        on-demand AI image generation?
                    </p>
                </div>

                <div className='flex flex-col pt-5 gap-3'>
                    <h3 className='text-white font-semibold hover:text-Soft-orange duration-500 cursor-pointer text-xl'>
                        Is VC Funding Drying Up?
                    </h3>

                    <p className=' text-Grayish-blue'>
                        Private funding by VC firms is down 50%
                        YOY. We take a look at what that means.
                    </p>
                </div>
            </div>
        </div>
    </main>
  )
}
