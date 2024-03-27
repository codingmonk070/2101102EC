import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server API
    // Implement fetch logic here
    // Example: fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
