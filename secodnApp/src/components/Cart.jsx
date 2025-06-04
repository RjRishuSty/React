import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Cart = ({ cartItems ,handleCloseCart}) => {
  if (!cartItems) return;
  console.log(cartItems, "cartItems");
  const handleTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };
  return (
    <Stack
      sx={{
        width: "auto",
        height: "100vh",
        position: "absolute",
        top: 0,
        right: 0,
        padding: "0px 15px",
        backgroundColor:'rgb(154, 223, 154)'
      }}
    >
      <Box
        sx={{
            mt:5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Cart
        </Typography>
        <IconButton onClick={handleCloseCart}>
          <CloseIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "auto",
          height: "85vh",
          overflowY: "auto",
        }}
      >
        {cartItems?.map((item, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <Typography>Product Name:- {item.name}</Typography>
            <Typography>Product Price:- ₹{item.price}</Typography>
          </Box>
        ))}
      </Box>
      <Typography
        variant="h5"
        sx={{ backgroundColor: "green", p: 2, color: "white" }}
      >
        Total Price:- ₹{handleTotal()}
      </Typography>
    </Stack>
  );
};

export default Cart;
