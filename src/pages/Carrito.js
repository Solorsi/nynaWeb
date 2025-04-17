import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import './Carrito.css';
=======
>>>>>>> f7aa3923e75b0770b287b537bd9b49c9d9c9455d

const Carrito = () => {
  const { cartItems, total, removeFromCart, clearCart } = useContext(CartContext);

  return (
<<<<<<< HEAD
    <div className="carrito">
      <h2>Tu Carrito</h2>

=======
    <div style={{ padding: '20px' }}>
      <h2>Tu Carrito</h2>
>>>>>>> f7aa3923e75b0770b287b537bd9b49c9d9c9455d
      {cartItems.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
<<<<<<< HEAD
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
=======
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
>>>>>>> f7aa3923e75b0770b287b537bd9b49c9d9c9455d
        </>
      )}
    </div>
  );
};

export default Carrito;