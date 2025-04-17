import React, { useContext } from 'react';
import './ProductGrid.css';
import { CartContext } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: "Vestido Floral",
    price: 12000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Top Rosa",
    price: 8000,
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Short Denim",
    price: 10000,
    image: "https://via.placeholder.com/200"
  },
];

const ProductGrid = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;