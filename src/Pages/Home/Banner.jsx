import React from 'react'
import ReactIcon from "../../Components/Icon"

function Banner() {

    const iconStyle = "text-lg text-zinc-500 hover:text-neutral-200 transition-all"

    return (

        <div className='flex desktop:justify-between items-center mobile:pl-10 mobile:pr-3'>

            <div>
                <h2 className='text-lg md:text-xl font-medium text-neutral-300'>Poyraz Avsever</h2>
                <p className='text-neutral-500 pt-2 text-sm md:text-base'>Developer & Designer</p>

                <p className='flex flex-col items-start text-sm md:text-base text-neutral-500 gap-4 md:w-[450px] pt-3'>
                    I am Poyraz, I'm 17 years old. I have been interested in UI/UX design and frontend development for 1.5 years. I use React and Tailwind in frontend development. If you'd like to talk to me about something;
                </p>

                <button className='flex items-center gap-1 text-neutral-400 text-base md:text-lg hover:gap-2 transition-all pt-4'>
                    <a href='mailto:poyrazavsever@gmail.com'>Get in touch</a>
                    <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-400" /></span>
                </button>

                <div className='flex items-center gap-4 md:pr-4 pt-4'>

                    <a href="https://www.instagram.com/p.avsever" target='_blank' rel="noreferrer">
                        <ReactIcon iconName={"AiFillInstagram"} iconType={"ai"} classname={iconStyle} />
                    </a>

                    <a href="https://www.linkedin.com//in/poyraz-avsever-252408233/" target='_blank'
                        rel="noreferrer">
                        <ReactIcon iconName={"AiFillLinkedin"} iconType={"ai"} classname={iconStyle} />
                    </a>

                    <a href="https://www.github.com/poyrazavsever" target='_blank' rel="noreferrer">
                        <ReactIcon iconName={"AiFillGithub"} iconType={"ai"} classname={iconStyle} />
                    </a>

                    <a href="https://www.twitter.com/poyrazavsever" target='_blank' rel="noreferrer">
                        <ReactIcon iconName={"AiOutlineTwitter"} iconType={"ai"} classname={iconStyle} />
                    </a>

                </div>

            </div>

            <img src={process.env.PUBLIC_URL + "/Images/Other/bannerpp.jpg"} alt="bannerPP" className='w-56 h-56 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all mobile:hidden duration-500' />

            <div className='absolute group mr-28 -z-20'>

                <div className='opacity-80 mobile:opacity-50'>
                    <div className='w-14 h-14 bg-amber-400 blur-3xl absolute top-5 -right-16 -z-20'>
                    </div>
                    <div className='w-12 h-12 bg-emerald-400 blur-3xl absolute -top-9 -left-12 -z-20'></div>
                    <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-sky-400 opacity-70 blur-3xl absolute bottom-0 -right-28 -z-20'></div>
                    <div className='w-16 h-16 bg-red-400 opacity-70 blur-3xl absolute -left-24 -bottom-0 -z-20'>
                    </div>
                    <div className='w-14 h-14 bg-pink-400 blur-3xl absolute -top-24 right-16 -z-20'>
                    </div>
                    <div className='w-12 h-12 bg-orange-900 blur-3xl absolute top-0 left-12 -z-20'></div>
                    <div className='w-12 h-12 dekstop:w-24 dekstop:h-24 bg-indigo-600 opacity-70 blur-3xl absolute -bottom-5 right-24 -z-20'></div>
                    <div className='w-12 h-12 bg-purple-500 opacity-70 blur-3xl absolute left-24 bottom-24 -z-20'>
                    </div>
                </div>

                <div className='w-48 h-48'>

                </div>

            </div>



        </div>

    )
}

export default Banner