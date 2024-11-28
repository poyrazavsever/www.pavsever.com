import React, { useState, useEffect } from 'react';
import ReactIcon from "../../Components/Icon";
import { data as skillData } from "../../skillsData";
import { motion, useAnimation } from 'framer-motion';
import {StatsCard} from "../../Components/StatsCard"

function Banner() {
    const iconStyle = "text-lg text-zinc-500 hover:text-neutral-200 transition-all";
    const API = "https://api.github.com/users/poyrazavsever";

    const [repo, setRepo] = useState("");
    const [designs, setDesigns] = useState("");
    const [useTech, setUseTech] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState("");

    const controls = useAnimation();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API);
                const data = await response.json();
                setRepo(data.public_repos);
                setBio(data.bio);
                setDesigns(data.location);
                setUseTech(skillData.length);
                setImage(data.avatar_url);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

        // Animation for Banner component
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1 }
        });

    }, [controls]);

    return (
        <motion.div
            className='flex flex-col gap-32 desktop:justify-between mobile:pr-3 md:py-12'
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
        >
            <div className='flex desktop:justify-between items-center mobile:pl-10 mobile:pr-3'>
                <div>
                    <h2 className='text-lg md:text-xl font-medium text-neutral-300'>Poyraz Avsever</h2>
                    <p className='text-neutral-500 pt-2 text-sm md:text-base'>{bio}</p>

                    <p className='flex flex-col items-start text-sm md:text-base text-neutral-500 gap-4 md:w-[450px] pt-3 leading-loose'>
                        I am Poyraz. I have been interested in UI/UX design and software development. I use React and Tailwind in frontend development. If you'd like to talk to me about something;
                    </p>

                    <button className='flex items-center gap-1 text-neutral-400 text-base md:text-lg hover:gap-2 transition-all pt-4'>
                        <a href='mailto:poyrazavsever@gmail.com'>Get in touch</a>
                        <span><ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} iconColor="text-neutral-400" /></span>
                    </button>

                    <div className='flex items-center gap-4 md:pr-4 pt-4'>
                        <a href="https://www.instagram.com/p.avsever" target='_blank' rel="noreferrer">
                            <ReactIcon iconName={"AiFillInstagram"} iconType={"ai"} classname={iconStyle} />
                        </a>

                        <a href="https://www.linkedin.com//in/poyraz-avsever-252408233/" target='_blank' rel="noreferrer">
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
                    <img src={image} alt="bannerPP" className='w-56 h-56 rounded-full object-cover object-top grayscale hover:grayscale-0 transition-all mobile:hidden duration-500' />
                </div>
            </div>

            <div className='hidden md:flex md:flex-row items-center justify-between gap-8'>
                <StatsCard iconName="AiOutlineCode" title="Projects" value={repo} gradientColors="from-red-500 to-violet-400" />
                <StatsCard iconName="AiOutlineAntDesign" title="Designs" value={designs} gradientColors="from-emerald-300 to-sky-400" />
                <StatsCard iconName="AiFillSignal" title="Used Technologies" value={useTech} gradientColors="from-yellow-300 to-red-100" />
            </div>

            <div className='absolute group mr-28 -z-20'>
                <div className='opacity-80 mobile:opacity-50'>
                    <div className='w-14 h-14 bg-amber-400 blur-3xl opacity-50 absolute top-5 -right-16 -z-20'></div>
                    <div className='w-12 h-12 bg-emerald-400 blur-3xl opacity-50 absolute -top-5 -left-12 -z-20'></div>
                    <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-sky-400 opacity-50 blur-3xl absolute bottom-0 -right-28 -z-20'></div>
                </div>
                <div className='w-48 h-48'></div>
            </div>
        </motion.div>
    );
}

export default Banner;
