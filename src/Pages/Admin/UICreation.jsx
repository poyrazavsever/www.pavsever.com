import React, { useState } from 'react';

const UICreation = () => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // Preview oluşturma
    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderim işlemleri burada yapılacak
    console.log({
      title,
      images,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="title">Başlık</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2">Resim Yükle (Birden Fazla)</label>
        <input
          type="file"
          multiple
          onChange={handleImageChange}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          accept="image/*"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        {previews.map((preview, index) => (
          <img key={index} src={preview} alt={`preview ${index}`} className="w-full h-32 object-cover rounded" />
        ))}
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-neutral-600 text-white rounded hover:bg-neutral-700 transition-all"
      >
        UI Çalışması Ekle
      </button>
    </form>
  );
};

export default UICreation;
