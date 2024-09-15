import React from 'react';
import { data } from "../skillsData";
import ReactIcon from '../Components/Icon';
import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl text-neutral-100 py-12 font-bold mb-4'>My Tech Stack</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {data.map((tech, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-start p-4 bg-neutral-900 bg-opacity-30 border border-neutral-800 rounded-lg shadow-md hover:bg-neutral-700 transition-all'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            <a 
              href={tech.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='flex items-center mb-2'
            >
              <ReactIcon 
                iconName={tech.iconName} 
                iconType={tech.iconType} 
                iconColor={tech.iconColor} 
                classname='text-3xl mr-4'
              />
              <span className='text-white text-xl'>{tech.skillName}</span>
            </a>
            <p className='text-gray-400'>{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
