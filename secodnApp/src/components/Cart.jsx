import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Cart = ({ cartItems }) => {
  if (!cartItems) return;
  console.log(cartItems, "cartItems");
  const handleTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };
  return (
    <Stack sx={{ width: "100%", py:10 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Cart
      </Typography>
      <Box
        sx={{
          width: "auto",
          height: "40vh",
          overflowY: "auto",
        }}
      >
        {cartItems?.map((item) => (
          <Box sx={{ p: 2 }}>
            <Typography>Product Name:- {item.name}</Typography>
            <Typography>Product Price:- ₹{item.price}</Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="h5" sx={{backgroundColor:'green',p:2, color:'white'}}>Total Price:- ₹{handleTotal()}</Typography>
    </Stack>
  );
};

export default Cart;
