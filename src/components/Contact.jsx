import React, { useState } from 'react';
import { User, Mail, Phone, Send, CheckCircle2, MapPin } from 'lucide-react';
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

    // Send order / inquiry via WhatsApp or handle submission
    const messageText = `¡Hola Afrodita Lingerie! Mi nombre es ${formData.fullName}.\nTeléfono: ${formData.phone}\nEmail: ${formData.email || 'No especificado'}\nMensaje: ${formData.message || 'Deseo más información sobre sus conjuntos.'}`;
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
      <h1 className="heading"> <span>Contacta</span> con Nosotros </h1>

      <div className="contact-wrapper">
        <div className="map-card">
          <div className="location-info">
            <MapPin size={22} className="loc-icon" />
            <div>
              <h4>Visítanos en Salta</h4>
              <p>San Luis 1957, Salta, Argentina</p>
            </div>
          </div>
          <iframe
            title="Ubicación Afrodita Lingerie Salta"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.4959687175015!2d-65.43099493036503!3d-24.79600568115915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc2531da0507d%3A0xfde573097604f889!2sSan%20Luis%201957%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1719852114420!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Escríbenos</h3>
          <p className="form-sub">Envíanos un mensaje directo para pedidos personalizados o consultas de talle.</p>

          {submitted && (
            <div className="success-toast">
              <CheckCircle2 size={22} />
              <span>¡Gracias! Redirigiendo a WhatsApp...</span>
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
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="inputBox">
            <Phone className="input-icon" size={20} />
            <input
              type="tel"
              name="phone"
              placeholder="Número de teléfono (WhatsApp)"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <input type="submit" value="Enviar Consulta por WhatsApp" className="btn submit-btn" />
        </form>
      </div>
    </section>
  );
}
