import React from 'react'

function NotFound() {
  return (
    <div className='mt-24'>
      <h3 className='text-xl md:text-2xl text-neutral-300'>Wrong address, please try again. 😅</h3>
      <p className='text-sm md:text-base text-neutral-500 w-80 md:w-96 mt-2'>I think you came to the wrong address. Please double check the address. <a href='/' className='text-neutral-400 underline'>Or go Home Page from here.</a> </p>
    </div>
  )
}

export default NotFound