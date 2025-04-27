import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/products';
import ProductGrid from '../components/ProductGrid'; // Importás tu grid listo

const SearchResults = () => {
  const location = useLocation();

  // Obtener el query de la URL
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('query')?.toLowerCase() || '';

  // Filtrar productos
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="search-results">
      <h2 style={{marginLeft:'2rem' , marginTop: '2rem' }}>Resultados de búsqueda</h2>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default SearchResults;
