import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-menu-close.svg'
import { useState } from 'react'
import { Drawer } from "antd"

export const Navbar = () => {
    const lists: string[] = ["Home", "New", "Popular", "Trending", "Categories"]
    
    const [toggle, setToggle] = useState<boolean>(false)
  return (
    <nav className='flex lg:flex-row flex-col items-center justify-between'>
        <div className='flex items-center justify-between w-full'>
            <div>
                <img src={logo} alt="" />
            </div>

            <button className='lg:hidden inline' onClick={() => setToggle(true)}>
                <img src={menu} alt="" />
            </button>
        </div>


        <Drawer visible={toggle} width={'75%'}
        closable={false} onClose={() => setToggle(false)} maskClosable={false}>
            <div className='flex flex-col gap-20'>
                <button className='self-end' onClick={() => setToggle(false)}>
                    <img src={close} alt="" />
                </button>

                <ul className='flex  flex-col gap-7 text-xl'>
                    {
                        lists.map((list, index) => 
                            <li key={index}>
                                <a href="" className='text-Dark-grayish-blue font-medium hover:text-Soft-red duration-500 '>{list}</a>
                            </li>    
                    )}
                </ul>
            </div>
        </Drawer>


        <ul className={`lg:flex  hidden  items-start lg:items-center gap-10`}>
            {
                lists.map((list, index) => 
                    <li key={index}>
                        <a href="" className='text-Dark-grayish-blue font-medium hover:text-Soft-red duration-500 '>{list}</a>
                    </li>    
            )}
        </ul>
    </nav>
  )
}
