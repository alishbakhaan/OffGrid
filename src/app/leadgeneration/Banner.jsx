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
                    <div className='absolute object-cover w-full opacity-5 overflow-hidden -top-28 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>
                    <div className='relative'>
                        <div className="mx-10 xl:mx-40 ">
                            <h1 className="text-black text-center text-5xl lg:text-7xl font-bold uppercase pb-20">We help you to generate more leads</h1>
                            <div>
                                <Card2
                                    section2={
                                        <>
                                            <Image
                                                src={'/banner4.svg'}
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
                                                With 97% of prospects not ready to purchase, our lead generation and nurturing system is a strategic funnel we have implemented to take strangers from 'problem unaware' to 'ready to buy' customers.
                                                <br /><br />
                                                Think of your lead generation system as a tool that grabs strangers off the streets, educates them on the problem they are facing, how to resolve it and why your business should be the go-to service provider to deliver the solution.
                                            </p>

                                        </>
                                    }
                                />

                            </div>
                        </div>


                        <Image
                            src={'/poster3.svg'}
                            width={400}
                            height={400}
                            alt='card'
                            className='cover w-full h-full'
                        />
                    </div>
                    {/* vectors */}
                    <div className='border-2 border-black absolute right-0 -top-20 w-20 h-20 -skew-y-6'></div>
                    <div className='bg-[#EEFFA3] absolute left-0 top-0 w-40 h-12 -skew-y-6'></div>

                </div>
            </div>
        </div>
    )
}

export default Banner