import React from 'react'
import { Helmet } from "react-helmet";

//Sections
import Banner from './Banner'
import Projects from './Projects'
import Skills from './Skills'


function Home() {
  return (

    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Poyraz Avsever | Home Page | My Skills | My Projects</title>
      </Helmet>

      <div className='mt-24 animate-card'>

        <div className='md:container mx-auto'>
          <Banner />


          <div className='mt-24 md:mt-48 mobile:px-8 pb-16 flex flex-col gap-48'>

            <Skills />

            <Projects />

          </div>

        </div>

      </div>
    </>

  )
}

export default Home