import React from 'react';
import { motion } from 'framer-motion';

const equipmentList = [
  {
    id: 1,
    name: 'Logitech MK470',
    img: '/equipment/klavye.jpg',
    description: 'Logitech MK470 Kablosuz Klavye Mouse Set '
  },
  {
    id: 2,
    name: 'SoundCore Life Q10',
    img: '/equipment/kulaklık.jpg',
    description: 'Anker SoundCore Life Q10'
  },
  {
    id: 3,
    name: '32MP58HQ-P',
    img: '/equipment/monitör2.jpg',
    description: '32" Class Full HD IPS LED Monitor (31.5" Diagonal)'
  },
  {
    id: 4,
    name: 'Odyssey G3',
    img: '/equipment/monitör1.jpg',
    description: 'Odyssey G3 24” 165 Hz Full HD Çerçevesiz Oyun Monitörü'
  },
  {
    id: 5,
    name: 'Odyssey G3',
    img: '/equipment/monitör1.jpg',
    description: 'Odyssey G3 24” 165 Hz Full HD Çerçevesiz Oyun Monitörü'
  },
  {
    id: 6,
    name: 'INCA EMPOUSA',
    img: '/equipment/mousepad.jpg',
    description: 'INCA EMPOUSA RGB 7 LED MOUSEPAD'
  },
  {
    id: 7,
    name: 'Logitech Z313 Speaker',
    img: '/equipment/hoparlör.jpg',
    description: 'Logitech Z313 980-000413 50W 2+1 Speaker Siyah'
  },
  {
    id: 8,
    name: 'Soundcore Motion B',
    img: '/equipment/anker.jpg',
    description: 'Anker Soundcore Motion B Taşınabilir Bluetooth Hoparlör'
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 px-8 md:px-0 py-12'>
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
