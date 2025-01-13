import Image from 'next/image'
import React from 'react'

const ChartSec = () => {
  return (
    <div className='slanted-div after:bg-[#1A1A1A]'>
      <div className="flex justify-center mb-20">
        <Image
          alt='chart'
          src={'/chart.svg'}
          width={1200}
          height={1200}
          className='object-contain'
        />
      </div>

      {/* vectors */}
      <div className='border-2 border-white absolute left-0 bottom-20 w-32 h-20 -skew-y-6'></div>
      <div className='bg-white absolute right-0 top-0 md:-top-60 w-60 h-12 -skew-y-6'></div>
    </div>
  )
}

export default ChartSec