import Image from 'next/image'
import React from 'react'
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '700' });

const TradiesWork = () => {
  return (
    <div className="slanted-div after:bg-[#CEFA05]">
      {/* overlay effect */}
      <div className='absolute object-cover w-full bg-cover opacity-5 bg-no-repeat overflow-hidden -top-96 lg:-top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>

      <div className="mx-10 md:mb-40">
        <h1 className='text-4xl sm:text-6xl text-center uppercase max-w-2xl m-auto'>Why Tradies choose to work with Off Grid</h1>
        <div className="flex md:flex-row flex-col-reverse gap-20 xl:gap-40 justify-center items-center py-10">
          <div>
            <h3 className={`${lato.className} text-3xl sm:text-4xl`}>You’ve probably read enough...so we’ll get <br /> straight to the point</h3>
            <ol className={`${lato.className} text-base sm:text-2xl py-8 space-y-3 font-light`}>
              <li>1. We’re Australian based</li>
              <li>2. We’re return on investment focused meaning if <br /> you’re not making gains after our optimisation <br /> period...we’ll be the first to call it out</li> 
              <li>3. We're a Tradie partner</li>
              <li>4. We’re a digital extension of every partner that joins our team</li>
              <li>5. We guarantee results</li>
            </ol>
          </div>
          <div>
            <Image
              src={'/tradies.svg'}
              alt='icon'
              width={500}
              height={500}
              className='object-contain'
            />
            </div>
        </div>
      </div>

      {/* vectors */}
      <div className='border-2 border-black absolute right-0 -top-20 w-28 h-20 -skew-y-6'></div>
      <div className='bg-white absolute left-0 -top-10 w-40 h-12 -skew-y-6'></div>
    </div>
  )
}

export default TradiesWork