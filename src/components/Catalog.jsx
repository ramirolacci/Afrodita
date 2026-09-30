import React, { useState, useMemo } from 'react';
import { Eye, Heart, ShoppingBag, Star, Filter, Search } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductModal from './ProductModal';
import './Catalog.css';

export default function Catalog({ searchQuery, setSearchQuery, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeProduct, setActiveProduct] = useState(null);
  const [favorites, setFavorites] = useState({});

  const categories = ['Todos', 'Conjuntos', 'Lencería Fina', 'Novedades'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchesSearch = searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOrderDirect = (product) => {
    const text = `¡Hola Afrodita Lingerie! Deseo consultar disponiblidad del modelo *${product.name}* ($${product.price}).`;
    const url = `https://wa.me/543875825227?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="products" id="products">
      <h1 className="heading"> Nuestro <span>Catálogo</span> </h1>

      <div className="catalog-filters">
        <div className="categories-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {searchQuery && (
          <div className="search-active-badge">
            <span>Filtrando por: "<strong>{searchQuery}</strong>"</span>
            <button onClick={() => setSearchQuery('')}>Limpiar búsqueda</button>
          </div>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <Search size={48} />
          <h3>No encontramos productos</h3>
          <p>Prueba con otros términos de búsqueda o selecciona otra categoría.</p>
          <button className="btn" onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}>
            Ver todos los productos
          </button>
        </div>
      ) : (
        <div className="box-container">
          {filteredProducts.map((product) => (
            <div className="box" key={product.id}>
              <div className="box-header">
                <span className="badge-cat">{product.category}</span>
                <button
                  className={`fav-btn ${favorites[product.id] ? 'active' : ''}`}
                  onClick={() => toggleFavorite(product.id)}
                  title="Guardar en favoritos"
                >
                  <Heart size={18} fill={favorites[product.id] ? '#d91ba9' : 'none'} color={favorites[product.id] ? '#d91ba9' : '#fff'} />
                </button>
              </div>

              <div className="image" onClick={() => setActiveProduct(product)}>
                <img src={product.image} alt={product.name} />
                <div className="image-overlay">
                  <button className="quick-view-btn">
                    <Eye size={18} /> Vista Rápida
                  </button>
                </div>
              </div>

              <div className="content">
                <h3>{product.name}</h3>
                
                <div className="stars">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
                  ))}
                </div>

                <div className="price">
                  ${product.price.toFixed(2)} <span>${product.originalPrice.toFixed(2)}</span>
                </div>

                <div className="card-actions">
                  <button className="card-btn detail-btn" onClick={() => setActiveProduct(product)}>
                    <Eye size={16} /> Detalles
                  </button>
                  <button className="card-btn order-btn" onClick={() => handleOrderDirect(product)}>
                    <ShoppingBag size={16} /> Pedir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
