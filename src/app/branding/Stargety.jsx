import { Londrina_Outline } from 'next/font/google';
const londrina = Londrina_Outline({ subsets: ['latin'], weight: '400' });
import Card2 from '@/components/ui/Card2'
import React from 'react'
import { Lato } from 'next/font/google';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const Stargety = () => {
    return (
        <div>
            <div>
                <div className="slanted-div after:bg-white" >

                    <div className="relative mx-10 xl:mx-32 md:mb-40">

                        <div className='grid xl:grid-cols-2 justify-center items-center gap-20 md:gap-32'>
                            <div>
                            <>
                                    <div className='flex gap-4 lg:gap-10 items-center'>
                                        <h1 className="text-black text-5xl sm:text-6xl lg:text-9xl font-bold py-4 uppercase">Strategy</h1>
                                        <div className='w-28 h-10 sm:h-20 lg:h-32 bg-[#CEFA05] -skew-x-12'></div>
                                    </div>
                                    <div className="flex gap-5 items-center">
                                        <h1 className="text-black text-4xl sm:text-5xl lg:text-9xl font-bold py-4 uppercase">&</h1>
                                        <h1 className={`${londrina.className} text-black text-5xl sm:text-6xl lg:text-9xl font-bold uppercase`}>Planning</h1>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-20 pt-10">
                                        <div className='text-xl sm:text-2xl space-y-6'>
                                            <p><FontAwesomeIcon className='mr-4' icon={faArrowCircleRight} />Consulting</p>
                                            <p><FontAwesomeIcon className='mr-4' icon={faArrowCircleRight} />Research + Discovery</p>
                                            <p><FontAwesomeIcon className='mr-4' icon={faArrowCircleRight} />Brand Strategy</p>
                                            <p><FontAwesomeIcon className='mr-4' icon={faArrowCircleRight} />Digital Strategy</p>
                                            <p><FontAwesomeIcon className='mr-4' icon={faArrowCircleRight} />Marketing Strategy</p>
                                        </div>
                                        <div className=''>
                                            <p className={`${lato.className} text-base sm:text-xl max-w-sm leading-relaxed tracking-wide`}>
                                                Brand strategy is the blueprint that governs your brand. Developing a brand strategy allows you to compete
                                                in the marketplace and achieve the best outcomes. We’ll support you to establish an effective brand strategy,
                                                so you have a strong foundation for your future marketing tactics.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            </div>
                            <div>
                            <>
                                    <Image
                                        src={'/strategybg.svg'}
                                        width={600}
                                        height={600}
                                        alt='card'
                                        className='object-contain'
                                    />
                                </>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/consulting.svg'}
                                            width={400}
                                            height={400}
                                            alt='card'
                                            className='cover w-full h-full'
                                        />
                                    </>
                                }
                                bgcolor={'bg-black md:flex-row-reverse flex-col'}
                                section1={
                                    <>
                                        <h1 className="text-[#CEFA05] text-2xl lg:text-5xl font-bold uppercase pb-10">Consulting</h1>
                                        <p className={`${lato.className} text-white text-base md:text-xl max-w-xl leading-relaxed`}>
                                            In a saturated market, the only thing that differentiates you and your competitors is your
                                            brand.Looking for guidance on how you can stand out from the crowd? Speak with one of our consultants today.
                                            Experts in brand strategy that allows your business to connect and engage with your audience on the emotional level.
                                            Analyse, Plan & Implement a brand strategy.
                                        </p>
                                    </>
                                }
                            />
                        </div>

                        <div>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/result + discovery.svg'}
                                            width={400}
                                            height={400}
                                            alt='card'
                                            className='cover w-full h-full'
                                        />
                                    </>
                                }
                                bgcolor={'bg-black md:flex-row flex-col'}
                                section1={
                                    <>
                                        <h1 className="text-[#CEFA05] text-2xl lg:text-5xl font-bold uppercase pb-10">Research + Discovery</h1>
                                        <p className={`${lato.className} text-white text-base md:text-xl max-w-xl leading-relaxed`}>
                                            We’ll analyse your current brand strategy, online presence, market demographics and competitor
                                            base to discover a penetrative strategy that positions your business in a new light from other service businesses
                                        </p>
                                    </>
                                }
                            />
                        </div>

                        <div>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/brand-strategy.svg'}
                                            width={400}
                                            height={400}
                                            alt='card'
                                            className='cover w-full h-full'
                                        />
                                    </>
                                }
                                bgcolor={'bg-black md:flex-row-reverse flex-col'}
                                section1={
                                    <>
                                        <h1 className="text-[#CEFA05] text-2xl lg:text-5xl font-bold uppercase pb-10">Brand Strategy</h1>
                                        <p className={`${lato.className} text-white text-base md:text-xl max-w-xl leading-relaxed`}>
                                            Brand strategy is the blueprint that governs your brand. Developing a brand strategy allows you to
                                            compete in the marketplace and achieve the best outcomes. We’ll support you to establish an effective
                                            brand strategy, so you have a strong foundation for your future marketing tactics.
                                        </p>
                                    </>
                                }
                            />
                        </div>

                        <div>
                            <Card2
                                section2={
                                    <>
                                        <Image
                                            src={'/digital-strategy.svg'}
                                            width={400}
                                            height={400}
                                            alt='card'
                                            className='cover w-full h-full'
                                        />
                                    </>
                                }
                                bgcolor={'bg-black md:flex-row flex-col'}
                                section1={
                                    <>
                                        <h1 className="text-[#CEFA05] text-2xl lg:text-5xl font-bold uppercase pb-10">Digital Strategy</h1>
                                        <p className={`${lato.className} text-white text-base md:text-2xl max-w-xl leading-relaxed`}>
                                            It’s what we do!
                                        </p>
                                        <p className={`${lato.className} text-white text-base md:text-xl max-w-xl leading-relaxed py-10`}>
                                            Our Advanced Growth System is the only digital strategy you’ll ever need. Want to know more?
                                        </p>
                                        <Button colors={'text-black bg-[#CEFA05]'} text={' Learn more about our AGS'} />
                                    </>
                                }
                            />
                        </div>
                    </div>

                    <Image
                        src={'/btm-banner.svg'}
                        width={400}
                        height={400}
                        alt='card'
                        className='object-cover -mb-24 xl:-mb-40 w-full h-full'
                    />

                </div>
            </div>
        </div>
    )
}

export default Stargety