import computer from '../images/image-computer.png'
import devices from '../images/image-devices.png'

export const Main = () => {
  return (
    <main className='flex flex-col gap-40 px-5 lg:px-20'>
        <div className='flex flex-col items-center gap-3'>
            <h3 className='text-2xl text-Dark-Grayish-Blue font-semibold'>
                Keep track of your snippets
            </h3>

            <p className=' text-Grayish-Blue w-10/12 lg:w-5/12 text-center'>
                Clipboard instantly stores any item you copy in the cloud, 
                meaning you can access your snippets immediately on all your 
                devices. Our Mac and iOS apps will help you organize everything.
            </p>
        </div>

        <div className='flex lg:flex-row flex-col gap-20 lg:gap-0 items-center justify-between'>
            <div>
                <img className='lg:-translate-x-32' src={computer} alt="" />
            </div>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-col items-center text-center lg:text-start lg:items-start gap-3'>
                    <h4 className='text-xl text-Dark-Grayish-Blue font-semibold'>
                        Quick Search
                    </h4>

                    <p className='w-[22rem] text-Grayish-Blue'>
                        Easily search your snippets by content, category, web address, application, and more.
                    </p>
                </div>

                <div className='flex flex-col items-center text-center lg:text-start lg:items-start gap-3'>
                    <h4 className='text-xl text-Dark-Grayish-Blue font-semibold'>
                        iCloud Sync
                    </h4>

                    <p className='w-[22rem] text-Grayish-Blue'>
                        Instantly saves and syncs snippets across all your devices.
                    </p>
                </div>

                <div className='flex flex-col items-center text-center lg:text-start lg:items-start gap-3'>
                    <h4 className='text-xl text-Dark-Grayish-Blue font-semibold'>
                        Complete History
                    </h4>

                    <p className='w-[22rem] text-Grayish-Blue'>
                        Retrieve any snippets from the first moment you started using the app.
                    </p>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-20'>
            <div className='flex flex-col gap-3 items-center'>
                <h3 className='text-2xl font-semibold text-center text-Dark-Grayish-Blue'>
                    Access Clipboard anywhere
                </h3>

                <p className='text-center lg:w-9/12 text-Grayish-Blue'>                     
                    Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
                </p>
            </div>

            <div>
                <img src={devices} alt="" />
            </div>

            <div className='flex flex-col gap-3 items-center'>
                <h3 className='text-2xl font-semibold text-center text-Dark-Grayish-Blue'>
                    Supercharge your workflow
                </h3>

                <p className='text-center  text-Grayish-Blue'>
                    We’ve got the tools to boost your productivity.
                </p>
            </div>
        </div>
    </main>
  )
}
