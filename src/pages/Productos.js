import React from 'react';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products'; 

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Productos = () => {
  const shuffledProducts = shuffleArray(products); 
  return (
    <>
      <h2 style={{ marginLeft: '2rem', marginTop: '2rem' }}>Todos los productos</h2>
      <ProductGrid products={shuffledProducts} />
    </>
  );
};

export default Productos;
