import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './Carrito.css';
import { MdDeleteOutline } from 'react-icons/md';
import { FiArrowLeft } from 'react-icons/fi';

const Carrito = () => {
  const {
    cartItems,
    total,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const envioGratisMinimo = 100000;
  const progreso = Math.min((total / envioGratisMinimo) * 100, 100);

  return (
    <div className="carrito">
      <button className="volver-carrito" onClick={() => navigate(-1)}>
        <FiArrowLeft size={24} />
      </button>

      <h2>Tu Carrito</h2>

      <div>
        {cartItems.length === 0 ? (
          <p>No hay productos.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="carrito-producto-info">
                    <img src={item.images?.[0]} alt={item.name} />
                  <div>
                      <strong>{item.name}</strong>
                      <div>${item.price.toLocaleString()} x {item.quantity}</div>
                    </div>
                  </div>

                  <div className="controles">
                    <div className="cantidad-controls">
                      <button onClick={() => decrementQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>+</button>
                    </div>
                    <button className="btn-eliminar" onClick={() => removeFromCart(item.id)}>
                      <MdDeleteOutline />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="envio-gratis-box">
              <div className="envio-barra">
                <div
                  className={`envio-barra-progreso ${total >= envioGratisMinimo ? 'completo' : ''}`}
                  style={{ width: `${progreso}%` }}
                />
              </div>
              <p className="envio-barra-texto">
                {total >= envioGratisMinimo
                  ? '🎉 ¡Genial! Tenés envío gratis.'
                  : '🚚 Envío gratis superando los $100.000'}
              </p>
            </div>

            <p className="carrito-total">
              <strong>Total:</strong> ${total.toLocaleString()}
            </p>

            <div className="carrito-buttons">
              <Link to="/confirmar">
                <button className="btn-finalizar">Iniciar compra</button>
              </Link>
            </div>

            <div className="volver-a-productos">
              <Link to="/productos">Ver más productos</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
