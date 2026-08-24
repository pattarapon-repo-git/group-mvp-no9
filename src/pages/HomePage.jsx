import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ImageMarquee from '../components/ImageMarquee'
import ProductGrid from '../components/ProductGrid'
import CustomOrderCTA from '../components/CustomOrderCTA'
import ContactSection from '../components/ContactSection'

export default function HomePage({ onAddToCart }) {
  const location = useLocation();

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
      <HeroBanner />
      <ImageMarquee />
      <ProductGrid onAddToCart={onAddToCart} />
      <CustomOrderCTA />
      <ContactSection />
    </>
  )
}
