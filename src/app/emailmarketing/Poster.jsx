import Image from 'next/image'
import React from 'react'

const Poster = () => {
  return (
    <div className='slanted-div after:bg-[#CEFA05]'>
      <div className="grid justify-center">
        <Image
          src={'/emailposter2.svg'}
          width={400}
          height={400}
          alt='card'
          className='object-cover w-full md:h-[700px]'
        />
      </div>
    </div>
  )
}

export default Poster