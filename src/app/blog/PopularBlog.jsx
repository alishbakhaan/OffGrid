import Card from '@/components/ui/Card';

const PopularBlog = () => {
  return (
    <div>
      <div className="slanted-div after:bg-black" >
        {/* overlay effect */}
        <div className='absolute object-cover w-full opacity-20 overflow-hidden bg-no-repeat bg-cover -top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/blogbg.svg)` }}></div>

        <div className="relative mx-10 xl:mx-40 md:mb-40">
          <h1 className="text-white text-center text-4xl lg:text-7xl font-bold uppercase pb-20">Popular blogs</h1>

          <div className="grid md:grid-cols-2 gap-20">
            <Card colors={'bg-[#CEFA05]'} imagsrc={'/popular-blog_1.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'} />
            <Card colors={'bg-[#CEFA05]'} imagsrc={'/popular-blog_2.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 py-20">
            <Card colors={'bg-[#CEFA05]'} imagsrc={'/popular-blog_3.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'} />
            <Card colors={'bg-[#CEFA05]'} imagsrc={'/popular-blog_4.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'} />
            <Card colors={'bg-[#CEFA05]'} imagsrc={'/popular-blog_5.svg'} head={'This is our First blog'} para={'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elitadipiscing elit'} />
          </div>

        </div>

        {/* vectors */}
        <div className='bg-white absolute left-0 -top-10 w-60 h-10 -skew-y-6'></div>
        <div className='bg-[#EEFFA3] absolute right-0 top-0 lg:-top-56 w-40 h-12 -skew-y-6'></div>

      </div>
    </div>
  )
}

export default PopularBlog