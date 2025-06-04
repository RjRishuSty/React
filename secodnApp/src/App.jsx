import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./components/ProductCards";
import { Grid } from "@mui/material";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItem] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);

  const handleAddToCart = useCallback((item) => {
    setCartItem((prev) => [...prev, item]);
    setCartStatus(true)
  }, []);

  const handleCloseCart = useCallback(() => {
    setCartStatus((prev) => !prev);
  }, []);

  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <Grid container spacing={2}>
      <Grid
        size={{ xs: 12, sm: 12, md: 12 }}
        sx={{ order: { xs: 2, sm: 2, md: 1 } }}
      >
        <ProductCard handleAddToCart={handleAddToCart} />
      </Grid>

      {cartItems.length > 0 && cartStatus && (
        <Cart cartItems={cartItems} handleCloseCart={handleCloseCart} />
      )}
    </Grid>
  );
};

export default App;
