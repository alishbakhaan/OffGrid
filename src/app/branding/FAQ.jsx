import React from 'react'
import { Lato } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const FAQ = () => {
    return (
        <div className="slanted-div after:bg-[#CEFA05]" >
            {/* overlay effect */}
            <div className='absolute object-cover w-full opacity-5 overflow-hidden bg-no-repeat bg-cover -top-32 xl:-top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>
            <div className="mx-10 xl:mx-40 md:mb-40">
                <h1 className="text-black text-center text-4xl sm:text-6xl font-bold uppercase pb-20">Frequently Asked Questions</h1>

                <div className={`${lato.className} w-full  text-white relative grid space-y-10`}>
                    <div className="py-5 px-4 sm:px-10 bg-black">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                                <span className='text-lg sm:text-xl'>Does your marketing agency handle branding?</span>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[#CEFA05] text-2xl transition group-open:rotate-180" />
                            </summary>
                            <p className='text-base text-white text-opacity-60 leading-relaxed group-open:animate-fadeIn mt-3 '>
                                Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-4 sm:px-10 bg-black">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                                <span className='text-lg sm:text-xl'>How is online marketing different than regular marketing?</span>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[#CEFA05] text-2xl transition group-open:rotate-180" />
                            </summary>
                            <p className='text-base text-white text-opacity-60 leading-relaxed group-open:animate-fadeIn mt-3 '>
                                Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-4 sm:px-10 bg-black">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                                <span className='text-lg sm:text-xl'>How does a marketing company come up with a campaign for my business?</span>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[#CEFA05] text-2xl transition group-open:rotate-180" />
                            </summary>
                            <p className='text-base text-white text-opacity-60 leading-relaxed group-open:animate-fadeIn mt-3 '>
                                Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-4 sm:px-10 bg-black">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                                <span className='text-lg sm:text-xl'>How do I get a good website design?</span>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[#CEFA05] text-2xl transition group-open:rotate-180" />
                            </summary>
                            <p className='text-base text-white text-opacity-60 leading-relaxed group-open:animate-fadeIn mt-3 '>
                                Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                    <div className="py-5 px-4 sm:px-10 bg-black">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                                <span className='text-lg sm:text-xl'>How can a full service advertising agency help with my marketing campaign?</span>
                                <FontAwesomeIcon icon={faChevronDown} className="text-[#CEFA05] text-2xl transition group-open:rotate-180" />
                            </summary>
                            <p className='text-base text-white text-opacity-60 leading-relaxed group-open:animate-fadeIn mt-3 '>
                                Springerdata offers a variety of
                                billing options, including monthly and annual subscription plans, as well as pay-as-you-go
                                pricing for certain services. Payment is typically made through a credit card or other
                                secure online payment method.
                            </p>
                        </details>
                    </div>
                </div>

            </div>

            {/* vectors */}
            <div classNameName='border-2 border-black absolute left-0 bottom-0 w-20 h-20 -skew-y-6'></div>
        </div>
    )
}

export default FAQ