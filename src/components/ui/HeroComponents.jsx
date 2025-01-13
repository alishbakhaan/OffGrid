import Image from 'next/image'
import React from 'react'
import { Londrina_Outline } from 'next/font/google';
const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import { Lato } from 'next/font/google';
import Link from 'next/link';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const HeroComponents = ({ bgImg, content }) => {
    return (
        <div className="relative grid content-center bg-cover bg-center bg-no-repeat w-full h-screen -z-10" style={{ backgroundImage: `url(${bgImg})` }}>
            {/* overlay effect */}
            <div className='absolute bg-black bg-opacity-80 top-0 right-0 left-0 bottom-0 -z-20'></div>

            {/* text content */}
            <div className="z-50 max-w-5xl m-auto">
                {content}
            </div>

            {/* vectors */}
            <div className='bg-[#EEFFA3] absolute left-0 bottom-0 w-40 h-12 -skew-y-6'></div>
            <div className='bg-[#CEFA05] absolute left-0 bottom-10 w-20 h-20 -skew-y-12'></div>
            <div className='border-2 border-[#CEFA05] absolute right-0 top-[60%] w-20 h-16 -skew-y-6'></div>
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

export default HeroComponents
