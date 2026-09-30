import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ searchOpen, setSearchOpen, searchQuery, setSearchQuery, cartCount, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <div className="logo-img-wrapper">
            <img src="/Imagenes/logopestaña.png" alt="Afrodita Logo" />
          </div>
          <div className="logo-text">
            <span>AFRODITA</span>
            <small>LINGERIE</small>
          </div>
        </a>

        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Inicio
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
          >
            Nosotros
          </a>
          <a 
            href="#products" 
            className={activeSection === 'products' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}
          >
            Catálogo
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          >
            Contacto
          </a>
        </nav>

        <div className="icons">
          <button 
            className="icon-btn search-trigger" 
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMenuOpen(false);
            }}
            aria-label="Buscar productos"
            title="Buscar prendas"
          >
            <Search size={20} />
          </button>

          <button 
            className="icon-btn cart-icon"
            onClick={onOpenCart}
            title="Ver Bolsa de Selección"
          >
            <ShoppingBag size={20} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  className="badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button 
            className="icon-btn menu-btn" 
            onClick={() => {
              setMenuOpen(!menuOpen);
              setSearchOpen(false);
            }}
            aria-label="Menú responsivo"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              className="search-form-overlay"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="search-input-wrapper">
                <Search size={20} className="search-icon" />
                <input 
                  type="search" 
                  id="search-box" 
                  placeholder="Buscar prendas por nombre (ej. Black, Carmesí, Ambar)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button className="clear-search" onClick={() => setSearchQuery('')}>
                    <X size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
