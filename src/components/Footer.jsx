import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="footer-grid-container">
        {/* Left Column: Brand Logo & Tagline */}
        <div className="footer-col footer-left-col">
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

        {/* Center Column: Navigation Links (4 and 4) */}
        <div className="footer-col footer-center-col">
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
              <a href="#about">FAQ</a>
              <a href="#contact">Legales</a>
            </div>
          </div>
        </div>

        {/* Right Column: Seguinos & Horizontal Icon-Only Social Buttons (Instagram & Facebook) */}
        <div className="footer-col footer-right-col">
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
