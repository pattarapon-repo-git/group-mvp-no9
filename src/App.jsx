import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CustomOrderPage from './pages/CustomOrderPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // State ตะกร้าสินค้า — ส่งเชื่อมระหว่าง Navbar และ ProductGrid
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    alert(`✅ เพิ่ม "${product.title || product.name}" ลงตะกร้าแล้ว!`);
  };

  return (
    <Router>
      <div className="min-h-screen bg-base-100 flex flex-col font-sans">
        <Navbar cartCount={cartCount} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
            <Route path="/products" element={<ProductsPage onAddToCart={handleAddToCart} />} />
            <Route path="/custom-order" element={<CustomOrderPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
