import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'

export const Footer = () => {
  return (
    <footer className='flex lg:flex-row flex-col items-center gap-20 lg:gap-0 justify-between py-7 px-5 lg:px-20 bg-slate-200'>
        <div className='flex lg:flex-row flex-col gap-7 lg:gap-28 items-center lg:items-start'>
            <div><img className='w-[60px]' src={logo} alt="" /></div>

            <ul className='flex flex-col items-center lg:items-start gap-7 lg:gap-3'>
                <li>
                    <a className=' text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500' href="">FAQs</a>
                </li>

                <li>
                    <a className=' text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500' href="">Contact Us</a>
                </li>
            </ul>

            <ul className='flex flex-col items-center lg:items-start gap-7 lg:gap-3'>
                <li>
                    <a className=' text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500' href="">Privacy Policy</a>
                </li>

                <li>
                    <a className=' text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500' href="">Press Kit</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a className=' text-Dark-Grayish-Blue hover:text-Strong-Cyan duration-500' href="">Install Guide</a>
                </li>
            </ul>
        </div>

        <div className='flex items-center gap-7'>
            <div><img className='icon duration-500 cursor-pointer' src={facebook} alt="" /></div>
            <div><img className='icon duration-500 cursor-pointer' src={twitter} alt="" /></div>
            <div><img className='icon duration-500 cursor-pointer' src={instagram} alt="" /></div>
        </div>
    </footer>
  )
}
