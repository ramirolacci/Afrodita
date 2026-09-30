import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    let message = `¡Hola Afrodita Lingerie! 🌸 Quiero realizar el siguiente pedido:\n\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* - Talle: ${item.selectedSize} | Cant: ${item.quantity} x $${item.price.toFixed(2)} = $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*TOTAL ESTIMADO:* $${totalPrice.toFixed(2)}\n\n¿Tienen disponibilidad para envío/retiro?`;

    const url = `https://wa.me/543875825227?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <div className="cart-header-title">
                <ShoppingBag size={22} className="accent-icon" />
                <h3>Tu Selección Privada</h3>
                <span className="cart-badge-count">{cartItems.reduce((a, b) => a + b.quantity, 0)}</span>
              </div>
              <button className="cart-close-btn" onClick={onClose} aria-label="Cerrar bolsa">
                <X size={20} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <div className="empty-icon-circle">
                  <ShoppingBag size={40} />
                </div>
                <h4>Tu bolsa está vacía</h4>
                <p>Explora nuestro catálogo y selecciona tus prendas favoritas.</p>
                <button className="btn btn-outline" onClick={onClose}>
                  Ver Catálogo
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {cartItems.map((item, idx) => (
                    <motion.div
                      key={`${item.id}-${item.selectedSize}-${idx}`}
                      className="cart-item-card"
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <img src={item.image} alt={item.name} className="cart-item-img" />
                      
                      <div className="cart-item-info">
                        <div className="cart-item-top">
                          <h4>{item.name}</h4>
                          <button
                            className="remove-btn"
                            onClick={() => onRemoveItem(item.id, item.selectedSize)}
                            title="Eliminar"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="cart-item-meta">
                          <span className="talle-chip">Talle {item.selectedSize}</span>
                          <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>

                        <div className="quantity-controls">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span className="subtotal-val">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="summary-row total-row">
                    <span>Total a Consultar</span>
                    <span className="total-val">${totalPrice.toFixed(2)}</span>
                  </div>

                  <p className="checkout-note">
                    <Sparkles size={14} /> Redirección directa a atención personalizada vía WhatsApp.
                  </p>

                  <button className="btn checkout-btn" onClick={handleCheckoutWhatsApp}>
                    <MessageCircle size={20} /> Enviar Pedido a WhatsApp
                  </button>

                  <button className="clear-all-btn" onClick={onClearCart}>
                    Vaciar bolsa
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
