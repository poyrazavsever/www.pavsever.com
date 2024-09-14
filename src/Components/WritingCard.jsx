import React from 'react'
import ReactIcon from './Icon.js'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { motion } from 'framer-motion'

function WritingCard({ id, title, type, date, content }) {
    return (
        <NavLink to={`${id}`} target='_blank'>

            {/* Framer Motion'ı kullanarak hover animasyonu */}
            <motion.div
                className='group relative w-10/12 md:w-full border cursor-none border-neutral-800 bg-opacity-20 bg-neutral-900 rounded-lg'
                whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Daha hafif parlama
                    transition: { duration: 0.8, ease: 'easeInOut' }, // Daha yavaş animasyon
                }}
            >

                <div className='py-4 px-6 flex flex-col items-start gap-3 relative z-10'>

                    <div className='flex flex-col items-start gap-2'>
                        <div className='w-full flex items-center justify-between transition-all duration-300 text-neutral-400 '>

                            <h4 className='text-sm md:text-xl font-medium text-neutral-300 line-clamp-1 tracking-wide'>{title}</h4>
                            <ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} classname="text-lg" iconColor="text-neutral-300" />

                        </div>

                        <p className='text-xs md:text-base text-neutral-500 line-clamp-1 md:line-clamp-2'>
                            <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} skipHtml={true} />
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <span className='text-neutral-500 text-[10px] md:text-sm'>{type}</span>
                        <span className='text-neutral-500 text-[10px] md:text-sm'>{date}</span>
                    </div>

                </div>
            </motion.div>
        </NavLink>
    )
}

export default WritingCard;
