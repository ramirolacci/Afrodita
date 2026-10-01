import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import CartDrawer from './components/CartDrawer';
import InfoPage from './pages/InfoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product, size) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { ...product, selectedSize: size, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenInfoPage = (pageKey) => {
    setCurrentPage(pageKey);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-container">
      {currentPage === 'home' ? (
        <>
          <Navbar
            searchOpen={searchOpen}
            setSearchOpen={setSearchOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            onOpenCart={() => setIsCartOpen(true)}
          />
          
          <main>
            <Hero onOpenCart={() => setIsCartOpen(true)} />
            <About />
            <Catalog
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onAddToCart={handleAddToCart}
            />
            <Contact />
          </main>

          <Footer onOpenInfoPage={handleOpenInfoPage} />
          <WhatsAppFloat />

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />
        </>
      ) : (
        <InfoPage
          pageKey={currentPage}
          onBackToHome={() => {
            setCurrentPage('home');
            window.scrollTo(0, 0);
          }}
        />
      )}
    </div>
  );
}
