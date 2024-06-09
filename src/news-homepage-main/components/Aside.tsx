import retroPc from '../assets/images/image-retro-pcs.jpg'
import laptops from '../assets/images/image-top-laptops.jpg'
import gaming from '../assets/images/image-gaming-growth.jpg'

export const Aside = () => {
  return (
    <aside className='grid gap-10 grid-cols-1 lg:grid-cols-3'>
        <div className='flex items-center gap-7'>
            <div>
                <img className='' src={retroPc} alt="" />
            </div>

            <div className='flex w-11/12 flex-col gap-5'>
                <h3 className='text-3xl text-Soft-red font-semibold'>01</h3>

                <h5 className='text-xl hover:text-Soft-red cursor-pointer duration-500 text-Very-dark-blue font-semibold'>
                    Reviving Retro Pcs
                </h5>

                <p className='  text-Dark-grayish-blue'>
                    What happens when old PCs
                    are given modern upgrages?
                </p>
            </div>
        </div>

        <div className='flex items-center gap-7'>
            <div>
                <img className='' src={laptops} alt="" />
            </div>

            <div className='flex w-11/12 flex-col gap-5'>
                <h3 className='text-3xl text-Soft-red font-semibold'>02</h3>

                <h5 className='text-xl hover:text-Soft-red cursor-pointer duration-500 text-Very-dark-blue font-semibold'>
                    Top 10 Laptops of 2022
                </h5>

                <p className='  text-Dark-grayish-blue'>
                    Our best picks for various
                    needs and budgets
                </p>
            </div>
        </div>

        <div className='flex items-center gap-7'>
            <div>
                <img className='' src={gaming} alt="" />
            </div>

            <div className='flex w-11/12 flex-col gap-5'>
                <h3 className='text-3xl text-Soft-red font-semibold'>03</h3>

                <h5 className='text-xl hover:text-Soft-red cursor-pointer duration-500 text-Very-dark-blue font-semibold'>
                    The Growth of Gaming
                </h5>

                <p className='  text-Dark-grayish-blue'>
                    How the pandemic has sparked
                    fresh opportunities.
                </p>
            </div>
        </div>
        
    </aside>
  )
}
