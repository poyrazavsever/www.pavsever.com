import React, { useState } from 'react'
import ReactIcon from "../../Components/Icon"
import {data as skillData} from "../../skillsData"
function Banner() {

    const iconStyle = "text-lg text-zinc-500 hover:text-neutral-200 transition-all"
    const statboxStyle = "text-2xl text-zinc-300"
    const API = "https://api.github.com/users/poyrazavsever"
    
    const [repo, setRepo] = useState("")
    const [designs, setDesigns] = useState("")
    const [useTech, setUseTech] = useState("")
    const [bio, setBio] = useState("")


    function getProfile() {

        fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setRepo(data.public_repos)
            setBio(data.bio)
            setDesigns(data.location)
            setUseTech(skillData.length)
        }, (err) => {
            console.log(err)
        })

    }

    getProfile()

    return (

        <div className='flex flex-col gap-32 desktop:justify-between mobile:pl-10 mobile:pr-3 md:py-12'>

            <div className='flex desktop:justify-between items-center mobile:pl-10 mobile:pr-3'>

                <div>
                    <h2 className='text-lg md:text-xl font-medium text-neutral-300'>Poyraz Avsever</h2>
                    <p className='text-neutral-500 pt-2 text-sm md:text-base'>{bio}</p>

                    <p className='flex flex-col items-start text-sm md:text-base text-neutral-500 gap-4 md:w-[450px] pt-3 leading-loose'>
                        I am Poyraz, I'm 18 years old. I have been interested in UI/UX design and frontend development for 1.5 years. I use React and Tailwind in frontend development. If you'd like to talk to me about something;
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

                <div>
                    <img src={process.env.PUBLIC_URL + "/Images/Other/bannerpp.jpg"} alt="bannerPP" className='w-56 h-56 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all mobile:hidden duration-500' />
                </div>

            </div>

            <div>

                <div className=' hidden md:flex flex-col md:flex-row justify-start items-center gap-8'>

                    <div className='relative px-6 py-8'>
                        <div className='flex flex-col justify-start items-start gap-3 z-30'>
                            <div><ReactIcon iconName={"AiOutlineCode"} iconType={"ai"} classname={statboxStyle} /></div>
                            <div><h2 className='text-xl font-medium text-zinc-300'>Projects</h2></div>
                            <div><p className='text-base text-zinc-400 font-light'><span className='text-lg text-zinc-200 font-semibold'>{repo}</span> Completed Project</p></div>
                        </div>
                        <div className='absolute bg-zinc-800 opacity-30 stroke-zinc-400 rounded-lg w-full h-full top-0 left-0 -z-30'></div>
                        <div className='bg-gradient-to-t from-red-500 to-violet-400 rounded-lg w-1/3 h-full opacity-20 blur-2xl absolute top-0 left-0 -z-30'></div>
                    </div>

                    <div className='relative px-6 py-8'>
                        <div className='flex flex-col justify-start items-start gap-3 z-30'>
                            <div><ReactIcon iconName={"AiOutlineCode"} iconType={"ai"} classname={statboxStyle} /></div>
                            <div><h2 className='text-xl font-medium text-zinc-300'>Designs</h2></div>
                            <div><p className='text-base text-zinc-400 font-light'><span className='text-lg text-zinc-200 font-semibold'>{designs}</span> Completed Designs</p></div>
                        </div>
                        <div className='absolute bg-zinc-800 opacity-30 stroke-zinc-400 rounded-lg w-full h-full top-0 left-0 -z-30'></div>
                        <div className='bg-gradient-to-t from-emerald-300 to-sky-400 rounded-lg w-1/3 h-full opacity-20 blur-2xl absolute top-0 left-0 -z-30'></div>
                    </div>

                    <div className='relative px-6 py-8'>
                        <div className='flex flex-col justify-start items-start gap-3 z-30'>
                            <div><ReactIcon iconName={"AiOutlineCode"} iconType={"ai"} classname={statboxStyle} /></div>
                            <div><h2 className='text-xl font-medium text-zinc-300'>Used Technologies</h2></div>
                            <div><p className='text-base text-zinc-400 font-light'><span className='text-lg text-zinc-200 font-semibold'>{useTech}</span> Experienced technology</p></div>
                        </div>
                        <div className='absolute bg-zinc-600 opacity-30 stroke-zinc-400 rounded-lg w-full h-full top-0 left-0 -z-30'></div>
                        <div className='bg-gradient-to-t from-yellow-300 to-red-100 rounded-lg w-1/3 h-full opacity-20 blur-2xl absolute top-0 left-0 -z-30'></div>
                    </div>

                </div>

            </div>


            <div className='absolute group mr-28 -z-20'>

                <div className='opacity-80 mobile:opacity-50'>
                    <div className='w-14 h-14 bg-amber-400 blur-3xl opacity-50 absolute top-5 -right-16 -z-20'></div>

                    <div className='w-12 h-12 bg-emerald-400 blur-3xl opacity-50 absolute -top-5 -left-12 -z-20'></div>

                    <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-sky-400 opacity-50 blur-3xl absolute bottom-0 -right-28 -z-20'></div>

                </div>

                <div className='w-48 h-48'>

                </div>

            </div>



        </div>

    )
}

export default Banner