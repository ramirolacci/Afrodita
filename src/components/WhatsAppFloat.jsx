import React from 'react';
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
      <svg
        className="whatsapp-svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M16 2a13 13 0 0 0-11 20L3 29l7.3-1.9A13 13 0 1 0 16 2zm0 23.8a10.8 10.8 0 0 1-5.5-1.5l-.4-.2-4.3 1.1 1.1-4.2-.3-.4a10.8 10.8 0 1 1 9.4 5.2zm5.9-8.1c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 8.9 8.9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.4.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.3 1.5 3.5c.2.3 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.5z" />
      </svg>
      <span className="tooltip">¡Consultanos en WhatsApp!</span>
    </a>
  );
}
