import React from 'react'
import HeroComponents from '@/components/ui/HeroComponents'
import Banner from './Banner'
import BtnBanner from '../../components/ui/BtnBanner'

const page = () => {
    return (
        <div>
            <HeroComponents
                bgImg={'/bg.svg'}
                content={
                    <div>
                        <h1 className="text-[#CEFA05] text-7xl xl:text-9xl font-bold space-y-4 py-8 uppercase">SEO</h1>
                    </div>
                }
            />
            <Banner />
            <BtnBanner/>

        </div>
    )
}

export default page