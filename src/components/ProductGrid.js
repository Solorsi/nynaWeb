import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductGrid.css';
import productsData from '../data/products';
import AddToCartAlert from './AddToCartAlert'; 

const ProductGrid = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsToRender = products || productsData;

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
    setSelectedProduct(product);
    setShowAlert(true);
  };

  return (
    <>
      <section className="product-grid">
        {productsToRender.map(product => (
          <Link to={`/producto/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toLocaleString('es-AR').replace(',', '.')}</p>
              <button onClick={(e) => handleAddToCart(e, product)}>
                <FaShoppingCart style={{ marginRight: '8px' }} />
                Agregar al carrito
              </button>
            </div>
          </Link>
        ))}
      </section>

      {showAlert && selectedProduct && (
        <AddToCartAlert
          product={selectedProduct}
          quantity={1}
          total={selectedProduct.price}
          onClose={() => setShowAlert(false)}
        />
      )}
    </>
  );
};

export default ProductGrid;
