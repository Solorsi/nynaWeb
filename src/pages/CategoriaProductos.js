import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductGrid from '../components/ProductGrid';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const CategoriaProductos = () => {
  const { categoria } = useParams();

  const filteredProducts = products.filter(product => 
    product.categories && product.categories.includes(categoria)
  );

  const shuffledProducts = shuffleArray(filteredProducts);

  if (shuffledProducts.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '30px' }}>No se encontraron productos.</h2>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        {categoria.replace(/-/g, ' ').toUpperCase()}
      </h2>
      <ProductGrid products={shuffledProducts} />
    </div>
  );
};

export default CategoriaProductos;
