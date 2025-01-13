import Button from '@/components/ui/Button'
import React from 'react'

const BtnBanner = () => {
    return (
        <div>
            <div className="slanted-div after:bg-[#CEFA05]" >
                {/* overlay effect */}
                <div className='absolute object-cover w-full opacity-5 overflow-hidden -top-28 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>
                <div className='flex justify-center mb-10 md:mb-40 w-full'>
                    <Button colors={'text-[#CEFA05] bg-black'} text={' Learn more about our AGS'} para={'Book a Free 30 Road Map Session'}/>
                </div>

            </div>
        </div>
    )
}

export default BtnBanner