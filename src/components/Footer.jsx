import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="footer-grid-container">
        {/* Left Column: Seguinos & Social Buttons */}
        <div className="footer-col footer-left-col">
          <h4 className="footer-col-title">Seguinos</h4>
          <div className="footer-social-buttons">
            <a
              href="https://www.instagram.com/lenceriaafrodita2021/?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn insta-btn"
              title="Síguenos en Instagram"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn fb-btn"
              title="Síguenos en Facebook"
            >
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>

            <a
              href="https://wa.link/kdpn3h"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-btn wa-btn"
              title="Contacto por WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Center Column: Brand Info */}
        <div className="footer-col footer-center-col">
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

        {/* Right Column: Navigation Links */}
        <div className="footer-col footer-right-col">
          <h4 className="footer-col-title">Navegación</h4>
          <div className="footer-links-group">
            <div className="nav-column">
              <a href="#home">Inicio</a>
              <a href="#about">Nosotros</a>
              <a href="#products">Catálogo</a>
              <a href="#contact">Contacto</a>
            </div>
            <div className="nav-column">
              <a href="#products">Guía de Talles</a>
              <a href="#contact">Envíos & Devoluciones</a>
              <a href="#about">Preguntas Frecuentes</a>
            </div>
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
