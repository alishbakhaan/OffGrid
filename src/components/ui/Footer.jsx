import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const lato = Lato({ subsets: ['latin'], weight: '400' });
import { Lato } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='slanted-div after:bg-black p-40'>
            <div className="mx-10 sm:mx-20 xl:mx-40">
                <div className="grid xl:grid-cols-4 gap-10 text-white">
                    <div  className='space-y-10'>
                        <Image src={'/logo.svg'}
                            width={300}
                            height={300}
                            className='object-contain'
                            alt='logo'
                        />
                        <p className={`${lato.className} text-[#AEAEAE] tracking-wider leading-loose`}>Off Grid was established with one goal. To help ambitious trade and construction businesses scale their operation through the use of modern digital marketing strategies</p>
                        <div className=' flex items-center gap-5'>
                            <Link href={'/'}>
                                <Image
                                    src={'/icon (1).svg'}
                                    alt='icon'
                                    width={10}
                                    height={10}
                                    className='object-contain'
                                />
                            </Link>
                            <Link href={'/'}>
                                <Image
                                    src={'/icon (2).svg'}
                                    alt='icon'
                                    width={20}
                                    height={20}
                                    className='object-contain'
                                />
                            </Link>
                        </div>
                    </div>
                    <div  className='space-y-4'>
                        <h1 className='text-5xl uppercase'>Services</h1>
                        <ul className={`${lato.className} space-y-2`}>
                            <li>PPC</li>
                            <li>Social Media Management</li>
                            <li>Lead Generation</li>
                            <li>Email Marketing</li>
                            <li>Website Design & Development</li>
                            <li>SEO</li>
                            <li>Branding</li>
                            <li>Logo Design</li>
                        </ul>
                    </div>
                    <div  className='space-y-4'>
                        <h1 className='text-5xl uppercase '>Contact</h1>
                        <ul className={`${lato.className} space-y-2`}>
                            <li>Sydney, Australia.</li>
                            <li>hello@offgriddigital.com.au</li>
                            <li>0411 124 879</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-5xl uppercase'>OG Weekly</h1>
                        <p className={`${lato.className} text-[#AEAEAE] tracking-wider leading-loose`}>To receive weekly educational emails covering digital marketing news and advice, please subscribe to our newsletter. Don`t worry, you can unsubscribe at any time.</p>
                        <input className={`${lato.className} bg-transparent w-full border-2 border-white border-opacity-40 block p-4 rounded-md`} type="email" name="" id="" placeholder='Email Address*' />
                        <button className={`${lato.className} bg-[#CEFA05] py-4 w-full text-center rounded-md text-black text-xl`}>Subscribe <FontAwesomeIcon className='ml-2' icon={faArrowRight}/></button>
                    </div>
                </div>

                <div>
                    <p className={`${lato.className} text-white text-opacity-40 uppercase pt-20`}>©2021 - off grid digital</p>
                </div>
            </div>
        </div>
    )
}

export default Footer