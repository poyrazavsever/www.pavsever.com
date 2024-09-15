import React from 'react';
import { motion } from 'framer-motion';

// Açılma ve kapanma animasyonları için framer-motion varyantları
const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

function CertModal({ cert, closeModal }) {
  if (!cert) return null;

  return (
    <motion.div
      className='fixed inset-0 bg-neutral-950 bg-opacity-80 border border-neutral-800 backdrop-blur-xl flex items-center justify-center z-50'
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <div className='bg-neutral-900 rounded-lg p-6 w-full max-w-lg'>
        <h2 className='text-xl font-semibold text-neutral-100'>{cert.title}</h2>
        <p className='mt-2 text-neutral-400'>{cert.description}</p>
        <p className='mt-2 text-sm text-neutral-500'>Date: {cert.date}</p>
        <img src={cert.img} alt={cert.title} className='mt-4 w-full h-60 object-cover rounded-md' />
        <button
          onClick={closeModal}
          className='mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all'
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

export default CertModal;
