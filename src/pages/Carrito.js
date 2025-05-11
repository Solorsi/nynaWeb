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
    totalConDescuento,
    descuentoMonto,
    descuentoAplicado,
    codigoDescuento,
    setCodigoDescuento,
    codigoAplicado,
    aplicarCupon,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const envioGratisMinimo = 100000;

  const progreso = Math.min((totalConDescuento / envioGratisMinimo) * 100, 100);

  const handleCuponSubmit = () => {
    aplicarCupon(codigoDescuento);
  };

  const codigoEsValido = codigoAplicado && descuentoAplicado > 0;

  return (
    <div className="carrito">
      <button className="volver-carrito" onClick={() => navigate(-1)}>
        <FiArrowLeft size={24} />
      </button>

      <h2>Tu Carrito</h2>

      <div>
        {cartItems.length === 0 ? (
          <div className="carrito-vacio">
            <img src="/carritovacio.png" alt="Ilustración de carrito vacío" className="carrito-vacio-img" />
            <p>¡Tu carrito está vacío!</p>
            <Link to="/productos" className="carrito-volver-productos">
              Ver productos
            </Link>
          </div>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="carrito-producto-info">
                    {item.images && item.images.length > 0 ? (
                      <img src={item.images[0]} alt={item.name} className="carrito-img-mini" />
                    ) : (
                      <div className="carrito-img-placeholder" />
                    )}
                    <div>
                      <strong>{item.name}</strong>
                      <div>${item.price.toLocaleString('es-AR').replace(',', '.')} x {item.quantity}</div>
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
                  className={`envio-barra-progreso ${totalConDescuento >= envioGratisMinimo ? 'completo' : ''}`}
                  style={{ width: `${progreso}%` }}
                />
              </div>
              <p className="envio-barra-texto">
                {totalConDescuento >= envioGratisMinimo
                  ? '🎉 ¡Genial! Tenés envío gratis.'
                  : '🚚 Envío gratis superando los $100.000'}
              </p>
            </div>

            <div className="cupon-input-wrapper">
              <input
                type="text"
                placeholder="¿Tenés un cupón de descuento?"
                value={codigoDescuento}
                onChange={(e) => setCodigoDescuento(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCuponSubmit()}
              />
              <button onClick={handleCuponSubmit}>
                <span className="flecha-cupon">➤</span>
              </button>
            </div>

            {codigoEsValido ? (
              <p className="descuento-aplicado">
                Cupón <strong>{codigoAplicado}</strong> aplicado: -${descuentoMonto.toLocaleString('es-AR')}
              </p>
            ) : (
              <p className="descuento-aplicado">Ingresá un cupón si tenés uno</p>
            )}

            <p className="carrito-total centrado">
              <strong>Total:</strong> ${totalConDescuento.toLocaleString('es-AR').replace(',', '.')}
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
