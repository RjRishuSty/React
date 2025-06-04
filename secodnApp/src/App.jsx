import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./components/ProductCards";
import { Grid } from "@mui/material";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItem] = useState([]);

  const handleAddToCart = useCallback((item) => {
    setCartItem((prev) => [...prev, item]);
  }, []);

  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12,sm:12,md:12}} sx={{  order:{xs:2,sm:2,md:1} }}>
        <ProductCard handleAddToCart={handleAddToCart} />
      </Grid>

      {cartItems.length > 0 && (
        <Grid size={{xs:12,sm:12,md:12}} sx={{order:{xs:1,sm:1,md:2}}}>
          <Cart cartItems={cartItems} />
        </Grid>
      )}
    </Grid>
  );
};

export default App;
