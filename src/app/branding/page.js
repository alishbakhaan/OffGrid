import HeroComponents from '@/components/ui/HeroComponents'
import React from 'react'
import Banner from './Banner'
import Stargety from './Stargety'
import BtnBanner from '../../components/ui/BtnBanner'
import HelmetSec from './HelmetSec'
import FAQ from './FAQ'

const page = () => {
    return (
        <div>
            <HeroComponents
                bgImg={'/bg.svg'}
                content={
                    <div>
                        <h1 className="text-[#CEFA05] text-7xl xl:text-9xl font-bold space-y-4 py-8 uppercase">Branding</h1>
                    </div>
                }
            />

            <Banner/>
            <Stargety/>
            <FAQ/>
            <HelmetSec/>
            <BtnBanner/>
        </div>
    )
}

export default page



