import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, ShieldCheck } from 'lucide-react';
import './Hero.css';

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
}

export default function Hero({ onOpenCart }) {
  const count1000 = useCountUp(1000, 2200);
  const count100 = useCountUp(100, 2200);

  const scrollToCatalog = () => {
    const catalog = document.getElementById('products');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="home-overlay"></div>
      
      <div className="home-content-container">
        <motion.div 
          className="content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="badge-tag">
            <Sparkles size={16} className="sparkle-icon" /> Alta Costura & Diseño Exclusivo
          </div>

          <h1 className="hero-title">
            A hell made <span className="highlight-text">woman</span>
          </h1>

          <p className="hero-description">
            Toda la lencería de lujo que buscas. Diseños delicados confeccionados para realzar tu belleza natural, empoderamiento y seguridad en cada detalle.
          </p>

          <div className="hero-actions">
            <button className="btn" onClick={scrollToCatalog}>
              Explorar Catálogo <ArrowRight size={18} />
            </button>
            <a href="https://wa.link/kdpn3h" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Atención Personalizada
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>+{count1000.toLocaleString('en-US')}</strong>
              <span>Prendas Entregadas</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>{count100}%</strong>
              <span>Calidad Garantizada</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>Salta</strong>
              <span>y Envíos a todo el país</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-floating-card glass-panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="card-badge-top">
            <ShieldCheck size={18} /> Garantía Afrodita
          </div>
          <h3>Lencería Fina & Confort</h3>
          <p>Textiles ultra suaves importados. Sin marcas, con ajuste perfecto.</p>
          <button className="hero-mini-btn" onClick={scrollToCatalog}>
            Ver Tendencias 2026
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-down-indicator"
        onClick={scrollToCatalog}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span>Desliza para explorar</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
