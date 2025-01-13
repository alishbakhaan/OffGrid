import Image from 'next/image'
import React from 'react'

const Posters = () => {
    return (
        <div className="slanted-div after:bg-[#1A1A1A]" >
            <div className='grid justify-center'>
            <Image
                src={'/poster-1.svg'}
                width={1000}
                height={1000}
                alt='card'
                className='object-cover w-full h-full md:h-[400px]'
            />
            <Image
                src={'/poster-2.svg'}
                width={1000}
                height={1000}
                alt='card'
                className='object-contain'
            />            
            </div>
        </div>
    )
}

export default Posters