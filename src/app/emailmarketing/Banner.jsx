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
                    <div className="relative">
                        <div className="mx-10 xl:mx-40 md:mb-40">
                            <h1 className="text-black text-center text-5xl lg:text-7xl font-bold uppercase pb-20">Quality over quantity</h1>
                            <div>
                                <Card2
                                    section2={
                                        <>
                                            <Image
                                                src={'/banner5.svg'}
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
                                                Still the NUMBER 1 tool for converting leads into clients. We establish an email system,
                                                build your email list and re-engage with list members consistently with current insights
                                                into the business, client testimonials to further boost your rapport and throw the best
                                                offers at your prospects until they decide to call you back and book your service.
                                            </p>

                                        </>
                                    }
                                />
                            </div>
                            <Image
                                src={'/banner5bg.svg'}
                                width={400}
                                height={400}
                                alt='card'
                                className='cover w-full h-full'
                            />

                        </div>
                        <Image
                            src={'/emailposter1.svg'}
                            width={400}
                            height={400}
                            alt='card'
                            className='object-cover w-full h-full'
                        />
                       
                    </div>

                    {/* vectors */}
                    <div className='border-2 border-black absolute left-0 bottom-1/2 w-20 h-20 -skew-y-6'></div>
                    <div className='bg-[#EEFFA3] absolute left-0 top-0 w-40 h-12 -skew-y-6'></div>

                </div>
            </div>
        </div>
    )
}

export default Banner