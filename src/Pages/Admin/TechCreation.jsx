import React, { useState } from 'react';

const TechCreation = () => {
  const [link, setLink] = useState('');
  const [name, setName] = useState('');
  const [iconName, setIconName] = useState('');
  const [iconType, setIconType] = useState('');
  const [iconColor, setIconColor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu göndermek için gereken işlemler buraya eklenebilir
    console.log({
      link,
      name,
      iconName,
      iconType,
      iconColor,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="link">Link</label>
        <input
          type="url"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="name">İsim</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="iconName">Icon Name</label>
        <input
          type="text"
          id="iconName"
          value={iconName}
          onChange={(e) => setIconName(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="iconType">Icon Type</label>
        <input
          type="text"
          id="iconType"
          value={iconType}
          onChange={(e) => setIconType(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="iconColor">Icon Color</label>
        <input
          type="text"
          id="iconColor"
          value={iconColor}
          onChange={(e) => setIconColor(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-neutral-600 text-white rounded hover:bg-neutral-700 transition-all"
      >
        Teknoloji Ekle
      </button>
    </form>
  );
};

export default TechCreation;
