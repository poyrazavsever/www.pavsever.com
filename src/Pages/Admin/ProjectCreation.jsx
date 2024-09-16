import React, { useState } from 'react';

const ProjectCreation = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [link, setLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu göndermek için gereken işlemler buraya eklenebilir
    console.log({
      projectName,
      description,
      language,
      link,
      githubLink,
      date
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="projectName">Proje Adı</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
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
        <label className="block text-white mb-2" htmlFor="language">Kullanılan Dil</label>
        <input
          type="text"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white mb-2" htmlFor="link">Proje Linki</label>
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
        <label className="block text-white mb-2" htmlFor="githubLink">GitHub Linki</label>
        <input
          type="url"
          id="githubLink"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
          className="w-full p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
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
        className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
      >
        Proje Ekle
      </button>
    </form>
  );
};

export default ProjectCreation;
