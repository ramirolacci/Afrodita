import React from 'react';
import { Heart, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading"> <span>Sobre</span> Nosotros </h1>
      <div className="row">
        <div className="image-container">
          <div className="image-glow"></div>
          <img src="/Imagenes/lingerieabout.png" alt="Sobre Afrodita Lingerie" />
        </div>
        
        <div className="content">
          <h3>¿Qué hace que nuestra lencería sea especial?</h3>
          <p>
            En <strong>Afrodita Lingerie</strong> nos apasiona diseñar y seleccionar conjuntos de lencería exclusivos que combinan elegancia, delicadeza y el máximo confort para tu día a día y momentos especiales.
          </p>
          <p>
            Cada una de nuestras prendas está confeccionada con encajes finos, confecciones de alta costura y telas de máxima elasticidad pensadas para adaptarse y realzar la belleza natural de cada figura.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon"><Heart size={20} /></div>
              <div>
                <h4>Diseño Exclusivo</h4>
                <p>Modelos únicos y delicados.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><ShieldCheck size={20} /></div>
              <div>
                <h4>Calidad Premium</h4>
                <p>Materiales ultra suaves.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><Truck size={20} /></div>
              <div>
                <h4>Envíos Locales</h4>
                <p>Salta y todo el país.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon"><Sparkles size={20} /></div>
              <div>
                <h4>Atención Personalizada</h4>
                <p>Te asesoramos en tu talle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
