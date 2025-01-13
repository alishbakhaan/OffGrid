import Image from 'next/image'
import React from 'react'

const Poster1 = () => {
    return (
        <div className="slanted-div after:bg-[#1A1A1A]">
            <div >
                <Image
                    src={'/poster1.svg'}
                    width={400}
                    height={400}
                    alt='card'
                    className='object-cover w-full h-full lg:h-[650px]'
                />
                <Image
                    src={'/poster2.svg'}
                    width={400}
                    height={400}
                    alt='card'
                    className='object-cover w-full h-full'
                />
            </div>
        </div>
    )
}

export default Poster1