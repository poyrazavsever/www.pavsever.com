import React from 'react'
import SkillCard from '../../Components/SkillCard'
import { data } from "../../skillsData"
function Skills() {
  return (
    <div className='relative'>

      <div>
        <h3 className='text-lg md:text-xl text-neutral-400 mb-3'>- Technologies I use</h3>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-y-4 mobile:gap-x-12 pt-6'>
        {data?.length &&
          data.map((skill) => {
            return (
              <SkillCard key={skill.skillName} skillName={skill.skillName} iconName={skill.iconName} iconType={skill.iconType} iconColor={skill.iconColor} link={skill.link} />
            )
          })
        }
      </div>

      <div className='absolute group mr-28 right-32 top-24 -z-30'>

        <div className='opacity-70 mobile:opacity-50'>
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

      </div>

    </div>
  )
}

export default Skills