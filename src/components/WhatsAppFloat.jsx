import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.link/kdpn3h"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      title="Atención inmediata por WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="tooltip">¡Consultanos!</span>
    </a>
  );
}
