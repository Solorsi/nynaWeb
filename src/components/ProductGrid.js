import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './ProductGrid.css';
import products from '../data/products';

const ProductGrid = () => {
  const { addToCart } = useContext(CartContext); // solo traés addToCart

  return (
    <section className="product-grid">
      {products.map(product => (
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
