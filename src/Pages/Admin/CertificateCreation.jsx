import React, { useState } from 'react';

const CertificateCreation = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [date, setDate] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Resim ön izlemesi
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu göndermek için işlemler
    console.log({
      name,
      description,
      image,
      date,
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
        <label className="block text-white mb-2" htmlFor="image">Resim</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      {preview && (
        <div className="mb-4">
          <p className="text-white mb-2">Ön İzleme:</p>
          <img src={preview} alt="Preview" className="max-w-full h-auto rounded border border-neutral-700" />
        </div>
      )}

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
        Sertifika Ekle
      </button>
    </form>
  );
};

export default CertificateCreation;
