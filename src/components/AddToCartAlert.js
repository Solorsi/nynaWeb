import React, { useEffect } from 'react';
import './AddToCartAlert.css';

const AddToCartAlert = ({ product, quantity, total, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500); 
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!product || !product.price || !product.images || quantity == null || total == null) {
    return null;
  }

  return (
    <div className="alert-container">
      <div className="alert-box">
        <div className="alert-content">
          <img src={product.images[0]} alt={product.name} className="alert-img" />
          <div className="alert-info">
            <p className="alert-title">¡Agregado al carrito!</p>
            <p>{product.name}</p>
            <p>{quantity} × ${product.price.toLocaleString('es-AR').replace(',', '.')}</p>
            <p className="alert-total">Total: ${total.toLocaleString('es-AR').replace(',', '.')}</p>
          </div>
        </div>
        <button className="alert-close" onClick={onClose}>×</button>
        <button className="alert-btn" onClick={() => window.location.href = '/carrito'}>
          Ver carrito
        </button>
      </div>
    </div>
  );
};

export default AddToCartAlert;
