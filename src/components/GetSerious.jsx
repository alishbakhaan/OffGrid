import Image from 'next/image'
import React from 'react'
import { Lato } from 'next/font/google';
import Link from 'next/link';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const GetSerious = () => {
    return (
        <div>

            <div className="slanted-div after:bg-black" >
                {/* overlay effect */}
                <div className='absolute object-cover w-full overflow-hidden bg-no-repeat bg-cover -top-72 lg:-top-40 xl:-top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/seriousbg.svg)` }}></div>

                <div className="relative mx-10 mb-40">
                    <h1 className='text-white text-center uppercase text-4xl sm:text-6xl pb-20'>Let’s get serious</h1>
                    <div className="flex flex-col lg:flex-row gap-32 justify-center max-w-5xl m-auto">
                        <div className="bg-[#CEFA05] p-10 text-center">
                            <div className='grid justify-center'>
                            <h1 className='text-black text-center uppercase text-4xl sm:text-6xl'>Instagram</h1>
                            <Image
                                src={'/getseriouscard (2).svg'}
                                alt='icon'
                                width={300}
                                height={300}
                                className='object-contain py-8'
                            />
                            </div>
                            <div>
                            <h3 className={`${lato.className} text-xl sm:text-2xl`}>The one Instagram CHANNEL you need to be following</h3>
                            <p className={`${lato.className} py-8 text-base sm:text-xl`}>We post 7 days a week, so if you want to learn something, market independently and figure things out yourself. Give us a follow</p>
                            <div className={`${lato.className} py-4`}>
                                <Link href={'/'}>
                                    <button className='bg-black rounded-md py-4 px-6 text-[#CEFA05] text-sm sm:text-xl cursor-pointer'>Become smarter with us</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="bg-[#CEFA05] p-10 text-center">
                            <div className="grid justify-center">
                            <h1 className='text-black text-center uppercase text-4xl sm:text-6xl'>Ads</h1>
                            <Image
                                src={'/getseriouscard (1).svg'}
                                alt='icon'
                                width={300}
                                height={300}
                                className='object-contain py-8'
                            />
                            </div>
                            <div>
                            <h3 className={`${lato.className} text-xl sm:text-2xl`}>Now this is where the magic happens</h3>
                            <p className={`${lato.className} py-8 text-base sm:text-xl`}>Now this is where the magic happens...
                                Ever heard of a strategy deployed so effectively that it literally...
                                Targets your ‘ideal client’,
                            </p>
                            <div className={`${lato.className} py-4`}>
                                <Link href={'/'}>
                                    <button className='bg-black rounded-md py-4 px-10 text-[#CEFA05] text-sm sm:text-xl cursor-pointer'>Read More</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* vectors */}
                <div className='bg-[#EEFFA3] absolute right-0 -top-20 xl:-top-52 w-52 h-12 -skew-y-6'></div>
                <div className='border-2 border-[#CEFA05] absolute left-0 top-40 w-20 h-20 -skew-y-6'></div>

            </div>

        </div>
    )
}

export default GetSerious