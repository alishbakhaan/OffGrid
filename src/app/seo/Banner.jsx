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
                        <div className=" mx-10 xl:mx-40">
                        <h1 className="text-black text-center text-5xl lg:text-7xl font-bold uppercase pb-20">Search engine optimization</h1>
                        <div>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/bannerseo.svg'}
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
                                            But what does all of this mean?
                                            To keep things simple, the objective of any seo service is to optimise online content so it becomes more discoverable by people conducting searches on the internet.
                                            For you as a business owner this means trying to get your content or more specifically your website ranking as high as possible on a google search.

                                            <br /><br />

                                            This is a standard service we offer as part of our AGS.
                                        </p>

                                    </>
                                }
                            />
                        </div>
                        </div>
                        <Image
                            src={'/posterseo (2).svg'}
                            width={200}
                            height={200}
                            alt='icon'
                            className='object-cover w-full h-full'
                        /> <Image
                            src={'/posterseo (1).svg'}
                            width={200}
                            height={200}
                            alt='icon'
                            className='object-cover w-full h-full -mt-20 md:-mt-40 lg:-mt-80'
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