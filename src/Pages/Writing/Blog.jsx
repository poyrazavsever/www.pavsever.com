import React from 'react'
import WritingCards from './WritingCards'
import { Helmet } from "react-helmet";



function Blog() {
  return (

    <div className='overflow-hidden'>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Poyraz Avsever | Blog Page | My Posts</title>
      </Helmet>

      <div className='mt-24 animate-card relative'>

        <div className='md:container mx-auto'>

          <div className='mobile:ml-12'>

            <div>
              <h3 className='text-xl md:text-2xl text-neutral-300'>My Posts</h3>
              <p className='text-sm md:text-base text-neutral-500 md:w-96 mt-2'>These are the writings that include my adventures, experiences, and my comments on current affairs.</p>
            </div>

          </div>


          <div className='absolute opacity-80 mobile:opacity-50 group mx-32 top-32 right-24 -z-50'>

            <div className='w-14 h-14 bg-amber-400 blur-3xl absolute top-5 -right-16 -z-20'>
            </div>

            <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-sky-400 opacity-70 blur-3xl absolute bottom-0 -right-28 -z-20'></div>

            <div className='w-14 h-14 bg-pink-400 blur-3xl absolute -top-24 right-16 -z-20'>
            </div>
            <div className='w-12 h-12 bg-orange-900 blur-3xl absolute top-0 left-12 -z-20'></div>
            <div className='w-12 h-12 dekstop:w-24 dekstop:h-24 bg-indigo-600 opacity-70 blur-3xl absolute -bottom-5 right-24 -z-20'></div>
            <div className='w-12 h-12 bg-purple-500 opacity-70 blur-3xl absolute left-24 bottom-24 -z-20'></div>
            <div className='w-12 h-12 bg-emerald-400 blur-3xl absolute -top-64 -left-28 -z-20'></div>
            <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-sky-400 opacity-70 blur-3xl absolute bottom-0 -right-28 -z-20'></div>
            <div className='w-16 h-16 bg-red-400 opacity-70 blur-3xl absolute left-48 -bottom-0 -z-20'>
            </div>
            <div className='w-14 h-14 bg-pink-400 blur-3xl absolute -top-96 right-16 -z-20'>
            </div>
            <div className='w-12 h-12 bg-orange-900 blur-3xl absolute top-1/2 left-12 -z-20'></div>
            <div className='w-12 h-12 dekstop:w-24 dekstop:h-24 bg-indigo-600 opacity-70 blur-3xl absolute -bottom-5 right-24 -z-20'></div>
            <div className='w-12 h-12 bg-purple-500 opacity-70 blur-3xl absolute left-24 bottom-24 -z-20'>
            </div>

            <div className='w-64 h-64 absolute'>
            </div>

          </div>

          <div className='absolute opacity-80 mobile:opacity-50 group mx-32 top-64 left-64 -z-50'>

            <div className='w-14 h-14 bg-amber-400 blur-3xl absolute top-5 -right-16 -z-20'>
            </div>

            <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-sky-400 opacity-70 blur-3xl absolute bottom-0 -right-28 -z-20'></div>

            <div className='w-14 h-14 bg-pink-400 blur-3xl absolute -top-24 right-16 -z-20'>
            </div>
            <div className='w-12 h-12 bg-orange-900 blur-3xl absolute top-0 left-12 -z-20'></div>
            <div className='w-12 h-12 dekstop:w-24 dekstop:h-24 bg-indigo-600 opacity-70 blur-3xl absolute -bottom-5 right-24 -z-20'></div>
            <div className='w-12 h-12 bg-purple-500 opacity-70 blur-3xl absolute left-24 bottom-24 -z-20'></div>
            <div className='w-12 h-12 bg-emerald-400 blur-3xl absolute -top-64 -left-28 -z-20'></div>
            <div className='w-16 h-16 dekstop:w-24 dekstop:h-24 bg-sky-400 opacity-70 blur-3xl absolute bottom-0 -right-28 -z-20'></div>
            <div className='w-16 h-16 bg-red-400 opacity-70 blur-3xl absolute left-48 -bottom-0 -z-20'>
            </div>
            <div className='w-14 h-14 bg-pink-400 blur-3xl absolute -top-96 right-16 -z-20'>
            </div>
            <div className='w-12 h-12 bg-orange-900 blur-3xl absolute top-1/2 left-12 -z-20'></div>
            <div className='w-12 h-12 dekstop:w-24 dekstop:h-24 bg-indigo-600 opacity-70 blur-3xl absolute -bottom-5 right-24 -z-20'></div>
            <div className='w-12 h-12 bg-purple-500 opacity-70 blur-3xl absolute left-24 bottom-24 -z-20'>
            </div>

            <div className='w-64 h-64 absolute'>
            </div>

          </div>


        </div>

        <div className='mobile:pl-10'>
          <WritingCards />
        </div>

      </div>


    </div>

  )
}

export default Blog