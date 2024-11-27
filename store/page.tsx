import React from 'react';
import PropTypes from 'prop-types';
 

const Store = () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      price: 29.99,
      image: ('watch-1.png'), // Adjust the path as necessary
    },
    {
      id: 2,
      title: 'Product 2',
      price: 39.99,
      image:   ('watch-2.png'),
    },
    {
      id: 3,
      title: 'Product 3',
      price: 49.99,
      image: ('watch-3.png'),
    },
    {
      id: 4,
      title: 'Product 4',
      price: 50.99,
      image: ('watch-4.jfif'),
    },
    {
      id: 5,
      title: 'Product 5',
      price: 49.99,
      image: ('watch-5.jfif'),
    },
    {
      id: 6,
      title: 'Product 6',
      price: 49.99,
      image: ('watch-6.jfif'),
    },
  ];

  return (
    <div className="store-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

Store.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Store;