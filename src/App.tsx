import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductGrid from './components/ProductGrid';
import Categories from './components/Categories';
import CareGuide from './components/CareGuide';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { useNavigation } from './hooks/useNavigation';
import { plants } from './data/plants';

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, toggleCart, closeCart } = useCart();
  const { currentPage, navigateTo } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onNavigate={navigateTo}
            plants={plants}
            onAddToCart={addToCart}
          />
        );
      case 'plants':
        return (
          <div className="pt-20">
            <ProductGrid 
              plants={plants}
              onAddToCart={addToCart}
            />
          </div>
        );
      case 'categories':
        return (
          <div className="pt-20">
            <Categories onNavigate={navigateTo} />
          </div>
        );
      case 'care-guide':
        return (
          <div className="pt-20">
            <CareGuide />
          </div>
        );
      case 'about':
        return (
          <div className="pt-20">
            <About />
          </div>
        );
      default:
        return (
          <HomePage 
            onNavigate={navigateTo}
            plants={plants}
            onAddToCart={addToCart}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemCount={cart.items.reduce((sum, item) => sum + item.quantity, 0)}
        onCartToggle={toggleCart}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />
      
      {renderCurrentPage()}
      
      <Footer />
      
      <Cart
        cart={cart}
        onClose={closeCart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
}

export default App;