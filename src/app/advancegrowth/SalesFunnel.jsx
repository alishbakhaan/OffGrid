import Image from 'next/image'
import React from 'react'
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const SalesFunnel = () => {
    return (
        <div className="slanted-div after:bg-black">
            {/* overlay effect */}
            <div className='absolute object-cover w-full opacity-10 bg-no-repeat bg-cover overflow-hidden -top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/funnelbg.svg)` }}></div>

            <div className="mx-10 md:mb-40 text-white">
                <h1 className='text-4xl md:text-6xl text-center uppercase max-w-2xl m-auto'>SALES FUNNEL</h1>
                <div className="flex md:flex-row flex-col-reverse gap-20 xl:gap-40 justify-center items-center py-10">
                    <div>
                        <Image
                            src={'/funel-pic.svg'}
                            alt='icon'
                            width={600}
                            height={600}
                            className='object-contain'
                        />
                    </div>
                    <div>
                        <p className={`${lato.className} text-lg md:text-2xl py-8 max-w-sm`}>
                            Take your business from a referral system and turn it into a powerhouse of lead automation and enquiry.
                        </p>
                        <p className={`${lato.className} text-lg md:text-2xl py-8 max-w-sm`}>
                        Back fill your sales pipeline and give yourself the ability to build the business you’ve worked years trying to finesse.
                        </p>
                    </div>

                </div>
            </div>

            {/* vectors */}
            <div className='border-2 border-[#CEFA05] absolute right-0 -top-20 w-28 h-12 -skew-y-6'></div>
            <div className='bg-white absolute left-0 -top-10 w-60 h-12 -skew-y-6'></div>
        </div>
    )
}

export default SalesFunnel