import TestSection from '@/components/TestSection'
import HeroComponents from '@/components/ui/HeroComponents'
import React from 'react'
import { Lato } from 'next/font/google';
import RecentBlog from './RecentBlog';
import PopularBlog from './PopularBlog';
import OtherBlog from './OtherBlogs';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const page = () => {
  return (
    <div>
      <HeroComponents
        bgImg={'/ebookbg.svg'}
        content={
          <div>
            <h1 className="text-[#CEFA05] text-6xl lg:text-9xl font-bold space-y-4 py-4 uppercase px-10">All blogs</h1>
            <p className={`${lato.className} text-white text-3xl text-center space-y-10`}> All of our blog in one place </p>

            {/* <div className='bg-[#EEFFA3] absolute left-0 bottom-0 w-52 h-16 -skew-y-6'></div> */}
          </div>
        }
      />

      <RecentBlog />
      <PopularBlog/>
      <OtherBlog/>
      <TestSection />

    </div>
  )
}

export default page