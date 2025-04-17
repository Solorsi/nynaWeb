import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Gracias = () => {
  const { datosCliente } = useContext(CartContext);
  const pedidoId = datosCliente?.pedidoId;

  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#fff0f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#ff5e99' }}>
        ¡Gracias por tu compra{datosCliente?.nombre ? `, ${datosCliente.nombre}` : ''}!
      </h1>
      {pedidoId && (
        <p style={{ fontSize: '1rem', marginTop: '10px', fontWeight: 'bold' }}>
          Número de pedido: {pedidoId}
        </p>
      )}
      <p style={{ fontSize: '1.2rem', marginTop: '15px' }}>
        Te vamos a contactar por WhatsApp para confirmar todos los detalles 💌
      </p>
      <Link to="/" style={{ marginTop: '30px', display: 'inline-block', textDecoration: 'none' }}>
        <button style={{
          padding: '12px 20px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#ff5e99',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Volver al inicio
        </button>
      </Link>
    </div>
  );
};

export default Gracias;
