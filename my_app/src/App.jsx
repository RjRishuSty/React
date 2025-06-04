import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './component/ProductCard';

const App = () => (
  <div>
    <ProductCard name="Wireless Headphones" price={1999} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
