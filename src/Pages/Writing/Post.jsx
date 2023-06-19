import React from 'react'
import { useParams, Navigate } from "react-router-dom"
import postlist from "../../posts.json"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


function Post() {

  const params = useParams();
  const validId = parseInt(params.id)

  let fetchedPost = {}
  postlist.forEach((post) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "Başlık yok"
      fetchedPost.content = post.content ? post.content : "İçerik yok"
      fetchedPost.date = post.date ? post.date : "Tarih yok"
      fetchedPost.type = post.type ? post.type : "Türü yok"
    }
  })

  if (!validId) {
    return <Navigate to="/404" />
  }

  return (
    <div className='my-24 animate-card overflow-hidden'>

      <div className='mx-auto md:container mobile:ml-12'>

        <div className='flex flex-col items-start gap-2'>
          <h3 className='text-lg md:text-xl text-neutral-400 font-medium'>{fetchedPost.title}</h3>
          <span className='text-xs md:text-sm w-full text-neutral-500'>{fetchedPost.date}</span>
        </div>

        <p className='text-xs md:text-base mt-8 mobile:pr-24'>
          <ReactMarkdown children={fetchedPost.content} rehypePlugins={[rehypeRaw]} skipHtml={false} className='prose lg:prose-xl'/>
        </p>

      </div>

    </div>
  )
}

export default Post