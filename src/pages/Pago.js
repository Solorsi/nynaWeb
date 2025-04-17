import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import './Pago.css';

const Pago = () => {
  const { cartItems, total, tipoEntrega, datosCliente, setDatosCliente, clearCart } = useContext(CartContext);

  const alias = 'nynaclothes';
  const cvu = '0000003100018016809494';
  const cuit = '27-17500019-27';
  const titular = 'Silvia Marcela Fernandez';
  const numeroWhatsApp = '5491131387879';

  const [metodoPago, setMetodoPago] = useState('');
  const [copiadoAlias, setCopiadoAlias] = useState(false);
  const [copiadoCVU, setCopiadoCVU] = useState(false);
  const [copiadoPedido, setCopiadoPedido] = useState(false);
  const [numeroPedido, setNumeroPedido] = useState('');

  useEffect(() => {
    const generarID = () => `NYNA-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const nuevoId = generarID();
    setNumeroPedido(nuevoId);
    setDatosCliente(prev => ({ ...prev, pedidoId: nuevoId }));
  }, [setDatosCliente]);

  useEffect(() => {
    if (metodoPago) {
      setDatosCliente(prev => ({ ...prev, metodoPago }));
    }
  }, [metodoPago, setDatosCliente]);

  const mensajeWhatsApp = `
📦 Pedido confirmado

🔢 Número de pedido: ${numeroPedido}

🧍‍♀️ Cliente: ${datosCliente.nombre}
📞 Contacto: ${datosCliente.contacto}
📧 Email: ${datosCliente.email}
🆔 Documento: ${datosCliente.documento}

🚚 Envío: ${datosCliente.envio}${datosCliente.envio === 'Envío' ? ` - ${datosCliente.opcionEnvio}` : ''}
${datosCliente.envio === 'Envío' ? `📍 Dirección: ${datosCliente.direccion} ${datosCliente.numero}, CP ${datosCliente.codigoPostal}, ${datosCliente.barrio}` : ''}

💳 Método de pago: ${metodoPago === 'transferencia' ? 'Transferencia' : 'Efectivo'}
💵 Total a pagar: $${total}

🛍️ Productos:
${cartItems.map(p => `- ${p.name} $${p.price}`).join('\n')}
`;

  const handleCopy = (texto, tipo) => {
    navigator.clipboard.writeText(texto);
    if (tipo === 'alias') {
      setCopiadoAlias(true);
      setTimeout(() => setCopiadoAlias(false), 2000);
    } else if (tipo === 'cvu') {
      setCopiadoCVU(true);
      setTimeout(() => setCopiadoCVU(false), 2000);
    } else if (tipo === 'pedido') {
      setCopiadoPedido(true);
      setTimeout(() => setCopiadoPedido(false), 2000);
    }
  };

  const puedeEfectivo = tipoEntrega === 'Retiro';

  const handleConfirmar = () => {
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
    setTimeout(() => {
      clearCart();
      window.location.href = '/gracias';
    }, 2000);
  };

  return (
    <div className="pago">
      <div className="confirmacion-final">
        <h2>¡Gracias por tu compra!</h2>
        <p>Por favor, seleccioná cómo querés realizar el pago.</p>
        <p className="mensaje-confirmacion">El pedido se confirmará por WhatsApp 📲</p>
        {numeroPedido && (
          <div className="dato-copiable">
            <p className="numero-pedido">N° de pedido: <strong>{numeroPedido}</strong></p>
            <button className="btn-inline" onClick={() => handleCopy(numeroPedido, 'pedido')}>📋</button>
            {copiadoPedido && <span className="copiado">¡Copiado!</span>}
          </div>
        )}
      </div>

      <ul>
        {cartItems.map((item, i) => (
          <li key={i}>{item.name} - ${item.price}</li>
        ))}
      </ul>

      <p><strong>Total a pagar:</strong> ${total}</p>

      <div className="form-section">
        <h3>Elegí el método de pago</h3>
        <div className="metodos">
          {puedeEfectivo && (
            <button onClick={() => setMetodoPago('efectivo')}>Efectivo (al retirar)</button>
          )}
          <button onClick={() => setMetodoPago('transferencia')}>Transferencia (Mercado Pago)</button>
        </div>

        {metodoPago === 'efectivo' && (
          <div className="detalle">
            <p><strong>Listo 💸</strong></p>
            <p>Podés abonar en efectivo al momento de retirar tu pedido por el punto de entrega.</p>
            <button className="btn-secundario" onClick={handleConfirmar}>
              Confirmar pedido por WhatsApp
            </button>
          </div>
        )}

        {metodoPago === 'transferencia' && (
          <div className="detalle">
            <p><strong>Datos para transferencia:</strong></p>

            <div className="dato-copiable">
              <p><strong>Alias:</strong> {alias}</p>
              <button className="btn-inline" onClick={() => handleCopy(alias, 'alias')}>📋</button>
              {copiadoAlias && <span className="copiado">¡Copiado!</span>}
            </div>

            <div className="dato-copiable">
              <p><strong>CVU:</strong> {cvu}</p>
              <button className="btn-inline" onClick={() => handleCopy(cvu, 'cvu')}>📋</button>
              {copiadoCVU && <span className="copiado">¡Copiado!</span>}
            </div>

            <p><strong>CUIT/CUIL:</strong> {cuit}</p>
            <p><strong>Titular:</strong> {titular}</p>

            <button className="btn-secundario" onClick={handleConfirmar}>
              Enviar comprobante por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pago;
