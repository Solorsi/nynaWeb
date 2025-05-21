/* global fbq */

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Confirmacion.css';

const Confirmacion = () => {
  const {
    cartItems,
    total,
    totalConDescuento,
    descuentoAplicado,
    descuentoMonto,
    codigoAplicado,
    setTipoEntrega,
    setDatosCliente,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [envio, setEnvio] = useState('');
  const [opcionEnvio, setOpcionEnvio] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numero, setNumero] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [barrio, setBarrio] = useState('');

  const costosEnvio = {
    "Moto mensajería en CABA": 6500,
    "Correo Argentino a domicilio": 9000,
    "Correo Argentino a sucursal": 7000,
  };

  const isEnvioGratis = total >= 100000;
  const envioCosto = isEnvioGratis ? 0 : (costosEnvio[opcionEnvio] || 0);
  const totalFinal = totalConDescuento + envioCosto;

  const datosCompletos =
    nombre &&
    contacto &&
    documento &&
    email &&
    envio &&
    (envio === 'Retiro' || (opcionEnvio && direccion && numero && /^[0-9]{4,5}$/.test(codigoPostal)));

  const handleContinuar = () => {
    if (!envio) {
      alert('Por favor, seleccioná si querés retiro o envío.');
      return;
    }
    if (envio === 'Envío' && !opcionEnvio) {
      alert('Por favor, seleccioná un tipo de envío.');
      return;
    }

    setDatosCliente({
      nombre,
      documento,
      contacto,
      email,
      envio,
      opcionEnvio,
      direccion,
      numero,
      codigoPostal,
      barrio,
      metodoPago: ''
    });

    // 🔥 Evento Meta: Inicio de checkout
    if (typeof fbq !== 'undefined') {
      fbq('track', 'InitiateCheckout');
    }

    navigate('/pago');
  };

  return (
    <div className="confirmacion">
      <h2>Resumen de tu compra</h2>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.quantity} x {item.name} - ${item.price}</li>
        ))}
      </ul>

      {descuentoAplicado > 0 && (
        <p style={{ color: '#0a0', marginBottom: '4px' }}>
          Cupón <strong>{codigoAplicado}</strong> aplicado: -${descuentoMonto.toLocaleString('es-AR')}
        </p>
      )}
      {!isEnvioGratis && opcionEnvio && (
        <p style={{ color: '#555', marginBottom: '4px' }}>
          Envío: +${envioCosto.toLocaleString('es-AR')}
        </p>
      )}
      <p className="total-final">Total: ${totalFinal.toLocaleString('es-AR')}</p>

      <div className="form-section">
        <h3>1. Tus datos</h3>
        <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Documento" value={documento} onChange={(e) => setDocumento(e.target.value)} />
        <input type="text" placeholder="WhatsApp o teléfono" value={contacto} onChange={(e) => setContacto(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-section">
        <h3>2. Entrega</h3>
        <select
          value={envio}
          onChange={(e) => {
            setEnvio(e.target.value);
            setTipoEntrega(e.target.value);
          }}
        >
          <option value="">Seleccionar método</option>
          <option value="Retiro">Retiro por Devoto (Gratis)</option>
          <option value="Envío">Quiero envío</option>
        </select>

        {envio === 'Envío' && (
          <>
            <div className="opciones-envio">
              {Object.entries(costosEnvio).map(([opcion, precio]) => {
                const isSelected = opcionEnvio === opcion;
                const className = `envio-opcion ${isSelected ? 'seleccionada' : opcionEnvio ? 'colapsada' : ''}`;

                return (
                  <label key={opcion} className={className}>
                    <input
                      type="radio"
                      name="tipo-envio"
                      value={opcion}
                      checked={isSelected}
                      onChange={(e) => setOpcionEnvio(e.target.value)}
                    />
                    {opcion} — {isEnvioGratis ? <><s>${precio}</s> Gratis</> : `$${precio}`}
                  </label>
                );
              })}
            </div>

            {opcionEnvio && (
              <div className="form-section">
                <h3>Dirección de entrega</h3>
                <input type="text" placeholder="Calle" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                <input type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
                <input
                  type="text"
                  placeholder="Código Postal"
                  value={codigoPostal}
                  onChange={(e) => setCodigoPostal(e.target.value)}
                  className={codigoPostal && !/^[0-9]{4,5}$/.test(codigoPostal) ? 'input-error' : ''}
                />
                <input type="text" placeholder="Barrio (opcional)" value={barrio} onChange={(e) => setBarrio(e.target.value)} />
              </div>
            )}
          </>
        )}
      </div>

      {datosCompletos && (
        <button className="btn-continuar" onClick={handleContinuar}>
          Continuar al pago
        </button>
      )}
    </div>
  );
};

export default Confirmacion;
