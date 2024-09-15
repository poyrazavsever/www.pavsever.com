import React from 'react';
import { motion } from 'framer-motion';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

function InfoModal({ closeModal }) {
  return (
    <div className='fixed inset-0 bg-neutral-950 bg-opacity-80 border border-neutral-800 backdrop-blur-xl flex items-center justify-center z-50'>
      <motion.div
        className='bg-neutral-900 rounded-lg p-4 w-11/12 max-w-lg relative'
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className='text-xl font-semibold text-neutral-100 mb-4'>Özgeçmişim Henüz Eklenmedi</h2>
        <p className='text-neutral-300 mb-4'>Bu bölümde özgeçmişimin PDF sürümünü ekleyeceğim. Şu anda bu belge mevcut değil, lütfen daha sonra tekrar kontrol edin.</p>
        <button
          onClick={closeModal}
          className='absolute top-4 right-4 text-xs px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all'
        >
          X
        </button>
        <a
          href="mailto:poyrazavsever@gmail.com"
          className='mt-4 block text-center px-4 py-2 bg-neutral-950 bg-opacity-80 border border-neutral-800 text-white rounded hover:bg-neutral-900 transition-all'
        >
          Benimle İletişime Geçin
        </a>
      </motion.div>
    </div>
  );
}

export default InfoModal;
