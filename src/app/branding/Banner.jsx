import Card2 from '@/components/ui/Card2'
import React from 'react'
import { Lato } from 'next/font/google';
import Image from 'next/image';
const lato = Lato({ subsets: ['latin'], weight: '700' });

const Banner = () => {
    return (
        <div>
            <div>
                <div className="slanted-div after:bg-[#CEFA05]" >
                    {/* overlay effect */}
                    <div className='absolute object-cover w-full opacity-5 overflow-hidden bg-no-repeat bg-cover -top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>

                    <div className="mx-10 xl:mx-40 md:mb-40">
                        <h1 className="text-black text-center text-4xl md:text-6xl font-bold uppercase md:pb-20">A brand brings your business to life</h1>
                        <div className='z-50'>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/agscard (2).svg'}
                                            width={400}
                                            height={400}
                                            alt='card'
                                            className='cover w-full h-full'
                                        />
                                    </>
                                }
                                bgcolor={'bg-white md:flex-row flex-col'}
                                section1={
                                    <>
                                        <p className={`${lato.className} text-base md:text-2xl max-w-xl leading-relaxed`}>
                                            Whether you're establishing a business or looking to completely
                                            re-brand the face of your business, we'd love to work with you.
                                            We have a team of branding and design specialists that can discuss,
                                            suggest and inspire your vision. Let's take the first step towards
                                            making your business stand out
                                        </p>
                                    </>
                                }
                            />
                        </div>
                    </div>

                    {/* vectors */}
                    <div className='border-2 border-black absolute left-0 bottom-20 w-20 h-20 -skew-y-6'></div>

                </div>
            </div>
        </div>
    )
}

export default Banner