import { SetStateAction, useState } from 'react'
import listIcon from '../assets/images/icon-list.svg'
import desktopSignUp from '../assets/images/illustration-sign-up-desktop.svg'
import mobileSignUp from '../assets/images/illustration-sign-up-mobile.svg'
import { useNavigate } from 'react-router-dom'

export const Form = ({email, setEmail}:{email:string,
     setEmail: React.Dispatch<SetStateAction<string>>}) => {
        
    const validRegex :RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const [error, setError] = useState('')
    
    const [toggle, setToggle] = useState(true)

    const navigate = useNavigate();

    const handleSubmit = () => {

        if(email.match(validRegex)) {
            setError('')
            setEmail('')
            setToggle(true)
            navigate('/ThankYou')
        }
        
        else{
            setError(' Valid email required')
            setToggle(false)
            navigate('')
        }
    }

  return (
    <div className='flex lg:flex-row flex-col-reverse lg:mx-auto lg:p-5 font-medium rounded-3xl items-center gap-10 bg-white lg:w-fit'>
        <div className='mx-6 flex flex-col gap-10 mb-10'>
            <div>
                <h1 className='text-5xl font-semibold text-Dark-Slate-Grey'>
                    Stay updated!
                </h1>
            </div>

            <div className='flex flex-col gap-5 text-Charcoal-Grey'>
                <p className='w-10/12 text-Dark-Slate-Grey'>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>

                <ul className='flex flex-col gap-3'>
                    <li className='flex items-start gap-3'>
                        <div>
                            <img src={listIcon} alt="" />
                        </div>

                        <p>
                            Product discovery and building what matters
                        </p>
                    </li>

                    <li className='flex items-start gap-3'>
                        <div>
                            <img src={listIcon} alt="" />
                        </div>

                        <p>
                            Measuring to ensure updates are a success
                        </p>
                    </li>

                    <li className='flex items-start gap-3'>
                        <div>
                            <img src={listIcon} alt="" />
                        </div>
                        
                        <p>
                            And much more!
                        </p>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <div className='text-sm flex justify-between'>
                        <label htmlFor="" className='font-semibold'>
                            Email Address
                        </label>
                        
                        <label className=' text-Tomato font-semibold' htmlFor="">
                            {error}
                        </label>
                    </div>

                    <input onChange={(e) => setEmail(e.target.value)}
                    value={email}
                     className={`border-2 ${toggle ? '' : 'border-Tomato focus:outline-Tomato bg-red-300 text-Tomato'} rounded-lg w-full ps-3 py-4`}
                      type="email" placeholder='email@company.com' />
                </div>

                <button onClick={() => handleSubmit()}
                 className=' bg-Dark-Slate-Grey text-white py-4
                  rounded-lg font-medium  w-full'>
                    Subscribe to monthly newsletter
                </button>
            </div>
        </div>

        <div>
            <img className='lg:inline hidden'
             src={desktopSignUp} alt="" />
             
            <img className='lg:hidden inline bg-cover w-[300vh] lg:w-[30rem]'
             src={mobileSignUp} alt="" />
        </div>
    </div>
  )
}
