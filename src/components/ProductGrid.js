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
    if (product.stock === 0) return;
    addToCart(product);
    setSelectedProduct(product);
    setShowAlert(true);
  };

  return (
    <>
      <section className="product-grid">
        {productsToRender.map(product => {
          const sinStock = product.stock === 0;
          const cardContent = (
            <div className={`product-card ${sinStock ? 'no-click' : ''}`}>
              <div className="product-img-wrapper">
                <img src={product.images[0]} alt={product.name} />
                {sinStock && <span className="sin-stock-badge">SIN STOCK</span>}
              </div>
              <h3>{product.name}</h3>
              <p>${product.price.toLocaleString('es-AR').replace(',', '.')}</p>
              <button
                onClick={(e) => handleAddToCart(e, product)}
                disabled={sinStock}
                className={sinStock ? 'disabled-btn' : ''}
              >
                <FaShoppingCart style={{ marginRight: '8px' }} />
                {sinStock ? 'No disponible' : 'Agregar al carrito'}
              </button>
            </div>
          );

          return sinStock ? (
            <div key={product.id}>{cardContent}</div>
          ) : (
            <Link to={`/producto/${product.id}`} key={product.id} className="product-link">
              {cardContent}
            </Link>
          );
        })}
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
