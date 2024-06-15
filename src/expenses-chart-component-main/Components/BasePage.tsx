import logo from '../images/logo.svg'
import data from '../data.json'

export const BasePage = () => {
  return (
    <div className='md:w-[30rem] w-[23rem] flex flex-col gap-7 mx-auto'>
        <div className='bg-Soft-red text-white p-5 rounded-2xl flex items-center justify-between'>
            <div className='flex flex-col gap-3'>
                <span>My balance</span>
                <h3 className='text-3xl font-medium'>$921.48</h3>
            </div>

            <div>
                <img src={logo} alt="" />
            </div>
        </div>

        <div className='bg-white flex flex-col gap-7 p-5 rounded-2xl'>
            <h2 className='md:text-3xl text-xl font-semibold text-Dark-brown'>
                Spending - Last 7 days
            </h2>

            <ul className='flex border-b-2 pb-7  justify-between items-end'>
                {data.map((data, index) => 
                    <li key={index} className='flex gap-2 items-center flex-col'>
                        <div className='flex items-center flex-col-reverse gap-2'>
                            <div className='rounded-md cursor-pointer hoverMe duration-500
                             md:w-[43px] w-[35px]'
                             id={data.day}></div>
                            <span className=' bg-Dark-brown amount rounded-md text-white p-1'>
                                {data.amount}</span>
                        </div>

                        <p>{data.day}</p>
                    </li>
                )}
            </ul>

            <div className='flex justify-between items-center'>  
                <div className='flex flex-col gap-2'>
                    <p className=' text-Medium-brown'>Total this month</p>
                    <h2 className='text-3xl font-semibold text-Dark-brown'>
                        $478.33
                    </h2>
                </div>

                <div className='flex flex-col  items-end gap-2'>
                    <p className=' font-semibold text-Dark-brown'>+2.4%</p>
                    <p className='text-Medium-brown'>from last month</p>
                </div>

            </div>
        </div>
    </div>
  )
}
