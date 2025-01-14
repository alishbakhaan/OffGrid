import Image from 'next/image'
import React from 'react'

const Yourself = () => {
    return (
        <div className='slanted-div after:bg-white'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full opacity-20 overflow-hidden bg-no-repeat bg-cover -top-28 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/yourselfbg.svg)` }}></div>

            <div className="mx-10 mb-10 md:mb-40">
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div>
                        <Image
                            src={'/yourselfcard.svg'}
                            alt='icon'
                            width={700}
                            height={700}
                            className='object-contain drop-shadow-2xl'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-4xl lg:text-7xl uppercase font-extrabold md:pb-6'>Rather do-it-yourself? </h1>
                        <h1 className='text-2xl lg:text-5xl uppercase pt-10 max-w-2xl'>10X your results with this guide on Hunting down leads and winning them as clients....it’s totally FREE</h1>
                        <div className='grid sm:grid-cols-2 gap-5 py-16'>

                            <input className='text-xl block bg-transparent border border-black border-opacity-40 rounded-md p-4' type="text" placeholder='Name*' />
                            <input className='text-xl block bg-transparent border border-black border-opacity-40 rounded-md p-4' type="email" placeholder='Email Address*' />
                            <input className='text-xl block bg-transparent border border-black border-opacity-40 rounded-md p-4' type="number" placeholder='Phone Number*' />
                            <input className='text-xl block bg-transparent border border-black border-opacity-40 rounded-md p-4' type="url" placeholder='Website*' />

                        </div>
                        <button className='bg-[#CEFA05] uppercase p-4 rounded-md text-2xl tracking-widest'>I WANT IT NOW</button>
                    </div>
                </div>
            </div>

            {/* vectors */}
            <div className='border-2 border-black absolute right-0 top-0 md:-top-60 w-40 h-12 -skew-y-6'></div>
            <div className='bg-white bg-opacity-60 absolute left-0 -top-10 w-40 h-12 -skew-y-6'></div>
        </div>
    )
}

export default Yourself