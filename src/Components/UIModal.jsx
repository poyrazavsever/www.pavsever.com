import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CustomSlider from './CustomSlider';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

function UIModal({ work, closeModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!work) return null;

  return (
    <div className='fixed inset-0 bg-neutral-950 bg-opacity-80 border border-neutral-800 backdrop-blur-xl flex items-center justify-center z-50'>
      <motion.div
        className='bg-neutral-900 rounded-lg p-4 w-full max-w-4xl relative'
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className='text-xl font-semibold text-neutral-100 mb-4'>{work.title}</h2>
        <CustomSlider 
          images={work.images} 
          currentIndex={currentIndex} 
          setCurrentIndex={setCurrentIndex} 
        />
        <button
          onClick={closeModal}
          className='absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all'
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}

export default UIModal;
