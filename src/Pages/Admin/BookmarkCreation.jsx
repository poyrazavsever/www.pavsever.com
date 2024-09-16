import React, { useState } from 'react';

const BookmarkCreation = () => {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu göndermek için gereken işlemler buraya eklenebilir
    console.log({
      link,
      description,
      date,
      category
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
        <label className="block text-white mb-2" htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="category">Kategori</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-neutral-600 text-white rounded hover:bg-neutral-700 transition-all"
      >
        Yer İmi Ekle
      </button>
    </form>
  );
};

export default BookmarkCreation;
