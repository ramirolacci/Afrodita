import React from 'react';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="share">
          <a
            href="https://www.instagram.com/lenceriaafrodita2021/?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram @lenceriaafrodita2021"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.link/kdpn3h"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp Contacto Directo"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="back-to-top" onClick={scrollToTop} title="Volver arriba">
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="credit">
        Creado con <Heart size={14} className="heart-icon" /> por <span>Ramiro Lacci</span> | © {new Date().getFullYear()} Todos los derechos reservados
      </div>
    </footer>
  );
}
