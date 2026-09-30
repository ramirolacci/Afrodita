import React, { useState } from 'react';
import { MapPin, Clock, Mail, Send, CheckCircle2, Sparkles, Gift, PackageCheck, HeartHandshake, Crown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import confetti from 'canvas-confetti';
import './Contact.css';

export default function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 3500);
  };

  return (
    <section className="contact" id="contact">
      <ScrollReveal direction="up">
        <h2 className="heading"> <span>Contacto</span> & Novedades </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="contact-split-wrapper glass-panel">
          {/* Left Column: Newsletter Form + 4 Feature Cards */}
          <div className="contact-left-newsletter">
            <div className="subtitle-tag">
              <Sparkles size={16} /> Comunidad Afrodita
            </div>
            <h3>Suscríbete a nuestro Newsletter</h3>
            <p className="newsletter-desc">
              Sé la primera en enterarte de nuevos lanzamientos, ofertas exclusivas, promociones de temporada y consejos de estilo.
            </p>

            {subscribed && (
              <div className="newsletter-success-toast">
                <CheckCircle2 size={20} />
                <span>¡Gracias por suscribirte! Revisa tu bandeja de entrada pronto.</span>
              </div>
            )}

            <form onSubmit={handleNewsletterSubmit} className="newsletter-inline-form">
              <div className="inputBox">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="btn newsletter-btn">
                <Send size={16} /> Suscribirme
              </button>
            </form>

            {/* 4 Feature Cards */}
            <div className="newsletter-features-row">
              <div className="newsletter-feature-card">
                <div className="nft-icon"><Gift size={20} /></div>
                <div>
                  <h4>Descuentos VIP</h4>
                  <p>Promociones secretas exclusivas.</p>
                </div>
              </div>

              <div className="newsletter-feature-card">
                <div className="nft-icon"><PackageCheck size={20} /></div>
                <div>
                  <h4>Envíos Discretos</h4>
                  <p>Empaque seguro y privado.</p>
                </div>
              </div>

              <div className="newsletter-feature-card">
                <div className="nft-icon"><HeartHandshake size={20} /></div>
                <div>
                  <h4>Asesoría Única</h4>
                  <p>Guía de talles personalizada.</p>
                </div>
              </div>

              <div className="newsletter-feature-card">
                <div className="nft-icon"><Crown size={20} /></div>
                <div>
                  <h4>Colecciones Exclusivas</h4>
                  <p>Acceso anticipado a lanzamientos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading Text + Info Cards + Square Map */}
          <div className="contact-right-info">
            <div className="contact-right-header">
              <div className="subtitle-tag">
                <Sparkles size={16} /> Atención Exclusiva
              </div>
              <h3>¿Tienes alguna duda sobre tu talle o modelo?</h3>
              <p className="contact-desc">
                Comunícate directamente con nosotros por WhatsApp o visítanos en nuestro local. Te brindamos asesoría personalizada en tiempo real.
              </p>
            </div>

            <div className="info-cards-row">
              <div className="info-card">
                <div className="info-card-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p>San Luis 1957, Salta, Argentina</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h4>Horarios</h4>
                  <p>Lunes a Sábados: 09:00 - 20:00 hs</p>
                </div>
              </div>
            </div>

            <div className="contact-map-container">
              <iframe
                title="Ubicación Afrodita Lingerie Salta"
                className="contact-map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.4959687175015!2d-65.43099493036503!3d-24.79600568115915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc2531da0507d%3A0xfde573097604f889!2sSan%20Luis%201957%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1719852114420!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
