import React, { useState } from 'react';
import CertModal from '../Components/CertModal';
import ReactIcon from '../Components/Icon'; // ReactIcon componentini dahil ettik

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
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
      {certificates.map((cert) => (
        <div key={cert.id} className='relative p-4 border border-neutral-800 rounded-lg shadow-lg'>
          <img src={process.env.PUBLIC_URL + cert.img} alt={cert.title} className='w-full h-40 object-cover rounded-md' />
          <h3 className='mt-4 text-lg font-semibold text-neutral-300'>{cert.title}</h3>
          <button
            onClick={() => openModal(cert)}
            className='absolute top-4 right-4 bg-black p-2 rounded-full text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all'
          >
            <ReactIcon iconName="AiOutlineInfoCircle" iconType="ai" classname='text-xl text-neutral-400' />
          </button>
        </div>
      ))}
      
      {/* Modal, eğer modal açık ise gösterilecek */}
      {isModalOpen && (
        <CertModal 
          cert={selectedCert} 
          closeModal={closeModal} 
        />
      )}
    </div>
  );
}

export default Certificates;
