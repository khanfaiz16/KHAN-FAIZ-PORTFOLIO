import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const phone = '917385540220';
  const defaultText = encodeURIComponent('Hi Faiz! I saw your portfolio and would like to connect.');

  return (
    <a
      href={`https://wa.me/${phone}?text=${defaultText}`}
      target="_blank"
      rel="noreferrer"
      className="floating-wa"
      aria-label="Connect on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;