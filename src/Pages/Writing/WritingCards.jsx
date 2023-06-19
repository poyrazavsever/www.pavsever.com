import React, { useState } from 'react'
import postlist from "../../posts.json"
import WritingCard from '../../Components/WritingCard'
import classNames from 'classnames';


function WritingCards() {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = postlist.slice(firstIndex, lastIndex);
  const npage = Math.ceil(postlist.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const changeCPage = (n) => {
    setCurrentPage(n)
  }

  return (

    <>

      <div className='md:container mx-auto'>

        <div className='my-12 grid grid-cols-1 gap-4'>
          {records?.length &&
            records.map((post) => {

              return (
                <WritingCard key={post.id} id={post.id} title={post.title} content={post.content} date={post.date} type={post.type} />
              )
            })
          }
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
    </>

  )
}

export default WritingCards