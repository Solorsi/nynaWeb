import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { cartItems, total, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Carrito;