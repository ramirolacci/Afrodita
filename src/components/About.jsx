import React from 'react';
import { Heart, ShieldCheck, Sparkles, Truck, Award, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <ScrollReveal direction="up">
        <h2 className="heading"> <span>Sobre</span> Nosotros </h2>
      </ScrollReveal>

      <div className="row">
        <ScrollReveal direction="right" className="image-col">
          <div className="image-container">
            <div className="image-glow"></div>
            <img src="/Imagenes/lingerieabout.png" alt="Afrodita Lingerie Concept" />
            <div className="image-badge">
              <Award size={20} />
              <div>
                <strong>Alta Calidad</strong>
                <small>Bordados Premium</small>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal direction="left" className="content-col">
          <div className="content">
            <div className="subtitle-tag">
              <Sparkles size={16} /> Filosofía Afrodita
            </div>
            
            <h3>¿Qué hace que nuestra lencería sea única?</h3>
            <p>
              En <strong>Afrodita Lingerie</strong> creemos que la lencería no es solo una prenda interior; es una declaración de amor propio, elegancia y empoderamiento personal.
            </p>
            <p>
              Cada colección está cuidadosamente curada y confeccionada con encajes de trama fina, tul elastizado respirable y ballenas anatómicas que se ajustan suavemente sin presionar.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><Heart size={20} /></div>
                <div>
                  <h4>Diseños de Autor</h4>
                  <p>Modelos sensuales y exclusivos.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon"><ShieldCheck size={20} /></div>
                <div>
                  <h4>Telas Hipoalergénicas</h4>
                  <p>Suavidad extrema al tacto.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon"><Truck size={20} /></div>
                <div>
                  <h4>Despachos Rápidos</h4>
                  <p>Envíos discretos en Salta y el país.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon"><Star size={20} /></div>
                <div>
                  <h4>Asesoría de Talle</h4>
                  <p>Ayuda personalizada por WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
