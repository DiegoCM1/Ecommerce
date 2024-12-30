// filepath: /src/components/Products.js
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Welcome to the best car ecommerce</h1>
      <div id="products" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.name} className="card">
            <img src={`./images/${product.name.toLowerCase()}.jpg`} className="card-img-top" alt={product.name} />
            <div className="card-body">ñ
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <button className="btn btn-primary add-to-cart" data-name={product.name} data-price={product.price}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;