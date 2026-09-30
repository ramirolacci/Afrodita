import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, size) => {
    setCartItems((prev) => [...prev, { ...product, selectedSize: size }]);
  };

  return (
    <div className="app-container">
      <Navbar
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartItems.length}
      />
      
      <main>
        <Hero />
        <About />
        <Catalog
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onAddToCart={handleAddToCart}
        />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
