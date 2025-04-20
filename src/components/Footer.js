import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://wa.me/5491131387879"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/nyna.clothes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} NYNA CLOTHES. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
