import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Carrito.css';

const Carrito = () => {
  const { cartItems, total, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="carrito">
      <h2>Tu Carrito</h2>

      {cartItems.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button className="btn-eliminar" onClick={() => removeFromCart(item.id)}>X</button>
              </li>
            ))}
          </ul>

          <p className="carrito-total">
            <strong>Total:</strong> ${total}
          </p>

          <div className="carrito-buttons">
            <Link to="/confirmar">
              <button className="btn-finalizar">Finalizar compra</button>
            </Link>
            <button className="btn-vaciar" onClick={clearCart}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;