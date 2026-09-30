import React from 'react';
import { MapPin, Clock, Sparkles, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './Contact.css';

export default function Contact() {
  const whatsappUrl = "https://wa.link/kdpn3h";

  return (
    <section className="contact" id="contact">
      <ScrollReveal direction="up">
        <h2 className="heading"> <span>Contacto</span> Directo </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="contact-main-card glass-panel">
          <div className="contact-hero-content">
            <div className="subtitle-tag">
              <Sparkles size={16} /> Atención Exclusiva
            </div>
            
            <h3>¿Tienes alguna duda sobre tu talle o modelo?</h3>
            <p className="contact-desc">
              Comunícate directamente con nosotros por WhatsApp. Te brindamos asesoría personalizada en tiempo real, catálogo de stock actualizado y coordinación de envíos en Salta y todo el país.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-hero-btn"
            >
              <svg className="whatsapp-btn-svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
                <path d="M16 2a13 13 0 0 0-11 20L3 29l7.3-1.9A13 13 0 1 0 16 2zm0 23.8a10.8 10.8 0 0 1-5.5-1.5l-.4-.2-4.3 1.1 1.1-4.2-.3-.4a10.8 10.8 0 1 1 9.4 5.2zm5.9-8.1c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 8.9 8.9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.4.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.3 1.5 3.5c.2.3 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.5z" />
              </svg>
              <span>Hablar por WhatsApp Ahora</span>
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="contact-grid-info">
            <div className="info-box">
              <div className="info-box-icon"><MapPin size={24} /></div>
              <div className="info-box-text">
                <h4>Ubicación</h4>
                <p>San Luis 1957, Salta, Argentina</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-box-icon"><Clock size={24} /></div>
              <div className="info-box-text">
                <h4>Horarios</h4>
                <p>Lunes a Sábados: 09:00 - 20:00 hs</p>
              </div>
            </div>

            <a 
              href="https://www.instagram.com/lenceriaafrodita2021/?utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="info-box info-box-link"
            >
              <div className="info-box-icon insta-icon"><i className="fab fa-instagram" style={{ fontSize: '2.4rem' }}></i></div>
              <div className="info-box-text">
                <h4>Instagram</h4>
                <p>@lenceriaafrodita2021</p>
              </div>
            </a>
          </div>

          <div className="map-container">
            <iframe
              title="Ubicación Afrodita Lingerie Salta"
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.4959687175015!2d-65.43099493036503!3d-24.79600568115915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc2531da0507d%3A0xfde573097604f889!2sSan%20Luis%201957%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1719852114420!5m2!1ses-419!2sar"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
