import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import products from '../data/products';

const Home = () => {
  const destacadosIds = [1, 6, 18, 21];

  const destacados = products.filter(product => destacadosIds.includes(product.id));

  return (
    <>
      <Hero />
      <h2 style={{ marginLeft: '2rem', marginTop: '2rem' }}>Productos Destacados</h2>
      <ProductGrid products={destacados} />
    </>
  );
};

export default Home;

