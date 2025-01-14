import Card2 from '@/components/ui/Card2'
import React from 'react'
import { Lato } from 'next/font/google';
import Image from 'next/image';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const Banner = () => {
    return (
        <div>
            <div>
                <div className="slanted-div after:bg-[#CEFA05]" >
                   {/* overlay effect */}
                   <div className='absolute object-cover w-full opacity-5 bg-cover bg-no-repeat overflow-hidden -top-20 xl:-top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>

                    <div className="relative mx-10 xl:mx-40 md:mb-40">
                        <h1 className="text-black text-center text-5xl lg:text-7xl font-bold uppercase pb-20">pay per click</h1>
                        <div className='z-50'>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/banner2bg.svg'}
                                            width={400}
                                            height={400}
                                            alt='card'
                                            className='cover w-full h-full'
                                        />
                                    </>
                                }
                                bgcolor={'bg-white lg:flex-row flex-col'}
                                section1={
                                    <>
                                        <p className={`${lato.className} text-base md:text-2xl max-w-xl leading-relaxed`}>
                                            Pay-Per-Click media buying is a significant contributor to getting our clients the
                                            exposure they’re looking for. Our expert media buyers identify what your customers
                                            are looking for online and place Ads directly in front of them.
                                            <br /><br />
                                            With any Ad budget, we utilise industry leading platforms such as Facebook and Google to take
                                            your business from invisible to visible in the online space.
                                        </p>

                                        <div className="flex flex-wrap gap-10 pt-10">
                                            <Image
                                            src={'/payper (1).svg'}
                                            width={200}
                                            height={200}
                                            alt='icon'
                                            className='object-contain'
                                            />
                                            <Image
                                            src={'/payper.svg'}
                                            width={200}
                                            height={200}
                                            alt='icon'
                                            className='object-contain'
                                            />
                                        </div>
                                    </>
                                }
                            />
                        </div>
                    </div>

                    {/* vectors */}
                    <div className='border-2 border-black absolute right-0 -top-20 w-20 h-20 -skew-y-6'></div>

                </div>
            </div>
        </div>
    )
}

export default Banner