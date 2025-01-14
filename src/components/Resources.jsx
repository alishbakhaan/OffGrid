import React from 'react'
import Image from 'next/image'
import { Lato } from 'next/font/google';
import Link from 'next/link';
const lato = Lato({ subsets: ['latin'], weight: '700' });

const Resources = () => {
    return (
        <div className='slanted-div after:bg-black'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full overflow-hidden opacity-40 bg-no-repeat bg-cover -top-96 lg:-top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/rescource.svg)` }}></div>

            <div className="mx-10 xl:mx-40 mb-40">
                <h1 className='text-4xl sm:text-6xl uppercase text-white text-center max-w-5xl m-auto'>Resources to Help you Grow Your Building Or Trades Business</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 py-20">
                    <div className="relative grid content-center bg-cover bg-center bg-no-repeat p-16 w-full " style={{ backgroundImage: `url(/resourcescard2.svg)` }}>
                        {/* overlay effect */}
                        <div className='absolute bg-[#FA055D] bg-opacity-70 top-0 right-0 left-0 bottom-0'></div>

                        {/* card */}
                        <div className=" grid justify-center">
                            <Image
                                src={'/yourselfcard.svg'}
                                alt='icon'
                                width={400}
                                height={400}
                                className='object-contain'
                            />
                            <div className='grid justify-center pt-10'>
                                <Link href={'/'}>
                                    <button className={`${lato.className} bg-white text-black capitalize px-8 py-4 rounded-md text-base shadow-md shadow-white/30 cursor-pointer`}>Get the Guide</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative grid content-center bg-cover bg-center bg-no-repeat p-16 w-full" style={{ backgroundImage: `url(/resourcescard1.svg)` }}>
                        {/* overlay effect */}
                        <div className='absolute bg-[#FAA705F7] bg-opacity-40 top-0 right-0 left-0 bottom-0 -z-20'></div>

                        {/* card */}
                        <div className="grid justify-center">
                            <Image
                                src={'/resourcesicon2.svg'}
                                alt='icon'
                                width={400}
                                height={400}
                                className='object-cover h-full xl:h-[500px] w-full'
                            />
                            <div className='grid justify-center pt-10'>
                                <Link href={'/'}>
                                    <button className={`${lato.className} bg-white text-black capitalize px-8 py-4 rounded-md text-base shadow-md shadow-white/30 cursor-pointer`}>Take the Quiz</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="relative grid content-center bg-cover bg-center bg-no-repeat p-16 w-full -z-10" style={{ backgroundImage: `url(/resourcescard1.svg)` }}>
                        {/* overlay effect */}
                        <div className='absolute bg-[#FA05C4] bg-opacity-70 top-0 right-0 left-0 bottom-0 -z-20'></div>

                        {/* card */}
                        <div className="z-50 grid justify-center">
                            <Image
                                src={'/resourcesicon1.svg'}
                                alt='icon'
                                width={250}
                                height={250}
                                className='object-contain'
                            />
                            <div className='grid justify-center pt-10'>
                                <Link href={'/'}>
                                    <button className={`${lato.className} bg-white text-black capitalize px-8 py-4 rounded-md text-base shadow-md shadow-white/30 cursor-pointer`}>Get the Guide</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* vectors */}
            <div className='bg-white absolute right-0 -top-20 md:-top-60 w-60 h-16 -skew-y-6'></div>
            <div className='bg-[#EEFFA3] absolute left-0 bottom-0 w-40 h-12 -skew-y-6'></div>
        </div>
    )
}

export default Resources