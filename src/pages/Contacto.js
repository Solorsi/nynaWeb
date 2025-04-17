import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-page">
      <h2>Contacto</h2>
      <p>¿Tenés una duda o querés hacer un pedido especial?</p>
      <form className="formulario-contacto">
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu email" />
        <textarea placeholder="Escribí tu mensaje..."></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;