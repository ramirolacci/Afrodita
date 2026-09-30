import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Check } from 'lucide-react';
import './ProductModal.css';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('85');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const sizes = ['85', '90', '95', '100', '105'];

  const handleOrderWhatsApp = () => {
    const text = `¡Hola Afrodita Lingerie! Estoy interesada en adquirir el producto *${product.name}* (Talle: ${selectedSize}) a $${product.price}. ¿Tienen stock disponible?`;
    const url = `https://wa.me/543875825227?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={24} />
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-details">
            <span className="modal-category">{product.category}</span>
            <h2>{product.name}</h2>

            <div className="modal-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#ffd700" color="#ffd700" />
              ))}
              <span>(5.0 Reseñas)</span>
            </div>

            <div className="modal-price">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="old-price">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="modal-description">{product.description}</p>

            <div className="size-selector">
              <label>Seleccionar Talle:</label>
              <div className="size-buttons">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn" onClick={handleAdd}>
                {added ? <Check size={20} /> : <ShoppingBag size={20} />}
                {added ? '¡Añadido a Consulta!' : 'Agregar a Mi Lista'}
              </button>
              <button className="btn btn-outline whatsapp-modal-btn" onClick={handleOrderWhatsApp}>
                <MessageCircle size={20} /> Comprar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
