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
    return saved
      ? JSON.parse(saved)
      : {
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
          pedidoId: '',
        };
  });

  const [codigoDescuento, setCodigoDescuento] = useState('');
  const [codigoAplicado, setCodigoAplicado] = useState('');
  const [descuentoAplicado, setDescuentoAplicado] = useState(0);

  useEffect(() => {
    localStorage.setItem('nyna_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('nyna_datos', JSON.stringify(datosCliente));
  }, [datosCliente]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const aplicarCupon = (codigo) => {
    const normalizado = codigo.trim().toUpperCase();
    if (normalizado === 'DESACTIVADOPARAQUENADIELOADIVINE') {
      const descuento = total * 0.1;
      setDescuentoAplicado(descuento);
      setCodigoAplicado(normalizado);
      localStorage.setItem(
        'nyna_cupon',
        JSON.stringify({ codigo: normalizado, descuento })
      );
    } else {
      setDescuentoAplicado(0);
      setCodigoAplicado('');
      localStorage.removeItem('nyna_cupon');
    }
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('nyna_cupon'));
    if (saved && saved.codigo === 'DESACTIVADOPARAQUENADIELOADIVINE') {
      setCodigoAplicado(saved.codigo);
      setDescuentoAplicado(total * 0.1); 
    }
  }, [total]);

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setCodigoDescuento('');
    setCodigoAplicado('');
    setDescuentoAplicado(0);
    localStorage.removeItem('nyna_cupon');
  };

  const totalConDescuento = total - descuentoAplicado;
  const descuentoMonto = Math.round(descuentoAplicado);

  const generarNuevoPedido = () => {
    const nuevo = orderNumber + 1;
    setOrderNumber(nuevo);
    localStorage.setItem('nyna_order_number', nuevo);
    return nuevo;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity,
        total,
        totalConDescuento,
        descuentoAplicado,
        descuentoMonto,
        codigoDescuento,
        setCodigoDescuento,
        codigoAplicado,
        aplicarCupon,
        tipoEntrega,
        setTipoEntrega,
        orderNumber,
        generarNuevoPedido,
        datosCliente,
        setDatosCliente,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
