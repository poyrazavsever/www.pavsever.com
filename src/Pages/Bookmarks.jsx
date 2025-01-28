import React from 'react';
import { motion } from 'framer-motion';

const bookmarksList = []; // Liste boş

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 100 },
  },
};

function Bookmarks() {
  return (
    <motion.div
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 px-8 md:px-0'
      initial="hidden"
      animate="visible"
    >
      {/* Eğer liste boşsa */}
      {bookmarksList.length === 0 ? (
        <motion.div
          className='col-span-1 md:col-span-2 lg:col-span-3 text-center p-4 border border-neutral-800 rounded-lg shadow-lg bg-neutral-900'
          variants={cardVariants}
        >
          <p className='text-neutral-400 text-lg'>Currently, there are no bookmarks added!</p>
        </motion.div>
      ) : (
        // Eğer liste doluysa
        bookmarksList.map((bookmark) => (
          <motion.div
            key={bookmark.id}
            className='p-4 border flex flex-col justify-between border-neutral-800 rounded-lg shadow-lg bg-neutral-900'
            variants={cardVariants}
          >
            <a
              href={bookmark.link}
              target='_blank'
              rel='noreferrer'
              className='text-lg font-semibold text-blue-300 hover:text-blue-300'
            >
              {bookmark.title}
            </a>
            <p className='text-neutral-400'>{bookmark.description}</p>
            <div className='flex justify-between text-sm text-neutral-500'>
              <span>{bookmark.date}</span>
              <span>{bookmark.topic}</span>
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  );
}

export default Bookmarks;
