import React from 'react';
import { motion } from 'framer-motion';

const equipmentList = [
  {
    id: 1,
    name: 'Laptop',
    img: '/equipment/klavye.jpg',
    description: 'High-performance laptop for development work.'
  },
  {
    id: 2,
    name: 'Monitor',
    img: '/equipment/kulaklık.jpg',
    description: 'Ultrawide monitor for enhanced productivity.'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 100 }
  }
};

function Equipment() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 px-8 md:px-0'>
      {equipmentList.map((item) => (
        <motion.div
          key={item.id}
          className='relative p-4 border border-neutral-800 rounded-lg shadow-lg bg-neutral-900'
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <img src={process.env.PUBLIC_URL + item.img} alt={item.name} className='w-full h-40 object-cover rounded-md' />
          <h3 className='mt-4 text-lg font-semibold text-neutral-100'>{item.name}</h3>
          <p className='mt-2 text-neutral-400'>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Equipment;
