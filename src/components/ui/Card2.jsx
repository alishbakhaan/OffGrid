import Image from 'next/image'
import React from 'react'

const Card2 = ({ bgcolor, section1, section2 }) => {
    return (
        <>
            <div className={`${bgcolor} relative flex justify-center items-center gap-20 md:gap-32 p-10 md:p-20 my-10`}>
                <div>
                    {section1}
                </div>
                <div>
                   {section2}
                </div>
            </div>
        </>
    )
}

export default Card2