import Image from 'next/image'
import { Lato } from 'next/font/google';
const lato = Lato({ subsets: ['latin'], weight: '400' });

const AboutUs = () => {
    return (
        <div>
            <div className="slanted-div after:bg-[#CEFA05]" >
                {/* overlay effect */}
                <div className='absolute object-cover w-full bg-cover opacity-10 bg-no-repeat overflow-hidden -top-40 lg:-top-60 right-0 left-0 bottom-0' style={{ backgroundImage: `url(/aboutbg.svg)` }}></div>

                <div className="slanted-div after:bg-black my-10 mx-8 xl:mx-40">
                    <Image
                        src={'/aboutlogo.svg'}
                        alt='icon'
                        width={300}
                        height={300}
                        className='object-contain w-auto absolute -top-20 sm:-top-52 left-[10%] sm:left-[40%] z-30'
                    />
                    <div className="flex justify-center items-end sm:-mt-52">
                        <div className="bg-[#CEFA05] p-4 sm:p-10 lg:p-20 h-1/2 z-20">
                            <h2 className="bg-black py-2 px-4 text-white text-xl sm:text-3xl lg:text-6xl uppercase text-center">Alex Dickinson</h2>
                            <h3 className='uppercase text-xl sm:text-2xl lg:text-5xl text-right leading-tight max-w-sm py-4'>message from our Founder and Head of Development, </h3>
                        </div>
                        <div className='z-10'>
                            <Image
                                src={'/aboutimage.svg'}
                                alt='icon'
                                width={500}
                                height={500}
                                className='object-contain border-r-[20px] border-[#CEFA05] sm:-ml-10'
                            />
                        </div>
                    </div>
                    {/* content */}
                    <div className={`${lato.className} text-white p-8 sm:p-20 text-xl space-y-10`}>
                        <p>
                            Hey business owner,
                        </p>
                        <p>
                            Being a Tradie is hard enough.br
                            <br />
                            Trust me I get it.
                        </p>
                        <p>
                            I’ve heard it all from family, friends and now even clients.
                            <br />
                            It’s a war out there.
                        </p>
                        <p>
                            When you first signed up to be a tradie, did you ever comprehend all the day to day tasks you’d have to manage.
                            <br />
                            Schedules, Ordering, Admin, Management, Marketing and the long list of chores that bring you nothing but headaches and do so little for the money needle.
                            <br />
                            Probably not....
                        </p>
                        <p>
                            So for the past few years you’ve played the juggling act, just getting through the day by the grit of your teeth.  <br />
                            Don’t worry, any sane person would feel the same, especially when you’re limited to your own time and resources.
                        </p>
                        {/* <p>
                            But it’s 2021 now and things are a little different, smart phones, smart TV’s and pretty soon we’ll be driving smart cars.
                        </p>
                        <p>
                            So, it’s about time you invest in a SMART-SYSTEM
                        </p>
                        <p>
                            I’m talking about automation (to get your time back)
                        </p>
                        <p>
                            Artificial Intelligence (because well.....computers are smarter than we are) & a 24/7 marketplace that never fatigues (because for the first time ever we have access to one......THE INTERNET.
                        </p>
                        <p>
                            I’m guessing you’ve been online for a while.
                        </p>
                        <p>
                            Trying to find the latest trends or hacks to solve all your problems.
                        </p>
                        <p>
                            Or you’ve looked through 20 different agencies that are all offering the same damn thing.
                        </p>
                        <p>
                            ‘With over 10 years of experience’
                        </p>
                        <p>
                            ‘The most affordable prices’
                        </p>
                        <p>
                            Or the best of all
                        </p>
                        <p>
                            ‘We guarantee an increase in your website traffic’ Well, guess what...
                        </p>
                        <p>
                            All that means nothing unless strangers end up knocking at your door, requesting to book your services.
                        </p>
                        <p>
                            People are not coming to your website, hoping the history of your business can solve their problems. They
                        </p>
                        <p>
                            WANT a SOLUTION and they WANT it NOW
                        </p>
                        <p>
                            That’s what makes us different.
                        </p>
                        <p>
                            We only care about the results and we won’t stop until we achieve them.
                        </p>
                        <p>
                            If you want to work with a team that actually prioritises return on investment and treats your business like their own. Then book a complimentary strategy session.
                        </p>
                        <p>
                            It’ll be the best opportunity for us to meet each other and undergo a thorough inspection on the following:  <br />
                            - Current website,                                <br />
                            - Social media channels                  <br />
                            - Email lists                  <br />
                            - Long term goals                  <br />
                            - Current business position                  <br />
                        </p>
                        <p>
                            From this I will be able to offer the most practical suggestions moving forward &.....only if you’re READY.
                        </p>
                        <p>
                            We’ll get to work. <br />
                            (remember this, as we’ll advise you ourselves if we think the business is ready for growth. It’s nothing personal, it’s just we don’t want businesses pissing money up the wall, when they don’t have their ducks in order)
                        </p>
                        <p>
                            I forgot to mention, <br />
                            There's no lock in contracts...because who the hell wants to be held hostage? NOT ME...
                        </p> */}

                        <h3 className='text-[#CEFA05] text-xl font-bold'>Read More...</h3>
                    </div>

                </div>

                {/* vectors */}
                <div className='bg-white absolute right-0 -top-20 xl:-top-60 w-56 h-12 -skew-y-6'></div>
                <div className='bg-[#EEFFA3] absolute left-0 top-0 w-40 h-12 -skew-y-6'></div>

            </div>
        </div>
    )
}

export default AboutUs