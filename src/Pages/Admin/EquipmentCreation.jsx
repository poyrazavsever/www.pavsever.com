import React, { useState } from 'react';

const EquipmentCreation = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    // Preview oluşturma
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderim işlemleri burada yapılacak
    console.log({
      name,
      description,
      photo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
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
        <label className="block text-white mb-2">Fotoğraf</label>
        <input
          type="file"
          onChange={handlePhotoChange}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          accept="image/*"
        />
      </div>

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-full h-32 object-cover rounded" />
        </div>
      )}

      <button
        type="submit"
        className="w-full p-2 bg-neutral-600 text-white rounded hover:bg-neutral-700 transition-all"
      >
        Ekipman Ekle
      </button>
    </form>
  );
};

export default EquipmentCreation;
