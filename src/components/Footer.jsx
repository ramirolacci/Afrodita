import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenInfoPage }) {
  const handleInfoClick = (e, pageKey) => {
    e.preventDefault();
    if (onOpenInfoPage) {
      onOpenInfoPage(pageKey);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="footer-grid-container">
        {/* Column 1: Brand Logo & Tagline */}
        <div className="footer-col footer-brand-col">
          <a href="#home" className="footer-logo">
            <img src="/Imagenes/logopestaña.png" alt="Afrodita Lingerie Logo" />
            <div className="footer-logo-text">
              <span>AFRODITA</span>
              <small>LINGERIE</small>
            </div>
          </a>
          <p className="footer-tagline">
            Diseños exclusivos de alta costura creados para realzar tu belleza natural, sensualidad y confort en cada detalle.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navegación</h4>
          <div className="nav-column">
            <a href="#home">Inicio</a>
            <a href="#about">Nosotros</a>
            <a href="#products">Catálogo</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>

        {/* Column 3: Information Links (Triggers Dedicated Info Screens) */}
        <div className="footer-col">
          <h4 className="footer-col-title">Información</h4>
          <div className="nav-column">
            <a href="#products" onClick={(e) => handleInfoClick(e, 'shipping')}>Guía de Talles</a>
            <a href="#shipping" onClick={(e) => handleInfoClick(e, 'shipping')}>Envíos & Devoluciones</a>
            <a href="#faq" onClick={(e) => handleInfoClick(e, 'faq')}>FAQ</a>
            <a href="#legal" onClick={(e) => handleInfoClick(e, 'legal')}>Legales</a>
          </div>
        </div>

        {/* Column 4: Seguinos & Social Buttons */}
        <div className="footer-col footer-social-col">
          <h4 className="footer-col-title">Seguinos</h4>
          <div className="footer-social-icons-row">
            <a
              href="https://www.instagram.com/lenceriaafrodita2021/?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn insta-circle"
              title="Síguenos en Instagram"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn fb-circle"
              title="Síguenos en Facebook"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="credit-text">
          Creado con <Heart size={14} className="heart-icon-glow" /> por{' '}
          <a
            href="https://waveframe.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="waveframe-link"
          >
            <u><b>WaveFrame Studio</b></u>
          </a>{' '}
          | © 2026 Afrodita Lingerie. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
