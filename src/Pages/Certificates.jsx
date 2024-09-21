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
      description: 'Sunum hazırlama çalışmasında, hedef kitle analizi, içerik ağacı oluşturma, içerik tasarımı, doğru sunum teknikleri ve doğru iletişim ile aktarılmak istenen mesajların doğru bir şekilde karşı tarafa aktarılmasını sağlama becerileri geliştirmektir.',
      date: '20.08.2024'
    },
    {
      id: 3,
      title: "LinkedIn'de Etkili Profil Oluşturma",
      img: '/certificates/cert3.jpg',
      description: 'Bu eğitimde, öncelikle iletişimin ne olduğuna dair temel iletişim modeli ve ikna edici iletişim modeli olarak AIDA reklam modeli tanıtılacaktır. Daha sonra sırasıyla, Profil Fotoğrafı, Arka Plan fotoğrafı, Başlık ve Hakkında Bölümü ile Eğitim ve Çalışma deneyimleri örnek görseller ve videolar ile anlatılacaktır. Ek bölümler hakkında bilgi verilecek ve Bağlantı oluşturma yöntemlerinden bahsedilecektir.',
      date: '22.08.2024'
    },
    {
      id: 4,
      title: "REACT ile Web Programcılığı",
      img: '/certificates/cert4.jpg',
      description: 'React, Facebook tarafından yazılmış ve frontend geliştiriciler arasında en popüler JavaScript kütüphanelerinden biri olmuştur. Bu eğitimde; Yeni nesil JavaScript teknikleri,State Management örnegi, Redux, React Hooks yapısı yer almaktadır.',
      date: '29.08.2024'
    },
    {
      id: 5,
      title: "Node.js ile Web Programlama",
      img: '/certificates/cert7.jpg',
      description: 'Bu eğitimin amacı mevcut javascript programlama dili bilginizle nodejs kullanarak sıfırdan dinamik web uygulamalarını geliştirebilecek bilgi ve beceriyi kazandırmaktır. Node.js kursumuz mevcut javascript bilginizi server tarafında kullanarak dinamik web uygulamalarını kolaylıkla geliştirmenizi sağlayacak kapsamlı kursdur.',
      date: '31.08.2024'
    },
    {
      id: 6,
      title: "Yeşilay Münazara Bölge Şampiyonası Katılım Belgesi",
      img: '/certificates/cert5.jpg',
      description: 'Yeşilay Münazara Bölge Şampiyonası Katılım Belgesi',
      date: '05.05.2023'
    },
    {
      id: 7,
      title: "Yeşilay Münazara Türkiye Şampiyonası Katılım Belgesi",
      img: '/certificates/cert8.jpg',
      description: 'Yeşilay Münazara Türkiye Şampiyonası Katılım Belgesi',
      date: '05.07.2023'
    },
    {
      id: 8,
      title: "(40+ Saat) Python | Sıfırdan İleri Seviye Programlama (2020)",
      img: '/certificates/cert6.jpg',
      description: 'Yeşilay Münazara Bölge Şampiyonası Katılım Belgesi',
      date: '20.11.2022'
    },
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
      className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 px-8 md:px-0 py-12'
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
