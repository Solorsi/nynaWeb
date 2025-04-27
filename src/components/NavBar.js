import React, { useState, useContext } from 'react';
import './NavBar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingBag, FiChevronDown, FiChevronUp, FiSearch } from 'react-icons/fi';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isCarrito = location.pathname === '/carrito';

  const closeMenu = () => {
    setMenuOpen(false);
    setProductosOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/buscar?query=${encodeURIComponent(searchQuery.trim())}`);
      closeMenu();
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          {!isCarrito && (
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          )}
        </div>

        <div className="nav-center">
          <Link to="/" className="logo-text">NYNA CLOTHES</Link>
        </div>

        <div className="nav-right">
          <Link to="/carrito" className="cart-icon">
            <FiShoppingBag size={22} />
            {cartItems.length > 0 && (
              <span className="cart-count">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {!isCarrito && menuOpen && (
        <>
          <div className="mobile-menu">
            {/* Buscador */}
            <form className="search-bar" onSubmit={handleSearchSubmit}>
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <Link to="/" onClick={closeMenu}>Inicio</Link>

            <div className="dropdown-container">
              <button className="dropdown-toggle" onClick={() => setProductosOpen(!productosOpen)}>
                Productos {productosOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
              </button>
              {productosOpen && (
                <div className="dropdown-menu">
                  <Link to="/productos" onClick={closeMenu}>Ver todos los productos</Link>
                  <Link to="/productos/sale" onClick={closeMenu}>Sale</Link>
                  <Link to="/productos/abrigos" onClick={closeMenu}>Abrigos</Link>
                  <Link to="/productos/polleras-y-shorts" onClick={closeMenu}>Polleras y Shorts</Link>
                  <Link to="/productos/sets" onClick={closeMenu}>Sets</Link>
                  <Link to="/productos/tops-y-remeras" onClick={closeMenu}>Tops y Remeras</Link>
                  <Link to="/productos/vestidos" onClick={closeMenu}>Vestidos</Link>
                  <Link to="/productos/accesorios" onClick={closeMenu}>Accesorios</Link>
                  <Link to="/productos/pantalones" onClick={closeMenu}>Pantalones</Link>
                </div>
              )}
            </div>

            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
            <Link to="/carrito" onClick={closeMenu}>Carrito</Link>
          </div>

          <div className="backdrop" onClick={closeMenu}></div>
        </>
      )}
    </>
  );
};

export default NavBar;
