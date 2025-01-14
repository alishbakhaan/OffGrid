import Image from 'next/image'
import React from 'react'
import { Londrina_Outline } from 'next/font/google';
const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import { Lato } from 'next/font/google';
import Link from 'next/link';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const HeroSection = () => {
  return (
    <div className="relative grid content-center bg-cover bg-center bg-no-repeat w-full h-screen" style={{ backgroundImage: `url(/herobg.svg)` }}>
      {/* overlay effect */}
      <div className='absolute bg-black bg-opacity-80 top-0 right-0 left-0 bottom-0'></div>

      {/* text content */}
      <div className="relative z-20 max-w-3xl m-auto">
        <div className="flex justify-center gap-5 sm:gap-12 items-center">
          <div className='px-2'>
            <h1 className={`${londrina.className} text-[#CEFA05] text-right  md:text-7xl xl:text-9xl text-5xl font-bold space-y-4 py-8 uppercase`}>Tradie</h1>
            <h4 className=' text-base md:text-2xl text-right uppercase max-w-xs mr-auto text-white'>‘Where Tradies come to get discovered online and grow their business</h4>
          </div>
          <div className='w-4 h-72 p-1 bg-[#CEFA05] -skew-x-6'></div>
          <div>
            <h1 className="text-[#CEFA05] md:text-7xl xl:text-9xl text-5xl font-bold space-y-4 py-8 uppercase px-2">Growth PARTNER</h1>
          </div>
        </div>
        <p className={`${lato.className} text-white text-sm md:text-lg text-center py-4 px-2`}>Whether you’re a custom home builder, run a construction business or provide a general trade service such as installing solar panels...</p>
        <div className="flex justify-center py-5">
          <Link href={'/'}>
            <button className={`${lato.className} text-sm text-center font-bold cursor-pointer bg-white rounded-lg py-4 px-8 shadow-lg shadow-white/50`} >We’d love to work with you</button>
          </Link>
        </div>
      </div>

      {/* vectors */}
      <div className='bg-[#CEFA05] absolute left-0 bottom-1/4 w-24 h-20 -skew-y-12'></div>
      <div className='border-2 border-[#CEFA05] absolute right-0 top-[60%] w-32 h-20 -skew-y-6'></div>
      <div className='bg-[#CEFA05] absolute right-56 bottom-56 w-36 h-10 -skew-y-6'></div>
      <div className=' absolute right-2 lg:right-52 text-xl top-1/4 lg:top-96 flex flex-col gap-5'>
        <Link href={'/'}>
          <Image
            src={'/icon (1).svg'}
            alt='icon'
            width={20}
            height={20}
            className='object-contain'
          />
        </Link>
        <Link href={'/'}>
          <Image
            src={'/icon (2).svg'}
            alt='icon'
            width={20}
            height={20}
            className='object-contain'
          />
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
