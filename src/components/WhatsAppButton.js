import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const numeroWhatsApp = '5491162477878'; 

  const handleClick = () => {
    window.open(`https://wa.me/${numeroWhatsApp}`, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
