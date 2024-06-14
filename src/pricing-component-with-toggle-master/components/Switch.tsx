import { useState } from "react";

interface switchData {
    version: string;
    payment: {
        monthly: number;
        annually: number;
    };

    storage: string;

    users: string

    download: string;

    buttonColor: string;

    cardProperties: string;

}

export const Switch = () => {

   const data: switchData[] = [

        {
            version: 'Basic',
            payment: {
                monthly: 19.99,
                annually: 199.99
            },
            storage: '500 GB Storage',
            users: '2 Users Allowed',
            download: 'Send up to 3 GB',
            buttonColor: 'text-white hover:bg-gradient-to-r hover:from-white hover:to-white bg-gradient-to-r from-color1 to-color2 hover:text-color2 border-2 border-color1',
            cardProperties: 'h-[30rem] bg-white rounded-xl text-Dark-Grayish-Blue'
        },

        {
            version: 'Professional',
            payment: {
                monthly: 24.99,
                annually: 249.99
            },
            storage: '1 TB Storage',
            users: '5 Users Allowed',
            download: 'Send up to 10 GB',
            buttonColor: 'bg-white text-color2 border-white hover:bg-transparent border-2 hover:text-white ',
            cardProperties: 'h-[32rem] text-white rounded-xl bg-gradient-to-b from-color1 to-color2'


        },

        {
            version: 'Master',
            payment: {
                monthly: 39.99,
                annually: 399.99
            },
            storage: '2 TB Storage',
            users: '10 Users Allowed',
            download: 'Send up to 20 GB',
            buttonColor: 'text-white hover:bg-gradient-to-r hover:from-white hover:to-white bg-gradient-to-r from-color1 to-color2 hover:text-color2 border-2 border-color1',
            cardProperties: 'h-[30rem] bg-white rounded-xl text-Dark-Grayish-Blue'
        }
   ]

   const [toggle, setToggle] = useState(false)

  return (
    <div className="bg-pattern2 flex flex-col gap-16 bg-no-repeat min-h-screen bg-left-bottom">
        <div className="flex flex-col  items-center ">
            <h3 className="text-3xl font-semibold">Our Pricing</h3>

            <div className="flex items-end gap-7">
                <p className="text-xl font-medium">Annually</p>
                
                <div>
                    <input onClick={() => setToggle(!toggle)} type="checkbox" id="switch" />
                    <label htmlFor="switch">Toggle</label>
                </div>

                <p className="text-xl font-medium">Monthly</p>
            </div>
        </div>

        <ul className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center items-center">
            {data.map((data, index) =>
                <li key={index} className={`flex flex-col p-7  lg:p-10 ${data.cardProperties} items-center gap-9`}>
                    <p>{data.version}</p>
                    <h1 className="text-6xl font-bold">
                        {toggle ? data.payment.monthly : data.payment.annually}
                    </h1>

                    <div className="flex flex-col items-center gap-7">
                        <p className="border-b-2 pb-3 w-full text-center">{data.storage}</p>
                        <p className="border-b-2 pb-3 w-full text-center">{data.users}</p>
                        <p className="border-b-2 pb-3 w-full text-center">{data.download}</p>
                    </div>

                    <button className={`py-3  px-20 
                    rounded-xl  font-semibold tracking-wide ${data.buttonColor}`}>
                        LEARN MORE
                    </button>
                </li>
            )}
        </ul>
    </div>
  )
}
