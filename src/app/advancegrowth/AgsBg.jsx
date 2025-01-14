import React from 'react'
import { Lato } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const lato = Lato({ subsets: ['latin'], weight: '700' });

const AgsBg = () => {
    return (
        <div className='slanted-div after:bg-[#CEFA05]'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full overflow-hidden opacity-10 bg-no-repeat bg-cover -top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/agsbg.svg)` }}></div>

            <div className='max-w-7xl m-auto p-10'>
                <h1 className='text-4xl md:text-6xl uppercase text-center'>
                    Our Advanced Growth System is a custom tailored, turn key machine that will have prospects knocking at your door the second we turn it on
                </h1>
                <p className={`${lato.className} text-center text-2xl py-10`}>It’s essentially like having an entire marketing team at your disposal</p>
                <div className='md:mb-40 text-center'>
                    <div className='flex flex-col lg:flex-row md:justify-center gap-10 py-5 text-2xl md:text-4xl'>
                        <div className='gap-4 inline-flex'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h2 className='uppercase'>Website</h2>
                        </div>
                        <div className='gap-4 inline-flex'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h2 className='uppercase'>Paid Ads manager</h2>
                        </div>
                        <div className='gap-4 inline-flex'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h2 className='uppercase'>Social Media Manager</h2>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row md:justify-center gap-10 py-5 text-2xl md:text-4xl'>
                        <div className='gap-4 inline-flex'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h2 className='uppercase'>Professional email writer</h2>
                        </div>
                        <div className='gap-4 inline-flex'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h2 className='uppercase'>Web/Graphic Designer</h2>
                        </div>
                        <div className='gap-4 inline-flex'>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <h2 className='uppercase'>Developers</h2>
                        </div>
                    </div>

                </div>

                </div>  
        
            {/* vectors */}
            <div className ='bg-white absolute right-0 top-0 md:-top-40 w-32 h-16 -skew-y-6'></div>
            <div className ='border-2 border-black absolute left-0 bottom-32 w-32 h-16 -skew-y-6'></div>
    </div > 
  )  
}

export default AgsBg