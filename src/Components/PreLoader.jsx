import React, { useEffect } from 'react'
import { preLoaderAnim } from "../animations"

function PreLoader() {

    useEffect(() => {
        preLoaderAnim()
    }, []);


  return (
    <div className='h-screen w-screen bg-neutral-950 text-white fixed bottom-0 left-0 right-0 !z-50 flex justify-center items-center text-center overflow-hidden preloader'>

        <div className='flex text-center gap-4 items-center justify-between h-16 text-xl font-medium overflow-hidden texts-container'>
            <span>
                <img src={process.env.PUBLIC_URL + "/Images/Other/logo.png"} alt="LoaderLogo"/>
            </span>
            <span>Poyraz Avsever</span>
        </div>
        
    </div>
  )
}

export default PreLoader