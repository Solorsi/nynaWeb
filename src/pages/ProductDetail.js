/* global fbq */
import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import products from '../data/products';
import Slider from 'react-slick';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import './ProductDetail.css';
import AddToCartAlert from '../components/AddToCartAlert';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const [showAlert, setShowAlert] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(1);

  // 🔥 Evento Meta: ViewContent
  useEffect(() => {
    if (product && typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_name: product.name,
        content_ids: [product.id],
        content_type: 'product',
        value: product.price,
        currency: 'ARS'
      });
    }
  }, [product]);

  if (!product) return <p>Producto no encontrado.</p>;

  const multipleImages = product.images.length > 1;

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    appendDots: dots => (
      <div style={{ bottom: '-10px' }}>
        <ul style={{ margin: '0px' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="pagina-producto">
      <div className="detalle-container">
        <div className="contenido-producto">
          <Link to="/productos" className="volver-producto">
            <FaArrowLeft />
          </Link>

          <div className="producto-carrusel">
            {multipleImages ? (
              <Slider {...sliderSettings}>
                {product.images.map((img, index) => (
                  <div key={index} className="slide-img">
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="slide-img">
                <img src={product.images[0]} alt={product.name} />
              </div>
            )}
          </div>

          <div className="info-producto">
            <h2 className="producto-nombre">{product.name}</h2>
            <p className="producto-precio">
              ${product.price.toLocaleString('es-AR').replace(',', '.')}
            </p>
            <p className="envio-info">🚛 Envío gratis superando los $100.000</p>

            <button
              className="btn-agregar"
              onClick={() => {
                addToCart(product);
                setAddedQuantity(1);
                setShowAlert(true);
              }}
            >
              <FaShoppingCart /> Agregar al carrito
            </button>

            <div className="volver-a-productos">
              <Link to="/productos">Ver más productos</Link>
            </div>
          </div>
        </div>
      </div>

      {showAlert && (
        <AddToCartAlert
          product={product}
          quantity={addedQuantity}
          total={product.price * addedQuantity}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;
