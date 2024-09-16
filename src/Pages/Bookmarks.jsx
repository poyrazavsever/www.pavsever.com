import React from 'react';
import { motion } from 'framer-motion';

const bookmarksList = [
  {
    id: 1,
    link: 'https://example.com',
    title: 'Example Link 1',
    description: 'This is a brief description of the first bookmark. It provides a quick summary of the content.',
    date: '12 July 2024',
    topic: 'Technology'
  },
  {
    id: 2,
    link: 'https://example.com',
    title: 'Example Link 2',
    description: 'A brief description of the second bookmark. It offers an overview of the relevant content.',
    date: '25 August 2024',
    topic: 'Design'
  },
  // Diğer bookmark'ları buraya ekleyebilirsiniz
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 100 }
  }
};

function Bookmarks() {
  return (
    <motion.div 
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 px-8 md:px-0'
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      {bookmarksList.map((bookmark) => (
        <motion.div 
          key={bookmark.id} 
          className='p-4 border flex flex-col justify-between border-neutral-800 rounded-lg shadow-lg bg-neutral-900'
          variants={cardVariants}
        >
          <a href={bookmark.link} target='_blank' rel='noreferrer' className='text-lg font-semibold text-blue-300 hover:text-blue-300'>
            {bookmark.title}
          </a>
          <p className='text-neutral-400'>{bookmark.description}</p>
          <div className='flex justify-between text-sm text-neutral-500'>
            <span>{bookmark.date}</span>
            <span>{bookmark.topic}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Bookmarks;
