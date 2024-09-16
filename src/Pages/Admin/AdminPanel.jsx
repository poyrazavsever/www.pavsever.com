import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';

// Tabs 
import ProjectCreation from './ProjectCreation';
import TechCreation from './TechCreation';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('Proje Ekle'); // Başlangıçta aktif olan tab

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold text-white mb-4">
          {activeTab}
        </h1>
        {/* Aktif olan tab'a göre içerik değişecek */}
        <div>
          {activeTab === 'Proje Ekle' && <p><ProjectCreation /></p>}
          {activeTab === 'Teknoloji Ekle' && <p><TechCreation /></p>}
          {activeTab === 'Sertifika Ekle' && <p>Sertifika Ekleme Alanı</p>}
          {activeTab === 'UI Çalışması Ekle' && <p>UI Çalışması Ekleme Alanı</p>}
          {activeTab === 'Ekipman Ekle' && <p>Ekipman Ekleme Alanı</p>}
          {activeTab === 'Bookmark Ekle' && <p>Bookmark Ekleme Alanı</p>}
          {activeTab === 'CV Ekle' && <p>CV Ekleme Alanı</p>}
          {activeTab === 'Yorum Ekle' && <p>Yorum Ekleme Alanı</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
