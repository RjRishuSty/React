import React from 'react';

const ProductCard = ({ name, price }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{name}</h2>
      <p style={styles.price}>₹{price}</p>
      <button style={styles.button}>Buy Now</button>
    </div>
  );
};

// Optional: Inline styles for quick styling
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '18px',
    marginBottom: '8px'
  },
  price: {
    fontSize: '16px',
    marginBottom: '12px'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ProductCard;
