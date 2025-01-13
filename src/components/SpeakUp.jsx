import React from 'react'
import Image from 'next/image'
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const SpeakUp = () => {
    return (
        <div className='slanted-div after:bg-[#CEFA05]'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full overflow-hidden opacity-20 bg-no-repeat bg-cover -top-28 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/speakbg.svg)` }}></div>

            <div className="mx-10 mb-40">
                <div className='flex flex-wrap gap-20 justify-center items-center'>

                    <div>
                        <h1 className='text-5xl md:text-7xl uppercase font-extrabold'>About off grid</h1>
                        <div className={`${lato.className} text-xl py-5 space-y-5 mb-10`}>
                            <p>
                                Hey!
                            </p>
                            <p>
                                I’m Alex Dickinson and the founder of Off Grid Digital.
                            </p>
                            <p>
                                Before I move on just remember....WE ARE NOT AN AGENCY!
                            </p>
                            <p>
                                You won’t be lied to,
                            </p>
                            <p>
                                You won’t be given false promises,
                            </p>
                            <p>
                                & you won’t be burned.
                            </p>
                            <p>
                                When Off Grid was established, I made a promise.
                            </p>
                            <p>
                                Off Grid Digital would be the GO-TO Growth Partner for any <br />
                                Tradie looking to scale their business using an online system
                            </p>
                            <p>
                                & i intend on keeping it.
                            </p>
                            <p>
                                So what does this mean for you?
                            </p>
                        </div>
                        <button className={`${lato.className} bg-black text-white uppercase px-8 py-4 rounded-md text-xl shadow-md shadow-black/40`}>Heres our promise</button>
                    </div>

                    <div>
                        <Image
                            src={'/speaker.svg'}
                            alt='icon'
                            width={500}
                            height={500}
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>

            {/* vectors */}
            <div className='border-[3px] border-black absolute right-0 top-0 w-32 h-20 -skew-y-6'></div>
            <div className='bg-[#EEFFA3] absolute right-0 bottom-30 md:bottom-60 w-40 h-12 -skew-y-6'></div>
            <div className='bg-[#EEFFA3] bg-opacity-60 absolute left-0 -top-10 w-40 h-12 -skew-y-6'></div>
        </div>
    )
}

export default SpeakUp