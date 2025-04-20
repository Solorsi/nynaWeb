import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import Confirmacion from './pages/Confirmacion';
import Pago from './pages/Pago';
import Gracias from './pages/Gracias';
import ProductDetail from './pages/ProductDetail';
import products from './data/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="app-layout">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/confirmar" element={<Confirmacion />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/gracias" element={<Gracias />} />
            <Route path="/producto/:id" element={<ProductDetail products={products} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
