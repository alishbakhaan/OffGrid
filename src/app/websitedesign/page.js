import { Londrina_Outline } from 'next/font/google';
const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import HeroComponents from '@/components/ui/HeroComponents'
import React from 'react'
import Banner from './Banner';
import Poster from './Poster';
import BtnBanner from '../../components/ui/BtnBanner';

const page = () => {
    return (
        <>
            <HeroComponents
                bgImg={'/bg.svg'}
                content={
                    <div className='text-[#CEFA05] text-7xl lg:text-9xl font-bold uppercase'>
                        <h1>WEBSITE DESIGN</h1>
                        <h1 className={londrina.className}>& DEVELOPMENT</h1>
                    </div>
                }
            />
            <Banner />
            <Poster />
            <BtnBanner />
        </>
    )
}

export default page