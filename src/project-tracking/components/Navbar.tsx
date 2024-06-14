import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import { useState } from 'react'

export const Navbar = () => {

    const lists = ['PRODUCT', 'FEATURES', 'PRICING']

    const [toggle, setToggle] = useState(true); 

  return (
    <div className='flex md:px-20 lg:flex-row flex-col gap-8 justify-between lg:items-center px-5 lg:px-20'>
        <div className='flex justify-between'>
            <div>
                <img src={logo} alt="" />
            </div>

            <button className='lg:hidden inline' onClick={() => setToggle(!toggle)}>
                <img src={toggle  ? menu : close} alt="" />
            </button>

        </div>

        <div className={`flex ${toggle ? 'translate-y-[-200vh]' : ''} lg:translate-y-0 lg:bg-transparent bg-white lg:shadow-none shadow-xl lg:border-0 border-2 py-5 rounded-lg lg:flex-row flex-col z-10 items-center gap-7 lg:gap-12`}>
            <ul className='flex lg:flex-row flex-col gap-7 items-center lg:gap-10'>
                {lists.map((list, index) => 
                    <li key={index} className=''>
                        <a href="#" className='font-bold hover:underline'>
                            {list}
                        </a>
                    </li>
                )}
            </ul>
            
            <div className='flex lg:flex-row flex-col items-center gap-5 lg:gap-10'>
                <div className='bg-Grayish-Blue h-[0.5px] w-[17rem] lg:h-[5px] lg:w-[5px] rounded-full'></div>

                <button className='font-bold hover:underline text-Grayish-Blue'>
                    LOGIN
                </button>
            </div>
        </div>
    </div>
  )
}
