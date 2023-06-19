import React from 'react'
import ReactIcon from './Icon'
import classNames from 'classnames'

function ProjectCard({ header, exp, date, link, github, language, }) {
    return (
        <a href={link} rel="noreferrer" target='_blank' className='group cursor-pointer sm:w-80 md:w-96 border border-neutral-800 bg-neutral-950 rounded-lg animate-card'>

            <div className='py-3 px-4 flex flex-col justify-center gap-4'>

                <div className='flex flex-col items-start gap-1'>

                    <div className='flex items-center justify-between gap-1 group-hover:gap-2 transition-all duration-300 text-neutral-400 '>
                        <h4 className='text-sm md:text-base line-clamp-1'>{header}</h4>
                        <ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} />
                    </div>

                    <p className='text-neutral-500 text-xs md:text-sm line-clamp-2 '>{exp}</p>

                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className={classNames({
                            "w-4 h-4 rounded-full bg-gradient-to-r": true,
                            "from-cyan-300 to-blue-600": language === "React",
                            "from-sky-400 to-yellow-600": language === "Python",
                            "from-red-400 from-10% via-purple-500 via-30% to-emerald-500 to-90%": language === "Figma",

                        })}></div>
                        <span className='text-neutral-400 text-xs md:text-sm'>{language}</span>
                    </div>

                    <div className='text-xs md:text-sm text-neutral-400 flex items-center gap-3'>
                        <span>{date}</span>
                        <a href={github} target='_blank' rel="noreferrer" className={classNames({
                            "flex items-center gap-1 hover:text-neutral-300": true,
                            "hidden": github === ""

                        })}> <ReactIcon iconName={"AiFillGithub"}
                            iconType={"ai"} /> Github</a>
                    </div>
                </div>

            </div>

        </a>
    )
}

export default ProjectCard