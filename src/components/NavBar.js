import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
<<<<<<< HEAD
        <h1>NYNA CLOTHES</h1>
=======
        <Link to="/">
          <img src="/logo.png" alt="nynaclothes logo" className="logo-img" />
        </Link>
>>>>>>> f7aa3923e75b0770b287b537bd9b49c9d9c9455d
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;