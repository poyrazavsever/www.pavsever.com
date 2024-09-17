import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import classNames from 'classnames';
import { motion } from 'framer-motion';
import ReactIcon from "./Icon"; // Icon componentini kullanıyoruz

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const iconStyle = "md:text-xl text-zinc-500 hover:text-neutral-300 transition-all";
  const ara = 'w-[1px] h-5 bg-neutral-500';

  const dropdownVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  };

  // Dropdown dışında bir yere tıklanırsa menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className='pt-12'>
      <div className='mobile:flex justify-center items-center'>
        <div className='h-15 md:w-[500px] pl-1 mobile:px-4 py-2 bg-neutral-950 bg-opacity-30 border border-neutral-800 shadow-lg rounded-full'>
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

              <NavLink to="/medium"
                end
                className={({ isActive }) => classNames({
                  "hover:text-neutral-400 transition-all": !isActive,
                  "text-neutral-300 cursor-normal cursor-default": isActive,
                })}> Medium </NavLink>

              <div className={ara}></div>

              {/* Other Dropdown */}
              <div className='relative' ref={dropdownRef}>
                <button onClick={() => setIsOpen(!isOpen)} className='text-neutral-500 hover:text-neutral-400 transition-all'>
                  Other
                </button>
                <motion.div
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  variants={dropdownVariants}
                  className='absolute top-10 left-0 mt-2 w-40 bg-neutral-900 border border-neutral-800 z-50 rounded-lg shadow-lg overflow-hidden'
                >
                  <ul className='text-sm text-neutral-400'>
                    <li className='hover:bg-neutral-700 p-2 transition-all flex items-center gap-2'>
                      <ReactIcon iconName={"FiAward"} iconType={"fi"} classname='text-neutral-400' />
                      <Link to="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link>
                    </li>
                    <li className='hover:bg-neutral-700 p-2 transition-all flex items-center gap-2'>
                      <ReactIcon iconName={"FiBookmark"} iconType={"fi"} classname='text-neutral-400' />
                      <Link to="/uiworks" onClick={() => setIsOpen(false)}>My UI Works</Link>
                    </li>
                    <li className='hover:bg-neutral-700 p-2 transition-all flex items-center gap-2'>
                      <ReactIcon iconName={"FiTool"} iconType={"fi"} classname='text-neutral-400' />
                      <Link to="/my-equipment" onClick={() => setIsOpen(false)}>My Equipment</Link>
                    </li>
                    <li className='hover:bg-neutral-700 p-2 transition-all flex items-center gap-2'>
                      <ReactIcon iconName={"FiBookmark"} iconType={"fi"} classname='text-neutral-400' />
                      <Link to="/bookmarks" onClick={() => setIsOpen(false)}>Bookmarks</Link>
                    </li>
                    <li className='hover:bg-neutral-700 p-2 transition-all flex items-center gap-2'>
                      <ReactIcon iconName={"FiFileText"} iconType={"fi"} classname='text-neutral-400' />
                      <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
                    </li>
                    <li className='hover:bg-neutral-700 p-2 transition-all flex items-center gap-2'>
                      <ReactIcon iconName={"FiCode"} iconType={"fi"} classname='text-neutral-400' />
                      <Link to="/techstack" onClick={() => setIsOpen(false)}>Tech Stack</Link>
                    </li>
                    <li className='hover:bg-neutral-700 p-2 transition-all flex items-center gap-2'>
                      <ReactIcon iconName={"FiThumbsUp"} iconType={"fi"} classname='text-neutral-400' />
                      <Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
                    </li>
                  </ul>
                </motion.div>

              </div>
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
  );
}

export default Navbar;
