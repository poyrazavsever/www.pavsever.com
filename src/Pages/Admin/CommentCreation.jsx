import React, { useState } from 'react';

const CommentCreation = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [stars, setStars] = useState(1);
  const [date, setDate] = useState('');

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu göndermek için gereken işlemler buraya eklenebilir
    console.log({
      profilePicture,
      name,
      content,
      stars,
      date
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="profilePicture">Profil Fotoğrafı</label>
        <input
          type="file"
          id="profilePicture"
          onChange={handleFileChange}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
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
        <label className="block text-white mb-2" htmlFor="content">Yorum İçeriği</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="stars">Yıldız Sayısı</label>
        <input
          type="number"
          id="stars"
          min="1"
          max="5"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="date">Tarih</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-neutral-600 text-white rounded hover:bg-neutral-700 transition-all"
      >
        Yorum Ekle
      </button>
    </form>
  );
};

export default CommentCreation;
