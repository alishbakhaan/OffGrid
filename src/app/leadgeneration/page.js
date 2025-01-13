import { Londrina_Outline } from 'next/font/google';
const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import HeroComponents from '@/components/ui/HeroComponents'
import React from 'react'
import Banner from './Banner';
import BtnBanner from '../../components/ui/BtnBanner';

const page = () => {
    return ( 
        <>
            <HeroComponents
                bgImg={'/bg.svg'}
                content={
                    <div>
                        <div className='flex gap-4 lg:gap-10 items-center justify-center'>
                        <h1 className="text-[#CEFA05] text-6xl lg:text-9xl font-bold py-4 uppercase">Lead</h1>
                            <div className='w-full h-32 bg-[#CEFA05] -skew-x-6'></div>
                        </div>
                        <h1 className={`${londrina.className} text-[#CEFA05] text-7xl lg:text-9xl font-bold uppercase`}>Generation</h1>
                    </div>
                }
            />


             <Banner/>

             <BtnBanner/>

        </>
    )
}

export default page