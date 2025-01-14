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

                    <div className="relative">
                        <div className="mx-10 xl:mx-40 ">
                        <h1 className="text-black text-center text-4xl sm:text-6xl font-bold uppercase sm:pb-20">We Design & Develop Pixel Perfect Websites</h1>
                        <div>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/banner6.svg'}
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
                                            A stacked squad of designers and developers at your disposal. Enjoy peace of mind, as every partner on an AGS receives free maintenance and updates as a standard inclusion.
                                            <br /><br />
                                            The best thing is our tech and creative gurus are the same guys who develop all your digital assets, which means we're always on the same page and ensures we'll deliver what you want 100% of the time. Guaranteed.
                                        </p>
                                    </>
                                }
                            />
                        </div>
                        </div>
                        <Image
                            src={'/posterwebsite.svg'}
                            width={400}
                            height={400}
                            alt='card'
                            className='cover w-full h-full'
                        />
                    </div>
                    {/* vectors */}
                    <div className='border-2 border-black absolute left-0 top-1/4 w-20 h-20 -skew-y-6'></div>

                </div>
            </div>
        </div>
    )
}

export default Banner