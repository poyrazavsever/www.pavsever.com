import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=' my-12'>
      <h2 className='text-2xl font-bold text-neutral-100 mb-6'>Testimonials</h2>
      <motion.div 
        className='flex flex-col items-start p-4 bg-neutral-900 bg-opacity-30 border border-neutral-800 rounded-lg shadow-md'
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5 }}
      >
        <div className='flex items-center mb-4'>
          <img 
            src={process.env.PUBLIC_URL + "/Testimonials/user1.jpg"}
            alt="ysfszgn" 
            className='w-12 h-12 rounded-full mr-4'
          />
          <div>
            <h3 className='text-xl text-white font-semibold'>ysfszgn</h3>
          </div>
        </div>

        <p className='text-neutral-300 mb-4'>
          Çok kaliteli, başarılı bir çalışma geldi elime, teşekkürler.
        </p>

        {/* Zaman ve Yıldız */}
        <div className='flex items-center justify-between w-full'>
          <span className='text-yellow-400 text-lg'>★ 4.8</span>
          <p className='text-gray-400'>2 years ago</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
