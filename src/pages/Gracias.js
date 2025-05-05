import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Gracias.css';

const Gracias = () => {
  const { datosCliente } = useContext(CartContext);
  const pedidoId = datosCliente?.pedidoId;

  return (
    <div className="gracias-container">
      <h1 className="gracias-titulo">
        ¡Gracias por tu compra{datosCliente?.nombre ? `, ${datosCliente.nombre}` : ''}!
      </h1>
      {pedidoId && (
        <p className="gracias-pedido">
          Número de pedido: {pedidoId}
        </p>
      )}
      <p className="gracias-texto">
        Te vamos a contactar por WhatsApp para confirmar todos los detalles 💌
      </p>
      <Link to="/">
        <button className="gracias-btn">
          Seguir explorando más productos
        </button>
      </Link>
    </div>
  );
};

export default Gracias;
