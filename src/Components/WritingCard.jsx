import React from 'react'
import ReactIcon from './Icon.js'
import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


function ProjectCard({ id, title, type, date, content }) {
    return (
        <NavLink to={`/post/${id}`}>

            <div className='group cursor-pointer w-11/12 border border-neutral-800 bg-neutral-950 rounded-lg animate-card !z-20'>

                <div className='py-4 px-6 flex flex-col items-start gap-3'>

                    <div className='flex flex-col items-start gap-2'>
                        <div className='flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-neutral-400 '>

                            <h4 className='text-lg md:text-xl font-medium text-neutral-400 line-clamp-1 tracking-wide'>{title}</h4>
                            <ReactIcon iconName={"FiArrowUpRight"} iconType={"fi"} classname="text-lg"/>


                        </div>

                        <p className='text-sm md:text-base text-neutral-500 line-clamp-2'>
                            <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} skipHtml={false}/>
                        </p>
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <span className='text-neutral-500 text-xs md:text-sm'>{type}</span>
                        <span className='text-neutral-500 text-xs md:text-sm'>{date}</span>
                    </div>



                </div>

            </div>
        </NavLink>
    )
}

export default ProjectCard