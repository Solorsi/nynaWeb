import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Confirmacion from './pages/Confirmacion';
import Pago from './pages/Pago';
import Gracias from './pages/Gracias';
import ProductDetail from './pages/ProductDetail';
import products from './data/products';
import SearchResults from './pages/SearchResults';
import CategoriaProductos from './pages/CategoriaProductos';
import WhatsAppButton from './components/WhatsAppButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainContent() {
  const location = useLocation();
  const ocultarWppEn = ['/carrito', '/pago', '/gracias', '/confirmar'];

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/confirmar" element={<Confirmacion />} />
          <Route path="/pago" element={<Pago />} />
          <Route path="/gracias" element={<Gracias />} />
          <Route path="/producto/:id" element={<ProductDetail products={products} />} />
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="/productos/:categoria" element={<CategoriaProductos />} />
        </Routes>

        {!ocultarWppEn.includes(location.pathname) && <WhatsAppButton />}
      </main>
    </>
  );
}

function App() {
  return (
    <div className="app-layout">
      <Router>
        <Navbar />
        <MainContent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
