import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('nyna_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [tipoEntrega, setTipoEntrega] = useState('');
  const [orderNumber, setOrderNumber] = useState(() => {
    const saved = localStorage.getItem('nyna_order_number');
    return saved ? parseInt(saved) : 100;
  });

  const [datosCliente, setDatosCliente] = useState(() => {
    const saved = localStorage.getItem('nyna_datos');
    return saved ? JSON.parse(saved) : {
      nombre: '',
      documento: '',
      contacto: '',
      email: '',
      envio: '',
      opcionEnvio: '',
      direccion: '',
      numero: '',
      codigoPostal: '',
      barrio: '',
      metodoPago: '',
      pedidoId: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('nyna_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('nyna_datos', JSON.stringify(datosCliente));
  }, [datosCliente]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const generarNuevoPedido = () => {
    const nuevo = orderNumber + 1;
    setOrderNumber(nuevo);
    localStorage.setItem('nyna_order_number', nuevo);
    return nuevo;
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      incrementQuantity,
      decrementQuantity,
      total,
      tipoEntrega,
      setTipoEntrega,
      orderNumber,
      generarNuevoPedido,
      datosCliente,
      setDatosCliente
    }}>
      {children}
    </CartContext.Provider>
  );
};


