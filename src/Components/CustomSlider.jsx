import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const sliderVariants = {
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-100%' },
  initial: { opacity: 0, x: '100%' }
};

function CustomSlider({ images, currentIndex, setCurrentIndex }) {
  const controls = useAnimation();

  const handleNext = () => {
    controls.start("exit").then(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      controls.start("enter");
    });
  };

  const handlePrev = () => {
    controls.start("exit").then(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      controls.start("enter");
    });
  };

  return (
    <div className='relative w-full h-full'>
      <button
        onClick={handlePrev}
        className='absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-neutral-800 border border-neutral-500 text-white p-2 flex items-center justify-center rounded-full'
      >
        &lt;
      </button>
      <motion.div
        className='w-full h-full overflow-hidden rounded-md'
        initial="initial"
        animate={controls}
        variants={sliderVariants}
      >
        <img
          src={process.env.PUBLIC_URL + images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className='w-full h-5/6 object-cover'
        />
      </motion.div>
      <button
        onClick={handleNext}
        className='absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-neutral-800 border border-neutral-500 text-white p-2 flex items-center justify-center rounded-full'
      >
        &gt;
      </button>
    </div>
  );
}

export default CustomSlider;
