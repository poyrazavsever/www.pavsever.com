import React, { useState } from 'react';
import InfoModal from "../Components/InfoModal"

function Resume() {
  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
    window.location.href = '/'; // Ana sayfaya yönlendirme
  };

  return (
    <div>
      {isModalOpen && (
        <InfoModal closeModal={closeModal} />
      )}
    </div>
  );
}

export default Resume;
