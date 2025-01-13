import Image from 'next/image'
import React from 'react'
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const Card = ({ imagsrc, head, para, colors }) => {
    return (
        <div>
            <div className={`${colors}`}>
                <Image
                    src={imagsrc}
                    alt='images'
                    width={400}
                    height={400}
                    className='object-cover w-full h-full'
                />
                <div className='p-10'>
                    <h1 className="text-4xl font-bold uppercase">{head}</h1>
                    <p className={`${lato.className} text-xl opacity-60 capitalize py-6`}>{para}</p>

                    <div className="flex items-center gap-4">
                        <Image
                            src={'/avatar.svg'}
                            alt='icon'
                            width={50}
                            height={50}
                            className='object-cover'
                        />
                        <div>
                            <p className={`${lato.className} capitalize`}>
                                Jack Forge
                            </p>
                            <p className={`${lato.className} opacity-60 capitalize`}>
                                10 days ago
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card