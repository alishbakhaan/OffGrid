import HeroComponents from '@/components/ui/HeroComponents'
import Yourself from '@/components/Yourself'
import React from 'react'

const page = () => {
  return (
    <>
        <HeroComponents
        bgImg={'/ebookbg.svg'}
        content={
            <div>
            <h1 className="text-[#CEFA05] text-7xl xl:text-9xl font-bold space-y-4 py-8 uppercase">Ebook</h1>
            </div>
        }
        />
        <Yourself/>
    </>
  )
}

export default page