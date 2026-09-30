import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Heart, ShoppingBag, Star, Search, Sparkles, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductModal from './ProductModal';
import ScrollReveal from './ScrollReveal';
import './Catalog.css';

export default function Catalog({ searchQuery, setSearchQuery, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeProduct, setActiveProduct] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [addedIds, setAddedIds] = useState({});

  const categories = ['Todos', 'Conjuntos', 'Lencería Fina', 'Novedades'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()) || item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuickAdd = (product) => {
    // Default size is 90
    onAddToCart(product, '90');
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section className="products" id="products">
      <ScrollReveal direction="up">
        <h2 className="heading"> Colección <span>Exclusiva</span> </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <div className="catalog-filters">
          <div className="categories-pills glass-panel">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {selectedCategory === cat && (
                  <motion.div 
                    layoutId="pill-active-bg" 
                    className="pill-active-glow" 
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="pill-text">{cat}</span>
              </button>
            ))}
          </div>

          {searchQuery && (
            <motion.div 
              className="search-active-badge glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span>Filtrando resultados por: "<strong>{searchQuery}</strong>"</span>
              <button onClick={() => setSearchQuery('')}>Borrar filtro</button>
            </motion.div>
          )}
        </div>
      </ScrollReveal>

      {filteredProducts.length === 0 ? (
        <div className="no-products glass-panel">
          <Search size={48} className="empty-icon" />
          <h3>No encontramos coincidencias</h3>
          <p>Intenta con otros términos o explora la colección completa.</p>
          <button className="btn" onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}>
            Ver todos los modelos
          </button>
        </div>
      ) : (
        <motion.div className="box-container" layout>
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div 
                className="box glass-panel" 
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="box-header">
                  <span className="badge-tag-small">{product.tag}</span>
                  <button
                    className={`fav-btn ${favorites[product.id] ? 'active' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                    title="Guardar en favoritos"
                  >
                    <Heart size={18} fill={favorites[product.id] ? '#d91ba9' : 'none'} color={favorites[product.id] ? '#d91ba9' : '#fff'} />
                  </button>
                </div>

                <div className="image-wrapper" onClick={() => setActiveProduct(product)}>
                  <img src={product.image} alt={product.name} />
                  <div className="image-overlay">
                    <button className="quick-view-btn">
                      <Eye size={18} /> Vista Rápida
                    </button>
                  </div>
                </div>

                <div className="content">
                  <span className="cat-name">{product.category}</span>
                  <h3>{product.name}</h3>
                  
                  <div className="rating-row">
                    <div className="stars">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#e2b053" color="#e2b053" />
                      ))}
                    </div>
                    <span className="reviews-count">({product.reviewsCount} reseñas)</span>
                  </div>

                  <div className="price-row">
                    <div className="price">
                      ${product.price.toFixed(2)} 
                      {product.originalPrice && <span>${product.originalPrice.toFixed(2)}</span>}
                    </div>
                  </div>

                  <div className="card-actions">
                    <button className="card-btn detail-btn" onClick={() => setActiveProduct(product)}>
                      <Eye size={16} /> Ver Detalles
                    </button>
                    <button 
                      className={`card-btn order-btn ${addedIds[product.id] ? 'added' : ''}`} 
                      onClick={() => handleQuickAdd(product)}
                    >
                      {addedIds[product.id] ? <Check size={16} /> : <ShoppingBag size={16} />}
                      {addedIds[product.id] ? 'Añadido' : 'Agregar'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
}
