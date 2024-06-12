import { useNavigate } from 'react-router'
import successIcon from '../assets/images/icon-success.svg'

export const ThankYou = ({email} : {email:string}) => {
    
    const navigate = useNavigate();

  return (
    <div className='bg-white w-[30rem] mx-auto rounded-2xl  flex flex-col items-start gap-5 p-10'>
        <div>
            <img src={successIcon} alt="" />
        </div>

        <h3 className='text-5xl font-semibold w-8/12 text-Dark-Slate-Grey'>
            Thanks for
            subscribing!
        </h3>

        <p className=' text-Dark-Slate-Grey w-9/12'>
            A confirmation email has been sent to
            {email}. Please open it and click
            the button inside to confirm your subscription
        </p>

        <button onClick={() => navigate('/')}
         className=' rounded-xl font-medium bg-Dark-Slate-Grey text-white py-3 w-full'>
            Dismiss Message
        </button>
    </div>
  )
}
