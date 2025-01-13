import React from 'react'
import Banner from './Banner'
import HeroComponents from '@/components/ui/HeroComponents'
import BtnBanner from '../../components/ui/BtnBanner'
import Posters from './Posters'

const page = () => {
  return (
    <div>
         <HeroComponents
                bgImg={'/bg.svg'}
                content={
                    <div>
                        <h1 className="text-[#CEFA05] text-7xl xl:text-9xl font-bold space-y-4 py-8 uppercase">PPC</h1>
                    </div>
                }
            />

            <Banner/>
            <Posters/>
            <BtnBanner/>
    </div>
  )
}

export default page