import React from 'react'
import { Lato } from 'next/font/google';
import Link from 'next/link';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const Button = ({colors, text, para}) => {
    return (
        <>
              <Link href={'/'}>
                    <button className={`${lato.className} ${colors} tracking-wider text-base md:text-xl text-center font-bold cursor-pointer rounded-lg py-4 px-2 md:px-20 shadow-lg shadow-black/50`} >
                        {text}
                        <span className='text-sm md:text-base block'>{para}</span>
                    </button>
                </Link>
           
        </>
    )
}

export default Button