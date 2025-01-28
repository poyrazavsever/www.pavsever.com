import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      id: 1,
      name: 'Ali Korkmaz',
      message: 'Tam istediğim gibi bir site oldu. Düşünemediklerimi de düşünmesi ve her şeyi şeffaf bir şekilde açıklaması çalışmanın beklediğimden daha da iyi olmasını sağladı. Her şey için çok teşekkür ederim.',
      stars: 5,
      time: '2025',
      image: 'user4.jpg',
      link: '',
    },
    {
      id: 2,
      name: 'Halil İbrahim Sabo',
      message: 'Poyraz çok başarılı ve çalışkan bir kardeşim. Çok dürüst ve şeffaf bir yaklaşımı var. Poyraz’ın başarılarının devamını görmekten mutluluk duyuyorum.',
      stars: 5,
      time: '2024',
      image: 'user2.jpg',
      link: 'https://www.linkedin.com/in/halil-ibrahim-sabo-18a03a251/',
    },
    {
      id:3,
      name: 'myyhsky5345',
      message: 'Teşekkür ediyorum kaliteli bir iş gerçekleşti.',
      stars: 5,
      time: '2024',
      image: 'Default.jpg',
      link: 'https://bionluk.com/poyrazavsever',
    },
    {
      id: 4,
      name: 'ysfszgn',
      message: 'Çok kaliteli, başarılı bir çalışma geldi elime, teşekkürler.',
      stars: 4.8,
      time: '2022',
      image: 'user1.jpg',
      link: 'https://bionluk.com/poyrazavsever',
    },
  ];

  return (
    <div className='my-12'>
      <h2 className='text-2xl font-bold text-neutral-100 mb-6'>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          className='flex flex-col items-start p-4 bg-neutral-900 bg-opacity-30 border border-neutral-800 rounded-lg shadow-md mb-6'
          initial='hidden'
          animate='visible'
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <div className='flex items-center mb-4'>
            {testimonial.image ? (
              <img
                src={process.env.PUBLIC_URL + `/Testimonials/${testimonial.image}`}
                alt={testimonial.name}
                className='w-12 h-12 rounded-full mr-4'
              />
            ) : (
              <div className='w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold mr-4'>
                {testimonial.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <h3 className='text-xl text-white font-semibold'>
                {testimonial.link ? (
                  <a
                    href={testimonial.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline hover:text-yellow-400 transition-all'
                  >
                    {testimonial.name}
                  </a>
                ) : (
                  testimonial.name
                )}
              </h3>
            </div>
          </div>

          <p className='text-neutral-300 mb-4'>{testimonial.message}</p>

          <div className='flex items-center justify-between w-full'>
            <span className='text-yellow-400 text-lg'>★ {testimonial.stars}</span>
            <p className='text-gray-400'>{testimonial.time}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;
