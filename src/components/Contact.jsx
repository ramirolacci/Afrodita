import React, { useState } from 'react';
import { User, Mail, Phone, MessageCircle, CheckCircle2, MapPin, Sparkles, Clock, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import confetti from 'canvas-confetti';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });

    const messageText = `¡Hola Afrodita Lingerie! Mi nombre es *${formData.fullName}*.\n📞 Teléfono: ${formData.phone}\n✉️ Email: ${formData.email || 'No especificado'}\n💬 Mensaje: ${formData.message || 'Deseo consultar sobre sus modelos y talles.'}`;
    const whatsappUrl = `https://wa.me/543875825227?text=${encodeURIComponent(messageText)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <section className="contact" id="contact">
      <ScrollReveal direction="up">
        <h2 className="heading"> <span>Contacta</span> con Nosotros </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="contact-wrapper glass-panel">
          <div className="contact-info-panel">
            <div className="info-header">
              <span className="subtitle-tag"><Sparkles size={16} /> Atención Personalizada</span>
              <h3>Visítanos en Salta</h3>
              <p>Estamos listos para asesorarte en la elección del talle y modelo perfecto para vos.</p>
            </div>

            <div className="contact-details-list">
              <div className="detail-card">
                <div className="detail-icon"><MapPin size={22} /></div>
                <div>
                  <h4>Dirección</h4>
                  <p>San Luis 1957, Salta, Argentina</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon"><MessageCircle size={22} /></div>
                <div>
                  <h4>WhatsApp Directo</h4>
                  <p>+54 387 582-5227</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon"><Clock size={22} /></div>
                <div>
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Sábados: 09:00 - 20:00 hs</p>
                </div>
              </div>
            </div>

            <iframe
              title="Ubicación Afrodita Lingerie Salta"
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.4959687175015!2d-65.43099493036503!3d-24.79600568115915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc2531da0507d%3A0xfde573097604f889!2sSan%20Luis%201957%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1719852114420!5m2!1ses-419!2sar"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <p className="form-sub">Completá tus datos y te responderemos al instante por WhatsApp.</p>

            {submitted && (
              <div className="success-toast">
                <CheckCircle2 size={22} />
                <span>¡Mensaje preparado! Redirigiendo a WhatsApp...</span>
              </div>
            )}

            <div className="inputBox">
              <User className="input-icon" size={20} />
              <input
                type="text"
                name="fullName"
                placeholder="Nombre completo"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox">
              <Mail className="input-icon" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico (opcional)"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox">
              <Phone className="input-icon" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono / WhatsApp"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox textarea-box">
              <textarea
                name="message"
                placeholder="Escribe tu consulta o pedido especial..."
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn submit-btn">
              <Send size={18} /> Enviar Consulta por WhatsApp
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
