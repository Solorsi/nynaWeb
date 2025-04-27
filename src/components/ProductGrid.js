import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductGrid.css';
import productsData from '../data/products'; // le cambiamos nombre para evitar confusión

const ProductGrid = ({ products }) => {
  const { addToCart } = useContext(CartContext); 

  // Usa los productos que vienen por props o sino los del archivo
  const productsToRender = products || productsData;

  return (
    <section className="product-grid">
      {productsToRender.map(product => (
        <Link to={`/producto/${product.id}`} key={product.id} className="product-link">
          <div className="product-card">
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toLocaleString()}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ProductGrid;
