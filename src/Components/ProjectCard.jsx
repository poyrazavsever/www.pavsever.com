import React from 'react'
import ReactIcon from './Icon'
import classNames from 'classnames'
import { motion } from 'framer-motion'

function ProjectCard({ header, exp, date, link, github, language }) {
    return (
        <motion.a
            href={link}
            rel="noreferrer"
            target='_blank'
            className='group relative overflow-hidden cursor-pointer sm:w-80 md:w-96 border border-neutral-800 bg-neutral-950 rounded-lg animate-card'
        >
            {/* Parıltı efekti */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-white/10 group-hover:to-transparent transition-all duration-1000">
                <motion.div
                    className="absolute top-0 left-full w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                    initial={{ left: '100%', opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{
                        left: '-50%',
                        opacity: 0.2, // Hover sırasında yavaşça görünür olacak
                        transition: {
                            duration: 1.5, // Daha yavaş bir geçiş süresi
                            ease: 'easeInOut'
                        }
                    }}
                />
            </div>

            <div className='py-3 px-4 flex flex-col justify-center gap-4 relative z-10'>
                <div className='flex flex-col items-start gap-1'>
                    <div className='flex items-center justify-between gap-1 group-hover:gap-2 transition-all duration-300 text-neutral-400 '>
                        <h4 className='text-sm md:text-base line-clamp-1'>{header}</h4>
                        <ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} />
                    </div>
                    <p className='text-neutral-500 text-xs md:text-sm line-clamp-1'>{exp}</p>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className={classNames({
                            "w-4 h-4 rounded-full bg-gradient-to-r": true,
                            "from-cyan-300 to-blue-600": language === "React",
                            "from-sky-400 to-yellow-600": language === "Python",
                            "from-red-400 from-10% via-purple-500 via-30% to-emerald-500 to-90%": language === "Figma",
                            "from-white to-neutral-600": language === "Next.js",
                            "from-blue-800 to-blue-400": language === "TypeScript",
                            "from-purple-500 to-blue-800": language === "C#",
                            "from-green-400 to-green-600": language === "Vue",
                            "from-pink-400 to-orange-600": language === "Nest.js",
                            "from-neutral-500 to-gray-900": language === "Express.js",
                            "from-yellow-500 to-red-500": language === "JavaScript",
                        })}></div>
                        <span className='text-neutral-400 text-xs md:text-sm'>{language}</span>
                    </div>

                    <motion.div className='text-xs md:text-sm text-neutral-400 flex items-center gap-3'>
                        <span>{date}</span>
                        <motion.button
                            href={github}
                            target='_blank'
                            rel="noreferrer"
                            className={classNames({
                                "flex items-center gap-1 hover:text-neutral-300": true,
                                "hidden": github === ""
                            })}
                        >
                            <ReactIcon iconName={"AiFillGithub"} iconType={"ai"} /> Github
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.a>
    )
}

export default ProjectCard
