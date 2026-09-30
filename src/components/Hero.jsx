import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('products');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="home-overlay"></div>
      <div className="content">
        <div className="badge-tag">
          <Sparkles size={16} /> Colección Exclusiva 2026
        </div>
        <h3>A hell made woman</h3>
        <p>
          Contáctanos y consigue la tuya. Toda la lencería que estás buscando la encontrás aquí. Diseños únicos pensados para realzar tu belleza y confianza.
        </p>
        <div className="hero-actions">
          <button className="btn" onClick={scrollToCatalog}>
            Ver Catálogo <ArrowRight size={18} />
          </button>
          <a href="https://wa.link/kdpn3h" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Consulta Directa
          </a>
        </div>
      </div>
    </section>
  );
}
