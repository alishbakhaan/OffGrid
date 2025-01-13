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

                    <div className="relative mx-10 xl:mx-40 md:mb-40">
                        <h1 className="text-black text-center text-5xl lg:text-7xl font-bold uppercase pb-20">SOCIAL MEDIA MANAGEMENT</h1>
                        <div>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/banner3.svg'}
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
                                        As part of our AGS, our team fully manage your Facebook and Instagram channels.
                                            <br /><br />
                                            We utilise these platforms as they are the most commonly used amongst Australian audiences and are a great way to receive organic website traffic, share past projects and reviews and win consistent enquiry
                                        </p>

                                        <div className="pt-10">
                                            <Image
                                            src={'/payper (1).svg'}
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
                    <div className='border-2 border-black absolute left-0 bottom-32 w-20 h-20 -skew-y-6'></div>

                </div>
            </div>
        </div>
    )
}

export default Banner