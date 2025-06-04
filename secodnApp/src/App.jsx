import React, { useState } from 'react';

// Sample static list of products
const products = [
  { id: 1, name: 'Laptop', price: 45000 },
  { id: 2, name: 'Headphones', price: 1500 },
  { id: 3, name: 'Smartphone', price: 20000 },
];

const App = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Product List</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            onClick={() => handleSelect(product)}
            style={{
              padding: '10px',
              margin: '8px 0',
              border: '1px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer',
              backgroundColor: '#f9f9f9'
            }}
          >
            {product.name}
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div style={{ marginTop: '20px', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}>
          <h2>Product Details</h2>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default App;
