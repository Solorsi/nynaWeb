import React, { useState, useContext } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <div className="nav-center">
        <Link to="/" className="logo-text">NYNA CLOTHES</Link>
      </div>

      <div className="nav-right">
        <Link to="/carrito" className="cart-icon">
          <FiShoppingBag size={22} />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link>
          <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
          <Link to="/carrito" onClick={() => setMenuOpen(false)}>Carrito</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

