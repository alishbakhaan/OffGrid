import Card from '@/components/ui/Card';

const RecentBlog = () => {
    return (
        <div>
            <div className="slanted-div after:bg-[#CEFA05]" >
                {/* overlay effect */}
                <div className='absolute object-cover w-full opacity-5 overflow-hidden -top-28 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>

              <div className="mx-10 xl:mx-40 md:mb-40">
              <h1 className="text-black text-center text-4xl lg:text-7xl font-bold uppercase pb-20">Recent blogs</h1>

              <div className="grid md:grid-cols-2 gap-20">
                <Card colors={'bg-black text-white'} imagsrc={'/recentblog1.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
                <Card colors={'bg-black text-white'} imagsrc={'/recentblog2.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 py-20">
                <Card colors={'bg-black text-white'} imagsrc={'/recentblog3.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
                <Card colors={'bg-black text-white'} imagsrc={'/recentblog4.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
                <Card colors={'bg-black text-white'} imagsrc={'/recentblog5.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'}/>
              </div>

              </div>

                {/* vectors */}
                <div className='border-2 border-black absolute right-0 -top-20 w-20 h-20 -skew-y-6'></div>
              

            </div>
        </div>
    )
}

export default RecentBlog