import React from 'react'
import { Lato } from 'next/font/google';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Slider from '@/components/ui/Slider';
import Helmet from '@/components/ui/Helmet'
const lato = Lato({ subsets: ['latin'], weight: '400' });


const AgsExplained = () => {

    return (
        <div className='slanted-div after:bg-[#CEFA05]'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full opacity-5 bg-no-repeat bg-cover overflow-hidden -top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>

            <div className='relative mx-10 lg:mx-40 mb-10 md:mb-60'>
                <h1 className='text-4xl md:text-6xl uppercase text-center'>Our AGS Explained</h1>
                <p className={`${lato.className} text-center text-2xl py-10`}>
                    Our Advanced Growth System, is a custom made strategy that utilises a combination of inbound and outbound marketing tactics. Our objective is to take you from invisible to visible
                    in the online space and get your business in front of hungry prospects currently looking for your services.
                </p>
                <p className={`${lato.className} text-center text-2xl py-5`}>
                    Our nurturing systems of email and social media strategy are also tools we utilise to build awareness around your brand and transform your business into a reputable service provider
                    that wins you customers like clock work.
                </p>

                <div >

                    <div className="bg-white grid md:grid-cols-2 items-center gap-20 md:gap-32 p-20 my-10">
                        <div>
                            <Image
                                src='/agscard (1).svg'
                                width={400}
                                height={400}
                                alt='card'
                                className='contain w-full h-full'
                            />
                        </div>
                        <div>
                            <h1 className='text-4xl md:text-8xl uppercase pb-10'>PPC</h1>
                            <button className='bg-[#CEFA05] rounded-xl py-5 px-16 text-4xl'>Read more..</button>
                        </div>
                    </div>
                    <div className="bg-white grid md:grid-cols-2 items-center gap-20 md:gap-32 p-20 my-10">

                        <div>
                            <h1 className='text-4xl md:text-8xl uppercase pb-10'>SOCIAL MEDIA MANAGEMENT</h1>
                            <button className='bg-[#CEFA05] rounded-xl py-5 px-16 text-4xl'>Read more..</button>
                        </div>
                        <div>
                            <Image
                                src='/socialmedia.svg'
                                width={400}
                                height={400}
                                alt='card'
                                className='contain w-full h-full'
                            />
                        </div>
                    </div>
                    <div className="bg-white grid md:grid-cols-2 items-center gap-20 md:gap-32 p-20 my-10">
                        <div>
                            <Image
                                src='/leadgeneration.svg'
                                width={400}
                                height={400}
                                alt='card'
                                className='contain w-full h-full'
                            />
                        </div>
                        <div>
                            <h1 className='text-4xl md:text-8xl uppercase pb-10'>LEAD GENERATION</h1>
                            <button className='bg-[#CEFA05] rounded-xl py-5 px-16 text-4xl'>Read more..</button>
                        </div>
                    </div>
                    <div className="bg-white grid md:grid-cols-2 items-center gap-20 md:gap-32 p-20 my-10">

                        <div>
                            <h1 className='text-4xl md:text-8xl uppercase pb-10'>EMAIL MARKETING</h1>
                            <button className='bg-[#CEFA05] rounded-xl py-5 px-16 text-4xl'>Read more..</button>
                        </div>
                        <div>
                            <Image
                                src='/agscard (5).svg'
                                width={400}
                                height={400}
                                alt='card'
                                className='contain w-full h-full'
                            />
                        </div>
                    </div>
                    <div className="bg-white grid md:grid-cols-2 items-center gap-20 md:gap-32 p-20 my-10">
                        <div>
                            <Image
                                src='/webdesign.svg'
                                width={400}
                                height={400}
                                alt='card'
                                className='contain w-full h-full'
                            />
                        </div>
                        <div>
                            <h1 className='text-4xl md:text-8xl uppercase pb-10'>WEBSITE DESIGN & DEVELOPMENT</h1>
                            <button className='bg-[#CEFA05] rounded-xl py-5 px-16 text-4xl'>Read more..</button>
                        </div>
                    </div>
                    <div className="bg-white grid md:grid-cols-2 items-center gap-20 md:gap-32 p-20 my-10">

                        <div>
                            <h1 className='text-4xl md:text-8xl uppercase pb-10'>SEO</h1>
                            <button className='bg-[#CEFA05] rounded-xl py-5 px-16 text-4xl'>Read more..</button>
                        </div>
                        <div>
                            <Image
                                src='/agscard (3).svg'
                                width={400}
                                height={400}
                                alt='card'
                                className='contain w-full h-full'
                            />
                        </div>
                    </div>

                    <div  className="flex justify-center pt-10">
                    <Button colors={'bg-black text-[#CEFA05]'} text={'Begin your AGS journey now '} para={'Book a Free Road Map session'}/>
                    </div>
                    <div className="bg-white grid md:grid-cols-2 items-center gap-20 md:gap-32 p-20 my-10">
                       
                        <div>
                            <h1 className='text-4xl md:text-8xl uppercase pb-10'>Branding</h1>
                            <button className='bg-[#CEFA05] rounded-xl py-5 px-16 text-4xl'>Read more..</button>
                        </div>
                        <div>
                            <Image
                                src='/agscard (2).svg'
                                width={400}
                                height={400}
                                alt='card'
                                className='contain w-full h-full'
                            />
                        </div>
                    </div>

                    <div className="py-10">
                       <Slider/>
                    </div> 

                    <Helmet/>
               </div>
            </div>

            <div className='bg-white absolute right-0 -top-60 w-60 h-12 -skew-y-6'></div>
        </div> 
    ) 
}

export default AgsExplained





