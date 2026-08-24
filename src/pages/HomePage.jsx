import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ImageMarquee from '../components/ImageMarquee'
import ProductGrid from '../components/ProductGrid'
import CustomOrderCTA from '../components/CustomOrderCTA'
import ContactSection from '../components/ContactSection'

export default function HomePage({ onAddToCart }) {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('All Product');

  const handleCategoryClick = (category) => {
    setActiveFilter(category);
    setTimeout(() => {
      const el = document.getElementById('products');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <HeroBanner onCategoryClick={handleCategoryClick} />
      <ImageMarquee />
      <ProductGrid onAddToCart={onAddToCart} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <CustomOrderCTA />
      <ContactSection />
    </>
  )
}
