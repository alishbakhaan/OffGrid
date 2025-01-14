import React from 'react'
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });
import { Londrina_Outline } from 'next/font/google';
import Link from 'next/link';
const londrinaoutline = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import Button from '@/components/ui/Button';

const ClaimSec = () => {
    return (
    <>
        <div className='slanted-div after:bg-white'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full opacity-10 overflow-hidden bg-no-repeat bg-cover -top-40 lg:-top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/speak.svg)` }}></div>

            <div className='relative max-w-7xl m-auto px-10 pb-32'>
                <h1 className='text-4xl sm:text-6xl xl:text-8xl uppercase text-center'>claim our limited time offer </h1>
                <h1 className={`${londrinaoutline.className} text-4xl sm:text-6xl xl:text-8xl uppercase text-center`}>‘either we get you results or you PAY NOTHING’ </h1>
                <div  className="flex justify-center pt-10">
                <Button colors={'bg-black text-[#CEFA05]'} text={' Book a Free Road Map session'} para={'(risk free, results guaranteed)'}/>
                </div>
            </div>  

                        {/* vectors */}
            <div className='border-2 border-black absolute right-0 top-0 md:-top-40 w-32 h-16 -skew-y-6'></div>

        </div>
    </>      
    )   
}   

export default ClaimSec