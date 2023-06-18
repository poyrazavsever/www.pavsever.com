import React from 'react'
import ReactIcon from "./Icon"
function SkillCard({link = "", iconName = "", iconType = "", iconColor = "", skillName = ""}) {
  return (
    <a href={link} target='_blank' without rel="noreferrer" className='inline-flex items-center justify-center gap-2 px-4 py-2 border w-32 md:w-36 border-neutral-800 bg-neutral-950 group hover:border-neutral-600 transition-all'>
      <ReactIcon iconName={iconName} iconType={iconType} iconColor={iconColor} classname="text-sm md:text-lg"/>
      <span className='font-medium text-neutral-400 text-sm md:text-base'>{skillName}</span>
    </a>
  )
}

export default SkillCard