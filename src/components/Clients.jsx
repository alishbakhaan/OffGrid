import React from 'react'

import Image from 'next/image';

const Clients = () => {
    return (
        <div className='slanted-div after:bg-[#CEFA05]'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full overflow-hidden opacity-10 bg-no-repeat bg-cover -top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/client.svg)` }}></div>

            <div className='mx-20 xl:mx-60 mb-20 '>
                <h1 className='text-4xl md:text-6xl uppercase text-center'>We serve with Pride</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-10 py-28">
                    <div className='bg-white p-5 rounded-lg'>
                        <Image
                            src={'/clientslogo (5).svg'}
                            alt='icon'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <Image
                            src={'/clientslogo (4).svg'}
                            alt='icon'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <Image
                            src={'/clientslogo (3).svg'}
                            alt='icon'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <Image
                            src={'/clientslogo (5).svg'}
                            alt='icon'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <Image
                            src={'/clientslogo (1).svg'}
                            alt='icon'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                    <div className='bg-white p-5 rounded-lg'>
                        <Image
                            src={'/clientslogo (4).svg'}
                            alt='icon'
                            width={300}
                            height={300}
                            className='object-contain'
                        />
                    </div>
                </div>

            </div>

              {/* vectors */}
      <div className='border-2 border-black absolute right-0 -top-20 w-28 h-20 -skew-y-6'></div>
      <div className='bg-white absolute left-0 bottom-10 w-20 h-12 -skew-y-6'></div>
        </div>
    )
}

export default Clients