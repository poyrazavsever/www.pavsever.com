import React, { useState } from 'react'
import ProjectCard from '../../Components/ProjectCard'
import { data } from "../../projectsData"
import classNames from 'classnames';

function Projects() {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const changeCPage = (n) => {
    setCurrentPage(n)
  }

  return (
    <div className='relative'>

      <div className='md:container md:mx-auto z-40'>

        <div>
          <h3 className='text-lg md:text-xl text-neutral-400 mb-3'>- My Projects</h3>
        </div>

        <div className='my-12 grid grid-cols-1 md:grid-cols-2 gap-4 desktop:gap-x-10'>
          {records.map((data) => {
            return (
              <ProjectCard key={data.header} link={data.link} github={data.github} header={data.header} exp={data.exp} language={data.language} date={data.date} />
            )
          })}
        </div>

        <nav>
          <ul>

            <div className='flex items-center gap-3'>
              {
                numbers.map((n) => (

                  <button className={classNames({
                    "text-sm md:text-base": true,
                    "text-neutral-500": currentPage !== n,
                    "text-neutral-100": currentPage === n,
                  })} onClick={() => changeCPage(n)} key={n}>{n}</button>

                ))
              }
            </div>
          </ul>
        </nav>

      </div>

      <div className='absolute group mr-28 top-24 right-0 !-z-40'>

        <div className='opacity-50'>

          <div className='w-14 h-14 bg-amber-400 blur-2xl absolute opacity-40 top-5 -right-16 -z-20'></div>

          <div className='w-12 h-12 bg-emerald-400 blur-2xl absolute opacity-40 -top-9 -left-12 -z-20'></div>

          <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-red-400 opacity-40 blur-2xl absolute bottom-0 -right-28 -z-20'></div>

        </div>

        <div className='w-48 h-48'>

        </div>

      </div>

    </div>
  )

}

export default Projects