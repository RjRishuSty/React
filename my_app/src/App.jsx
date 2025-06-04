import React, { useState } from "react";

const products = [
  { id: 1, name: "Headphones", price: 999 },
  { id: 2, name: "Smart Watch", price: 1999 },
  { id: 3, name: "Bluetooth Speaker", price: 1499 },
];

function ProductCard({ name, price }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button style={styles.button}>Buy Now</button>
    </div>
  );
}

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={styles.container}>
      <h2>Product List</h2>
      <div style={styles.list}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            style={styles.item}
          >
            {product.name}
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div style={styles.details}>
          <h2>Selected Product:</h2>
          <ProductCard name={selectedProduct.name} price={selectedProduct.price} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: 20, fontFamily: "Arial" },
  list: { display: "flex", gap: "15px", margin: "20px 0" },
  item: {
    padding: "10px 15px",
    background: "#eee",
    borderRadius: "6px",
    cursor: "pointer",
  },
  card: {
    border: "1px solid #ccc",
    padding: 20,
    borderRadius: 8,
    maxWidth: 300,
  },
  button: {
    marginTop: 10,
    padding: "8px 16px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  details: { marginTop: 30 },
};
