import React, { useContext, useState } from 'react';
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

  if (!product) return <p>Producto no encontrado.</p>;

  const sliderSettings = {
    dots: product.images.length > 1,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
            <Slider {...sliderSettings}>
              {product.images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </Slider>
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
