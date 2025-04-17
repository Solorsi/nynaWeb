import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
<<<<<<< HEAD
import Confirmacion from './pages/Confirmacion';
import Pago from './pages/Pago';
import Gracias from './pages/Gracias';
=======
>>>>>>> f7aa3923e75b0770b287b537bd9b49c9d9c9455d

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
<<<<<<< HEAD
        <Route path="/confirmar" element={<Confirmacion />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/gracias" element={<Gracias />} />
=======
>>>>>>> f7aa3923e75b0770b287b537bd9b49c9d9c9455d
      </Routes>
    </Router>
  );
}

export default App;