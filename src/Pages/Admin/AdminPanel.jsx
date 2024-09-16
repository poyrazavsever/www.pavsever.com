import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar';

// Tabs 
import ProjectCreation from './ProjectCreation';
import TechCreation from './TechCreation';
import CertificateCreation from './CertificateCreation';
import UICreation from './UICreation';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('Proje Ekle'); // Başlangıçta aktif olan tab

  return (
    <div className="flex gap-6 mt-6">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold text-white mb-4">
          {activeTab}
        </h1>
        {/* Aktif olan tab'a göre içerik değişecek */}
        <div>
          {activeTab === 'Proje Ekle' && <ProjectCreation />}
          {activeTab === 'Teknoloji Ekle' && <TechCreation />}
          {activeTab === 'Sertifika Ekle' && <CertificateCreation/> }
          {activeTab === 'UI Çalışması Ekle' && <UICreation />}
          {activeTab === 'Ekipman Ekle' && ""}
          {activeTab === 'Bookmark Ekle' && ""}
          {activeTab === 'CV Ekle' && ""}
          {activeTab === 'Yorum Ekle' && ""}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
