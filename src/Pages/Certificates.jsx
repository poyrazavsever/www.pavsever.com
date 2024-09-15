import React, { useState } from 'react';
import CertModal from '../Components/CertModal';
import ReactIcon from '../Components/Icon'; // ReactIcon componentini dahil ettik
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, type: 'spring', stiffness: 100 } 
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 100 }
  }
};

function Certificates() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null); // Seçilen sertifika bilgisi

  const certificates = [
    {
      id: 1,
      title: 'Versiyon Kontrolleri: Git ve GitHub',
      img: '/certificates/cert1.jpg',
      description: 'Git’in amacından ve tarihçesinden başlar, Git için kullanılan komutlara geçmeden önce öğrencilere basit terminal komutlarıyla ilgili hızlandırılmış bilgiler verir...',
      date: '06.08.2024'
    },
    {
      id: 2,
      title: 'Girişimcilikte Sunum Teknikleri ve İletişim Yönetimi',
      img: '/certificates/cert2.jpg',
      description: 'Mastering UI/UX design principles and tools.',
      date: '25 April 2022'
    },
    // Diğer sertifikaları ekleyebilirsin
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <motion.div 
      className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 px-8 md:px-0'
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      {certificates.map((cert) => (
        <motion.div 
          key={cert.id} 
          className='relative p-4 border border-neutral-800 rounded-lg shadow-lg'
          variants={cardVariants}
        >
          <img src={process.env.PUBLIC_URL + cert.img} alt={cert.title} className='w-full h-40 object-cover rounded-md' />
          <h3 className='mt-4 text-lg font-semibold text-neutral-300'>{cert.title}</h3>
          <motion.button
            onClick={() => openModal(cert)}
            className='absolute top-4 right-4 bg-black p-2 rounded-full text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all'
            variants={buttonVariants}
            whileHover="hover"
          >
            <ReactIcon iconName="AiOutlineInfoCircle" iconType="ai" classname='text-xl text-neutral-400' />
          </motion.button>
        </motion.div>
      ))}
      
      {/* Modal, eğer modal açık ise gösterilecek */}
      {isModalOpen && (
        <CertModal 
          cert={selectedCert} 
          closeModal={closeModal} 
        />
      )}
    </motion.div>
  );
}

export default Certificates;
