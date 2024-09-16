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
    <div className="w-64 h-fit bg-neutral-950 text-white p-4 mt-12 rounded-lg bg-opacity-30 border border-neutral-800">
      <h2 className="text-2xl font-bold mb-6">Hoş geldin</h2>
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
