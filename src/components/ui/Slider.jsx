'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/globals.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={true} 
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                }}
            >
                <SwiperSlide>
                    <Image
                        src='/branding-2.svg'
                        width={400}
                        height={400}
                        alt='card'
                        className='contain w-full h-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/branding-1.svg'
                        width={400}
                        height={400}
                        alt='card'
                        className='contain w-full h-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/branding-2.svg'
                        width={400}
                        height={400}
                        alt='card'
                        className='contain w-full h-full'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/branding-1.svg'
                        width={400}
                        height={400}
                        alt='card'
                        className='contain w-full h-full'
                    />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
