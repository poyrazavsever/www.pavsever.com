import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoModal from "../Components/InfoModal";

function Resume() {
  const [isModalOpen, setModalOpen] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
    navigate('/'); // Ana sayfaya yönlendirme
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
