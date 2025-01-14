import React from 'react'
import { Lato } from 'next/font/google';
import Button from './Button';
import Image from 'next/image';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const Helmet = () => {
    return (
        <div>
            <div className="bg-black p-10 md:p-20 gap-5 flex flex-col-reverse xl:flex-row justify-center">
            <div>
                    <h1 className='text-[#CEFA05] text-4xl md:text-5xl uppercase'>The benefits of a professional brand identity</h1>

                    <ol className={`${lato.className} text-white text-opacity-80 text-lg md:text-xl py-8 space-y-3`}>
                        <li>-helps you stand out in a saturated market</li>
                        <li>-consistency builds credibility for your business and drives more serious enquiry from prospects</li>
                        <li>-makes it easier to resonate with your ideal client</li>
                        <li>-as a brand you're able to charge what you're worth and not just charge based on your service</li>
                        <li>-long term customer loyalty</li>
                    </ol>
                    <Button colors={'bg-[#CEFA05] text-black'} text={'Lets build your brand together '} />
            </div>
                
            <div>
                <Image
                        src='/Branding-helmet.svg'
                        width={500}
                        height={500}
                        alt='card'
                        className='object-contain xl:ml-60'
                    /> 
            </div>
            </div>
        </div> 
    )  
}

export default Helmet

