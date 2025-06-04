import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import phoneImg from "../assets/phone.png";
import shoesImg from "../assets/1.png";
import headphone from "../assets/headphone.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ handleAddToCart }) => {
  const products = [
    { id: 1, name: "Boys Shoes", price: 6000, img: shoesImg },
    { id: 2, name: "Phone", price: 13000, img: phoneImg },
    { id: 3, name: "Headphones", price: 2000, img: headphone },
  ];
  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      {products.map((item) => (
        <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{}}>
            <Box
              component="img"
              src={item.img}
              alt={item.name}
              variant="square"
              sx={{
                display: "block",
                margin: "auto",
                width: "auto",
                height: "200px",
                objectFit: "contain",
                objectPosition: "center",
                backgroundColor: "white",
              }}
            />
            <CardContent
              sx={{
                backgroundColor: "#e6ffe6",
              }}
            >
              <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }}>
                {item.name}
              </Typography>
              <Typography>MRP:- ₹{item.price}</Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#009900", mt: 3 }}
                onClick={() => handleAddToCart(item)}
                endIcon={<AddShoppingCartIcon fontSize="medium" />}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
