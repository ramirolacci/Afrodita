import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ searchOpen, setSearchOpen, searchQuery, setSearchQuery, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPos = window.scrollY + 200;

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
      <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
        <img src="/Imagenes/logopestaña.png" alt="Afrodita Logo" />
        Afrodita <span>Lingerie</span>
      </a>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
        >
          About
        </a>
        <a 
          href="#products" 
          className={activeSection === 'products' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}
        >
          Catalog
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
        >
          Contact
        </a>
      </nav>

      <div className="icons">
        <button 
          className="icon-btn" 
          onClick={() => {
            setSearchOpen(!searchOpen);
            setMenuOpen(false);
          }}
          aria-label="Buscar"
          title="Buscar productos"
        >
          <Search size={22} />
        </button>

        <a 
          href="#products" 
          className="icon-btn cart-icon"
          onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}
          title="Ver Catálogo"
        >
          <ShoppingBag size={22} />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </a>

        <button 
          className="icon-btn menu-btn" 
          onClick={() => {
            setMenuOpen(!menuOpen);
            setSearchOpen(false);
          }}
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`search-form ${searchOpen ? 'active' : ''}`}>
        <input 
          type="search" 
          id="search-box" 
          placeholder="Buscar prendas (ej. Black, Carmesí, Ambar)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus={searchOpen}
        />
        <label htmlFor="search-box">
          <Search size={20} />
        </label>
        {searchQuery && (
          <button 
            className="clear-search" 
            onClick={() => setSearchQuery('')}
            title="Limpiar"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </header>
  );
}
