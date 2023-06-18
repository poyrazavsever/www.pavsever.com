import React from 'react'
import { Link, NavLink } from "react-router-dom";
import classNames from 'classnames';

//Components
import ReactIcon from "./Icon"


function Navbar() {

  const iconStyle = "md:text-xl text-zinc-500 hover:text-neutral-300 transition-all"
  const ara = 'w-[1px] h-5 bg-neutral-500'


  return (

    <div className='pt-12'>
      <div className='mobile:flex justify-center items-center'>

        <div className='h-15 md:w-[480px] mobile:px-4 py-2 border border-neutral-800 rounded-full'>

          <div className='flex items-center justify-around gap-4'>

            <Link to="/" className='mobile:hidden'>
              <img src={process.env.PUBLIC_URL + "/Images/Other/profile.jpg"} alt="profilep" className='w-10 h-10 md:w-12 md:h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300' />
            </Link>

            <div className={`${ara} mobile:hidden`}></div>

            <nav className='flex items-center gap-3 text-neutral-500 text-sm md:text-base'>

              <NavLink to="/"
                end
                className={({ isActive }) => classNames({
                  "hover:text-neutral-400 transition-all": !isActive,
                  "text-neutral-300 cursor-default": isActive,
                })}> Home </NavLink>

              <NavLink to="/about"
                end
                className={({ isActive }) => classNames({
                  "hover:text-neutral-400 transition-all": !isActive,
                  "text-neutral-300 cursor-default": isActive,
                })}> About </NavLink>

              <NavLink to="/blog"
                end
                className={({ isActive }) => classNames({
                  "hover:text-neutral-400 transition-all": !isActive,
                  "text-neutral-300 cursor-normal cursor-default": isActive,
                })}> Blog </NavLink>

            </nav>

            <div className={ara}></div>


            <div className='text-neutral-500 flex items-center gap-4 md:pr-4'>

              <a href="https://www.instagram.com/p.avsever" target='_blank' rel="noreferrer">
                <ReactIcon iconName={"AiFillInstagram"} iconType={"ai"} classname={iconStyle} />
              </a>

              <a href="https://www.linkedin.com//in/poyraz-avsever-252408233/" target='_blank'
                rel="noreferrer">
                <ReactIcon iconName={"AiFillLinkedin"} iconType={"ai"} classname={iconStyle} />
              </a>

              <a href="https://www.github.com/poyrazavsever" target='_blank' rel="noreferrer">
                <ReactIcon iconName={"AiFillGithub"} iconType={"ai"} classname={iconStyle} />
              </a>

              <a href="https://www.twitter.com/poyrazavsever" target='_blank' rel="noreferrer">
                <ReactIcon iconName={"AiOutlineTwitter"} iconType={"ai"} classname={iconStyle} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>



  )
}

export default Navbar