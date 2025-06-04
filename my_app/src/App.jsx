import React, { useState } from "react";

const App = () => {
  const products = [
    { id: 1, name: "Laptop", price: 60000, description: "A powerful laptop" },
    { id: 2, name: "Phone", price: 30000, description: "A smart phone" },
    { id: 3, name: "Headphones", price: 2000, description: "High-quality sound" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Product List</h2>

      <div style={{ marginBottom: "20px" }}>
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {product.name}
          </button>
        ))}
      </div>

      {selectedProduct && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "5px",
            backgroundColor: "#f0f0f0",
            maxWidth: "300px",
          }}
        >
          <h3>Selected Product Details</h3>
          <p><strong>Name:</strong> {selectedProduct.name}</p>
          <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
          <p><strong>Description:</strong> {selectedProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
