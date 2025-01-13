import React from 'react'
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '700' });

const TestSection = () => {
    return (
        <div className='slanted-div after:bg-white'>
            {/* overlay effect */}
            <div className='absolute object-cover w-full overflow-hidden bg-no-repeat bg-cover -top-28 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/testbg.svg)` }}></div>

            <div className='mx-20 lg:mx-60 mb-20 md:mb-40 '>
                <h1 className='text-3xl lg:text-6xl uppercase text-center'>Do you think your website could be doing better? Check with our Free website Performance Test</h1>
                <div className={`${lato.className} py-10 space-y-4`}>
                    <label className='block py-2 text-black text-opacity-60 capitalize' htmlFor="website">Website URL</label>
                    <input className='block w-full text-black text-opacity-60 capitalize p-4 bg-none border-2 rounded-md' type="url" name="" id="" placeholder='Enter your website address' />
                    <label className='block py-2 text-black text-opacity-60 capitalize' htmlFor="website">What’s the biggest challenge with your website right now?</label>
                    <select className='block w-full text-black text-opacity-60 capitalize p-4 bg-none border-2 rounded-md'  name="cars" id="cars">
                        <option value="volvo">I need more traffic</option>
                        <option value="saab">I need more traffic</option>
                        <option value="mercedes">I need more traffic</option>
                        <option value="audi">I need more traffic</option>
                    </select>
                </div>
                <button className={`${lato.className} bg-[#CEFA05] text-black w-full uppercase p-4 rounded-md text-xl shadow-md shadow-black/30`}>Next</button>
            </div>
        </div>
    )
}

export default TestSection