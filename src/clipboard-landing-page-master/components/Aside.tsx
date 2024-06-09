import blacklist from '../images/icon-blacklist.svg'
import textSnippets from '../images/icon-text.svg'
import sneakPreview from '../images/icon-preview.svg'
import google from '../images/logo-google.png'
import ibm from '../images/logo-ibm.png'
import microsoft from '../images/logo-microsoft.png'
import hp from '../images/logo-hp.png'
import vector from '../images/logo-vector-graphics.png'


export const Aside = () => {
  return (
    <aside className='lg:px-20 px-5 flex flex-col  gap-40'>
        <div className='flex lg:flex-row flex-col justify-between gap-20 items-center lg:items-start'>
            <div className='flex flex-col items-center gap-3'>
                <div><img src={blacklist} alt="" /></div>

                <h3 className='text-xl text-Dark-Grayish-Blue font-semibold'>
                    Create blacklists
                </h3>

                <p className=' text-Grayish-Blue text-center'>
                    Ensure sensitive information never makes its
                    way to your clipboard by excluding certain
                    sources.
                </p>
            </div>

            <div className='flex flex-col items-center gap-3'>
                <div><img src={textSnippets} alt="" /></div>

                <h3 className='text-xl text-Dark-Grayish-Blue font-semibold'>
                    Plain text snippets
                </h3>

                <p className=' text-Grayish-Blue text-center'>
                    Remove unwanted formatting from copied text
                    for a consistent look.
                </p>
            </div>

            <div className='flex flex-col items-center gap-3'>
                <div><img src={sneakPreview} alt="" /></div>

                <h3 className='text-xl text-Dark-Grayish-Blue font-semibold'>
                    Sneak preview
                </h3>

                <p className=' text-Grayish-Blue text-center'>
                    Quick preview of all snippets on your Clipboard'
                    for easy access.
                </p>
            </div>
        </div>

        <div className='flex lg:flex-row flex-col gap-20 lg:gap-0 items-center justify-between'>
            <div><img src={google} alt="" /></div>
            <div><img src={ibm} alt="" /></div>
            <div><img src={microsoft} alt="" /></div>
            <div><img src={hp} alt="" /></div>
            <div><img src={vector} alt="" /></div>
        </div>

        <div className='flex flex-col items-center gap-7'>
            <div className='flex flex-col items-center gap-3'>
                <h3 className='text-2xl text-Dark-Grayish-Blue font-semibold'>
                    Clipboard for iOS and Mac OS
                </h3>

                <p className=' text-Grayish-Blue text-center lg:w-7/12'>
                    Available for free on the App Store. Download for Mac or iOS, sync
                    with iCloud and you're ready to start adding to your clipboard.
                </p>
            </div>

            <div className='flex md:flex-row flex-col gap-10 items-center'>
                <button id='iosBtn' className='py-3 px-20 lg:px-10 duration-500 text-white font-semibold rounded-full bg-Strong-Cyan'>Download for iOS</button>
                <button id='macBtn' className='py-3 px-20 lg:px-10 duration-500 text-white font-semibold rounded-full bg-Light-Blue'>Download for Mac</button>
            </div>
        </div>
    </aside>
  )
}
