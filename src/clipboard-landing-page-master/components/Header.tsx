import logo from '../images/logo.svg'

export const Header = () => {
  return (
    <header className=" bg-pattern flex flex-col lg:px-0 px-5 gap-10 items-center pt-20  bg-no-repeat">
        <div>
            <img src={logo} alt="" />
        </div>

        <div className='flex flex-col items-center gap-5'>
            <h2 className='lg:text-4xl text-center text-4xl font-semibold text-Dark-Grayish-Blue'>
                A history of everything you copy
            </h2>

            <p className=' text-Grayish-Blue text-lg md:w-8/12 text-center'>
                Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.
            </p>
        </div>

        <div className='flex md:flex-row flex-col gap-10 items-center'>
            <button id='iosBtn' className='py-3 px-20 lg:px-10 duration-500 text-white font-semibold rounded-full bg-Strong-Cyan'>Download for iOS</button>
            <button id='macBtn' className='py-3 px-20 lg:px-10 duration-500 text-white font-semibold rounded-full bg-Light-Blue'>Download for Mac</button>
        </div>
    </header>
  )
}
