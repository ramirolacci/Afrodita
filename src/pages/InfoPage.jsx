import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Truck, HelpCircle, ShieldAlert, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import './InfoPage.css';

export default function InfoPage({ pageKey, onBackToHome }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageKey]);

  return (
    <motion.div 
      className="full-page-view"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top Fixed Header with Brand Logo Only */}
      <header className="page-header">
        <div className="page-header-inner">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); onBackToHome(); }}>
            <img src="/Imagenes/logopestaña.png" alt="Afrodita Logo" />
            <div className="logo-text">
              <span>AFRODITA</span>
              <small>LINGERIE</small>
            </div>
          </a>
        </div>
      </header>

      {/* Main Page Container */}
      <main className="page-main-container">
        {pageKey === 'shipping' && (
          <div className="info-page-wrapper">
            <div className="page-badge">
              <Sparkles size={16} /> Información Oficial
            </div>
            <h1 className="page-title">Envíos & Devoluciones</h1>
            <p className="page-subtitle">
              Conoce en detalle nuestros tiempos de entrega, la política de empaque discreto y las condiciones para cambios de prendas.
            </p>

            <div className="page-grid-cards">
              <div className="page-card glass-panel">
                <div className="page-card-icon"><Truck size={28} /></div>
                <h3>Métodos de Envío</h3>
                <p>
                  Ofrecemos despachos a todo el territorio argentino a través de <strong>Correo Argentino / OCA</strong> con número de guía oficial para el seguimiento en tiempo real de tu paquete.
                </p>
                <ul className="info-bullets">
                  <li><strong>Salta Capital:</strong> Envíos en el día o retiro sin cargo por nuestro showroom.</li>
                  <li><strong>Resto del país:</strong> Tiempo estimado de 2 a 5 días hábiles.</li>
                </ul>
              </div>

              <div className="page-card glass-panel">
                <div className="page-card-icon"><CheckCircle2 size={28} /></div>
                <h3>Empaque 100% Discreto</h3>
                <p>
                  Entendemos la importancia de tu privacidad. Todos los pedidos se despachan en cajas neutras herméticamente selladas, sin logos visibles ni especificaciones del contenido en la etiqueta exterior.
                </p>
              </div>

              <div className="page-card glass-panel">
                <div className="page-card-icon"><ShieldAlert size={28} /></div>
                <h3>Política de Cambios e Higiene</h3>
                <p>
                  Por estrictas normas de salud e higiene sanitaria, <strong>las prendas inferiores (bombachas, colaless y conjuntos íntimos) no tienen cambio ni devolución</strong> bajo ninguna circunstancia.
                </p>
              </div>

              <div className="page-card glass-panel">
                <div className="page-card-icon"><Sparkles size={28} /></div>
                <h3>Cambios en Bralettes & Tops</h3>
                <p>
                  Los bralettes, corsets y tops pueden cambiarse por talle dentro de los 7 días de recibida la compra, siempre que la prenda se encuentre sin uso, con su etiqueta original adherida y en perfectas condiciones.
                </p>
              </div>
            </div>
          </div>
        )}

        {pageKey === 'faq' && (
          <div className="info-page-wrapper">
            <div className="page-badge">
              <Sparkles size={16} /> Preguntas Frecuentes
            </div>
            <h1 className="page-title">Preguntas Frecuentes (FAQ)</h1>
            <p className="page-subtitle">
              Respuestas claras a las dudas más habituales sobre compras, medios de pago y talles en Afrodita Lingerie.
            </p>

            <div className="faq-full-list">
              <div className="faq-card-box glass-panel">
                <div className="faq-number">01</div>
                <div>
                  <h3>¿Cómo sé cuál es mi talle correcto?</h3>
                  <p>
                    Contamos con modelos desde el talle 85 al 105. Si tienes dudas entre dos talles, puedes consultar por WhatsApp para una recomendación exacta de acuerdo a tus medidas.
                  </p>
                </div>
              </div>

              <div className="faq-card-box glass-panel">
                <div className="faq-number">02</div>
                <div>
                  <h3>¿Cuáles son las formas de pago aceptadas?</h3>
                  <p>
                    Aceptamos transferencias bancarias (con descuento especial), Mercado Pago, tarjetas de débito/crédito y dinero en efectivo en el local de Salta.
                  </p>
                </div>
              </div>

              <div className="faq-card-box glass-panel">
                <div className="faq-number">03</div>
                <div>
                  <h3>¿Cómo realizo una compra en la tienda?</h3>
                  <p>
                    Puedes explorar nuestro catálogo, agregar tus productos favoritos a la <strong>Bolsa de Selección</strong>, elegir el talle deseado y presionar el botón <em>"Enviar Pedido a WhatsApp"</em>. Un asesor te atenderá personalmente al instante.
                  </p>
                </div>
              </div>

              <div className="faq-card-box glass-panel">
                <div className="faq-number">04</div>
                <div>
                  <h3>¿Dónde puedo retirar mi compra en Salta?</h3>
                  <p>
                    Nos encontramos en <strong>San Luis 1957, Salta, Argentina</strong>. Puedes retirar tu pedido en nuestro horario de atención de Lunes a Sábados de 09:00 a 20:00 hs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {pageKey === 'legal' && (
          <div className="info-page-wrapper">
            <div className="page-badge">
              <Sparkles size={16} /> Información Legal
            </div>
            <h1 className="page-title">Términos, Condiciones & Legales</h1>
            <p className="page-subtitle">
              Conoce las condiciones generales de uso de nuestra plataforma y la política de privacidad de tus datos.
            </p>

            <div className="legal-full-content glass-panel">
              <div className="legal-section">
                <h3>1. Confidencialidad y Protección de Datos</h3>
                <p>
                  En cumplimiento de las normativas de protección de datos personales, Afrodita Lingerie garantiza que la información recolectada para envíos y consultas será tratada de manera estrictamente confidencial y no será cedida a terceros.
                </p>
              </div>

              <div className="legal-section">
                <h3>2. Derechos de Propiedad Intelectual</h3>
                <p>
                  Todo el contenido audiovisual, logotipo, fotografías de productos, textos y elementos gráficos presentes en este sitio web son propiedad intelectual exclusiva de <strong>Afrodita Lingerie</strong>.
                </p>
              </div>

              <div className="legal-section">
                <h3>3. Precios y Condiciones de Venta</h3>
                <p>
                  Los precios informados en este sitio web están expresados en Pesos Argentinos (ARS) e incluyen IVA. Afrodita Lingerie se reserva el derecho de actualizar precios y stock sin previo aviso.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Single Action Bottom Button */}
        <div className="page-actions-bottom">
          <button className="btn" onClick={onBackToHome}>
            <ArrowLeft size={18} /> Volver a la tienda
          </button>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="simple-page-footer">
        <p>
          Creado con <Heart size={14} className="heart-icon-glow" /> por{' '}
          <a href="https://waveframe.com.ar/" target="_blank" rel="noopener noreferrer" className="waveframe-link">
            <u><b>WaveFrame Studio</b></u>
          </a>{' '}
          | © 2026 Afrodita Lingerie. Todos los derechos reservados.
        </p>
      </footer>
    </motion.div>
  );
}
