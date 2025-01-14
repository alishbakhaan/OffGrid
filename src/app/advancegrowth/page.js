import { Londrina_Outline } from 'next/font/google';
const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import HeroComponents from '@/components/ui/HeroComponents'
import React from 'react'
import ChartSec from '@/app/advancegrowth/ChartSec';
import ClaimSec from './ClaimSec';
import AgsBg from './AgsBg';
import SalesFunnel from './SalesFunnel';
import AgsExplained from './AgsExplained';
import Button from '@/components/ui/Button';
import TestSection from '@/components/TestSection';

const page = () => {
    return (
        <>
            <HeroComponents
                bgImg={'/ebookbg.svg'}
                content={
                    <div className='text-center'>
                        <h1 className="text-[#CEFA05] text-4xl sm:text-7xl lg:text-9xl font-bold space-y-4 py-4 uppercase px-10">Advanced Growth</h1>
                        <div className='flex gap-4 lg:gap-20 items-center justify-center px-10'>
                            <h1 className={`${londrina.className} text-[#CEFA05] text-4xl sm:text-7xl lg:text-9xl font-bold uppercase`}>System</h1>
                            <div className='w-40 lg:w-full h-12 lg:h-28 bg-[#CEFA05] -skew-x-6'></div>
                        </div>
                        <div className="flex justify-center pt-10 mx-4">
                            <Button colors={'text-black bg-[#CEFA05]'} text={' Claim Your Custom Digital Marketing Strategy'} para={' (risk free, results guaranteed)'}/>
                        </div> 
                    </div>
                }
            />

<ChartSec/>
             
<ClaimSec/>
             
<AgsBg/>
             
<SalesFunnel/>
             
<AgsExplained/>
             
<TestSection/>
             

        </>
    )
}

export default page