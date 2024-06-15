import logo from '../images/logo.svg'
import dollarIcon from '../images/icon-dollar.svg'
import personIcon from '../images/icon-person.svg'
import { useState } from 'react'

export const BasePage = () => {
    const [billInput, setBillInput] = useState('')
    const [peopleInput, setpeopleInput] = useState('')

    const [tip, setTip] = useState<number>(0.00)
    const [total, setTotal] = useState<number>(0.00)

    const handleSubmit = (event: number) => {
        const bill = parseFloat(billInput)
        const people = parseFloat(peopleInput)

        if (isNaN(bill) || isNaN(people) || people === 0 || bill === 0 ) {
            if (isNaN(bill) || bill === 0) {
                document.getElementById("billInput")?.style.setProperty('border-color', 'red')
            } else {
                document.getElementById("billInput")?.style.setProperty('border-color', 'white')
            }

            if (isNaN(people) || people === 0) {
                document.getElementById("peopleInput")?.style.setProperty('border-color', 'red')
            } else {
                document.getElementById("peopleInput")?.style.setProperty('border-color', 'white')
            }

            setTip(0)
            setTotal(0)
            return
        }

        setTotal(bill / people)
        setTip((bill / people) * event / 100)
    }

    const handleCustom = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const bill = parseFloat(billInput)
            const people = parseFloat(peopleInput)
            const customTip = parseFloat((event.target as HTMLInputElement).value)

            if (isNaN(bill) || isNaN(people) || people === 0 || isNaN(customTip)) {
                return
            }

            setTotal(bill / people)
            setTip((bill / people) * customTip / 100)
        }
    }

    const handleReset = () => {
        location.reload()
    }

    return (
        <div className='flex flex-col items-center gap-20'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='grid gap-10 p-7 rounded-3xl bg-white grid-cols-1 lg:grid-cols-2'>
                <div className=' p-3 flex flex-col gap-10'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="billInput" className='font-semibold text-Grayish-cyan'>
                            Bill
                        </label>
                        
                        <div className='flex items-center'>
                            <input onChange={(e) => setBillInput(e.target.value)}
                            className={`bg-Very-light-grayish-cyan border-Very-light-grayish-cyan
                             text-2xl font-bold text-Very-dark-cyan border-2 focus:outline-Strong-cyan rounded-md
                              w-full h-[3rem]  relative text-right pe-5`} id='billInput' type="number" placeholder='0' />
                            <div className='absolute ps-5'>
                                <img className='' src={dollarIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <p className='font-semibold text-Grayish-cyan'>Select Tip %</p>  
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                            <button value={5} onClick={(e) => handleSubmit(parseInt(e.currentTarget.value))}
                            className='w-full lg:w-[7rem] text-2xl hover:bg-Strong-cyan hover:text-Very-dark-cyan duration-500 font-bold rounded-lg bg-Very-dark-cyan text-white py-3'>
                                5%
                            </button>

                            <button value={10} onClick={(e) => handleSubmit(parseInt(e.currentTarget.value))}
                            className='w-full lg:w-[7rem] text-2xl hover:bg-Strong-cyan hover:text-Very-dark-cyan duration-500 font-bold rounded-lg bg-Very-dark-cyan text-white py-3'>
                                10%
                            </button>

                            <button value={15} onClick={(e) => handleSubmit(parseInt(e.currentTarget.value))}
                            className='w-full lg:w-[7rem] text-2xl hover:bg-Strong-cyan hover:text-Very-dark-cyan duration-500 font-bold rounded-lg bg-Very-dark-cyan text-white py-3'>
                                15%
                            </button>

                            <button value={25} onClick={(e) => handleSubmit(parseInt(e.currentTarget.value))}
                            className='w-full lg:w-[7rem] text-2xl hover:bg-Strong-cyan hover:text-Very-dark-cyan duration-500 font-bold rounded-lg bg-Very-dark-cyan text-white py-3'>
                                25%
                            </button>

                            <button value={50} onClick={(e) => handleSubmit(parseInt(e.currentTarget.value))}
                            className='w-full lg:w-[7rem] text-2xl hover:bg-Strong-cyan hover:text-Very-dark-cyan duration-500 font-bold rounded-lg bg-Very-dark-cyan text-white py-3'>
                                50%
                            </button>

                            <input onKeyPress={handleCustom} id='custom'
                            className='w-full lg:w-[7rem] text-Very-dark-cyan focus:outline-Strong-cyan bg-Very-light-grayish-cyan rounded-lg text-2xl font-semibold text-center py-3'
                             type="number" placeholder='Custom' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="peopleInput" className='font-semibold text-Grayish-cyan'>
                            Number of People
                        </label>

                        <div className='flex items-center'>
                            <input id='peopleInput' onChange={(e) => setpeopleInput(e.target.value)} 
                            
                            className=' pe-5 bg-Very-light-grayish-cyan 
                            rounded-md focus:outline-Strong-cyan border-2 border-Very-light-grayish-cyan text-2xl font-bold
                            w-full h-[3rem] text-Very-dark-cyan text-right relative' type="number" placeholder='0' />

                            <div className='absolute ps-5'>
                                <img className='' src={personIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-10 lg:gap-0 justify-between rounded-2xl p-7 lg:p-10 bg-Very-dark-cyan '>
                    <div className='flex gap-7 flex-col'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-white text-lg'>Tip Amount</p>
                                <span className=' text-Grayish-cyan'>/ person</span>
                            </div>

                            <h3 className='md:text-4xl text-3xl font-semibold text-Strong-cyan'>
                                ${tip.toFixed(2)}
                            </h3>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-white text-lg'>Total</p>
                                <span className=' text-Grayish-cyan'>/ person</span>
                            </div>

                            <h3 className='md:text-4xl text-3xl font-semibold text-Strong-cyan'>
                                ${total.toFixed(2)}
                            </h3>
                        </div>
                    </div>

                    <button onClick={() => handleReset()}
                    className='bg-Strong-cyan hover:bg-cyan-300 duration-300 py-2 font-semibold md:text-2xl text-xl rounded-md text-Very-dark-cyan'>
                        RESET
                    </button>
                </div>
            </div>
        </div>
    )
}
