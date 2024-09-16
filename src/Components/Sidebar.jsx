import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    'Proje Ekle',
    'Teknoloji Ekle',
    'Sertifika Ekle',
    'UI Çalışması Ekle',
    'Ekipman Ekle',
    'Bookmark Ekle',
    'CV Ekle',
    'Yorum Ekle',
  ];

  return (
    <div className="w-64 h-screen bg-neutral-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)} // Tab değiştirme işlemi
              className={`w-full text-left p-2 rounded ${
                activeTab === tab ? 'bg-neutral-700' : 'hover:bg-neutral-800'
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
