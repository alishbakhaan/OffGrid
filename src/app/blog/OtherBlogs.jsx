import Image from 'next/image'
import { Lato } from 'next/font/google';
import Card from '@/components/ui/Card';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const OtherBlog = () => {
    return (
        <div>
            <div className="slanted-div after:bg-[#CEFA05]" >
                {/* overlay effect */}
                <div className='absolute object-cover w-full opacity-5 overflow-hidden bg-no-repeat bg-cover -top-28 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/blogbg.svg)` }}></div>

              <div className="mx-10 xl:mx-40 md:mb-40">
              <h1 className="text-white text-center text-4xl lg:text-7xl font-bold uppercase pb-20">Other blogs</h1>

              <div className="grid md:grid-cols-2 gap-20">
                <Card colors={'bg-black text-white'} imagsrc={'/other-blog-1.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
                <Card colors={'bg-black text-white'} imagsrc={'/other-blog-2.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 py-20">
                <Card colors={'bg-black text-white'} imagsrc={'/other-blog-3.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
                <Card colors={'bg-black text-white'} imagsrc={'/other-blog-4.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
                <Card colors={'bg-black text-white'} imagsrc={'/other-blog-5.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
              </div>

              </div>

                {/* vectors */}
                <div className='bg-white absolute right-0 -top-20 md:-top-60 w-52 h-12 -skew-y-6'></div>
                <div className='border-2 border-black absolute left-0 bottom-20 w-20 h-16 -skew-y-6'></div>
                <div className='bg-[#EEFFA3] absolute left-0 bottom-0 w-40 h-12 -skew-y-6'></div>

            </div>
        </div>
    )
}

export default OtherBlog